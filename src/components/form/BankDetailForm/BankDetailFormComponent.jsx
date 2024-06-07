
import { useState, useEffect } from 'react';
import TextComponent from '../Formfields/text/TextComponent';
import TextStyle from '../Formfields/text/TextStyle';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import PropTypes from 'prop-types';

const BankDetailFormComponent = ({ id, config, onChange, values: propValues, editEmployees, employeeId, formik }) => {
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
  }, [editEmployees, employeeId, formik]);


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

            )}
            {field.type === 'text' && (
              <TextComponent
                name={field.name}
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={TextStyle[field.textcss].input}
                placeholder={field.placeholder}
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

BankDetailFormComponent.propTypes = {
  id: PropTypes.number.isRequired,
  config: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  editEmployees: PropTypes.object.isRequired,
  employeeId: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
};

export default BankDetailFormComponent;
