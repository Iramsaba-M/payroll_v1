
import SalaryDetailsComp from '../../../../components/form/SalaryDetailForm/SalaryDetailsFormComponent';
import { formContent} from '../SalaryDetail/SalaryDetailsContents'

const SalaryDetails = ({handleNextClick, employeeId,editEmployees}) => {
  
  return (
    <div>
      <div className='salarydeatils'>
        <SalaryDetailsComp config={formContent} handleNextClick={handleNextClick} employeeId={employeeId} editEmployees={editEmployees} />
      </div>
    </div>
  );
};

export default SalaryDetails;
