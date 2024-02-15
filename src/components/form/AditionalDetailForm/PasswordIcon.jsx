
import React from 'react';

const PasswordIcon = ({ label, value, onChange,textcss, placeholder,icon,togglePasswordVisibility,showPassword }) => {

return (
  <div>
    <div className="input-container">
      <label>{label}</label>
      <div className="flex items-center mt-2">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={textcss}
        />
        {icon && <span onClick={togglePasswordVisibility} className="absolute  ml-52">{icon}</span>}
      </div>
    </div>
  </div>
);
};

export default PasswordIcon;


