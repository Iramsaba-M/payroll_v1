

import React from 'react';


const TextComponent = ({name, label, value, onChange, textcss, placeholder,icon }) => {
  return (
    <div>
      <label>{label}</label>
      {icon && <span>{icon}</span>}
      
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
