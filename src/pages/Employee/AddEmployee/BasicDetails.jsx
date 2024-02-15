
import React from 'react';
import BasicDetailsFormComponent from '../../../components/form/BasicDetailForm/BasicDetailsFormComponent'
import { basicdetailform } from './AddEmplyeeContent'


const BasicDetails = ({handleNextClick,handleEmpId,}) => {
 

  return (
    <div>
      <div className='basicdeatils'>
        <BasicDetailsFormComponent config={basicdetailform} handleNextClick={handleNextClick} handleEmpId={handleEmpId}  />
      </div>
    </div>
  );
};

export default BasicDetails;
