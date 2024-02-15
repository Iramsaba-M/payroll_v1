import React from 'react';

const TimeComponent = ({ label, value, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="time" 
        value={value} 
        placeholder={placeholder}
        onChange={onChange} 
        className={textcss}
        />
    </div>
  );
};

export default TimeComponent;
