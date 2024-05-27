

import React from 'react';

const RadioComponent = ({ label, name, value, checked, onChange, textcss ,onBlur}) => {
  return (
    <div>
      <label htmlFor={value}>{label}</label>
      <input 
        type="radio" 
        id={value}
        name={name}
        value={value} 
        checked={checked} 
        onChange={onChange}
        className={textcss}
        onBlur={onBlur}
     />
    </div>
  );
};

export default RadioComponent;
