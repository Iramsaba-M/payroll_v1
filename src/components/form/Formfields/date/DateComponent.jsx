// // src/components/DateComponent.js
// import React from 'react';

// const DateComponent = ({name, label, value, onChange, textcss, placeholder }) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <input
//         name={name}
//         type="date"
//         value={value}
//         placeholder={placeholder}
//         onChange={onChange}
//         className={textcss}
//       />
//     </div>
//   );
// };

// export default DateComponent;
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateComponent = ({ name, label, selectedDate, onChange, textcss, placeholder, value, icon }) => {

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
        dateFormat="dd/MM/yyyy"  // Expecting the date in the format "dd/MM/yyyy"
        className={textcss}
        showYearDropdown
        showMonthDropdown
      />
    </div>
  );
};

export default DateComponent;
