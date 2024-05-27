//clean code

import AditionalDetailFormComponent from '../../../../components/form/AditionalDetailForm/AditionalDetailFormComponent'
import {formContent} from './AditionalDetailsContent'

const AditionalDetails = ({handleNextClick ,employeeId,editEmployees}) => {
  return (
    <div>
        <AditionalDetailFormComponent  config={formContent} handleNextClick={handleNextClick} employeeId={employeeId}  editEmployees={editEmployees}/>
    </div>
  )
}

export default AditionalDetails
