
import React from 'react';

const PhoneComponent = ({ name,label, value, onChange, textcss, placeholder,onBlur }) => {
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
        onBlur={ onBlur ? onBlur : null }
      />
    </div>
  );
};

export default PhoneComponent;

