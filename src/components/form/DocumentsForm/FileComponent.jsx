
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const FileComponent = ({ name, onChange, textcss,icon,  placeholder, iconPosition }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleChange = (e) => {
    setUploadedFile(e.target.files[0]);
    onChange(e.target.files[0]);
  };

  const handleCancelFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className={textcss}>
      {uploadedFile ? (
        <>
             <div className=''></div>
          <span className="">{uploadedFile.name}</span>
          <button  className='mt-3 text-blue-700 ml-4' onClick={handleCancelFile}>Cancel</button>
        </>
      ) : (
        <label htmlFor={name} >
          <div className='flex items-center mt-2 '>
          {iconPosition === 'start' && <span>{icon}</span>}
          <div className=''>{placeholder}</div> 
            {/* <span>{icon}</span> */}
            {iconPosition === 'end' && <span>{icon}</span>}
          </div>
          <input
            type="file"
            name={name}
            placeholder={placeholder}
            id={name}
            className={textcss}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
        </label>
      )}
    </div>
  );
};

export default FileComponent;

