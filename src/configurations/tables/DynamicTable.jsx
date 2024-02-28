import React, { useState, useEffect } from 'react';
import AddEmployee from '../../pages/Employee/AddEmployee/AddEmployee';
import { MdOutlineEdit } from 'react-icons/md';
import { convertBase64ToPng } from '../../base64topng';
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
  const fetchImageUrls = async () => {
    const urls = {};
    await Promise.all(
      data.map(async (row) => {
        if (row.photo_content) {
          try {
            const imageUrl = await convertBase64ToPng(row.photo_content);
            urls[row.id] = imageUrl;
          } catch (error) {
            console.error('Error converting base64 to PNG:', error);
          }
        }
      })
    );
    setImageUrls(urls);
  };
  useEffect(() => {
    if (data && data.length > 0) {
      fetchImageUrls();
    }
  }, [data]);
  const renderCellContent = (row, column) => {
    if (column.name === 'employee_name' && row.first_name && row.middle_name && row.last_name) {
      console.log('Rendering employee name:', row.id, row.first_name, row.middle_name, row.last_name);
      const formattedName = `${row.first_name} ${row.middle_name} ${row.last_name}`;
      if (row.id in imageUrls) {
        const imageUrl = imageUrls[row.id];
        console.log('Image URL:', imageUrl);
        const photoIcon = (
          <img
            src={imageUrl}
            alt="Employee Photo"
            className="employee-icon"
            style={{ width: '24px', height: '24px', marginRight: '5px' }}
          />
        );
        return (
          <>
            {photoIcon}
            {formattedName}
          </>
        );
      } else {
        return <>Loading...</>;
      }
    }
    return row[column.name] || '';
  };
  useEffect(() => {
    console.log('Image URLs:', imageUrls);
  }, [imageUrls]);
  return (
    <div>
      {showForm ? (
        <AddEmployee
          handleNextClick={() => setShowForm(false)}
          handleEmpId={selectedRow.id}
        />
      ) : (
        <div>
          <div style={TableStyle}>
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
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
export default DynamicTable;