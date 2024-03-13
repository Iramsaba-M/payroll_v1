import React, { useState, useEffect } from 'react';
import AddEmployee from '../../pages/Employee/AddEmployee/AddEmployee';
import { MdOutlineEdit } from 'react-icons/md';
import TableStyle from './TableStyle';
function DynamicTable({ config, data }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [imageUrls, setImageUrls] = useState({});
  const [selectedRow, setSelectedRow] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const handleCheckboxChange = (row) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(selectedRows.filter((selectedRow) => selectedRow !== row));
    } else {
      setSelectedRows([...selectedRows, row]);
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
  const handleEdit = (row) => {
    console.log('Edit clicked for row:', row);
    setSelectedRow(row);
    setShowForm(true);
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
      } else {
        return <>Loading...</>;
      }
    }
    //This if block is conditional styling for Review payroll table in Run Payroll page.
    if (column.name === 'payroll_status' && column.clmncss) {
      const statusStyle = column.statusStyles ? column.statusStyles[row[column.name]] : '';
      return <div className='flex justify-center'><div className={TableStyle[statusStyle]} >{row[column.name]}</div></div>;
    }

    return row[column.name] || '';
  };
  
  const tableStyle = {
    maxHeight: '350px',
    overflowY: 'auto',
  };
  
  return (  
    <div>
      {showForm ? (
        <AddEmployee
          handleNextClick={() => setShowForm(false)}
          handleEmpId={selectedRow.id}
        />
      ) : (
        <div>
          <div style={tableStyle}>
            <table className='border-2 rounded-md p-2 hover:border-blue-500'>
            <div className="max-h-[44vh] overflow-y-auto ">
              <thead>
                <tr className='bg-gray-50 p-2'>
                  <th className='px-6'>
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectAll}
                    />
                  </th>
                  {config.map((column) => (
                    <th key={column.name} className={TableStyle[column.clmncss]}>
                      {column.label}
                    </th>
                  ))}
                  <th></th>
                </tr>
              </thead>              
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className='px-6'>
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
                    <td className='px-6'>
                      <MdOutlineEdit onClick={() => handleEdit(row)} />
                    </td>
                  </tr>
                ))}
              </tbody>             
              </div>
            </table>
          </div>
        </div>   
      )}
    </div>
  );
}
export default DynamicTable;