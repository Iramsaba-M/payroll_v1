import PropTypes from 'prop-types';

const DoubleInputComponent = ({ name, label, values, onChange, textcss, placeholders, keys }) => {
  return (
    <div>
      <label>{label}</label>
      <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
        {Array.from({ length: 2 }).map((_, index) => (
          <input
            name={keys ? keys[index] : name}
            key={index}
            type="text"
            value={values[index] || ""}
            placeholder={placeholders[index] || ""}
            onChange={(e) => onChange(index, e.target.value)}
            className={textcss}
            style={{ marginBottom: '10px' }} // Adjust margin as needed
          />
        ))}
      </div>
    </div>
  );
};

DoubleInputComponent.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  textcss: PropTypes.string,
  placeholders: PropTypes.arrayOf(PropTypes.string),
  keys: PropTypes.arrayOf(PropTypes.string)
};


export default DoubleInputComponent;
