import React, { useState } from 'react';
import axios from 'axios';
import DateComponent from '../Formfields/date/DateComponent';
import TextComponent from '../Formfields/text/TextComponent';
import TextStyle from '../Formfields/text/TextComponent';
import CheckboxComponent from '../Formfields/checkbox/CheckboxComponent';
import EmailComponent from '../Formfields/email/EmailComponent';
import FileComponent from '../Formfields/file/FileComponent';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import PasswordComponent from '../Formfields/password/PasswordComponent';
import RadioComponent from '../Formfields/radio_button/RadioComponent';
import TextareaComponent from '../Formfields/textarea/TextareaComponent';
import TimeComponent from '../Formfields/time/TimeComponent';

const FormComponent = ({ config, handleSubmit }) => {
  const [values, setValues] = useState({});

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make your axios call here
      const response = await axios.post('http://localhost:3001/roles', values);
      console.log('Data sent:', response.data);
      
      // If the above API call is successful, trigger the handleSubmit function from props
      handleSubmit(values);
    } catch (error) {
      console.error('Error:', error);
    }
  };

    return (
      <form onSubmit={onSubmit}>
        {config.map((field, index) => (
          <div key={index}>
            {field.type === "text" && (
              <TextComponent
                label={field.label}
                name={field.label}
                placeholder={field.placeholder}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]} // Access textStyle.textcss
              />
            )}
            {field.type === "date" && (
              <DateComponent
                label={field.label}
                name={field.label}
                placeholder={field.placeholder}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "email" && (
              <EmailComponent
                label={field.label}
                name={field.label}
                placeholder={field.placeholder}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "password" && (
              <PasswordComponent
                label={field.label}
                name={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === "tel" && (
              <TextComponent
                label={field.label}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === 'checkbox' && (
              <CheckboxComponent
                label={field.label}
                checked={config[field.label] || false}
                onChange={(e) => handleChange(field.label, e.target.checked)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === 'radio' && (
              <RadioComponent
                label={field.label}
                value={field.value}  // Replace 'value' with the correct property name from your config
                checked={config[field.label] === field.value}
                onChange={() => handleChange(field.label, field.value)}
                textcss={TextStyle[field.textcss]}
               />
            )}

            {field.type === 'options' && (
              <OptionsComponent
                label={field.label}
                value={config[field.label] || ''}
                options={field.options}  // Replace 'options' with the correct property name from your config
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}

            {field.type === 'time' && (
              <TimeComponent
                label={field.label}
                placeholder={field.placeholder}
                value={config[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}
              />
            )}
            {field.type === 'file' && (
              <FileComponent
                label={field.label}
                onChange={(e) => handleChange(field.label, e.target.files[0])}
                textcss={TextStyle[field.textcss]}

              />
            )}
            {field.type === 'textarea' && (
              <TextareaComponent
                label={field.label}
                name={field.label}
                placeholder={field.placeholder}
                value={values[field.label] || ''}
                onChange={(e) => handleChange(field.label, e.target.value)}
                textcss={TextStyle[field.textcss]}

              />
            )}
          </div>
        ))}
          <button type="submit">Submit</button>
    </form>
    );
  };
  
  export default FormComponent;
  
  