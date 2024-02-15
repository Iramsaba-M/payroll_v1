
import React from 'react';

const TextComponent = ({ label, value, onChange, textcss, placeholder, icon }) => {
  return (
    <div>
      <div className="input-container">
        <label>{label}</label>
        <div className="flex items-center mt-4">
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={textcss}
          />
          {icon && <span className="absolute ml-[40vh] mb-2">{icon}</span>}
        </div>
      </div>
    </div>
  );
};

export default TextComponent;
