
import PropTypes from 'prop-types';

const NumberComponent = ({ name, label, value, onChange, numberType, numbercss, placeholder, onBlur }) => {
  const inputType = numberType === 'float' ? 'number' : (numberType === 'int' ? 'number' : 'text');

  const inputMode = inputType === 'number' ? 'numeric' : 'none';

  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={numbercss}
        inputMode={inputMode} // Add inputMode attribute
        onBlur={onBlur ? onBlur : null}
      />
    </div>
  );
};

NumberComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  numberType: PropTypes.oneOf(['float', 'int', 'text']).isRequired,
  numbercss: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
};

export default NumberComponent;


