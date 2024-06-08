
import PropTypes from 'prop-types';

const TextComponent = ({ name, label, value, onChange, textcss, placeholder, icon, onBlur, readonly }) => {
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
        readOnly={readonly?true:false}
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
  readonly:PropTypes.bool,
};

export default TextComponent;
