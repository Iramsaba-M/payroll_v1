//clean code

import AditionalDetailFormComponent from '../../../../components/form/AditionalDetailForm/AditionalDetailFormComponent'
import {formContent} from './AditionalDetailsContent'

const AditionalDetails = ({handleNextClick ,employeeId}) => {
  return (
    <div>
        <AditionalDetailFormComponent  config={formContent} handleNextClick={handleNextClick} employeeId={employeeId} />
    </div>
  )
}

export default AditionalDetails
