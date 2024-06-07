
import PropTypes from 'prop-types';

const TripleInputComponent = ({ name, label, values, onChange, textcss, placeholders, keys }) => {
  return (
    <div>
      <label>{label}</label>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <input
            name={keys ? keys[index] : name}
            key={index}
            type="text"
            value={values[index] || ""}
            placeholder={placeholders[index] || ""}
            onChange={(e) => onChange(index, e.target.value)}
            className={textcss}
          />
        ))}
      </div>
    </div>
  );
};

TripleInputComponent.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  textcss: PropTypes.string,
  placeholders: PropTypes.arrayOf(PropTypes.string),
  keys: PropTypes.arrayOf(PropTypes.string),
};

export default TripleInputComponent;


