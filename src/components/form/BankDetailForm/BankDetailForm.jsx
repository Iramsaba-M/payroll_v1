
import React, { useState } from 'react';
import BankDetailFormComponent from './BankDetailFormComponent';
import axios from 'axios';
import { GoPlusCircle } from "react-icons/go";
import Button from '../../../configurations/Button/Button';
import { BANK_DETAILS_API } from '../../../api/EndPoints';
import { getApiUrl } from '../../../api/GetAPI';
import { ButtonforSave ,ButtonforaddBank} from '../../../pages/Employee/BankDetail/BankDetailsContent';
import ModalComponent from '../Formfields/modal/ModalComponent';
import {ModalConfig} from '../Formfields/modal/ModalConfig'
import { postData } from '../../../services/APIService';

const BankDetailForm = ({ configs, handleNextClick, handleSubmit, employeeId }) => {
  const [forms, setForms] = useState([
    { id: 0, values: {} },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addBank = () => {
    const newForms = [...forms, { id: forms.length, values: {} }];
    setForms(newForms);
  };

  const handleFormChange = (id, values) => {
    const updatedForms = forms.map(form => (form.id === id ? { ...form, values } : form));
    setForms(updatedForms);
  };
  

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const allFormValues = forms.map(form => form.values);
  //     const dataToSend = { employee_id: employeeId, bank_details: allFormValues };
  //     const response = await axios.post(getApiUrl(BANK_DETAILS_API), dataToSend);
      
  //     console.log('Data sent:', response.data);      

  //     handleSubmit(dataToSend);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
    
  // };
  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const allFormValues = forms.map((form) => form.values);
      const dataToSend = { employee_id: employeeId, bank_details: allFormValues };
  
      // Use the postData function
      const response = await postData(BANK_DETAILS_API, dataToSend);
      
      console.log('Data sent:', response);
  
      handleSubmit(dataToSend);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // const handleButtonClick = (label,type) => {
  //   if (label === 'Save' && type ==='submit') {
  //     onSubmit();
  //   } else if (label === 'Next') {
  //     handleNextClick(true);
  //   } 
  // };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleButtonClick = (label, type) => {
    if (label === "Save" && type === "submit") {
      setIsModalOpen(true);
    } else if (label === "Next") {
      handleNextClick(true);
    }
  };

  return (
    <form  onSubmit={onSubmit} className=''>
      <div className='form-line flex justify-evenly mb-4  '>
        <div >
          {forms.map((form, index) => (
            <div key={index} className='shadow-sm mt-7 mb-7 ml-1'>
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
        <button type="button" onClick={addBank} className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-1'>Add another bank details</button>
          {/* <Button  Configs={ButtonforaddBank} onClick={addBank} /> */}
          </div>
        </div>
      </div>
      <div className='buttons flex justify-end mr- mt-6 mb-96 -ml-1 '>
        
        <Button  Configs={ButtonforSave} onClick={handleButtonClick} />
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={ModalConfig}
      />
    </form>
  );
};

export default BankDetailForm;