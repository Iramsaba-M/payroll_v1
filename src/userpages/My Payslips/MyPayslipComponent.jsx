// import React from 'react'

// const MyPayslipComponent = () => {
//   return (
//     <div>MyPayslipComponent</div>
//   )
// }

// export default MyPayslipComponent

import React, { useState,useEffect } from 'react';
import { Mypayslipcontent } from './MypayslipContent';
import TableComponent from '../../configurations/tables/TableComponent';
import { mypayslip } from '../../api/EndPoints';
import { fetchData } from '../../services/APIService';


const MyPayslipComponent = () => {


    const [tableData, setTableData] = useState([]);

    const fetchTableData = async () => {
        
        try {
          const tableData = await fetchData(mypayslip); // Fetch data based on payslips
          setTableData(tableData);
        } catch (error) {
          console.error('Error fetching table data:', error);
        }
      };
      
      useEffect(() => {
        fetchTableData(); // Fetch data on component mount or when payslips change
      }, [mypayslip]); // Include payslips in the dependency array

    return (
      <div className='px-[60px]'>
          <TableComponent config={Mypayslipcontent} data={tableData} />
      </div>
    )
  }
  
  export default MyPayslipComponent



// import React, { useState, useEffect } from 'react';
// import { Mypayslipcontent } from './MypayslipContent';
// import TableComponent from '../../configurations/tables/TableComponent';
// import { mypayslip, downloadDataEndpoint } from '../../api/EndPoints';
// import { fetchData } from '../../services/APIService';

// const Mypayslip = () => {
//   const [tableData, setTableData] = useState([]);

//   const fetchTableData = async () => {
//     try {
//       const tableData = await fetchData(mypayslip);
//       setTableData(tableData);
//     } catch (error) {
//       console.error('Error fetching table data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTableData();
//   }, []);

//   const handleDownload = async (rowData) => {
//     try {
//       // Extract necessary data from rowData
//       const { year, month, employee_id } = rowData;
  
//       if (!employee_id) {
//         throw new Error('Missing employee_id in row data');
//       }
  
//       // Example of fetching download data using query parameters
//       const downloadUrl = `${downloadDataEndpoint}?year=${year}&month=${month}&employee_id=${employee_id}`;
//       const downloadData = await fetchData(downloadUrl);
//       console.log('Downloaded data:', downloadData);
//       // Process downloaded data as needed
//     } catch (error) {
//       console.error('Error downloading data:', error);
//     }
//   };
  

//   // Add downloadHandler to each item in Mypayslipcontent
//   const updatedMypayslipcontent = Mypayslipcontent.map(item => ({
//     ...item,
//     downloadHandler: () => handleDownload(item.year, item.month),
//   }));

//   return (
//     <div className='px-[232px]'>
//       <TableComponent config={updatedMypayslipcontent} data={tableData} />
//     </div>
//   );
// };

// export default Mypayslip;