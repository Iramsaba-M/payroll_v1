import React from 'react';

const RadioComponent = ({ label, value, checked, onChange,textcss }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="radio" 
        value={value} 
        checked={checked} 
        onChange={onChange}
        className={textcss}
     />
    </div>
  );
};

export default RadioComponent;
