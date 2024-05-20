
/* eslint-disable react/prop-types */

import  { useState } from "react";
import TextComponent from "./TextComponent";
import FileComponent from "./FileComponent";
import DemoStyles from "./DemoStyles";
import axios from "axios";
import CustomComponent from "./CustomComponent";
import {customformContent, ButtonforSave, ButtonforAdd} from "../../../pages/Admin pages/Employee/Documents/DocumentsContent";
import { getApiUrl } from "../../../api/GetAPI";
import { DOCUMENTS_API, DOCUMENTS_DETAILS_PUT_API } from "../../../api/EndPoints";
import ButtonConfig from "../../../configurations/Button/ButtonConfig";
import DocumentStyles from "./DocumentStyles";
import ModalComponent from '../../form/Formfields/modal/ModalComponent'
import {ModalConfig} from '../../form/Formfields/modal/ModalConfig'
import { postDataImage, putDataFile } from "../../../services/APIService";
import { ModalPayslipConfig } from "../Formfields/modal/ModalPayslipConfig";
import { ModalReviewPayrollConfig } from "../Formfields/modal/ModalReviewPayrollConfig";
import { ModalConfig2 } from "../Formfields/modal/ModalConfig2";
import { useButtonState } from "../../../context/ButtonStateContext";
import { useEffect } from "react";
// const DocumentsFormComponent = ({
//   config,
//   handleNextClick,
//   handleSubmit,
//   employeeId,
//   editEmployees
// }) => {
//   const [values, setValues] = useState({});
//   const [customComponents, setCustomComponents] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const {
//     AddMode,
//     editMode,

//   } = useButtonState();
//   // const handleChange = (name, value) => {
//   //   setValues({ ...values, [name]: value });
//   // };
//   const handleChange = (name, value) => {
//     setValues({ ...values, [name]: value });
//   };
  
//   useEffect(() => {
//     if (editEmployees && editEmployees.Documents && editEmployees.Documents.length > 0) {
//       const updatedValues = {};
//       editEmployees.Documents.forEach((doc, index) => {
//         updatedValues[`document_type_${index}`] = doc.document_type;
//         updatedValues[`file_name_${index}`] = doc.file_name;
//         // Assuming you have other fields to populate like content_type, data, document_number, etc.
//         // Add them similarly as needed
//       });
//       setValues(updatedValues);
//     }
//   }, [editEmployees]);
  
  
  
  
//   // const handleButtonClick = (label, type) => {
//   //   if (label === "Save" && type === "submit") {
//   //     setIsModalOpen(true);
//   //   } else if (label === "Next") {
//   //     handleNextClick(true);
//   //   }
//   // };

//     const handleButtonClick = async (label, type, values) => {
//     console.log("EditMode:", editMode);
//     console.log("AddMode:", AddMode);
//     console.log("Label:", label);
//     console.log("Type:", type);

//     if (AddMode) {
//       // When Add mode is active
//       if (label === "Save" && type === "submit") {
//         try {
//           setIsModalOpen(true); // Open modal
         
//         } catch (error) {
//           console.error("Error calling POST API:", error);
//           // Handle errors here
//         }
//       } else if (label === "Next") {
//         handleNextClick();
//       } 
   
//     } else  if (!AddMode && editMode) {
//       setValues(editEmployees);
//       // When edit mode is active
//       if (label === "Save" && type === "submit") {
//         try {
//           // Assuming BASIC_DETAILS_API_put is the correct endpoint URL for PUT requests
//           await putData(`${DOCUMENTS_DETAILS_PUT_API}/${employeeId}`, values);
//           console.log("PUT API called successfully");
//           // Handle success or update UI accordingly
//         } catch (error) {
//           console.error("Error calling PUT API:", error);
//           // Handle errors here
//         }
//       } else if (label === "Next") {
//         handleNextClick();
//       }

//     }
//     };

 
 

//   useEffect(() => {
//     if (editEmployees && editEmployees.Documents) {
//       setValues(editEmployees.Documents);
//     }
// }, [editEmployees]);
// console.log('editEmployees',editEmployees.Documents)


//   const addCustomComponent = () => {
//     setCustomComponents((prev) => [...prev, { customValue: "" }]); //syntax is creating a new array that includes all the elements from the previous state (prev) and adds a new object { customValue: '' } to the end.
//   }; //adding a new object with customValue: '' to the existing array.

