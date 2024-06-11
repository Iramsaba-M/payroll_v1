//RequestForLoanComponent.jsx
import { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import OptionsComponent from '../../../components/form/Formfields/options/OptionsComponent';
import TextComponent from '../../../components/form/Formfields/text/TextComponent';
import Button from '../../../configurations/Button/Button';
import { Apply, Cancel, View_Policies } from './RequestForLoanData';
import { Apply, Cancel, View_Policies } from './RequestForLoanData';
import RequestForLoanStyles from './RequestForLoanStyles';
import ModalComponent from '../../../components/form/Formfields/modal/ModalComponent';
import { ModalConfig2 } from '../../../components/form/Formfields/modal/ModalConfig2';
import { postData } from '../../../services/APIService';
import { EndUser_ApplyLoan } from '../../../api/EndPoints';
import { useFormik } from "formik";
import { formSchema, simplifiedData, createInitialValues } from '../../../configurations/ValidationSchema/ValidationSchema';


const RequestForLoanComponent = ({ config }) => {
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (type) => {
    if (type === "submit" && Object.keys(formik.errors).length === 0 && formik.isValid) {
      setData(formik.values)
      handleSubmit();
    if (type === "submit" && Object.keys(formik.errors).length === 0 && formik.isValid) {
      setData(formik.values)
      handleSubmit();
    }
  };
 

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formik = useFormik({

    initialValues: createInitialValues(config),


    validationSchema: formSchema(simplifiedData(config)),


  });

  const handleSubmit = useCallback(async () => {
    try {
      console.log('formik', formik.values);
      const employee_id = "100";
      // Validate amount and installment_period
      const amount = parseFloat(data.amount);
      const installment_period = parseInt(data.installment_period);

      if (isNaN(amount) || isNaN(installment_period)) {
        throw new Error('Amount and installment period must be valid numbers.');
      }

      const loanData = {
        ...data,
        "employee_id": employee_id,
        "amount": amount,
        "installment_period": installment_period,

      };
      console.log(loanData)
      console.log(loanData)
      const response = await postData(EndUser_ApplyLoan, loanData);
      console.log('Data sent successfully:', response.data);
      setIsModalOpen(true);

      setIsModalOpen(true);

    } catch (error) {
      console.error('Error sending data:', error);
    }
  }, [data, formik.values]);

  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);



  console.log(formik, formik.values, formik.errors)
  RequestForLoanComponent.propTypes = {
    config: PropTypes.array.isRequired, // Validate config prop
  };

  return (
    <div className=''>
      <div className='w-[160vh]'>
        <div className='flex'>
          <h1 className='lg:text-xl font-semibold translate-x-[5vh] lg:-translate-y-[4vh] text-2xl -translate-y-[5vh]'>Request For Loan</h1>
          <div className=' translate-x-[5vh] -mt-8 lg:ml-[103vh] ml-[95vh]'><Button Configs={View_Policies} /></div>
        </div>
        <div className='border-2 border-gray-200 shadow-md ml-7 -mt-2 '>
          <div className=' ml-7 mt-7'>
            <form onSubmit={formik.handleSubmit}>
              {config.slice(0, 1).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label}
                    {field.label}
                  </label>
                  {field.type === 'options' && (
                    <OptionsComponent


                      name={field.name}
                      options={field.options}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={(formik && formik.values[field.name]) ||
                        ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  )}
                  {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form lg:text-xs text-sm text-red-600'>{formik.errors[field.name]}</p>}
                </div>
              ))}

              {config.slice(1, 2).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === 'text' && (
                    <TextComponent
                      name={field.name}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={(formik && formik.values[field.name]) ||
                        ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  )}
                  {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form lg:text-xs text-sm text-red-600'>{formik.errors[field.name]}</p>}
                </div>
              ))}

              {config.slice(2, 3).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === 'options' && (
                    <OptionsComponent


                      name={field.name}
                      options={field.options}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={(formik && formik.values[field.name]) ||
                        ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  )}
                  {formik.touched[field.name] && <p className='error-form lg:text-xs text-sm text-red-600'>{formik.errors[field.name]}</p>}
                </div>
              ))}

              {config.slice(3, 4).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === 'text' && (
                    <TextComponent
                      name={field.name}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={(formik && formik.values[field.name]) ||
                        ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  )}
                  {formik.touched[field.name] && <p className='error-form lg:text-xs text-sm text-red-600'>{formik.errors[field.name]}</p>}
                </div>
              ))}
              <div className='flex mt-3'>
                <Button Configs={Apply} onClick={() => handleButtonClick("submit")} />
                <Button Configs={Apply} onClick={() => handleButtonClick("submit")} />
                <Button Configs={Cancel} />
              </div>
              <ModalComponent
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                config={ModalConfig2}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForLoanComponent;