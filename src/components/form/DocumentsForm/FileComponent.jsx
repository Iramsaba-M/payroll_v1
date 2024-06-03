
import { useState } from 'react';
import PropTypes from 'prop-types';

const FileComponent = ({ name, onChange, value, textcss, icon, placeholder, iconPosition, onBlur, file_name }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleChange = (e) => {
    setUploadedFile(e.target.files[0]);
    onChange(e.target.files[0]);
  };

  const handleCancelFile = () => {
    setUploadedFile(null);
    onChange(null); // Clear file value when canceled
  };

  return (
    <div className={textcss}>
      {uploadedFile || value ? (
        <>
          <div className=''></div>
          <span className="">{uploadedFile ? uploadedFile.name : value}</span>
          {file_name && <span className=""> - {file_name}</span>}
          <button className='mt-3 text-blue-700 ml-4' onClick={handleCancelFile}>Cancel</button>
        </>
      ) : (
        <label htmlFor={name} >
          <div className='flex items-center mt-2 '>
            {iconPosition === 'start' && <span>{icon}</span>}
            <div className='text-gray-400'>{placeholder}</div>
            {iconPosition === 'end' && <span>{icon}</span>}
          </div>
          <input
            type="file"
            name={name}
            placeholder={placeholder}
            id={name}
            className="hidden"
            onChange={handleChange}
            onBlur={onBlur ? onBlur : null}
          // file_name={file_name}
          />
        </label>
      )}
    </div>
  );
};

FileComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  textcss: PropTypes.string,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  iconPosition: PropTypes.oneOf(['start', 'end']),
  onBlur: PropTypes.func,
  file_name: PropTypes.string,
};

export default FileComponent;