//   const updateCustomValue = (index, value) => {
//     setCustomComponents((prev) =>
//       prev.map((item, i) =>
//         i === index ? { ...item, customValue: value } : item
//       )
//     );
//   };
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
//   const handleFileChange = (name, selectedFile) => {
//     setValues({ ...values, [name]: selectedFile });
//   };

// const onSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const data = {
//       ...values,
//       employee_id: employeeId,
//     };
//     console.log(data);

//     const formData = new FormData();
//     //add non form data to form data
//     Object.keys(data).forEach((key) => {
//       if (key !== "file") {
//         formData.append(key, data[key]);
//       }
//     });
//     //if we have a file, add it to the form data
//     if (data.file) {
//       formData.append("file", data.file);
//     }

//     console.log("Form values:", data);

//     const response = await postDataImage(DOCUMENTS_API, formData);

//     console.log("Form submitted successfully:", response);

//     handleSubmit(data);
//   } catch (error) {
//     console.error("Error submitting form:", error);
//   }
// };
//   return (
//     <form onSubmit={onSubmit}>
//       <div className=" flex-col w-[130vh] h-5/6 mt-8 ">
//         <div className="form-line flex mb-4 ml-20">
//           {config.slice(0, 2).map((field, index) => (
//             <div key={index}>
//               <label className={DocumentStyles[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   icon={field.icon}
//                 />
//               )}
//               {field.type === "file" && (
//                 <FileComponent
//                   name={field.name}
//                   onChange={(file) => handleFileChange(field.name, file)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                   iconPosition={field.iconPosition}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="form-line flex mb-4 ml-20">
//           {config.slice(2, 4).map((field, index) => (
//             <div key={index}>
//               <label className={DocumentStyles[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   icon={field.icon}
//                 />
//               )}
//               {field.type === "file" && (
//                 <FileComponent
//                   name={field.name}
//                   onChange={(file) => handleFileChange(field.name, file)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                   iconPosition={field.iconPosition}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="form-line flex mb-4 ml-20">
//           {config.slice(4, 6).map((field, index) => (
//             <div key={index}>
//               <label className={DocumentStyles[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   icon={field.icon}
//                 />
//               )}
//               {field.type === "file" && (
//                 <FileComponent
//                   name={field.name}
//                   onChange={(file) => handleFileChange(field.name, file)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                   iconPosition={field.iconPosition}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="form-line flex mb-4 ml-20">
//           {config.slice(6, 8).map((field, index) => (
//             <div key={index}>
//               <label className={DocumentStyles[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   icon={field.icon}
//                 />
//               )}
//               {field.type === "file" && (
//                 <FileComponent
//                   name={field.name}
//                   onChange={(file) => handleFileChange(field.name, file)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                   iconPosition={field.iconPosition}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="form-line flex mb-4 ml-20">
//           {config.slice(8, 10).map((field, index) => (
//             <div key={index}>
//               <label className={DocumentStyles[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   icon={field.icon}
//                 />
//               )}
//               {field.type === "file" && (
//                 <FileComponent
//                   name={field.name}
//                   onChange={(file) => handleFileChange(field.name, file)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                   iconPosition={field.iconPosition}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="ml-[50vh]">
//           {" "}
//           <ButtonConfig Config={ButtonforSave} onClick={handleButtonClick} />
//         </div>

//         <div className="ml-20 mb-2 mr-2">
//           {" "}
//           <ButtonConfig Config={ButtonforAdd} onClick={addCustomComponent} />
//         </div>

//         <div className="ml-20">
//           {customComponents.map((customComponent, index) => (
//             <CustomComponent
//               key={index}
//               value={customComponent.customValue}
//               config={customformContent}
//               onCustomChange={(value) => updateCustomValue(index, value)}
//             />
//           ))}
//         </div>
//       </div>
//       <ModalComponent
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         // config={ModalConfig}
//         config={ModalConfig2}
//         // config={ModalPayslipConfig}
//         // config={ModalReviewPayrollConfig}
//       />
//     </form>
//   );
// };

// export default DocumentsFormComponent;

// const DocumentsFormComponent = ({
//   config,
//   handleNextClick,
//   handleSubmit,
//   employeeId,
//   editEmployees
// }) => {
//   const [values, setValues] = useState({});
//   const [customComponents, setCustomComponents] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const { AddMode, editMode } = useButtonState();

//   const handleChange = (name, value) => {
//     setValues({ ...values, [name]: value });
//   };

//   const handleFileChange = (name, selectedFile) => {
//     setValues({ ...values, [name]: selectedFile });
//   };

