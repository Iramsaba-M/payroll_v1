// RunPayrollComponent.jsxcvbnmfghj
import React, { useState, useEffect } from 'react';
import { tableContent2, tableContent3 } from '../Run Payroll/RunPayrollContents';
import Tablecomp from '../../../configurations/table2/Tablecomp2';
import RunPayrollFinalizeCompomnent from './RunPayrollFinalizeCompomnent';
import { payslips } from '../../../api/EndPoints';
import { fetchData} from '../../../services/APIService';
import Payslip from '../Run Payroll/Payslip';

const RunPayrollComponent = ( ) => {
  const [tableData, setTableData] = useState([]);
  const [showDynamicTable, setShowDynamicTable] = useState(false);
  const [showFinalizeComponent, setShowFinalizeComponent] = useState(false);
  const [showPayslipsButton, setShowPayslipsButton] = useState(true);
  const [selectedDateTop, setSelectedDateTop] = useState(new Date()); 

  const handlePayslipsClick = () => {
    setShowDynamicTable(true);
    setShowFinalizeComponent(false);
    setShowPayslipsButton(false);
  };

  const handleReviewClick = (row) => {
    setShowDynamicTable(false);
    setShowFinalizeComponent(true);
    setShowPayslipsButton(false);
  };

  const handleDateChangeTop = (date) => {
    setSelectedDateTop(date);
  };

  const fetchTableData = async () => {
    try {
      const tableData = await fetchData(payslips); // Fetch data based on payslips
      setTableData(tableData);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };
  
  useEffect(() => {
    fetchTableData(); // Fetch data on component mount or when payslips change
  }, [payslips]); // Include payslips in the dependency array

//  useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const formattedDate = selectedDateTop.toLocaleString('default', { month: 'short' }).toLowerCase();
//         const queryParams = new URLSearchParams({
//           month: formattedDate,
//           year: selectedDateTop.getFullYear()
//         });
//         const tableData = await fetchData(`payslips?${queryParams}`);
  
//         // Log the constructed URL
//         const url = `${fetchData.baseUrl}/${payslips}?${queryParams.toString()}`;
//         console.log('Constructed URL:', url);
  
//         setData(tableData);
//       } catch (error) {
//         console.error('Error fetching table data:', error);
//       }
//     };
  
//     fetchData();
//   }, [selectedDateTop]);


  return (
    <div>
      {/* Your JSX code */}
      {showFinalizeComponent ? (
        <RunPayrollFinalizeCompomnent />
      ) : (
        showDynamicTable ? (
          <div className='absolute right-8 top-8'>
            <Payslip />

          </div>
        ) : (
          <Tablecomp config={tableContent3} onReviewClick={handleReviewClick} />
        )
      )}
      {showPayslipsButton && !showDynamicTable && (
        <div className='absolute top-16 right-2 m-4 cursor-pointer  underline underline-offset-1 text-blue-800' onClick={handlePayslipsClick}>
          payslips
        </div>
      )}
    </div>
  );
};

export default RunPayrollComponent;