
/* eslint-disable react/prop-types */
import  { useState } from "react";
import axios from "axios";
import { fetchData ,putData} from '../../../services/APIService';
import DateComponent from "../Formfields/date/DateComponent";
import TextComponent from "../Formfields/text/TextComponent";
import TextStyle from "../Formfields/text/TextStyle";
import EmailComponent from "../Formfields/email/EmailComponent";
import OptionsComponent from "../Formfields/options/OptionsComponent";
import { ButtonContent } from "../../../pages/Employee/BasicDetails/BasicDetailsContent";
import PhoneComponent from "../Formfields/phone/PhoneComponent";
import ButtonConfig from "../../../configurations/Button/ButtonConfig";
import { BASIC_DETAILS_API, BASIC_DETAILS_API_Get, BASIC_DETAILS_API_put } from "../../../api/EndPoints";
import { getApiUrl } from "../../../api/GetAPI";
import CardComponent from "./CardComponent";
import CardConfig from "./CardConfig";
import ModalComponent from '../Formfields/modal/ModalComponent';
import {ModalConfig} from '../Formfields/modal/ModalConfig'
import { postDataImage } from "../../../services/APIService";
const BasicDetailsFormComponent = ({
  config,
  handleSubmit,
  handleNextClick,
  handleEmpId,
  editMode,
}) => {
 
  const [values, setValues] = useState({});
  const [originalDateValues, setOriginalDateValues] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (name, value) => {
    if (config.some((field) => field.name === name && field.type === "date")) {
      const formattedDate = value.split("-").reverse().join("-");
      setOriginalDateValues({ ...originalDateValues, [name]: value });
      setValues({ ...values, [name]: formattedDate });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

   // Define onedit based on editMode
   const handleButtonClick = async (label, type, editMode, handleSubmit) => {
    console.log("EditMode:", editMode);
    console.log("Label:", label);
    console.log("Type:", type);
  
    if (!editMode) {
      // When edit mode is off
      if (label === "Save" && type === "submit") {
        setIsModalOpen(true); // Open modal
      } else if (label === "Next") {
        handleNextClick(); // Call handleNextClick function
      }
    } else {
      // When edit mode is on
      if (label === "Save" && type === "submit") {
        try {
          // Assuming BASIC_DETAILS_API_put is the correct endpoint URL for PUT requests
          await putData(BASIC_DETAILS_API_put, values);
          console.log("PUT API called successfully");
          // Handle success or update UI accordingly
        } catch (error) {
          console.error("Error calling PUT API:", error);
          // Handle errors here
        }
      } else if (label === "Next") {
        try {
          // Navigate first (assuming handleNextClick is responsible for navigation)
          handleNextClick(); // Navigate to the next page or perform navigation action
  
          // Call fetchData or other relevant function for next action in edit mode asynchronously
          try {
            const data = await fetchData(BASIC_DETAILS_API_Get);
            console.log("GET API called");
            // Process the retrieved data as needed
          } catch (error) {
            console.error("Error calling GET API:", error);
            // Handle errors here if needed
          }
        } catch (error) {
          console.error("Error navigating:", error);
          // Handle navigation errors here if needed
        }
      }
    }
  };
  
  
  // old onsubmit code  dont remove it
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {

  //     console.log("Form Values:", values);
  //     // Create a FormData object to handle file uploads
  //     const formData = new FormData();

  //     // Append text data to FormData
  //     Object.entries(values).forEach(([key, value]) => {
  //       formData.append(key, value);
  //     });

  //     // Append image file to FormData if it exists
  //     if (values.photo_content) {
  //       formData.append("photo_content", values.photo_content);
  //     }

  //     // Make the axios call using FormData
  //     const response = await axios.post(
  //       getApiUrl(BASIC_DETAILS_API),
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data", // Set content type for FormData
  //         },
  //       }
  //     );

  //     console.log("Data sent:", response.data);

  //     const employeeId = values.employee_id;

  //     handleEmpId(employeeId)

  //     console.log('Employee ID:', employeeId);
  //     // If the above API call is successful, trigger the handleSubmit function from props
  //     handleSubmit(values);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  BasicDetailsFormComponent.defaultProps = {
    editMode: true,
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Values:", values);
      // Create a FormData object to handle file uploads
      const formData = new FormData();
  
      // Append text data to FormData
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      // Append image file to FormData if it exists
      if (values.photo_content) {
        formData.append("photo_content", values.photo_content);
      }
  
      // Use postDataImage function to make the axios call
      const response = await postDataImage(BASIC_DETAILS_API, formData);
  
      console.log("Data sent:", response);
  
      const employeeId = values.employee_id;
  
      handleEmpId(employeeId)
  
      console.log('Employee ID:', employeeId);
      // If the above API call is successful, trigger the handleSubmit function from props
      handleSubmit(values);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="w-[130vh] h-[50vh]">
        <h1 className="block text-gray-600 text-xs font-bold my-1">
          Employee Name*
        </h1>
        <div className="form-line flex mb-4  ">
          <div className="form-field flex  ">
            {config.slice(0, 1).map((field, index) => (
              <div key={index} className={`form-field ${field.fieldstyle}`}>
                <label className={TextStyle[field.textcss].label}>
                  {field.label}

                </label>
                {field.type === "text" && (
                  <TextComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
              </div>
            ))}
            {config.slice(1, 2).map((field, index) => (
              <div key={index} className={`form-field ${field.fieldstyle}`}>
                <label className={TextStyle[field.textcss].label}>
                  {field.label}
                </label>
                {field.type === "text" && (
                  <TextComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
              </div>
            ))}
            {config.slice(2, 3).map((field, index) => (
              <div key={index} className={`form-field ${field.fieldstyle}`}>
                <label className={TextStyle[field.textcss].label}>
                  {field.label}
                </label>
                {field.type === "text" && (
                  <TextComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <div className="form-line flex mb-4">
            {config.slice(3, 5).map((field, index) => (
              <div key={index} className={`form-field ${field.fieldstyle}`}>
                                <div className="absolute ml-[30vh] mt-8">{field.icon}</div>
                <label className={TextStyle[field.textcss].label}>
                  {field.label}
                </label>
                {field.type === "date" && (
                  <DateComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={originalDateValues[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
                {field.type === "options" && (
                  <OptionsComponent
                    name={field.name}
                    value={values[field.name] || ""}
                    options={field.options}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                    placeholder={field.placeholder}
              
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="form-line flex mb-2">
          <div className="form-line flex mb-4">
            {config.slice(5, 7).map((field, index) => (
              <div key={index} className={`form-field ${field.fieldstyle}`}>
               <div className="absolute ml-[30vh] mt-8">{field.icon}</div>
                <label className={TextStyle[field.textcss].label}>
                  {field.label}
                </label>
                {field.type === "date" && (
                  <DateComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={originalDateValues[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
                {field.type === "text" && (
                  <TextComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
              </div>
            ))}
            <div className=" translate-y-[-390%] ml-8 p-3">
              <CardComponent
                CardConfig={CardConfig} 
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>

<div className="form-line flex mb-4 ">
          {config.slice(7, 10).map((field, index) => (
            <div key={index} className={`form-field ${field.fieldstyle}`}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  value={values[field.name] || ""}
                  options={field.options}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                />
              )}
            </div>
          ))}
        </div>
        <div className="form-line  mb-4">
          {config.slice(10, 11).map((field, index) => (
            <div key={index}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  value={values[field.name] || ""}
                  options={field.options}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
              
            </div>
          ))}
          <div className="translate-x-[45vh] -translate-y-[11vh] p-3 mr-2 w-14 flex ">
            {config.slice(11, 13).map((field, index) => (
              <div key={index}>
                <label className={TextStyle[field.textcss].label}>
                  {field.label}
                </label>
                {field.type === "text" && (
                  <TextComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
                <div className="">
                 {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  value={values[field.name] || ""}
                  options={field.options}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
               </div>
              </div>
            ))}
           
          </div>
        </div>
        <div className=" flex mb-4 -translate-y-[12vh] w-6">
          {config.slice(13, 16).map((field, index) => (
            <div key={index}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  value={values[field.name] || ""}
                  options={field.options}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
                {field.type === "email" && (
                  <EmailComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
              
            </div>
          ))}
        </div>
        <div className="">
       
          <div className="form-line flex mb-4 -translate-y-[12vh]">
            {config.slice(16, 19).map((field, index) => (
              <div key={index}>
                <label className={TextStyle[field.textcss].label}>
                  {field.label}
                </label>
                {field.type === "tel" && (
                  <PhoneComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                  />
                )}
                  <div className="">
                 {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  value={values[field.name] || ""}
                  options={field.options}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
               </div>
              
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" ml-[107vh] -translate-y-[-27vh]">
        {" "}
        <ButtonConfig Config={ButtonContent} onClick={(label, type) => handleButtonClick(label, type, editMode)} />

      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={ModalConfig}
      />
    </form>
  );
  }

export default BasicDetailsFormComponent;

export const payslips ='run_payroll/payroll-histroy';

export const Runpayroll ='run_payroll/payroll-data';