//   useEffect(() => {
//     if (editEmployees && editEmployees.Documents && editEmployees.Documents.length > 0) {
//       const updatedValues = {};
//       editEmployees.Documents.forEach((doc) => {
//         const type = doc.document_type;
//         const nameFile = `${type}_document`;
//         const nameNumber = `${type}_number`;

//         updatedValues[nameFile] = doc.file_name;
//         updatedValues[nameNumber] = doc.document_number;
//       });
//       setValues(updatedValues);
//     }
//   }, [editEmployees]);

//   // const handleButtonClick = async (label, type) => {
//   //   if (AddMode) {
//   //     if (label === "Save" && type === "submit") {
//   //       setIsModalOpen(true);
//   //     } else if (label === "Next") {
//   //       handleNextClick();
//   //     }
//   //   } else if (!AddMode && editMode) {
//   //     if (label === "Save" && type === "submit") {
//   //       try {
//   //         await putDataFile(`${DOCUMENTS_DETAILS_PUT_API}/${employeeId}`, values);
//   //         console.log("PUT API called successfully");
//   //       } catch (error) {
//   //         console.error("Error calling PUT API:", error);
//   //       }
//   //     } else if (label === "Next") {
//   //       handleNextClick();
//   //     }
//   //   }
//   // };

//   // const onSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const data = { ...values, employee_id: employeeId };
//   //     const formData = new FormData();
//   //     Object.keys(data).forEach((key) => {
//   //       formData.append(key, data[key]);
//   //     });
//   //     const response = await postDataImage(DOCUMENTS_API, formData);
//   //     console.log("Form submitted successfully:", response);
//   //     handleSubmit(data);
//   //   } catch (error) {
//   //     console.error("Error submitting form:", error);
//   //   }
//   // };

//   const onSubmit = async (e, label, type) => {
//     e.preventDefault();
//     try {
//       const data = { ...values, employee_id: employeeId };
//       const formData = new FormData();
//       Object.keys(data).forEach((key) => {
//         formData.append(key, data[key]);
//       });
  
