import FormComponent from './FormComponent';
import PropTypes from 'prop-types';

const Form = ({ configs }) => {

  return (
    <div>
      <h1>Form components</h1>
      <FormComponent config={configs} />
    </div>
  )
}

Form.propTypes = {
  configs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      textcss: PropTypes.string,
      options: PropTypes.array,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};
export default Form;

