//clean code
import { useEffect, useState } from 'react';
import OptionsComponent from '../../../components/form/Formfields/options/OptionsComponent';
import TextComponent from '../../../components/form/Formfields/text/TextComponent';
import Button from '../../../configurations/Button/Button';
import { Apply, Cancel, View_Policies } from './RequestForLoanData';
import RequestForLoanStyles from './RequestForLoanStyles';
import ModalComponent from '../../../components/form/Formfields/modal/ModalComponent';
import { ModalConfig2 } from '../../../components/form/Formfields/modal/ModalConfig2';
import { postData } from '../../../services/APIService';
import { EndUser_ApplyLoan } from '../../../api/EndPoints';
import { useFormik } from "formik";
import { formSchema,simplifiedData,createInitialValues } from '../../../configurations/ValidationSchema/ValidationSchema';


const RequestForLoanComponent = ({ config }) => {
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleInputChange = (fieldName, value) => {
  //   setData((prevData) => ({
  //     ...prevData,
  //     [fieldName]: value,
  //   }));
  // };
  const handleButtonClick = (type) => {
    if (type === "submit" && Object.keys(formik.errors).length === 0 && formik.isValid) {
      setData(formik.values)
      handleSubmit();
    }
  };
 

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  
  const handleSubmit = async (e) => {
    // e.preventDefault();
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
      const response = await postData(EndUser_ApplyLoan, loanData);
      console.log('Data sent successfully:', response.data);
      setIsModalOpen(true);

    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  
  useEffect(() => {
    handleSubmit();
  }, []);
  
  
  

  const formik    = useFormik({
      
      initialValues : createInitialValues(config),

    
      validationSchema: formSchema(simplifiedData(config)),


    });

  console.log(formik, formik.values, formik.errors)

  return (
    <div className=''>
      <div className='w-[160vh]'>
        <div className='flex'>
          <h1 className='text-xl font-semibold translate-x-[5vh] -translate-y-[4vh]'>Request For Loan</h1>
          <div className=' translate-x-[5vh] -mt-8 ml-[103vh]'><Button Configs={View_Policies} /></div>
        </div>
        <div className='border-2 border-gray-200 shadow-md h-[50vh] ml-7 -mt-2 '>
          <div className=' ml-7 mt-7'>
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={formik.handleSubmit}>
              {config.slice(0, 1).map((field, index) => (
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
                      // value={data[field.name] || ''}
                      value={(formik && formik.values[field.name]) ||
                        // (formData && formData[item.name]) ||
                        ""}
                      // onChange={(e) => handleInputChange(field.name, e.target.value)}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  )}
                  {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                      // value={data[field.name] || ''}
                      // onChange={(e) => handleInputChange(field.name, e.target.value) }\
                      value={(formik && formik.values[field.name]) ||
                        // (formData && formData[item.name]) ||
                        ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  )}
                  {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                      // value={data[field.name] || ''}
                      // onChange={(e) => handleInputChange(field.name, e.target.value)}
                      value={(formik && formik.values[field.name]) ||
                        // (formData && formData[item.name]) ||
                        ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  )}
                  {formik.touched[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                      // value={data[field.name] || ''}
                      // onChange={(e) => handleInputChange(field.name, e.target.value)}
                      value={(formik && formik.values[field.name]) ||
                        // (formData && formData[item.name]) ||
                        ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  )}
                  {formik.touched[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
                </div>
              ))}
              <div className='flex mt-3'>
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