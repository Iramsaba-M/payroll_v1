
import BankDetailForm from '../../../../components/form/BankDetailForm/BankDetailForm'
import { formContent } from './BankDetailsContent'
import PropTypes from 'prop-types';

const BankDetails = ({ handleNextClick, employeeId, editEmployees }) => {
  return (
    <div className='bankdeatils '>
      <BankDetailForm configs={formContent} handleNextClick={handleNextClick} employeeId={employeeId} editEmployees={editEmployees} />
      <BankDetailForm configs={formContent} handleNextClick={handleNextClick} employeeId={employeeId} editEmployees={editEmployees} />
    </div>
  )
}

BankDetails.propTypes = {
  handleNextClick: PropTypes.func.isRequired, // Ensure handleNextClick is a required function
  employeeId: PropTypes.string.isRequired, // Ensure employeeId is a required string
  editEmployees: PropTypes.func.isRequired, // Ensure editEmployees is a required function
};

export default BankDetails
