import PropTypes from 'prop-types';

const PhoneComponent = ({ name, label, value, onChange, textcss, placeholder, onBlur }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type="tel"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
        onBlur={onBlur ? onBlur : null}
      />
    </div>
  );
};

PhoneComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textcss: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
};

export default PhoneComponent;

