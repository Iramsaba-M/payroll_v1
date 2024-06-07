// OptionsComponent.jsx
import PropTypes from 'prop-types';

const OptionsComponent = ({ name, label, value, options, onChange, textcss, placeholder, icon, onBlur }) => {
  return (
    <div style={{ position: 'relative' }}>
      {icon && <div className="absolute ml-[30vh] mt-8">{icon}</div>}
      <label>{label} </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={textcss}
        style={{ appearance: 'none', background: 'transparent' }}
        onBlur={onBlur ? onBlur : null}
      >
        {value ? null : (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        <option >{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {value && <p className="text-gray-500 mt-1"></p>}
    </div>
  );
};

OptionsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  textcss: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  onBlur: PropTypes.func,
};

export default OptionsComponent;

