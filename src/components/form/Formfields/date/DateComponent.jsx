
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

const DateComponent = ({ name, label, selectedDate, onChange, textcss, placeholder, value, icon, onBlur }) => {

  const handleDateChange = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      // Format the date to "dd/mm/yyyy"
      const formattedDate = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;

      // Call the onChange function to update the parent component's state
      onChange({
        target: {
          name: name,
          value: formattedDate
        }
      });
    }
  };

  return (
    <div>

      <label>{label}</label>
      {icon}
      <DatePicker
        name={name}
        value={value}
        selected={selectedDate}
        placeholderText={placeholder}
        onChange={handleDateChange}
        dateFormat="dd/mm/yyyy"
        className={textcss}
        showYearDropdown
        showMonthDropdown
        onBlur={onBlur ? onBlur : null}
      />
    </div>
  );
};

DateComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
  textcss: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.node,
  onBlur: PropTypes.func
};

export default DateComponent;