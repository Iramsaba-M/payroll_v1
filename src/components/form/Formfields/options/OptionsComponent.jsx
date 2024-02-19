// OptionsComponent.jsx

import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
const OptionsComponent = ({name, label, value, options, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label} </label>
      
      <select
      name={name}
        value={value}
        onChange={onChange}
        className={textcss}
        
      >
        {value ? null : (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {/* <IoMdArrowDropdown className='-translate-y-[4vh] translate-x-[30.7vh] text-gray-200'/> */}
      {value && (
        <p className="text-gray-500 mt-1"></p>
      )}
    </div>
  );
};

export default OptionsComponent;
