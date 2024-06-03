import PropTypes from 'prop-types';

const CheckboxComponent = ({ label, checked, onChange, textcss }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={textcss} />
    </div>
  );
};

CheckboxComponent.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  textcss: PropTypes.string,
};

export default CheckboxComponent;
