import TableStyle from './TableStyle';
import React, { useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';

function DynamicTable({ config, data }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

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
  };

  const renderCellContent = (row, column) => {
    if (column.name === 'employee_name' && row.First_name && row.Middle_Name && row.Last_Name) {
        const formattedName = [row.First_name, row.Middle_Name, row.Last_Name].join(' ');
        return formattedName;
    }
    return row[column.name] || '';
  };

  const tableStyle = {
    maxHeight: '300px',
    overflowY: 'auto',
  };

  return (
    <div style={tableStyle}>
      <table className='border-2 rounded-md p-4 hover:border-blue-500'>
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
            <th></th> {/* Edit column */}
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
      </table>
    </div>
  );
}

export default DynamicTable;
