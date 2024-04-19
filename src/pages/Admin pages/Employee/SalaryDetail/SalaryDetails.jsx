import React from 'react'
import SalaryDetailsComp from '../../../../components/form/SalaryDetailForm/SalaryDetailsFormComponent';
import { formContent} from '../SalaryDetail/SalaryDetailsContents'

const SalaryDetails = ({handleNextClick, employeeId}) => {
  
  return (
    <div>
      <div className='salarydeatils'>
        <SalaryDetailsComp config={formContent} handleNextClick={handleNextClick} employeeId={employeeId} />
      </div>
    </div>
  );
};

export default SalaryDetails;
