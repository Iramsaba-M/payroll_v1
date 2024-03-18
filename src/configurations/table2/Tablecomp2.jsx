// Tablecomp.jsx
import React, { useState, useEffect } from 'react';
import TableStyle2 from './Tablestyle2';
import { fetchData } from '../../services/APIService';
import { Runpayroll } from '../../api/EndPoints';

function Tablecomp({ config, endpoint, onReviewClick }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const tableData = await fetchData(Runpayroll);
        setData(tableData);
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };

    fetchTableData();
  }, [endpoint]);

  const renderCellContent = (row, column) => {
    return row[column.name] || '';
  };

  const handleReviewClick = (row) => {
    // Add your logic here to handle the review click event
    console.log('Review clicked for row:', row);
    // You can also call any necessary functions or update state here
    // For example:
    // if (onReviewClick) {
    //   onReviewClick(row);
    // }
  };
  

  return (
    <div>
      {data ? (
        <div>
          <div className='absolute top-16 right-2 m-4 text-gray-500'> payslips </div>
          <table className=' max-h-[30vh] overflow-y-auto border-2 rounded-md p-2 hover:border-blue-500 absolute top-28'>
            <thead>
              <tr className='bg-gray-100 p-2'>
                {config.map((column) => (
                  <th key={column.name} className={TableStyle2[column.clmncss]}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                {config.map((column) => {
                  const cellStyle = column.name === 'action' && row.action ? TableStyle2[column.actionStyles[row.action]] : '';
                  return (
                    <td key={column.name} className={`${TableStyle2[column.cssClass]} ${cellStyle}`} style={{ textAlign: 'center' }}>
                      {column.name === 'action' && row.action === 'Review' ? (
                        <button onClick={() => onReviewClick(row)}>Review</button>
                      ) : (
                        renderCellContent(row, column)
                      )}
                    </td>
                  );
                })}
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Tablecomp;
