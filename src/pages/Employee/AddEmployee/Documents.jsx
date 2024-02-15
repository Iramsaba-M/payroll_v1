import React from 'react'
import DocumentsData from '../../../components/form/DocumentsForm/DocumentsData'
import DocumentsFormComponent from '../../../components/form/DocumentsForm/DocumentsFormComponent'

const Documents = ({handleNextClick,employeeId}) => {
  return (
    <div>
      <DocumentsFormComponent config={DocumentsData} handleNextClick={handleNextClick} employeeId={employeeId}/>
    </div>
    )
  }

export default Documents
