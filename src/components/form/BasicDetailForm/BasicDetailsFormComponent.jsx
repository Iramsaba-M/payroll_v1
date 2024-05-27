
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { fetchData, putDataFile } from '../../../services/APIService';
import DateComponent from "../Formfields/date/DateComponent";
import TextComponent from "../Formfields/text/TextComponent";
import TextStyle from "../Formfields/text/TextStyle";
import EmailComponent from "../Formfields/email/EmailComponent";
import OptionsComponent from "../Formfields/options/OptionsComponent";
import { ButtonContent } from "../../../pages/Admin pages/Employee/BasicDetails/BasicDetailsContent";
import PhoneComponent from "../Formfields/phone/PhoneComponent";
import ButtonConfig from "../../../configurations/Button/ButtonConfig";
import { BASIC_DETAILS_API, BASIC_DETAILS_API_Get, BASIC_DETAILS_API_put } from "../../../api/EndPoints";
import { getApiUrl } from "../../../api/GetAPI";
import CardComponent from "./CardComponent";
import CardConfig from "./CardConfig";
import ModalComponent from '../Formfields/modal/ModalComponent';
import { ModalConfig } from '../Formfields/modal/ModalConfig'
import { postDataImage } from "../../../services/APIService";
import { useButtonState } from '../../../context/ButtonStateContext';
import { useFormik } from "formik";
import { createInitialValues, formSchema, simplifiedData } from "../../../configurations/ValidationSchema/ValidationSchema";
const BasicDetailsFormComponent = ({
  config,
  handleNextClick,
  handleEmpId,
  editEmployees,

}) => {

  // const [values, setValues] = useState({});
  // const [values, setValues] = useState(editEmployees || {});
 

  const [values, setValues] = useState(() => {
    const initialValues = {};
    config.forEach(field => {
      initialValues[field.name] = editEmployees[field.name] || ''; // Set initial value based on editEmployees or empty string
    });

    return initialValues;
  });
///////////////////////////////////////////////////////////////
const mergedConfig = [];
// Assuming CardConfig[1] exists and contains the object you mentioned
if (CardConfig.length > 1) {
    // Push objects from config array
    config.forEach(item => {
        mergedConfig.push(item);
    });

    // Push object from CardConfig at index 1
    mergedConfig.push(CardConfig[1]);
} else {
    console.error("CardConfig at index 1 does not exist");
}

console.log("Merged Config:", mergedConfig);

  const formik = useFormik({
    initialValues: createInitialValues(mergedConfig),
    validationSchema: formSchema(simplifiedData(mergedConfig)),
  });

//////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    // Update values state when editEmployees prop changes
    const updatedValues = {};
    config.forEach(field => {
      updatedValues[field.name] = editEmployees[field.name] || ''; // Set value based on editEmployees or empty string

    });

    const dob = editEmployees["dob"]; // Get the date of birth from editEmployees

    if (dob) {
      const [day, month, year] = dob.split("/"); // Split the date string
      const formattedDate = `${day}-${month}-${year}`; // Reorder day, month, and year
      updatedValues["dob"] = formattedDate; // Format the date and set it in the state
    } else {
      updatedValues["dob"] = ""; // If DOB is not available, set it to empty string
    }

    updatedValues["photo_content"] = editEmployees["photo_content"] || ""; // Set photo_content directly

    setValues(updatedValues);
    formik.setValues(updatedValues)
  }, [editEmployees]);

  const [originalDateValues, setOriginalDateValues] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    AddMode,
    editMode,
    EditModeclick,
    AddEmployeeclick
  } = useButtonState();
  console.log('editEmployees', editEmployees);


  const handleChange = (name, value) => {
    if (config.some((field) => field.name === name && field.type === "date")) {
      const formattedDate = value.split("/").reverse().join("-"); // Assuming date format is DD/MM/YYYY
      setOriginalDateValues({ ...originalDateValues, [name]: value });
      setValues({ ...values, [name]: formattedDate });
      formik.setValues({ ...formik.values, [name]: formattedDate });
    } else {
      setValues({ ...values, [name]: value });
      formik.setValues({ ...formik.values, [name]: value });
    }
  };




  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  const handleButtonClick = async (label, type) => {
    console.log("EditMode:", editMode);
    console.log("AddMode:", AddMode);
    console.log("Label:", label);
    console.log("Type:", type);

    if (label === "Next" && Object.keys(formik.errors).length === 0 && formik.isValid) {
      // handleNextClick();
      handleNextClick(values.employee_id);
    }

  };

  const employeeId = values.employee_id;

  const onSubmit = async (e, label) => {
    e.preventDefault();
    try {
      formik.handleSubmit();
      console.log("Form Values:", values);
      // Create a FormData object to handle form data including file uploads
      const formData = new FormData();
  
      // Append text data to FormData
      Object.entries(values).forEach(([key, value]) => {
        // Append all form fields except photo_content
        if (key !== 'photo_content') {
          formData.append(key, value);
        }
      });
  
      // Check if photo_content exists and is a file object
      if (values.photo_content instanceof File) {
        // If photo_content is a file object, append it to FormData
        formData.append('photo_content', values.photo_content);
      }
  
      // Check if it's in AddMode or editMode
      if (AddMode) {
        // When Add mode is active
        const response = await postDataImage(BASIC_DETAILS_API, formData);
        handleEmpId(values.employee_id);
        setIsModalOpen(true);
        console.log('Employee ID:', employeeId);
        console.log("Data sent:", response);
        // If the above API call is successful, trigger the onSubmit function from props
        onSubmit(values, label); // Pass the label parameter

      } 
      else if (editMode)
      {
        // When edit mode is active
        const employeeId = values.employee_id;
        // Update the data directly without creating updatedValues
        await putDataFile(`${BASIC_DETAILS_API_put}/${employeeId}`, formData);
        console.log("PUT API called successfully");
        handleEmpId(employeeId);
        console.log('Employee ID:', employeeId);
        // If the above API call is successful, trigger the onSubmit function from props
        onSubmit(values, label); // Pass the label parameter
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  console.log('er',formik.values, formik.errors, values);
  
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
                    // value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}

                    value={(formik && formik.values[field.name]) ||
                      // (formData && formData[item.name]) ||
                      ""}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                )}
                {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                    // value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}

                    value={(formik && formik.values[field.name]) ||
                      // (formData && formData[item.name]) ||
                      ""}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                )}
                {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                    // value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}

                    value={(formik && formik.values[field.name]) ||
                      // (formData && formData[item.name]) ||
                      ""}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                )}
                {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                    // value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}

                    value={(formik && formik.values[field.name]) ||
                      // (formData && formData[item.name]) ||
                      ""}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                )}
                {field.type === "options" && (
                  <OptionsComponent
                    name={field.name}
                    options={field.options}
                    // value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}
                    placeholder={field.placeholder}

                    value={(formik && formik.values[field.name]) ||
                      // (formData && formData[item.name]) ||
                      ""}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                  />
                )}
                {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                    // value={originalDateValues[field.name] || ""}

                    // value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}

                    value={(formik && formik.values[field.name]) ||
                      // (formData && formData[item.name]) ||
                      ""}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                )}
                {field.type === "text" && (
                  <TextComponent
                    name={field.name}
                    placeholder={field.placeholder}
                    // value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}

                    value={(formik && formik.values[field.name]) ||
                      // (formData && formData[item.name]) ||
                      ""}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                )}
                {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
              </div>
            ))}
            <div className=" translate-y-[-390%] ml-8 p-3">
              <CardComponent
                CardConfig={CardConfig}
                handleChange={handleChange}
                photoContent={values.photo_content}
                onBlur={formik.handleBlur}
                
              />
            </div>
            
          </div>
          { formik.touched['photo_content'] && formik.errors['photo_content'] && <p className='error-form text-xs text-red-600 translate-x-[-130%]'>{formik.errors['photo_content']}</p>}
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
                  options={field.options}
                  // value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}

                  value={(formik && formik.values[field.name]) ||
                    // (formData && formData[item.name]) ||
                    ""}
                  // onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              )}
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  // value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}

                  value={(formik && formik.values[field.name]) ||
                    // (formData && formData[item.name]) ||
                    ""}
                  // onChange={(e) => handleInputChange(field.name, e.target.value)}
                  onBlur={formik.handleBlur}
                />
              )}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                  options={field.options}
                  // value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}

                  value={(formik && formik.values[field.name]) ||
                    // (formData && formData[item.name]) ||
                    ""}
                  // onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              )}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                    // value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}

                    value={(formik && formik.values[field.name]) ||
                      // (formData && formData[item.name]) ||
                      ""}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                )}
                <div className="">
                  {field.type === "options" && (
                    <OptionsComponent
                      name={field.name}
                      options={field.options}
                      // value={values[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      textcss={TextStyle[field.textcss].input}
                      placeholder={field.placeholder}
                      icon={field.icon}

                      value={(formik && formik.values[field.name]) ||
                        // (formData && formData[item.name]) ||
                        ""}
                      // onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  )}
                  {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                  options={field.options}
                  // value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}

                  value={(formik && formik.values[field.name]) ||
                    // (formData && formData[item.name]) ||
                    ""}
                  // onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              )}
              {field.type === "email" && (
                <EmailComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  // value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={TextStyle[field.textcss].input}

                  value={(formik && formik.values[field.name]) ||
                    // (formData && formData[item.name]) ||
                    ""}
                  // onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              )}
              {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                    // value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    textcss={TextStyle[field.textcss].input}

                    value={(formik && formik.values[field.name]) ||
                      // (formData && formData[item.name]) ||
                      ""}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                )}
                <div className="">
                  {field.type === "options" && (
                    <OptionsComponent
                      name={field.name}
                      options={field.options}
                      // value={values[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      textcss={TextStyle[field.textcss].input}
                      placeholder={field.placeholder}
                      icon={field.icon}

                      value={(formik && formik.values[field.name]) ||
                        // (formData && formData[item.name]) ||
                        ""}
                      // onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  )}
                  {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
                </div>

              </div>
            ))}
          </div>
        </div>
        <div className=" ml-[107vh] -mt-20">
        
        <ButtonConfig Config={ButtonContent} onClick={(label, type) => handleButtonClick(label, type, editMode)} />

      </div>
      </div>
      {/* <div className=" ml-[107vh] -translate-y-[-27vh]">
        {" "}
        <ButtonConfig Config={ButtonContent} onClick={(label, type) => handleButtonClick(label, type, editMode)} />

      </div> */}
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={ModalConfig}
      />
    </form>
  );
}

export default BasicDetailsFormComponent;

