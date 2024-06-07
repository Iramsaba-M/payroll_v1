
import PropTypes from 'prop-types';

const RadioComponent = ({ label, name, value, checked, onChange, textcss, onBlur }) => {
  return (
    <div>
      <label htmlFor={value}>{label}</label>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={textcss}
        onBlur={onBlur}
      />
    </div>
  );
};
RadioComponent.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  textcss: PropTypes.string,
  onBlur: PropTypes.func,
};

export default RadioComponent;
