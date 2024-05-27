// import React, { useState, useEffect } from 'react';
// import TextComponent from '../Formfields/text/TextComponent';
// import TextStyle from '../Formfields/text/TextStyle';
// import OptionsComponent from '../Formfields/options/OptionsComponent';
// import { useButtonState } from '../../../context/ButtonStateContext';
// import { BANK_DETAILS_API } from '../../../api/EndPoints';
// import { getApiUrl } from '../../../api/GetAPI';
// import Button from '../../../configurations/Button/Button';
// import { ButtonforDefault } from '../../../pages/Admin pages/Employee/BankDetail/BankDetailsContent';

// const BankDetailFormComponent = ({ id, config, onChange, editEmployees }) => {
//   const [values, setValues] = useState({ default_for_payroll: false, bank_name: '', ifsc_code: '', account_number: '' });
//   const [isButtonClicked, setIsButtonClicked] = useState(false);
//   const { AddMode, editMode } = useButtonState();

//   const handleChange = (name, value) => {
//     setValues(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//     onChange(id, { ...values, [name]: value });


//   };
//   useEffect(() => {
//     if (editEmployees && editEmployees.Bank) {
//       setValues(editEmployees.Bank);
//     }
// }, [editEmployees]);
  

//   const highlight = () => {
//     setIsButtonClicked(prevState => !prevState);
//     const setDefaultPayroll = !values["default_for_payroll"];
//     setValues(prevState => ({
//       ...prevState,
//       default_for_payroll: setDefaultPayroll
//     }));
//     onChange(id, { ...values, default_for_payroll: setDefaultPayroll });
//   };

//   useEffect(() => {
//     if (editEmployees && editEmployees.bank) {
//       setValues(prevState => ({
//         ...prevState,
//         ...editEmployees.bank
//       }));
//     }
//   }, [editEmployees]);
//   console.log(editEmployees)

//   return (
//     <div style={{ boxShadow: isButtonClicked ? '0 0 2px rgba(0, 0, 0, 0.5)' : 'none' }}>
//       <div className="form-line flex mb-4 ml-1 ">
//         {config.slice(0, 2).map((field, index) => (
//           <div key={index} className={`form-field ${field.fieldstyle}`}>
//             <label className={TextStyle[field.textcss].label}>{field.label}</label>
//             {field.type === 'options' && (
//               <OptionsComponent
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 options={field.options}
//                 value={values[field.name] || ''}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//                 icon={field.icon}
//               />
//             )}
//             {field.type === 'text' && (
//               <TextComponent
//                 name={field.name}
//                 value={values[field.name] || ''}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//                 placeholder={field.placeholder}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="form-line flex mb-4 ml-1 ">
//         {config.slice(2, 4).map((field, index) => (
//           <div key={index} className={`form-field ${field.fieldstyle}`}>
//             <label className={TextStyle[field.textcss].label}>{field.label}</label>
//             {field.type === 'number' && (
//               <TextComponent
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 value={values[field.name] || ''}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//               />
//             )}
//             {field.type === 'text' && (
//               <TextComponent
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 value={values[field.name] || ''}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className='buttons flex  mt-6 ml-1'>
//         <button type="button" onClick={highlight} className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-5'>Set default for payroll</button>
//         {/* <Button  Configs={ButtonforDefault} onClick={highlight} /> */}
//       </div>
//     </div>
//   );
// };

// export default BankDetailFormComponent;

// import React, { useState, useEffect } from 'react';
// import TextComponent from '../Formfields/text/TextComponent';
// import TextStyle from '../Formfields/text/TextStyle';
// import OptionsComponent from '../Formfields/options/OptionsComponent';
// import { useButtonState } from '../../../context/ButtonStateContext';
// import { BANK_DETAILS_API } from '../../../api/EndPoints';
// import { getApiUrl } from '../../../api/GetAPI';
// import Button from '../../../configurations/Button/Button';
// import { ButtonforDefault } from '../../../pages/Admin pages/Employee/BankDetail/BankDetailsContent';

// const BankDetailFormComponent = ({ id, config, onChange, values: propValues, editEmployees }) => {
//   const [isButtonClicked, setIsButtonClicked] = useState(false);
//   const [values, setValues] = useState(propValues || {}); // Initialize values state with propValues or empty object

//   // Function to handle changes in input fields
//   const handleChange = (name, value) => {
//     setValues(prevValues => ({
//       ...prevValues,
//       [name]: value
//     }));
//     onChange(id, { ...values, [name]: value });
//   };

//   // Function to highlight the button and toggle default_for_payroll value
//   const highlight = () => {
//     setIsButtonClicked(prevState => !prevState);
//     const setDefaultPayroll = !values["default_for_payroll"];
//     handleChange("default_for_payroll", setDefaultPayroll);
//   };

// useEffect(() => {
//   // Check if editEmployees exists and it has bank_details array
//   if (editEmployees && editEmployees.bank_details && editEmployees.bank_details.length > 0) {
//     // Find the bank detail object based on the condition (employee_id and default_for_payroll)
//     const bankDetail = editEmployees.bank_details.find(detail => detail.employee_id === id && detail.default_for_payroll === false);
    
//     // If a matching bank detail is found, set it as form values
//     if (bankDetail) {
//       setValues({ ...bankDetail });
//     } else {
//       // If no matching bank detail is found, set the first bank detail as form values
//       setValues({ ...editEmployees.bank_details[0] });
//     }
//   }
// }, [editEmployees, id]);


