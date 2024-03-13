import React, { useState, useEffect } from 'react';
import { MdOutlineFileDownload } from "react-icons/md"
import AddEmployee from '../../pages/Employee/AddEmployee/AddEmployee';
import TableStyle from './TableStyle';
import DatePicker from 'react-datepicker'; // Import DatePicker component
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import { fetchData } from '../../services/APIService';
import { payslips } from '../../api/EndPoints';
import {view} from '../../api/EndPoints';

function DynamicTable2({ config }) {
  
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedDateTop, setSelectedDateTop] = useState(new Date()); // State for DatePicker

  // useEffect(() => {
  //   const fetchTableData = async () => {
  //     try {
  //       const formattedDate = selectedDateTop.toLocaleString('default', { month: 'short' }).toLowerCase();
  //       const queryParams = new URLSearchParams({
  //         month: formattedDate,
  //         year: selectedDateTop.getFullYear()
  //       });
  //       const tableData = await fetchData(`payslips?${queryParams}`);
  
  //       // Log the constructed URL
  //       const url = `${fetchData.baseUrl}/${payslips}?${queryParams.toString()}`;
  //       console.log('Constructed URL:', url);
  
  //       setData(tableData);
  //     } catch (error) {
  //       console.error('Error fetching table data:', error);
  //     }
  //   };
  
  //   fetchTableData();
  // }, [selectedDateTop]);
  
  const fetchTableData = async () => {
    try {
      const tableData = await fetchData(payslips); // Assuming fetchData accepts the payslips object directly
      setData(tableData);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };
  
  useEffect(() => {
    fetchTableData();
  }, [payslips]); // Use payslips as a dependency for useEffect
  

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

  const handleDownload = async (row) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }
  
      const queryParams = { employee_id: row.employee_id };
      const endpoint = `${view}/${queryParams.employee_id}`; // Construct endpoint URL
      const tableData = await fetchData(endpoint, queryParams);
      
      // Assuming the response contains the file content or a URL to download the file
      const blob = await tableData.blob();
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error downloading payslip:', error);
    }
  };
  

  const handleViewPayslips = async (row, setData, fetchData) => {
    try {
      if (!row || !row.employee_id) {
        console.error('Error: Invalid row data or missing employee_id');
        return;
      }
  
      const queryParams = { employee_id: row.employee_id };
      const endpoint = `${view}/${queryParams.employee_id}`; // Construct endpoint URL
      const tableData = await fetchData(endpoint, queryParams);
      setData(tableData);
    } catch (error) {
      console.error('Error fetching payslips data:', error);
    }
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
    return row[column.name] || '';
  };
  const tableStyle = {
    maxHeight: '350px',
    overflowY: 'auto',
  };

  const handleDateChangeTop = (date) => {
    setSelectedDateTop(date);
  };

  return (
    <div>
      <div className='ml-2  border-r w-[38vh] h-8 rounded-md absolute top-20 flex items-center'>
        <span style={{ whiteSpace: 'nowrap', marginRight: '-1px' }}>Payslip for month</span>
        <DatePicker
          selected={selectedDateTop}
          onChange={handleDateChangeTop}
          placeholderText='To'
          dateFormat="MMMM-yyyy"
          style={{ appearance: 'none', background: 'transparent', flex: '1', marginLeft: '2px' }}
          className='on hover:border-blue-500 text-center focus:outline-none'
          showMonthYearPicker
        />
      </div>

      {showForm ? (
        <AddEmployee
          handleNextClick={() => setShowForm(false)}
          handleEmpId={selectedRow.id}
        />
      ) : (
        <div>
          <div className=' cursor-pointer absolute top-18 right-4 m-4 text-gray-500'> payroll Historys </div>
          <div style={tableStyle}>
            <table className='border-2 rounded-md p-2 ml-2 hover:border-blue-500 absolute top-[110px] '>
              <thead>
                <tr className='bg-gray-100 p-2'>
                  <th className='px-6'>
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectAll}
                    />
                  </th>
                  {config.map((column, columnIndex) => (
                    <th key={columnIndex} className={TableStyle[column.clmncss]}>
                      {column.label}
                    </th>
                  ))}
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
                    {config.map((column, columnIndex) => (
                      <td key={columnIndex} className={`text-center ${TableStyle[column.cssClass]}`} style={{ position: 'relative' }}>
                        {column.name === 'PAYSLIPS' ? (
                          <button className="bg-teal-50 text-green-600 px-4 py-1 rounded-full cursor-pointer inline-flex items-center" onClick={() => handleViewPayslips(row)}>
                            <span className="h-3 w-8 flex items-center">View</span>
                          </button>
                        ) : column.name === 'DOWNLOAD' ? (
                          <MdOutlineFileDownload
                            onClick={() => handleDownload(row)}
                            style={{ cursor: 'pointer', color: 'gray', fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                          />
                        ) : (
                          renderCellContent(row, column)
                        )}
                      </td>
                    ))}
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

export default DynamicTable2;

// import React, { useState, useEffect } from 'react';
// import { MdOutlineFileDownload } from "react-icons/md"
// import AddEmployee from '../../pages/Employee/AddEmployee/AddEmployee';
// import TableStyle from './TableStyle';
// import DatePicker from 'react-datepicker'; // Import DatePicker component
// import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
// import { fetchData } from '../../services/APIService';
// import { payslips } from '../../api/EndPoints';

// function DynamicTable2({ config }) {
//   const [data, setData] = useState([]);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedDateTop, setSelectedDateTop] = useState(new Date()); // State for DatePicker
//   useEffect(() => {
//   // Assuming fetchData constructs the URL internally
// const fetchTableData = async () => {
//   try {
//     const formattedDate = selectedDateTop.toLocaleString('default', { month: 'short' }).toLowerCase(); // Convert month to abbreviated format (e.g., jan)
//     const url = `http://192.168.0.142:5002/fetch_employee_data?year=${selectedDateTop.getFullYear()}&month=${formattedDate}`;
//     console.log('Fetching data with URL:', url);
//     const tableData = await fetchData(url); // Assuming fetchData accepts the URL directly
//     console.log('Fetched data:', tableData);
//     setData(tableData);
//   } catch (error) {
//     console.error('Error fetching table data:', error);
//   }
// };

  
//     fetchTableData();
//   }, [selectedDateTop]); // Use selectedDateTop as a dependency for useEffect
  

//   const handleCheckboxChange = (row) => {
//     if (selectedRows.includes(row)) {
//       setSelectedRows(selectedRows.filter((selectedRow) => selectedRow !== row));
//     } else {
//       setSelectedRows([...selectedRows, row]);
//     }
//   };

//   const handleSelectAll = () => {
//     if (selectAll) {
//       setSelectedRows([]);
//     } else {
//       setSelectedRows([...data]);
//     }
//     setSelectAll(!selectAll);
//   };

//   const handleDownload = (row) => {
//     // Implement download functionality here
//     console.log('Download clicked for row:', row);
//   };

//   const renderCellContent = (row, column) => {
//     if (column.name === 'employee_name' && row.first_name && row.middle_name && row.last_name) {
//       const formattedName = `${row.first_name} ${row.middle_name} ${row.last_name}`;
//       return formattedName;
//     }
//     return row[column.name] || '';
//   };

//   const tableStyle = {
//     maxHeight: '350px',
//     overflowY: 'auto',
//   };

//   const handleDateChangeTop = (date) => {
//     setSelectedDateTop(date);
//   };

//   return (
//     <div>
//       <div className='ml-2  border-r w-[38vh] h-8 rounded-md absolute top-20 flex items-center'>
//         <span style={{ whiteSpace: 'nowrap', marginRight: '-1px' }}>Payslip for month</span>
//         <DatePicker
//           selected={selectedDateTop}
//           onChange={handleDateChangeTop}
//           placeholderText='To'
//           dateFormat="MMMM-yyyy"
//           style={{ appearance: 'none', background: 'transparent', flex: '1', marginLeft: '10px' }}
//           className='on hover:border-blue-500 text-center focus:outline-none'
//           showMonthYearPicker
//         />
//       </div>

//       {showForm ? (
//         <AddEmployee
//           handleNextClick={() => setShowForm(false)}
//           handleEmpId={selectedRow.id}
//         />
//       ) : (
//         <div>
//           <div className=' cursor-pointer absolute top-18 right-4 m-4 text-gray-500'> payroll Historys </div>
//           <div style={tableStyle}>
//             <table className='border-2 rounded-md p-2 ml-2 hover:border-blue-500 absolute top-[110px] '>
//               <thead>
//                 <tr className='bg-gray-100 p-2'>
//                   <th className='px-6'>
//                     <input
//                       type="checkbox"
//                       onChange={handleSelectAll}
//                       checked={selectAll}
//                     />
//                   </th>
//                   {config.map((column, columnIndex) => (
//                     <th key={columnIndex} className={TableStyle[column.clmncss]}>
//                       {column.label}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((row, rowIndex) => (
//                   <tr key={rowIndex}>
//                     <td className='px-6'>
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxChange(row)}
//                         checked={selectedRows.includes(row)}
//                       />
//                     </td>
//                     {config.map((column, columnIndex) => (
//                       <td key={columnIndex} className={`text-center ${TableStyle[column.cssClass]}`} style={{ position: 'relative' }}>
//                         {column.name === 'PAYSLIPS' ? (
//                           <button className="bg-teal-50 text-green-600 px-4 py-1 rounded-full cursor-pointer inline-flex items-center" onClick={() => handleViewPayslips(row)}>
//                             <span className="h-3 w-8 flex items-center">View</span>
//                           </button>
//                         ) : column.name === 'DOWNLOAD' ? (
//                           <MdOutlineFileDownload
//                             onClick={() => handleDownload(row)}
//                             style={{ cursor: 'pointer', color: 'gray', fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
//                           />
//                         ) : (
//                           renderCellContent(row, column)
//                         )}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DynamicTable2;

