import React from 'react';

const EmailComponent = ({ name,label, value, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
      name={name}
        type="email"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
        />
    </div>
  );
};

export default EmailComponent;
