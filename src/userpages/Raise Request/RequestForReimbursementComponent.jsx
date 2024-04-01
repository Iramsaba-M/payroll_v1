
import React, { useState } from 'react';
import axios from 'axios';
import RequestForReimbursementStyles from './RequestForReimbursementStyles';
import OptionsComponent from '../../components/form/Formfields/options/OptionsComponent';
import TextComponent from '../../components/form/Formfields/text/TextComponent';
import Button from '../../configurations/Button/Button';
import { Addnew, Cancel, Requestreimbursement, add } from './RequestForReimbursementData';
import RequestForLoanStyles from './RequestForLoanStyles';
import DateComponent from '../../components/form/Formfields/date/DateComponent';
import FileComponent from '../../components/form/DocumentsForm/FileComponent';
import { FaTimes } from 'react-icons/fa';
import ModalComponent from '../../components/form/Formfields/modal/ModalComponent';
import { ModalConfig2 } from '../../components/form/Formfields/modal/ModalConfig2';
import ButtonConfig from '../../configurations/Button/ButtonConfig';

const RequestForReimbursementComponent = ({ config }) => {
  const [formData, setFormData] = useState([{ id: 0, values: {} }]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNewForm = () => {
    setFormData([...formData, { id: formData.length, values: {} }]);
  };

  const handleFormChange = (id, fieldName, value) => {
    setFormData(
      formData.map((form) =>
        form.id === id ? { ...form, values: { ...form.values, [fieldName]: value } } : form
      )
    );
  };
 const handleButtonClick = (type) => {
    if (type === "submit") {
      setIsModalOpen(true);
    }
  };
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const removeForm = (id) => {
    setFormData(formData.filter((form) => form.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Promise.all(
        formData.map(async (form) => {
          const response = await axios.post('http://localhost:3000/re', form.values);
          console.log('Data sent successfully:', response.data);
        })
      );
      // Open the modal after successful form submission
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className=''>
      <div className='w-[160vh]'>
        <h1 className='text-xl font-semibold translate-x-[5vh] -translate-y-[4vh]'>Request For Reimbursement</h1>
        <div className='border-2 border-gray-200 shadow-md h-full ml-7'>
          <div className=' ml-7 mt-6'>
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={(e) => handleSubmit(e, 'Requestreimbursement')}>
              {formData.map((form, index) => (
                <div key={index} className="flex items-center">
                  
                  <div>
                    {config.map((field, fieldIndex) => (
                      <div key={fieldIndex}>
                        <label className={RequestForReimbursementStyles[field.textcss].label}>
                          {field.label}
                        </label>
                        {field.type === 'options' && (
                          <OptionsComponent
                            name={field.name}
                            value={form.values[field.name] || ''}
                            options={field.options}
                            onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
                            textcss={RequestForReimbursementStyles[field.textcss].input}
                            placeholder={field.placeholder}
                            icon={field.icon}
                          />
                        )}
                        
                        {field.type === 'date' && (
                          
                          <DateComponent
                            name={field.name}
                            placeholder={field.placeholder}
                            value={form.values[field.name] || ''}
                            onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
                            textcss={RequestForReimbursementStyles[field.textcss].input}
                            icon={field.icon}

                          />
                          
                        )}
                        {field.type === 'text' && (
                          <TextComponent
                            name={field.name}
                            textcss={
                              field.name === 'reason'
                                ? RequestForReimbursementStyles[field.textcss].input
                                : RequestForLoanStyles[field.textcss].input
                            }
                            icon={field.icon}
                            placeholder={field.placeholder}
                            value={form.values[field.name] || ''}
                            onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
                          />
                        )}
                        {field.type === 'file' && (
                          <FileComponent
                            name={field.name}
                            onChange={(file) => handleFormChange(form.id, field.name, file)}
                            textcss={RequestForReimbursementStyles[field.textcss].input}
                            placeholder={field.placeholder}
                            icon={field.icon}
                            iconPosition={field.iconPosition}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  {index !== 0 && (
                    <FaTimes
                      className="ml-2 text-red-500 cursor-pointer"
                      onClick={() => removeForm(form.id)}
                    />
                  )}
                </div>
              ))}
              <div className='mt-4'>
                <ButtonConfig Config={add} onClick={addNewForm} />
              </div>
              <div className='flex mt-4 mb-7'>
                <ButtonConfig Config={Requestreimbursement} onClick={() => handleButtonClick("submit")}  />
                <ButtonConfig Config={Cancel}/>
                
              </div>
              <ModalComponent
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                config={ModalConfig2}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForReimbursementComponent;
