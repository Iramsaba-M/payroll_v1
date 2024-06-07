
import PropTypes from 'prop-types';

const TextComponent = ({ name, label, value, onChange, textcss, placeholder, icon, onBlur }) => {
  return (
    <div>
      <label>{label}</label>
      {icon && <span>{icon}</span>}

      <input
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
        onBlur={onBlur ? onBlur : null}
      />
    </div>
  );
};

TextComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textcss: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  onBlur: PropTypes.func,
};

export default TextComponent;
