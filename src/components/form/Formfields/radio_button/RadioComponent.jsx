

import React from 'react';

const RadioComponent = ({ label, name, value, checked, onChange, textcss }) => {
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
     />
    </div>
  );
};

export default RadioComponent;
