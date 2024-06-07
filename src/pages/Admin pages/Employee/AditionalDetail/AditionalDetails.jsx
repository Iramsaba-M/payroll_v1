
import AditionalDetailFormComponent from '../../../../components/form/AditionalDetailForm/AditionalDetailFormComponent'
import { formContent } from './AditionalDetailsContent'
import PropTypes from 'prop-types';

const AditionalDetails = ({ handleNextClick, employeeId, editEmployees }) => {
  return (
    <div>
      <AditionalDetailFormComponent config={formContent} handleNextClick={handleNextClick} employeeId={employeeId} editEmployees={editEmployees} />
    </div>
  )
}

AditionalDetails.propTypes = {
  handleNextClick: PropTypes.func.isRequired, // Ensure handleNextClick is a required function
  employeeId: PropTypes.string.isRequired, // Ensure employeeId is a required string
  editEmployees: PropTypes.func.isRequired, // Ensure editEmployees is a required function
};
export default AditionalDetails
