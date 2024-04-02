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

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...data]);
    }
    setSelectAll(!selectAll);
  };

  const renderCellContent = (row, column) => {
    if (column.name === 'edit2') {
      // Render AddEmployee component conditionally
      return (
        <button className="cursor-pointer" onClick={() => handleEditPayslips(row)}>
          {column.content}
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
    } else if (column.dataType === 'icon' && column.name === 'edit') {
      // Render Edit icon
      return (
        <button
          className="cursor-pointer"
          onClick={() => handleEditPayslips(row)}
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
