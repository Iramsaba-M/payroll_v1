// RunPayrollComponent
import { useState, useEffect } from 'react';
import { tableContent3 } from '../Run Payroll/RunPayrollContents';
import Table2 from '../../../configurations/table2/Table2';
import RunPayrollFinalizeCompomnent from './RunPayrollFinalizeCompomnent';
import { Runpayroll } from '../../../api/EndPoints';
import { fetchData } from '../../../services/APIService';
import Payslip from '../Run Payroll/Payslip';
import ErrorScreen from '../../../errorhandling/ErrorScreen';
import ErrorScreen from '../../../errorhandling/ErrorScreen';

const RunPayrollComponent = () => {
  const [showDynamicTable, setShowDynamicTable] = useState(false);
  const [showFinalizeComponent, setShowFinalizeComponent] = useState(false);
  const [showPayslipsButton, setShowPayslipsButton] = useState(true);
  const [errorCode, setErrorCode] = useState(null);
  

  const handlePayslipsClick = () => {
    setShowDynamicTable(true);
    setShowFinalizeComponent(false);
    setShowPayslipsButton(false);
  };

  const handleReviewClick = () => {
    setShowDynamicTable(false);
    setShowFinalizeComponent(true);
    setShowPayslipsButton(false);
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const tableData = await fetchData(Runpayroll);
        setData(tableData);
      } catch (error) {
        console.error('Error posting data:', error);
        setErrorCode(error.response ? error.response.status : 500); // Set error code based on response
      }
    };

    fetchTableData();
  }, []);

  if (errorCode) {
    return <ErrorScreen errorCode={errorCode} />; // Render ErrorScreen if an error occurred
  }
  if (errorCode) {
    return <ErrorScreen errorCode={errorCode} />; // Render ErrorScreen if an error occurred
  }
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
          <Table2 config={tableContent3} onReviewClick={handleReviewClick} data={data} />
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