import React from 'react';

const PasswordComponent = ({ label, value, onChange,textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="password" 
        value={value} 
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
     />
    </div>
  );
};

export default PasswordComponent;
