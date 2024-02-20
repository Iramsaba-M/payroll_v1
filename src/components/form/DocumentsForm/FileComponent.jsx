
// import React, { useState } from 'react';

// const FileComponent = ({ name, onChange, textcss,icon,  placeholder }) => {
//   const [uploadedFile, setUploadedFile] = useState(null);

//   const handleChange = (e) => {
//     setUploadedFile(e.target.files[0]);
//     onChange(e.target.files[0]);
//   };

//   const handleCancelFile = () => {
//     setUploadedFile(null);
//   };

//   return (
//     <div className={textcss}>
//       {uploadedFile ? (
//         <>
//        <div className='mt-4'></div>
//           <span className="mr-2 mb-2">{uploadedFile.name}</span>
//           <button onClick={handleCancelFile}>Cancel</button>
//         </>
//       ) : (
//         <label htmlFor={name} className="cursor-pointer">
//           <div className='flex items-center mt-2 '>
//            <div className='text-gray-400 '>{placeholder}</div> 
//             <span className="ml-[35vh]  ">{icon}</span>
//           </div>
//           <input
//             type="file"
//             name={name}
//             placeholder={placeholder}
//             id={name}
//             onChange={handleChange}
//             style={{ display: 'none' }}
//           />
//         </label>
//       )}
//     </div>
//   );
// };

// export default FileComponent;

/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const FileComponent = ({ name, onChange, textcss,icon,  placeholder }) => {
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
       <div className='mt-8'></div>
          <span className="mr-2 mt-3">{uploadedFile.name}</span>
          <button  className='mt-3 text-blue-700' onClick={handleCancelFile}>Cancel</button>
        </>
      ) : (
        <label htmlFor={name} >
          <div className='flex items-center mt-2 '>
          <div>{placeholder}</div> 
            <span>{icon}</span>
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

