import React from 'react'
import SalaryDetailsComp from '../../../components/form/SalaryDetailForm/SalaryDetailsFormComponent';
import { salaryData} from './AddEmplyeeContent'

const SalaryDetails = ({handleNextClick, employeeId}) => {
  
  return (
    <div>
      <div className='salarydeatils'>
        <SalaryDetailsComp config={salaryData} handleNextClick={handleNextClick} employeeId={employeeId} />
      </div>
    </div>
  );
};

export default SalaryDetails;
