import PropTypes from 'prop-types';

const TextareaComponent = ({ label, value, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
      />
    </div>
  );
};

TextareaComponent.propTypes = {
  label: PropTypes.string, // label should be a string
  value: PropTypes.string, // value should be a string
  onChange: PropTypes.func, // onChange should be a function
  textcss: PropTypes.string, // textcss should be a string
  placeholder: PropTypes.string, // placeholder should be a string
};


export default TextareaComponent;
