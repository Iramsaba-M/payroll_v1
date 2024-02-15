import React from 'react';

const FileComponent = ({ label, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="file" 
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
     />
    </div>
  );
};

export default FileComponent;
