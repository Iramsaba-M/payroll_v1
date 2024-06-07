
import { formContent } from '../../../Admin pages/Employee/Documents/DocumentsContent'
import DocumentsFormComponent from '../../../../components/form/DocumentsForm/DocumentsFormComponent'
import PropTypes from 'prop-types';

const Documents = ({ handleNextClick, employeeId, editEmployees }) => {
  return (
    <div>
      <DocumentsFormComponent config={formContent} handleNextClick={handleNextClick} employeeId={employeeId} editEmployees={editEmployees} />
    </div>
  )
}

Documents.propTypes = {
  handleNextClick: PropTypes.func.isRequired, // Ensure handleNextClick is a required function
  employeeId: PropTypes.string.isRequired, // Ensure employeeId is a required string
  editEmployees: PropTypes.func.isRequired, // Ensure editEmployees is a required function
};


export default Documents
