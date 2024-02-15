import React, { useState } from "react";
import TextComponent from "./TextComponent";
import FileComponent from "./FileComponent";
import DemoStyles from "./DemoStyles";
import axios from "axios";
import CustomComponent from "./CustomComponent";
import {customformContent} from "../../../pages/Employee/Documents/DocumentsContent";
import { ButtonforSave, ButtonforAdd } from "../../../pages/Employee/Documents/DocumentsContent";
import { getApiUrl3 } from "../../../api/GetAPI";
import { DOCUMENTS_API } from "../../../api/EndPoints";
import ButtonConfig from "../../../configurations/Button/ButtonConfig";

const DocumentsFormComponent = ({
  config,
  handleNextClick,
  handleSubmit,
  employeeId,
}) => {
  const [values, setValues] = useState({});
  const [customComponents, setCustomComponents] = useState([]);

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleButtonClick = (label, type) => {
    if (label === "Save" && type === "submit") {
      onSubmit();
    } else if (label === "Next") {
      handleNextClick(true);
    }
  };

  const addCustomComponent = () => {
    setCustomComponents((prev) => [...prev, { customValue: "" }]); //syntax is creating a new array that includes all the elements from the previous state (prev) and adds a new object { customValue: '' } to the end.
  }; //adding a new object with customValue: '' to the existing array.

  const updateCustomValue = (index, value) => {
    setCustomComponents((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, customValue: value } : item
      )
    );
  };

  const handleFileChange = (name, selectedFile) => {
    setValues({ ...values, [name]: selectedFile });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        ...values,
        employee_id: employeeId,
      };
      console.log(data);
      const formData = new FormData();
      //add non form data to form data
      Object.keys(data).forEach((key) => {
        if (key !== "file") {
          formData.append(key, data[key]);
        }
      });
      //if we have a file, add it to the form data
      if (data.file) {
        formData.append("file", data.file);
      }

      console.log("Form values:", data);

      // Assuming getApiUrl is a valid function
      const response = await axios.post(getApiUrl3(DOCUMENTS_API), formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Form submitted successfully:", response.data);

      // If the above API call is successful, trigger the handleSubmit function from props
      handleSubmit(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className=" flex-col w-[140vh] h-5/6 mt-8 ">
        <div className="form-line flex mb-4 ml-20">
          {config.slice(0, 2).map((field, index) => (
            <div key={index}>
              <label className={DemoStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DemoStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DemoStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(2, 4).map((field, index) => (
            <div key={index}>
              <label className={DemoStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DemoStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DemoStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(4, 6).map((field, index) => (
            <div key={index}>
              <label className={DemoStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DemoStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DemoStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(6, 8).map((field, index) => (
            <div key={index}>
              <label className={DemoStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DemoStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DemoStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>

        <div className="form-line flex mb-4 ml-20">
          {config.slice(8, 10).map((field, index) => (
            <div key={index}>
              <label className={DemoStyles[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  textcss={DemoStyles[field.textcss].input}
                  icon={field.icon}
                />
              )}
              {field.type === "file" && (
                <FileComponent
                  name={field.name}
                  onChange={(file) => handleFileChange(field.name, file)}
                  textcss={DemoStyles[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>
        <div className="ml-[50vh]">
          {" "}
          <ButtonConfig Config={ButtonforSave} onClick={handleButtonClick} />
        </div>

        <div className="ml-20 mb-2 mr-2">
          {" "}
          <ButtonConfig Config={ButtonforAdd} onClick={addCustomComponent} />
        </div>

        <div className="ml-20">
          {customComponents.map((customComponent, index) => (
            <CustomComponent
              key={index}
              value={customComponent.customValue}
              config={customformContent}
              onCustomChange={(value) => updateCustomValue(index, value)}
            />
          ))}
        </div>
      </div>
    </form>
  );
};

export default DocumentsFormComponent;
