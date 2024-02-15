import React from 'react';

const CheckboxComponent = ({ label, checked, onChange, textcss }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange}
        className={textcss} />
    </div>
  );
};

export default CheckboxComponent;
