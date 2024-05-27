import React from 'react'
import {formContent} from '../../../Admin pages/Employee/Documents/DocumentsContent'
import DocumentsFormComponent from '../../../../components/form/DocumentsForm/DocumentsFormComponent'

const Documents = ({handleNextClick,employeeId,editEmployees}) => {
  return (
    <div>
      <DocumentsFormComponent config={formContent} handleNextClick={handleNextClick} employeeId={employeeId} editEmployees={editEmployees}/>
    </div>
    )
  }

export default Documents
