
import PropTypes from 'prop-types';


const PasswordIcon = ({ label, value, onChange, textcss, placeholder, icon, togglePasswordVisibility, showPassword }) => {

  return (
    <div>
      <div className="input-container">
        <label>{label}</label>
        <div className="flex items-center mt-2">
          <input
            type={showPassword ? 'text' : 'password'}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={textcss}
          />
          {icon && <span onClick={togglePasswordVisibility} className="absolute  ml-52">{icon}</span>}
        </div>
      </div>
    </div>
  );
};

PasswordIcon.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textcss: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired
};

export default PasswordIcon;

