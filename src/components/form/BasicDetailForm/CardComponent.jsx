import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import myImage from '../../images/video.PNG';
import CardStyles from './CardStyles';
// import { FaCoffee } from 'react-icons/fa';
const CardComponent = ({ CardConfig = [], handleChange }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file.type.startsWith('image/')) {
      setUploadedImage(URL.createObjectURL(file));
      // Assuming 'imageFile' is the field name for the image in your form data
      handleChange('photo_content', file);
    } else {
      setUploadedFiles((oldFiles) => [...oldFiles, file]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const removeImage = () => {
    setUploadedImage(null);
  };

  const removeFile = (index) => {
    setUploadedFiles((oldFiles) => oldFiles.filter((file, i) => i !== index));
  };

  const handleImageClick = () => {
    // Add your logic here for when the image is clicked
    console.log('Image clicked!');
  };

  const handleClick = () => {
    // Add your logic here for when the entire card is clicked
    console.log('Card clicked!');
  };

  return (
    <div className='drop-shadow- w-36 h-6' onClick={handleClick}>
      <div>
        <div className='h-10 mb-32 text-left text-lg font-semibold  text-ellipsis'></div>
      </div>
      <div>
        
      </div>
      <div className={CardStyles.displayImage}>
        {uploadedImage ? (
          <>
            <img
              src={uploadedImage}
              alt='Uploaded'
              className={' h-28 w-32  justify-center items-center'}
              onClick={handleImageClick}
            />
            <button className={CardStyles.removestyle} onClick={removeImage}>Remove</button>
          </>
        ) : (
          <div {...getRootProps()} className=' h-28'>
            <input {...getInputProps()} className='bg-red-500'/>
            {uploadedFiles.map((file, index) => (
          <div key={index}>
            {file.name}{' '}
            <button className={CardStyles.removestyle2} onClick={() => removeFile(index)}>Remove</button>
          </div>
        ))}
       
      {CardConfig.map((element, index) => (
          <div key={index} className={CardStyles[element.css]}>
            { (
              <>
                {element.label}
              </>
            )}
          </div>
        ))}
          </div>
        )}

        
      </div>
    </div>
  );
};

export default CardComponent;