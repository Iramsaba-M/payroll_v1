// import React from 'react';

// const NumberComponent = ({ name, label, value, onChange, numberType, numbercss, placeholder }) => {
//   const inputType = numberType === 'float' ? 'float' : (numberType === 'int' ? 'int' : 'text');

//   return (
//     <div>
//       <label>{label}</label>
//       <input
//         name={name}
//         type={inputType}
//         value={value}
//         placeholder={placeholder}
//         onChange={onChange}
//         className={numbercss}
//       />
//     </div>
//   );
// };

// export default NumberComponent;

import React from 'react';

const NumberComponent = ({ name, label, value, onChange, numberType, numbercss, placeholder }) => {
  const inputType = numberType === 'float' ? 'number' : (numberType === 'int' ? 'number' : 'text');
  // Using 'number' type for both float and int because it allows for numeric input and handles validation

  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={numbercss} 
      />
    </div>
  );
};

export default NumberComponent;


