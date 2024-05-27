
/* eslint-disable react/prop-types */
// import React, { useState } from 'react';

// const FileComponent = ({ name, onChange, textcss,icon,  placeholder, iconPosition,onBlur }) => {
//   const [uploadedFile, setUploadedFile] = useState(null);

//   const handleChange = (e) => {
//     setUploadedFile(e.target.files[0]);
//     onChange(e.target.files[0]);
//   };

//   const handleCancelFile = () => {
//     setUploadedFile(null);
//     // onChange(name, null);
//   };

//   return (
//     <div className={textcss}>
//       {uploadedFile ? (
//         <>
//              <div className=''></div>
//           <span className="">{uploadedFile.name}</span>
//           <button  className='mt-3 text-blue-700 ml-4' onClick={handleCancelFile}>Cancel</button>
//         </>
//       ) : (
//         <label htmlFor={name} >
//           <div className='flex items-center mt-2 '>
//           {iconPosition === 'start' && <span>{icon}</span>}
//           <div className='text-gray-400'>{placeholder}</div> 
//             {/* <span>{icon}</span> */}
//             {iconPosition === 'end' && <span>{icon}</span>}
//           </div>
//           <input
//             type="file"
//             name={name}
//             placeholder={placeholder}
//             id={name}
//             className={textcss}
//             onChange={handleChange}
//             style={{ display: 'none' }}
//             onBlur={ onBlur ? onBlur : null }
//           />
//         </label>
//       )}
//     </div>
//   );
// };

// export default FileComponent;


/* eslint-disable react/prop-types */



// import React, { useState } from 'react';

// const FileComponent = ({ name, onChange, value, textcss, icon, placeholder, iconPosition, onBlur }) => {
//   const [uploadedFile, setUploadedFile] = useState(null);

//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     console.log('file',file);
//     setUploadedFile(file);
//     onChange(file);
//   };
   
//   const handleCancelFile = (e) => {
//     setUploadedFile(e.targetnull);
//     onChange(e.target.null); // Clear file value when canceled
//   };

//   return (
//     <div className={textcss}>
//       {uploadedFile || value ? (
//         <>
//           <div className=''></div>
//           <span className="">{uploadedFile ? uploadedFile.name : value}</span>
//           <button className='mt-3 text-blue-700 ml-4' onClick={handleCancelFile}>Cancel</button>
//         </>
//       ) : (
//         <label htmlFor={name} >
//           <div className='flex items-center mt-2 '>
//             {iconPosition === 'start' && <span>{icon}</span>}
//             <div className='text-gray-400'>{placeholder}</div>
//             {iconPosition === 'end' && <span>{icon}</span>}
//           </div>
//           <input
//             type="file"
//             name={name}
//             placeholder={placeholder}
//             id={name}
//             className="hidden"
//             onChange={handleChange}
//             onBlur={onBlur ? onBlur : null}
//           />
//         </label>
//       )}
//     </div>
//   );
// };

// export default FileComponent;




// import React, { useState } from 'react';

// const FileComponent = ({ name, onChange, value, textcss, icon, placeholder, iconPosition, onBlur }) => {
//   const [uploadedFile, setUploadedFile] = useState(null);

//   const handleChange = (e) => {
//         setUploadedFile(e.target.files[0]);
//         onChange(e.target.files[0]);
//       };
    

//   const handleCancelFile = () => {
//     setUploadedFile(null);
//     onChange(null); // Clear file value when canceled
//   };

//   return (
//     <div className={textcss}>
//       {uploadedFile || value ? (
//         <>
//           <div className=''></div>
//           <span className="">{uploadedFile ? uploadedFile.name : value}</span>
//           <button className='mt-3 text-blue-700 ml-4' onClick={handleCancelFile}>Cancel</button>
//         </>
//       ) : (
//         <label htmlFor={name} >
//           <div className='flex items-center mt-2 '>
//             {iconPosition === 'start' && <span>{icon}</span>}
//             <div className='text-gray-400'>{placeholder}</div>
//             {iconPosition === 'end' && <span>{icon}</span>}
//           </div>
//           <input
//             type="file"
//             name={name}
//             placeholder={placeholder}
//             id={name}
//             className="hidden"
//             onChange={handleChange}
//             onBlur={onBlur ? onBlur : null}
//           />
//         </label>
//       )}
//     </div>
//   );
// };

// export default FileComponent;
import React, { useState } from 'react';

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
            fileName={file_name}
          />
        </label>
      )}
    </div>
  );
};

export default FileComponent;


