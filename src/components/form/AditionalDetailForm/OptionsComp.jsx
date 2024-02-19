// import React from 'react';

// const OptionsComp = ({ name, label, value, options, onChange, textcss, placeholder }) => {
//   const getNestedOptions = (nestedOptions) => {
//     return nestedOptions.map((nestedOption, index) => (
//       <option key={index} value={nestedOption.value}>
//         {nestedOption.name}
//       </option>
//     ));
//   };

//   return (
//     <div>
//       <label>{label}</label>
//       <select name={name} value={value} onChange={onChange} className={textcss}>
//         {value ? null : (
//           <option value="" disabled hidden>
//             {placeholder}
//           </option>
//         )}
//         {options.map((option, index) => (
//           <option key={index} value={option.value}>
//             {option.name}
//           </option>
//         ))}
//       </select>
//       {value && (
//         <select name={`nested_${name}`} value="" onChange={(e) => {}} className={textcss}>
//           {getNestedOptions(options.find((opt) => opt.value === value)?.next || [])}
//         </select>
//       )}
//     </div>
//   );
// };

// export default OptionsComp;












// import React from 'react';

// const OptionsComp = ({ name, label, value, options, onChange, textcss, placeholder }) => {
//   const getNestedOptions = (nestedOptions) => {
//     return nestedOptions.map((nestedOption, index) => (
//       <option key={index} value={nestedOption.value}>
//         {nestedOption.name}
//       </option>
//     ));
//   };

//   const renderOptions = (options) => {
//     return (
//       <select name={name} value={value} onChange={onChange} className={textcss}>
//         {value ? null : (
//           <option value="" disabled hidden>
//             {placeholder}
//           </option>
//         )}
//         {options.map((option, index) => (
//           <option key={index} value={option.value}>
//             {option.name}
//           </option>
//         ))}
//       </select>
//     );
//   };

//   const renderNestedOptions = (nestedOptions) => {
//     const selectedOption = options.find((opt) => opt.value === value);

//     return (
//       <select
//         name={`nested_${name}`}
//         value=""
//         onChange={(e) => onChange(name, e.target.value)}
//         className={textcss}
//       >
//         {getNestedOptions(selectedOption?.next || [])}
//       </select>
//     );
//   };

//   return (
//     <div>
//       <label>{label}</label>
//       {renderOptions(options)}
//       {value && (
//         <div>
//           {options.find((opt) => opt.value === value)?.next &&
//             renderNestedOptions(options.find((opt) => opt.value === value)?.next || [])}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OptionsComp;



// EmployeeStatusDropdowns.jsx

import React, { useState } from 'react';
import OptionData from './OptionData';

const OptionsComp = ({ onChange }) => {
 

  const [employee_status, setEmployeeStatus] = useState('');
  const [type, settype] = useState('');
  const [selectedLeaveOption, setSelectedLeaveOption] = useState('');

  const handleEmployeeStatusChange = (value) => {
    setEmployeeStatus(value);
    settype('');
    setSelectedLeaveOption('');
    onChange({ employee_status: value });
  };

  const handletypeChange = (value) => {
    settype(value);
    setSelectedLeaveOption('');
    onChange({ employee_status, type: value });
  };

  const handleLeaveOptionChange = (value) => {
    setSelectedLeaveOption(value);
    onChange({ employee_status, type, reason: value });
  };

  return (
    <div >
      <h1 className=' text-gray-800 font-semibold mb-2'>Employee Status</h1>
      <div className='flex   mb-4 '>
        <div className='form-line flex  mb-4'>
          <label className='block text-gray-600 text-xs font-bold my-1'></label>
          <select
            className="border-b-2 hover:border-blue-500 border-gray-100 bg text-gray text-xs my-2 mr-14 mb-2 px-2 py-1 w-60  "
            value={employee_status}
            onChange={(e) => handleEmployeeStatusChange(e.target.value)}
          >
            <option value="" disabled>Select Employee Status</option>
            {OptionData.employeeStatusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className='flex justify-col mb-4'>
          {employee_status === 'Inactive' && (
            <div className='flex justify-evenly'>
              <label className='block text-gray-600 text-xs font-bold my-1'></label>
              <select
                className="border-b-0 hover:border-blue-500 border-gray-100 bg text-gray text-xs my-2 mr-14 mb-2 px-2 py-1 w-60 leading-tight focus:outline-none"
                value={type}
                onChange={(e) => handletypeChange(e.target.value)}
              >
                <option value="" disabled>Select Additional Status</option>
                {OptionData.typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>

              {type === 'Leave' && (
                <div>
                  <label className='block text-gray-600 text-xs font-bold my-1'></label>
                  <select
                    className="border-b-2 hover:border-blue-500 border-gray-100 bg-transparent text-gray text-xs my-2 mr-14 mb-2 px-2 py-1 w-60 leading-tight focus:outline-none"
                    value={selectedLeaveOption}
                    onChange={(e) => handleLeaveOptionChange(e.target.value)}
                  >
                    <option value="" disabled>Select Leave Option</option>
                    {OptionData.leaveOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {type === 'Suspended' && (
                <div>
                  <label className='block text-gray-600 text-xs font-bold my-1'></label>
                  <select
                    className="border-b-2 hover:border-blue-500 border-gray-100 bg-transparent text-gray text-xs my-2 mr-14 mb-2 px-2 py-1 w-60 leading-tight focus:outline-none"
                    value={selectedLeaveOption}
                    onChange={(e) => handleLeaveOptionChange(e.target.value)}>
                    <option value="" disabled>Select Suspended Option</option>
                    {OptionData.suspendedOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default OptionsComp;

