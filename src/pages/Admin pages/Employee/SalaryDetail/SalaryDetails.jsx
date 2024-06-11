
import SalaryDetailsComp from '../../../../components/form/SalaryDetailForm/SalaryDetailsFormComponent';
import { formContent } from '../SalaryDetail/SalaryDetailsContents'
import PropTypes from 'prop-types';

const SalaryDetails = ({ handleNextClick, employeeId, editEmployees }) => {

  return (
    <div>
      <div className='salarydeatils'>
        <SalaryDetailsComp config={formContent} handleNextClick={handleNextClick} employeeId={employeeId} editEmployees={editEmployees} />
        <SalaryDetailsComp config={formContent} handleNextClick={handleNextClick} employeeId={employeeId} editEmployees={editEmployees} />
      </div>
    </div>
  );
};

SalaryDetails.propTypes = {
  handleNextClick: PropTypes.func.isRequired,
  employeeId: PropTypes.string.isRequired,
  editEmployees: PropTypes.func.isRequired,
};
export default SalaryDetails;
