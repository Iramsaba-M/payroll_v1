
import BasicDetailsFormComponent from '../../../../components/form/BasicDetailForm/BasicDetailsFormComponent'
import { formContent } from '../BasicDetails/BasicDetailsContent'
import PropTypes from 'prop-types';

const BasicDetails = ({ handleNextClick, handleEmpId, handleButtonClick, editEmployees }) => {

  return (
    <div>
      <div className='basicdeatils'>
        <BasicDetailsFormComponent config={formContent} handleNextClick={handleNextClick} handleEmpId={handleEmpId} handleSubmit={handleButtonClick} editEmployees={editEmployees} />
        <BasicDetailsFormComponent config={formContent} handleNextClick={handleNextClick} handleEmpId={handleEmpId} handleSubmit={handleButtonClick} editEmployees={editEmployees} />
      </div>
    </div>
  );
};

BasicDetails.propTypes = {
  handleNextClick: PropTypes.func.isRequired, // Ensure handleNextClick is a required function
  handleEmpId: PropTypes.func.isRequired, // Ensure handleEmpId is a required function
  handleButtonClick: PropTypes.func.isRequired, // Ensure handleButtonClick is a required function
  editEmployees: PropTypes.func.isRequired, // Ensure editEmployees is a required function
};

export default BasicDetails;
