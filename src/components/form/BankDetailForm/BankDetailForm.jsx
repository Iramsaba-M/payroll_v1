
import React, { useState } from 'react';
import BankDetailFormComponent from './BankDetailFormComponent';
import axios from 'axios';
import { GoPlusCircle } from "react-icons/go";
import Button from '../../../configurations/Button/Button';
import { BANK_DETAILS_API } from '../../../api/EndPoints';
import { getApiUrl } from '../../../api/GetAPI';
import { ButtonforSave ,ButtonforaddBank} from '../../../pages/Employee/BankDetail/BankDetailsContent';


const BankDetailForm = ({ configs, handleNextClick, handleSubmit, employeeId }) => {
  const [forms, setForms] = useState([
    { id: 0, values: {} },
  ]);

  const addBank = () => {
    const newForms = [...forms, { id: forms.length, values: {} }];
    setForms(newForms);
  };

  const handleFormChange = (id, values) => {
    const updatedForms = forms.map(form => (form.id === id ? { ...form, values } : form));
    setForms(updatedForms);
  };
  

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const allFormValues = forms.map(form => form.values);
      const dataToSend = { employee_id: employeeId, bank_details: allFormValues };
      const response = await axios.post(getApiUrl(BANK_DETAILS_API), dataToSend);
      
      console.log('Data sent:', response.data);      

      handleSubmit(dataToSend);
    } catch (error) {
      console.error('Error:', error);
    }
    
  };
  const handleButtonClick = (label,type) => {
    if (label === 'Save' && type ==='submit') {
      onSubmit();
    } else if (label === 'Next') {
      handleNextClick(true);
    } 
  };

  return (
    <form  onSubmit={onSubmit} className=''>
      <div className='form-line flex justify-evenly mb-4 ml-2 '>
        <div >
          {forms.map((form, index) => (
            <div key={index} className='shadow-sm mt-7 mb-7'>
              <BankDetailFormComponent
                id={form.id}
                config={configs}
                onChange={handleFormChange}
              />
            </div>
          ))}
        </div>
        <div className='w-64 '>
          <div className='flex w-60 justify-center h-10  border-solid mt-4'>
        <GoPlusCircle  onClick={() => addBank()} className='justify-center size-5'/>
        </div>
        <div className='flex justify-center ml-7'>
         
          <Button  Configs={ButtonforaddBank} onClick={addBank} />
          </div>
        </div>
      </div>
      <div className='buttons flex justify-end mr- mt-6 mb-96'>
        
        <Button  Configs={ButtonforSave} onClick={handleButtonClick} />
      </div>
    </form>
  );
};

export default BankDetailForm;