
import TextComponent from './TextComponent'
import FileComponent from './FileComponent';
import PropTypes from 'prop-types';
import DocumentStyles from './DocumentStyles';

const CustomComponent = ({ config, value, onCustomChange }) => {

  const handleChange = (e) => {
    const { value } = e.target;
    onCustomChange(value);
  };
  const handleFileChange = (selectedFile) => {
    console.log('Selected file:', selectedFile);
  };

  return (
    <form>
      <div className=' flex-col '>
        <div className="form-line flex mb-4 ">
          {config.map((field, index) => (
            <div key={index}>
              <label className={DocumentStyles[field.textcss].label}>{field.label}</label>
              {field.type === 'text' && (
                <TextComponent
                  name={field.label}
                  placeholder={field.placeholder}
                  value={value || ''}
                  // onChange={(e) => handleChange(field.label, e.target.value)}
                  onChange={(e) => handleChange(e)}
                  textcss={DocumentStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === 'file' && (
                <FileComponent
                  name={field.label}
                  onChange={(file) => handleFileChange(file)}
                  textcss={DocumentStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                  iconPosition={field.iconPosition}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

CustomComponent.propTypes = {
  config: PropTypes.array.isRequired,
  value: PropTypes.string,
  onCustomChange: PropTypes.func.isRequired,
};

export default CustomComponent;
