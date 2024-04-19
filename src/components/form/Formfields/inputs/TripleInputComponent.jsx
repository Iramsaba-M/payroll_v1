import React from 'react';

const TripleInputComponent = ({ name, label, values, onChange, textcss, placeholders, keys }) => {
  return (
    <div>
      <label>{label}</label>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <input
            name={keys ? keys[index] : name} 
            key={index}
            type="text"
            value={values[index] || ""}
            placeholder={placeholders[index] || ""}
            onChange={(e) => onChange(index, e.target.value)}
            className={textcss}
          />
        ))}
      </div>
    </div>
  );
};


export default TripleInputComponent;


