
import React, { useState } from 'react';
import axios from 'axios';
import TextComponent from '../Formfields/text/TextComponent';
import TextStyle from '../Formfields/text/TextStyle';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import { BANK_DETAILS_API } from '../../../api/EndPoints';
import { getApiUrl } from '../../../api/GetAPI'
import Button from '../../../configurations/Button/Button';
import { ButtonforDefault } from '../../../pages/Employee/BankDetail/BankDetailsContent';

const BankDetailFormComponent = ({ id,config, onChange }) => {
  const [values, setValues] = useState({ default_for_payroll: false,});
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  // const [default_for_payroll, setdefault_for_payroll] = useState(false);

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
    onChange(id, { ...values, [name]: value });
  };

  // const handleChange = (name, value) => {
  //   setValues((prevValues) => ({ ...prevValues, [name]: value }));
  // };


  const highlight = () => {
    setIsButtonClicked((prevState) => !prevState);
    const setDefaultPayroll = !values["default_for_payroll"];
    setValues({ ...values, default_for_payroll: setDefaultPayroll });
    onChange(id, { ...values, default_for_payroll: setDefaultPayroll });

  };
  return (

    <div style={{ boxShadow: isButtonClicked ? '0 0 2px rgba(0, 0, 0, 0.5)' : 'none' }}>
      <div className="form-line flex mb-4 ">
        {config.slice(0, 2).map((field, index) => (
          <div key={index} className={`form-field ${field.fieldstyle}`}>

            <label className={TextStyle[field.textcss].label}>{field.label}</label>
            {field.type === 'options' && (
              <OptionsComponent
                name={field.name}
                placeholder={field.placeholder}
                options={field.options}
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
                icon={field.icon}
              />
            )}
            {field.type === 'text' && (
              <TextComponent
                name={field.name}
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
      </div>



      <div className="form-line flex mb-4  ">
        {config.slice(2, 4).map((field, index) => (
          <div key={index} className={`form-field ${field.fieldstyle}`}>

            <label className={TextStyle[field.textcss].label}>{field.label}</label>
            {field.type === 'number' && (
              <TextComponent
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
              />
            )}
            {field.type === 'text' && (
              <TextComponent
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
              />
            )}

          </div>
        ))}
      </div>



      <div className='buttons flex  mt-6 ' >
        <button type="button" onClick={highlight} className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-5'>Set default for payroll</button>        
        {/* <Button  Configs={ButtonforDefault} onClick={highlight} /> */}
      </div>
    </div>
  );
};

export default BankDetailFormComponent;