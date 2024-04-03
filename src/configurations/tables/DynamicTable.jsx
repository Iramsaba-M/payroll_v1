import React, { useState } from 'react';
import TableStyle from './TableStyle';
import { MdOutlineEdit, MdOutlineFileDownload } from 'react-icons/md';
import { view } from '../../api/EndPoints';
import { fetchData } from '../../services/APIService';
import ModalComponent from '../../components/form/Formfields/modal/ModalComponent';
import { ModalPayslipConfig } from '../../components/form/Formfields/modal/ModalPayslipConfig';
import { ModalReviewPayrollConfig } from '../../components/form/Formfields/modal/ModalReviewPayrollConfig';

function DynamicTable({ config, data, onEditEmployee }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleCheckboxChange = (row) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(selectedRows.filter((selectedRow) => selectedRow !== row));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditModalOpen(false);
  };

  const handleDownload = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }

      const queryParams = { employee_id: row.employee_id };
      const endpoint = `${view}/${queryParams.employee_id}`;
      const tableData = await fetchData(endpoint, queryParams);

      const blob = await tableData.blob();
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error downloading payslip:', error);
    }
  };

  const handleViewPayslips = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }

      setIsModalOpen(true);
      const endpoint = `${view}/${row.employee_id}`;
      const tableData = await fetchData(endpoint);

      console.log('Modal data:', tableData);
    } catch (error) {
      console.error('Error fetching payslips data:', error);
    }
  };

  const handleEditPayslips = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }

      onEditEmployee(row.employee_id); // Call the onEditEmployee function passed as a prop
    } catch (error) {
      console.error('Error fetching payslips data:', error);
    }
  };
  const handleEditPayslips1 = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }
      setEditModalOpen(true)

    } catch (error) {
      console.error('Error fetching payslips data:', error);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...data]);
    }
    setSelectAll(!selectAll);
  };
  

  const renderCellContent = (row, column) => {
    if (column.name === 'employee_name' && row.first_name && row.middle_name && row.last_name) {
      console.log('Rendering employee name:', row.id, row.first_name, row.middle_name, row.last_name);
      const formattedName = `${row.first_name} ${row.middle_name} ${row.last_name}`;
      if (row.photo_content) {
        const imageUrl = `data:image/png;base64, ${row.photo_content}`;
        console.log('Image URL:', imageUrl);
        const photoIcon = (
          <img
            src={imageUrl}
            alt="Employee Photo"
            className="rounded-full"
            style={{ width: '24px', height: '24px', marginRight: '4px' }}
          />
        );
        return (
          <div className="flex items-center">
            {photoIcon}
            <span>{formattedName}</span>
          </div>
        );
      }
      // If photo_content is not available, still render employee name
      return <span>{formattedName}</span>;
    }

    if (column.name === 'status' && column.clmncss) {
      const statusStyle = column.statusStyles ? column.statusStyles[row[column.name]] : '';
      return <div className='flex justify-center'><div className={TableStyle[statusStyle]} >{row[column.name]}</div></div>;
    }

    if (column.name === 'edit') {
      // Render AddEmployee component conditionally
      return (
        <button className="cursor-pointer" onClick={() => handleEditPayslips(row)}>
          {column.content}
        </button>
      );
    } else if (column.dataType === 'icon' && column.name === 'payslip') {
      // Render Download button with icon
      return (
        <button
          className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full cursor-pointer inline-flex items-center"
          onClick={() => handleDownload2(row)}
        >
          <MdOutlineFileDownload />
        </button>
      );
    } else if (column.name === 'PAYSLIPS') {
      // Render PaySlips button
      return (
        <button
          className="bg-teal-50 text-green-600 px-4 py-1 rounded-full cursor-pointer inline-flex items-center"
          onClick={() => handleViewPayslips(row)}
        >
          <span className="h-3 w-8 flex items-center">View</span>
        </button>
      );
    } else if (column.dataType === 'icon' && column.name === 'download') {
      // Render Download button with icon
      return (
        <button
          className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full cursor-pointer inline-flex items-center"
          onClick={() => handleDownload(row)}
        >
          <MdOutlineFileDownload />
        </button>
      );
    } else if (column.dataType === 'icon' && column.name === 'finalizeedit') {
      // Render finalizeedit for run payroll finalize component icon
      return (
        <button
          className="cursor-pointer"
          onClick={() => handleEditPayslips1(row)}
        >
          <MdOutlineEdit />
        </button>
      );
    }

    else {
      // Default rendering for other columns
      return row[column.name] || '';
    }
  };

  return (
    <div className="max-h-[44vh] overflow-y-auto border-2 rounded-md hover:border-blue-500">
      <table>
        <thead>
          <tr className="bg-gray-100 p-2">
            <th className="px-6">
              <input type="checkbox" onChange={handleSelectAll} checked={selectAll} />
            </th>
            {config.map((column) => (
              <th key={column.name} className={TableStyle[column.clmncss]}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-6">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(row)}
                  checked={selectedRows.includes(row)}
                />
              </td>
              {config.map((column) => (
                <td key={column.name} className={TableStyle[column.cssClass]} style={{ textAlign: 'center' }}>
                  {renderCellContent(row, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} config={ModalPayslipConfig} />}
      {editModalOpen && (
        <ModalComponent isOpen={editModalOpen} onClose={handleCloseModal} config={ModalReviewPayrollConfig} />
      )}
    </div>
  );
}

export default DynamicTable;