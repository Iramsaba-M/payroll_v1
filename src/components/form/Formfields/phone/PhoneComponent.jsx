
import React from 'react';

const PhoneComponent = ({ name,label, value, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
      name={name}
        type="tel"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
      />
    </div>
  );
};

export default PhoneComponent;

