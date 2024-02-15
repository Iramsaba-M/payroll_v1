
import React from 'react';


const TextComponent = ({name, label, value, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input
      name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
      />
    </div>
  );
};

export default TextComponent;
