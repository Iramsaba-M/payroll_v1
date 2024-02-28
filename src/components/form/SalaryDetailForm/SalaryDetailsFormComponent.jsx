import React, { useState , useEffect} from 'react';
import TextComponent from '../Formfields/text/TextComponent';
import TextStyle from '../Formfields/text/TextStyle';
import axios from 'axios';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import { getApiUrl } from '../../../api/GetAPI';
import NumberComponent from '../Formfields/number/numbercompoent';
import ButtonConfig from '../../../configurations/Button/ButtonConfig';
import {Button1Content, Button2Content}from '../../../pages/Employee/SalaryDetail/SalaryDetailsContents';
import NumberStyle from '../Formfields/number/numberstyle';
import ModalComponent from '../Formfields/modal/ModalComponent';
import {ModalConfig }from '../Formfields/modal/ModalConfig';
import { SALARY_DETAILS_POST_API } from '../../../api/EndPoints';
import { SALARY_DETAILS_GET_API } from '../../../api/EndPoints';
import { fetchData, postData } from '../../../services/APIService';



const SalaryDetailsComp = ({ config, handleSubmit, handleNextClick, employeeId }) => {
  const [values, setValues] = useState({});
  const [postSuccess, setPostSuccess] = useState(false);
  const [ctcDetails, setCtcDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleButtonClick = (label, type) => {
    if (label === "Save" && type === "submit") {
      setIsModalOpen(true);
    } else if (label === "Next") {
      handleNextClick(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { annual_ctc, ctc_template } = values;
  
      // Use postData from apiService.js
      const postResponse = await postData(SALARY_DETAILS_POST_API, {
        annual_ctc,
        ctc_template,
        employee_id: employeeId,
      });
  
      console.log('Data sent:', postResponse);
      setPostSuccess(true);
    } catch (error) {
      console.error('Error:', error);
      // Handle error as needed
    }
  };
  
  useEffect(() => {
    // Fetch data only if postSuccess is true
    const fetchDataIfNeeded = async () => {
      try {
        if (postSuccess) {
          // Use fetchData from apiService.js
          const response = await fetchData(`${SALARY_DETAILS_GET_API}/${employeeId}`);
          console.log('GET Response Data:', response);
          setValues(response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error as needed
      }
    };
  
    fetchDataIfNeeded();
  }, [employeeId, postSuccess]);
  

    return (
     <form onSubmit={onSubmit}>
      {/* Section 1: CTC Template and Annual CTC (SIDE BY SIDE) */}
      <div className=' w-[133vh]'>
      <div className="form-line flex mb-4">
        {config.slice(0, 1).map((field, index) => (
          <div key={index}>
            <label className={NumberStyle[field.textcss].label}>{field.label}</label>
              {field.type === 'options' && (
              <OptionsComponent
              name={field.name}
                value={values[field.name] || ''}  
                options={field.options}
                onChange={(e) => handleChange(field.name, e.target.value)}
                textcss={NumberStyle[field.textcss].input}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}

<div className="form-line flex mb-4">
{config.slice(1, 2).map((field, index) => (
  <div key={index}>
   <label className={NumberStyle[field.numbercss].label}>
                {field.label}
              </label>
          {field.type === "number" && (
            <NumberComponent
              name={field.name}
              placeholder={field.placeholder}
              value={values[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              numberType={field.numberType}  // Use field.numberType or default to "float"
              numbercss={NumberStyle[field.numbercss].input}
            />
          )}
        </div>
      ))}
    </div>
        <div className=" flex translate-x-24">
        <ButtonConfig Config={Button1Content} onClick={handleButtonClick} />
      </div>
      </div>

      {/* Section 2: Earnings (at center) */}
      <div className="form-line flex justify-center mb-4 font-semibold mr-[40vh]">
        <h2>Earnings</h2>
      </div>

      {/* Section 3: Monthly CTC, Basic, DA */}
      <div className="form-line flex mb-4">
        {config.slice(2, 5).map((field, index) => (
         <div key={index}>
         <label className={NumberStyle[field.numbercss].label}>
                {field.label}
              </label>
               {field.type === "number" && (
                 <NumberComponent
                   name={field.name}
                   placeholder={field.placeholder}
                  //  value={values.earning && values.earning[field.name] || ""}
                  value={(values.earning && values.earning[field.name]) !== undefined ? values.earning[field.name] : null}
                   onChange={(e) => handleChange("earning", field.name, e.target.value)}
                   numberType={field.numberType}  // Use field.numberType or default to "float"
                   numbercss={NumberStyle[field.numbercss].input}
                 />
               )}
             </div>
        ))}
      </div>

      {/* Section 4: HRA, Allowances, Other Special Allowances */}
<div className="form-line flex mb-4">
  {config.slice(5, 8).map((field, index) => (
    <div key={index}>
   <label className={NumberStyle[field.numbercss].label}>
                {field.label}
              </label>
          {field.type === "number" && (
            <NumberComponent
              name={field.name}
              placeholder={field.placeholder}
              // value={values.earning && values.earning[field.name] || ""}
              value={(values.earning && values.earning[field.name]) !== undefined ? values.earning[field.name] : null}
              onChange={(e) => handleChange("earning", field.name, e.target.value)}
              numberType={field.numberType}  // Use field.numberType or default to "float"
              numbercss={NumberStyle[field.numbercss].input}
            />
          )}
        </div>
  ))}
</div>


      {/* Section 5: Gross Salary */}
      <div className="form-line flex mb-4">
        {config.slice(8, 9).map((field, index) => (
         <div key={index} className="flex items-center">
         <label className={`${NumberStyle[field.numbercss].label} mr-2`}>
           {field.label}
         </label>
         {field.type === "number" && (
           <NumberComponent
             name={field.name}
             placeholder={field.placeholder}
             value={values[field.name] || ""}
             onChange={(e) => handleChange(field.name, e.target.value)}
             numberType={field.numberType}  // Use field.numberType or default to "float"
             numbercss={NumberStyle[field.numbercss].input}
           />
         )}
       </div>
        ))}
      </div>

      {/* Section 6: Deductions (at center) */}
      <div className="form-line flex justify-center mb-4 font-semibold mr-[45vh]">
        <h2>Deductions</h2>
      </div>

      {/* Section 7: EPF, ESIC, PT */}
      <div className="form-line flex mb-4">
        {config.slice(9, 12).map((field, index) => (
          <div key={index}>
         <label className={NumberStyle[field.numbercss].label}>
                {field.label}
              </label>
                {field.type === "number" && (
                  <NumberComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    // value={values.deduction && values.deduction[field.name] || ""}
                    value={(values.deduction && values.deduction[field.name]) !== undefined ? values.deduction[field.name] : null}
                   onChange={(e) => handleChange("deduction", field.name, e.target.value)}
                   numberType={field.numberType}  // Use field.numberType or default to "float"
                    numbercss={NumberStyle[field.numbercss].input}
                  />
                )}
              </div>
        ))}
      </div>

      {/* Section 8: Gratuity, Medical Insurance, Others */}
      <div className="form-line flex mb-4">
        {config.slice(12, 15).map((field, index) => (
          <div key={index}>
           <label className={NumberStyle[field.numbercss].label}>
                {field.label}
              </label>
                {field.type === "number" && (
                  <NumberComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    // value={values.deduction && values.deduction[field.name] || ""}
                    value={(values.deduction && values.deduction[field.name]) !== undefined ? values.deduction[field.name] : null}
                   onChange={(e) => handleChange("deduction", field.name, e.target.value)}
                   numberType={field.numberType}  // Use field.numberType or default to "float"
                    numbercss={NumberStyle[field.numbercss].input}
                  />
                )}
              </div>
        ))}
      </div>

{/* Section 9: Net Salary */}
<div className="form-line flex mb-4">
  {config.slice(15, 16).map((field, index) => (
    <div key={index} className="flex items-center">
      <label className={`${NumberStyle[field.numbercss].label} mr-2`}>
        {field.label}
      </label>
      {field.type === "number" && (
        <NumberComponent
          name={field.name}
          placeholder={field.placeholder}
          value={values[field.name] || ""}
          onChange={(e) => handleChange(field.name, e.target.value)}
          numberType={field.numberType}  // Use field.numberType or default to "float"
          numbercss={NumberStyle[field.numbercss].input}
        />
      )}
    </div>
  ))}
</div>
      {/* Submit button */}
      <div className="form-line flex justify-end mt-4">
     <ButtonConfig Config={Button2Content} onClick={handleButtonClick} />
      </div>
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={ModalConfig}
      />
</form>
  );
};

export default SalaryDetailsComp;