//   return (
//     <div style={{ boxShadow: isButtonClicked ? '0 0 2px rgba(0, 0, 0, 0.5)' : 'none' }}>
//       <div className="form-line flex mb-4 ml-1">
//         {config.slice(0, 2).map((field, index) => (
//           <div key={index} className={`form-field ${field.fieldstyle}`}>
//             <label className={TextStyle[field.textcss].label}>{field.label}</label>
//             {field.type === 'options' && (
//               <OptionsComponent
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 options={field.options}
//                 value={values[field.name] || ''}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//                 icon={field.icon}
//               />
//             )}
//             {field.type === 'text' && (
//               <TextComponent
//                 name={field.name}
//                 value={values[field.name] || ''}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//                 placeholder={field.placeholder}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="form-line flex mb-4 ml-1 ">
//         {config.slice(2, 4).map((field, index) => (
//           <div key={index} className={`form-field ${field.fieldstyle}`}>
//             <label className={TextStyle[field.textcss].label}>{field.label}</label>
//             {(field.type === 'number' || field.type === 'text') && (
//               <TextComponent
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 value={values[field.name] || ''}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className='buttons flex  mt-6 ml-1'>
//         <button type="button" onClick={highlight} className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-5'>Set default for payroll</button>
//       </div>
//     </div>
//   );
// };

// export default BankDetailFormComponent;
import React, { useState, useEffect } from 'react';
import TextComponent from '../Formfields/text/TextComponent';
import TextStyle from '../Formfields/text/TextStyle';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import { useButtonState } from '../../../context/ButtonStateContext';
import { BANK_DETAILS_API } from '../../../api/EndPoints';
import { getApiUrl } from '../../../api/GetAPI';
import Button from '../../../configurations/Button/Button';
import { ButtonforDefault } from '../../../pages/Admin pages/Employee/BankDetail/BankDetailsContent';
import { useFormik } from 'formik';
import { createInitialValues, formSchema, simplifiedData } from '../../../configurations/ValidationSchema/ValidationSchema';

const BankDetailFormComponent = ({ id, config, onChange, values: propValues, editEmployees, employeeId,formik }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [values, setValues] = useState({
    default_for_payroll: false, // Initialize default_for_payroll as false by default
    ...propValues
  });

  console.log('er', formik.values, formik.errors, values);

  const handleChange = (name, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
    formik.setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));

    onChange(id, { ...values, [name]: value });
  };

  const highlight = () => {
    setIsButtonClicked(prevState => !prevState);
    const setDefaultPayroll = !values["default_for_payroll"];
    handleChange("default_for_payroll", setDefaultPayroll);
  };

  useEffect(() => {
    if (editEmployees && editEmployees.bank_details && editEmployees.bank_details.length > 0) {
      const bankDetail = editEmployees.bank_details.find(detail => detail.employee_id === employeeId && detail.default_for_payroll === false);
      if (bankDetail) {
        setValues({ ...bankDetail });
        formik.setValues({ ...bankDetail })
      } else {
        setValues({ ...editEmployees.bank_details[0] });
        formik.setValues({ ...editEmployees.bank_details[0] });
      }
    }
  }, [editEmployees, employeeId]);


  return (
    <div style={{ boxShadow: isButtonClicked ? '0 0 2px rgba(0, 0, 0, 0.5)' : 'none' }}>
      <div className="form-line flex mb-4 ml-1">
        {config.slice(0, 2).map((field, index) => (
          <div key={index} className={`form-field ${field.fieldstyle}`}>
            <label className={TextStyle[field.textcss].label}>{field.label}</label>
            {field.type === 'options' && (
              <OptionsComponent
                name={field.name}
                placeholder={field.placeholder}
                options={field.options}
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
                icon={field.icon}

                onBlur={formik.handleBlur}
              />

              // <OptionsComponent
              //   name={field.name}
              //   placeholder={field.placeholder}
              //   options={field.options}
              //   value={formik.values[field.name] || ''}
              //   onChange={formik.handleChange}
              //   textcss={TextStyle[field.textcss].input}
              //   icon={field.icon}
              //   onBlur={formik.handleBlur}
              // />

            )}
            {field.type === 'text' && (
              <TextComponent
                name={field.name}
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
                placeholder={field.placeholder}

                // value={values[field.name] && (formik && formik.values[field.name]) ||
                //   // (formData && formData[item.name]) ||
                //   ""}
                // onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            )}
            {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
          </div>
        ))}
      </div>

      <div className="form-line flex mb-4 ml-1 ">
        {config.slice(2, 4).map((field, index) => (
          <div key={index} className={`form-field ${field.fieldstyle}`}>
            <label className={TextStyle[field.textcss].label}>{field.label}</label>
            {(field.type === 'number' || field.type === 'text') && (
              <TextComponent
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}

                // value={(formik && formik.values[field.name]) ||
                //   // (formData && formData[item.name]) ||
                //   ""}
                // onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            )}
            {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
          </div>
        ))}
      </div>

      <div className='buttons flex  mt-6 ml-1'>
        <button type="button" onClick={highlight} className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-5'>Set default for payroll</button>
      </div>
    </div>
  );
};

export default BankDetailFormComponent;
