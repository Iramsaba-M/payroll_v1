// import React, { useState, useEffect } from 'react';
// import TableStyle2 from './Tablestyle2';
// import { fetchData } from '../../services/APIService';
// import { Runpayroll } from '../../api/EndPoints';

// function Tablecomp({ config, endpoint, onReviewClick }) {
//   // const [data, setData] = useState(null);

//   // useEffect(() => {
//   //   const fetchTableData = async () => {
//   //     try {
//   //       const tableData = await fetchData(Runpayroll);
//   //       setData(tableData);
//   //     } catch (error) {
//   //       console.error('Error fetching table data:', error);
//   //     }
//   //   };

//   //   fetchTableData();
//   // }, [endpoint]);

//   const renderCellContent = (row, column) => {
//     if (column.name === 'netpay' && (row[column.name] === null || row[column.name] === '')) {
//       return 'Yet to be processed';
//     }
//     return row[column.name] || '';
//   };

//   const handleReviewClick = (row) => {

//     console.log('Review clicked for row:', row);

//   };


//   return (
//     <div>
//       {data ? (
//         <div>
//           <div className='absolute top-16 right-2 m-4 text-blue-500'> payslips </div>
//           <table className=' max-h-[30vh] overflow-y-auto border-2 rounded-md p-2 hover:border-blue-500 absolute top-28 right-[115px] px-2'>
//             <thead>
//               <tr className='bg-gray-100 p-2'>
//                 {config.map((column) => (
//                   <th key={column.name} className={TableStyle2[column.clmncss]}>
//                     {column.label}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {config.map((column) => {
//                     const cellStyle = column.name === 'action' && row.action ? TableStyle2[column.actionStyles[row.action]] : '';
//                     return (
//                       <td key={column.name} className={`${TableStyle2[column.cssClass]} ${cellStyle}`} style={{ textAlign: 'center' }}>
//                         {column.name === 'action' && row.action === 'Review' ? (
//                           <button onClick={() => onReviewClick(row)}>Review</button>
//                         ) : (
//                           renderCellContent(row, column)
//                         )}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Tablecomp;
// Tablecomp.jsx
import React from 'react';
import TableStyle2 from './Tablestyle2';

function Tablecomp({ config, data, onReviewClick }) {
  const renderCellContent = (row, column) => {
    if (column.name === 'netpay' && (row[column.name] === null || row[column.name] === '')) {
      return 'Yet to be processed';
    }
    return row[column.name] || '';
  };

  const handleReviewClick = (row) => {
    console.log('Review clicked for row:', row);
  };

  return (
    <div className={TableStyle2[config.tableposition]} >
     
      <table className='w-full'>
        <thead>
          <tr className='bg-gray-100 p-2'>
            {config.column.map((column) => (
              <th key={column.name} className={TableStyle2[column.clmncss]}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? ( // Check if data is not null and has items
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {config.column.map((column) => {
                  const cellStyle = column.name === 'action' && row.action ? TableStyle2[column.actionStyles[row.action]] : '';
                  return (
                    <td key={column.name} className={`${TableStyle2[column.cssClass]} ${cellStyle}`} style={{ textAlign: 'center' }}>
                      {column.name === 'action' && row.action === 'review' ? (
                        <button onClick={() => onReviewClick(row)}>Review</button>
                      ) : (
                        renderCellContent(row, column)
                      )}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={config.length} className="text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Tablecomp;
