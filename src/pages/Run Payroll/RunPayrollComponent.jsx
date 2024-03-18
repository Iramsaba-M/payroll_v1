// RunPayrollComponent.jsx
import React, { useState } from 'react';
import DynamicTable2 from '../../configurations/tables/DynamicTable2';
import { tableContent2, tableContent3 } from '../Run Payroll/RunPayrollcontent';
import Tablecomp from '../../configurations/table2/Tablecomp2';
import RunPayrollFinalizeComponent from './RunPayrollFinalizeComponent';

const RunPayrollComponent = () => {
  const [showDynamicTable, setShowDynamicTable] = useState(false);
  const [showFinalizeComponent, setShowFinalizeComponent] = useState(false);
  const [showPayslipsButton, setShowPayslipsButton] = useState(true);

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

  return (
    <div>
      {showFinalizeComponent ? (
        <RunPayrollFinalizeComponent />
      ) : (
        showDynamicTable ? (
          <DynamicTable2 config={tableContent2} />
        ) : (
          <Tablecomp config={tableContent3} onReviewClick={handleReviewClick} />
        )
      )}
      {showPayslipsButton && !showDynamicTable && (
        <div className='absolute top-16 right-2 m-4 text-gray-500 cursor-pointer' onClick={handlePayslipsClick}>
          payslips
        </div>
      )}
    </div>
  );
};

export default RunPayrollComponent;
