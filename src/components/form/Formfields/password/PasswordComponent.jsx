import PropTypes from 'prop-types';

const PasswordComponent = ({ label, value, onChange, textcss, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="password"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={textcss}
      />
    </div>
  );
};

PasswordComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textcss: PropTypes.string,
  placeholder: PropTypes.string,
};
export default PasswordComponent;
