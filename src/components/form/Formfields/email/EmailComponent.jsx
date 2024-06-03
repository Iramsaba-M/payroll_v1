import PropTypes from 'prop-types';

const EmailComponent = ({ name, label, value, onChange, textcss, placeholder, onBlur }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type="email"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
        onBlur={onBlur ? onBlur : null}
      />
    </div>
  );
};

EmailComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textcss: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func
};

export default EmailComponent;
