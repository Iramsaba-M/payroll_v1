
import React from 'react';

const NumberComponent = ({ name, label, value, onChange, numberType, numbercss, placeholder }) => {
  const inputType = numberType === 'float' ? 'number' : (numberType === 'int' ? 'number' : 'text');
  // Using 'number' type for both float and int because it allows for numeric input and handles validation

  const inputMode = inputType === 'number' ? 'numeric' : 'none';

  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={numbercss}
        inputMode={inputMode} // Add inputMode attribute
      />
    </div>
  );
};

export default NumberComponent;


