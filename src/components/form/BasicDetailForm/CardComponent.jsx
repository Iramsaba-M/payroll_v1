
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CardStyles from './CardStyles';
import PropTypes from 'prop-types';

const CardComponent = ({ CardConfig = [], handleChange, photoContent, onBlur }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file.type.startsWith('image/')) {
      setUploadedImage(URL.createObjectURL(file));
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
    handleChange('photo_content', null); // Clear photoContent if uploaded image is removed
  };

  const removeFile = (index) => {
    setUploadedFiles((oldFiles) => oldFiles.filter((file, i) => i !== index));
  };

  const handleImageClick = () => {
    console.log('Image clicked!');
  };

  const handleClick = () => {
    console.log('Card clicked!');
  };

  return (
    <div className='drop-shadow- w-36 h-6' onClick={handleClick}>
      <div>
        <div className='h-10 mb-32 text-left text-lg font-semibold  text-ellipsis'></div>
      </div>
      <div></div>
      <div className={CardStyles.displayImage} onBlur={onBlur ? onBlur : null}>
        {(uploadedImage || photoContent) && (
          <>
            <img
              src={uploadedImage || `data:image/png;base64,${photoContent}`}
              alt='Uploaded'
              className={' h-28 w-32  justify-center items-center'}
              onClick={handleImageClick}
            />
            <button className={CardStyles.removestyle} onClick={removeImage}>Remove</button>
          </>
        )}
        {!uploadedImage && !photoContent && (
          <div {...getRootProps()} className=' h-28'>
            <input {...getInputProps()} className='bg-red-500' />
            {uploadedFiles.map((file, index) => (
              <div key={index}>
                {file.name}{' '}
                <button className={CardStyles.removestyle2} onClick={() => removeFile(index)}>Remove</button>
              </div>
            ))}
            {CardConfig.map((element, index) => (
              <div key={index} className={CardStyles[element.css]} >
                {(
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

CardComponent.propTypes = {
  CardConfig: PropTypes.array,
  handleChange: PropTypes.func,
  photoContent: PropTypes.string,
  onBlur: PropTypes.func,
};

export default CardComponent;
