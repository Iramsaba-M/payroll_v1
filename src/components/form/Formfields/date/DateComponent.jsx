// src/components/DateComponent.js
import React from 'react';

const DateComponent = ({name, label, value, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type="date"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
      />
    </div>
  );
};

export default DateComponent;
