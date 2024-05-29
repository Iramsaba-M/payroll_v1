
import BasicDetailsFormComponent from '../../../../components/form/BasicDetailForm/BasicDetailsFormComponent'
import { formContent } from '../BasicDetails/BasicDetailsContent'

const BasicDetails = ({handleNextClick,handleEmpId,handleButtonClick,editEmployees}) => {
 
  return (
    <div>
      <div className='basicdeatils'>
        <BasicDetailsFormComponent config={formContent} handleNextClick={handleNextClick} handleEmpId={handleEmpId} handleSubmit={handleButtonClick} editEmployees={editEmployees} />
      </div>
    </div>
  );
};

export default BasicDetails;