//       if (AddMode) {
//         if (label === "Save" && type === "submit") {
//           setIsModalOpen(true);
//           const response = await postDataImage(DOCUMENTS_API, formData);
//           console.log("Form submitted successfully:", response);
//           handleSubmit(data);
//         } else if (label === "Next") {
//           handleNextClick();
//         }
//       } else if (!AddMode && editMode) {
//         if (label === "Save" && type === "submit") {
//           await putDataFile(`${DOCUMENTS_DETAILS_PUT_API}/${employeeId}`, values);
//           console.log("PUT API called successfully");
//         } else if (label === "Next") {
//           handleNextClick();
//         }
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   const handleButtonClick = async (label, type) => {
//     if (label === "Next") {
//             handleNextClick();
//           }
// }

//   const addCustomComponent = () => {
//     setCustomComponents((prev) => [...prev, { customValue: "" }]);
//   };

//   const updateCustomValue = (index, value) => {
//     setCustomComponents((prev) =>
//       prev.map((item, i) => (i === index ? { ...item, customValue: value } : item))
//     );
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <div className=" flex-col w-[130vh] h-5/6 mt-8 ">
//         <div className="form-line flex mb-4 ml-20">
//           {config.slice(0, 2).map((field, index) => (
//             <div key={index}>
//               <label className={DocumentStyles[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   icon={field.icon}
//                 />
//               )}
//               {field.type === "file" && (
//                 <FileComponent
//                   name={field.name}
//                   onChange={(file) => handleFileChange(field.name, file)}
//                   value={values[field.name] || ""}
//                   textcss={DocumentStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                   iconPosition={field.iconPosition}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="form-line flex mb-4 ml-20">
//           {config.slice(2, 4).map((field, index) => (
//             <div key={index}>
//               <label className={DocumentStyles[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   icon={field.icon}
//                 />
//               )}
//               {field.type === "file" && (
//                 <FileComponent
//                   name={field.name}
//                   onChange={(file) => handleFileChange(field.name, file)}
//                   value={values[field.name] || ""}
//                   textcss={DocumentStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                   iconPosition={field.iconPosition}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="form-line flex mb-4 ml-20">
//           {config.slice(4, 6).map((field, index) => (
//             <div key={index}>
//               <label className={DocumentStyles[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   icon={field.icon}
//                 />
//               )}
//               {field.type === "file" && (
//                 <FileComponent
//                   name={field.name}
//                   onChange={(file) => handleFileChange(field.name, file)}
//                   value={values[field.name] || ""}
//                   textcss={DocumentStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                   iconPosition={field.iconPosition}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="form-line flex mb-4 ml-20">
//           {config.slice(6, 8).map((field, index) => (
//             <div key={index}>
//               <label className={DocumentStyles[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   icon={field.icon}
//                 />
//               )}
//               {field.type === "file" && (
//                 <FileComponent
//                   name={field.name}
//                   onChange={(file) => handleFileChange(field.name, file)}
//                   value={values[field.name] || ""}
//                   textcss={DocumentStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                   iconPosition={field.iconPosition}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="form-line flex mb-4 ml-20">
//           {config.slice(8, 10).map((field, index) => (
//             <div key={index}>
//               <label className={DocumentStyles[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={values[field.name] || ""}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={DocumentStyles[field.textcss].input}
//                   icon={field.icon}
//                 />
//               )}
//               {field.type === "file" && (
//                 <FileComponent
//                   name={field.name}
//                   onChange={(file) => handleFileChange(field.name, file)}
//                   value={values[field.name] || ""}
//                   textcss={DocumentStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                   iconPosition={field.iconPosition}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="ml-[50vh]">
//           <ButtonConfig Config={ButtonforSave} onClick={handleButtonClick} />
//         </div>

//         <div className="ml-20 mb-2 mr-2">
//           <ButtonConfig Config={ButtonforAdd} onClick={addCustomComponent} />
//         </div>

//         <div className="ml-20">
//           {customComponents.map((customComponent, index) => (
//             <CustomComponent
//               key={index}
//               value={customComponent.customValue}
//               config={customformContent}
//               onCustomChange={(value) => updateCustomValue(index, value)}
//             />
//           ))}
//         </div>
//       </div>
//       <ModalComponent
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         config={ModalConfig2}
//       />
//     </form>
//   );
// };

// export default DocumentsFormComponent;
// import { useState, useEffect } from "react";
// import TextComponent from "./TextComponent";
// import FileComponent from "./FileComponent";
// import CustomComponent from "./CustomComponent";
// import { customformContent, ButtonforSave, ButtonforAdd } from "../../../pages/Admin pages/Employee/Documents/DocumentsContent";
// import { DOCUMENTS_API, DOCUMENTS_DETAILS_PUT_API } from "../../../api/EndPoints";
// import ButtonConfig from "../../../configurations/Button/ButtonConfig";
// import DocumentStyles from "./DocumentStyles";
// import ModalComponent from '../../form/Formfields/modal/ModalComponent';
// import { ModalConfig2 } from "../Formfields/modal/ModalConfig2";
// import { postDataImage, putDataFile } from "../../../services/APIService";
// import { useButtonState } from "../../../context/ButtonStateContext";

const DocumentsFormComponent = ({ config, handleNextClick, handleSubmit, employeeId, editEmployees }) => {
  const [values, setValues] = useState({});
  const [customComponents, setCustomComponents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { AddMode, editMode } = useButtonState();

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleFileChange = (name, selectedFile) => {
    setValues({ ...values, [name]: selectedFile });
  };

  useEffect(() => {
    if (editEmployees && editEmployees.Documents && editEmployees.Documents.length > 0) {
      const updatedValues = {};
      editEmployees.Documents.forEach((doc) => {
        const type = doc.document_type;
        const nameFile = `${type}_document`;
        const nameNumber = `${type}_number`;

        updatedValues[nameFile] = doc.file_name;
        updatedValues[nameNumber] = doc.document_number;
      });
      setValues(updatedValues);
    }
  }, [editEmployees]);

  const onSubmit = async (e, label, type) => {
    e.preventDefault();
    try {
      const data = { ...values, employee_id: employeeId };
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (AddMode) {
        if (label === "Save" && type === "submit") {
          setIsModalOpen(true);
          const response = await postDataImage(DOCUMENTS_API, formData);
          console.log("Form submitted successfully:", response);
          handleSubmit(data);
        } else if (label === "Next") {
          handleNextClick();
        }
      } else if (!AddMode && editMode) {
        if (label === "Save" && type === "submit") {
          await putDataFile(`${DOCUMENTS_DETAILS_PUT_API}/${editEmployees.employee_id}`, formData);
          console.log("PUT API called successfully");
        } else if (label === "Next") {
          handleNextClick();
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleButtonClick = (label, type) => {
    if (label === "Next") {
      handleNextClick();
    }
  };

  const addCustomComponent = () => {
    setCustomComponents((prev) => [...prev, { customValue: "" }]);
  };

  const updateCustomValue = (index, value) => {
    setCustomComponents((prev) =>
      prev.map((item, i) => (i === index ? { ...item, customValue: value } : item))
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={(e) => onSubmit(e, "Save", "submit")}>
          <div className=" flex-col w-[130vh] h-5/6 mt-8 ">
            <div className="form-line flex mb-4 ml-20">
              {config.slice(0, 2).map((field, index) => (
                <div key={index}>
                  <label className={DocumentStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === "text" && (
                    <TextComponent
                      name={field.name}
                      placeholder={field.placeholder}
                      value={values[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      textcss={DocumentStyles[field.textcss].input}
                      icon={field.icon}
                    />
                  )}
                  {field.type === "file" && (
                    <FileComponent
                      name={field.name}
                      onChange={(file) => handleFileChange(field.name, file)}
                      value={values[field.name] || ""}
                      textcss={DocumentStyles[field.textcss].input}
                      placeholder={field.placeholder}
                      icon={field.icon}
                      iconPosition={field.iconPosition}
                    />
                  )}
                </div>
              ))}
            </div>
    
            <div className="form-line flex mb-4 ml-20">
              {config.slice(2, 4).map((field, index) => (
                <div key={index}>
                  <label className={DocumentStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === "text" && (
                    <TextComponent
                      name={field.name}
                      placeholder={field.placeholder}
                      value={values[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      textcss={DocumentStyles[field.textcss].input}
                      icon={field.icon}
                    />
                  )}
                  {field.type === "file" && (
                    <FileComponent
                      name={field.name}
                      onChange={(file) => handleFileChange(field.name, file)}
                      value={values[field.name] || ""}
                      textcss={DocumentStyles[field.textcss].input}
                      placeholder={field.placeholder}
                      icon={field.icon}
                      iconPosition={field.iconPosition}
                    />
                  )}
                </div>
              ))}
            </div>
    
            <div className="form-line flex mb-4 ml-20">
              {config.slice(4, 6).map((field, index) => (
                <div key={index}>
                  <label className={DocumentStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === "text" && (
                    <TextComponent
                      name={field.name}
                      placeholder={field.placeholder}
                      value={values[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      textcss={DocumentStyles[field.textcss].input}
                      icon={field.icon}
                    />
                  )}
                  {field.type === "file" && (
                    <FileComponent
                      name={field.name}
                      onChange={(file) => handleFileChange(field.name, file)}
                      value={values[field.name] || ""}
                      textcss={DocumentStyles[field.textcss].input}
                      placeholder={field.placeholder}
                      icon={field.icon}
                      iconPosition={field.iconPosition}
                    />
                  )}
                </div>
              ))}
            </div>
    
            <div className="form-line flex mb-4 ml-20">
              {config.slice(6, 8).map((field, index) => (
                <div key={index}>
                  <label className={DocumentStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === "text" && (
                    <TextComponent
                      name={field.name}
                      placeholder={field.placeholder}
                      value={values[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      textcss={DocumentStyles[field.textcss].input}
                      icon={field.icon}
                    />
                  )}
                  {field.type === "file" && (
                    <FileComponent
                      name={field.name}
                      onChange={(file) => handleFileChange(field.name, file)}
                      value={values[field.name] || ""}
                      textcss={DocumentStyles[field.textcss].input}
                      placeholder={field.placeholder}
                      icon={field.icon}
                      iconPosition={field.iconPosition}
                    />
                  )}
                </div>
              ))}
            </div>
    
            <div className="form-line flex mb-4 ml-20">
              {config.slice(8, 10).map((field, index) => (
                <div key={index}>
                  <label className={DocumentStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === "text" && (
                    <TextComponent
                      name={field.name}
                      placeholder={field.placeholder}
                      value={values[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      textcss={DocumentStyles[field.textcss].input}
                      icon={field.icon}
                    />
                  )}
                  {field.type === "file" && (
                    <FileComponent
                      name={field.name}
                      onChange={(file) => handleFileChange(field.name, file)}
                      value={values[field.name] || ""}
                      textcss={DocumentStyles[field.textcss].input}
                      placeholder={field.placeholder}
                      icon={field.icon}
                      iconPosition={field.iconPosition}
                    />
                  )}
                </div>
              ))}
            </div>
    
            <div className="ml-[50vh]">
          <ButtonConfig Config={ButtonforSave} onClick={() => handleSubmitForm("Save", "submit")} />
        </div>

        <div className="ml-20 mb-2 mr-2">
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
          <ModalComponent
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            config={ModalConfig2}
          />
        </form>
      );
    };

export default DocumentsFormComponent;
