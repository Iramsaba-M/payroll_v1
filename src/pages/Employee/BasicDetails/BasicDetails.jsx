
import React from 'react';
import BasicDetailsFormComponent from '../../../components/form/BasicDetailForm/BasicDetailsFormComponent'
import { formContent } from '../BasicDetails/BasicDetailsContent'


const BasicDetails = ({handleNextClick,handleEmpId,}) => {
 

  return (
    <div>
      <div className='basicdeatils'>
        <BasicDetailsFormComponent config={formContent} handleNextClick={handleNextClick} handleEmpId={handleEmpId}  />
      </div>
    </div>
  );
};

export default BasicDetails;
