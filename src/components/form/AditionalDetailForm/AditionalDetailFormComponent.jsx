// import React, { useState } from 'react';
// import axios from 'axios';
// import TextStyle from '../Formfields/text/TextStyle';
// import OptionsComponent from '../Formfields/options/OptionsComponent';
// import PasswordIcon from './PasswordIcon';
// import { VscTools } from "react-icons/vsc";
// import TagComponent from './TagComponent';
// import { TagConfig, ButtonDataforAditional,radiocontent} from '../../../pages/Admin pages/Employee/AditionalDetail/AditionalDetailsContent';
// import OptionsComp from './OptionsComp';
// import { getApiUrl } from '../../../api/GetAPI';
// import { ADITIONAL_DETAILS_API,ADITIONAL_DETAILS_PUT_API } from '../../../api/EndPoints';
// import Button from '../../../configurations/Button/Button';
// import ModalComponent from '../Formfields/modal/ModalComponent';
// import { ModalConfig } from '../Formfields/modal/ModalConfig'
// import { postData, postDataImage } from '../../../services/APIService';
// import TextComponent from '../Formfields/text/TextComponent';
// import DocumentStyles from '../DocumentsForm/DocumentStyles';
// import FileComponent from '../DocumentsForm/FileComponent';
// import RadioComponent from '../Formfields/radio_button/RadioComponent';
// import NumberComponent from '../Formfields/number/numbercompoent';
// import { useButtonState } from '../../../context/ButtonStateContext';
// import { useEffect } from 'react';
// const AditionalDetailFormComponent = ({ config, handleSubmit, employeeId ,editEmployees}) => {
//     const [values, setValues] = useState({});
//     const [showPassword, setShowPassword] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const [isexperienced, setExperienced] = useState(false);

//     const handleChange = (name, value) => {
//         setValues({ ...values, [name]: value });
//     };

//     const {
//         AddMode,
//         editMode,
//     } = useButtonState();
//       console.log('editEmployees',editEmployees.Additional);

//       useEffect(() => {
//         // If editEmployees.Additional exists, populate form fields with its data
//         if (editEmployees && editEmployees.employee_benefit) {
//             const { employee_benefit, ...rest } = editEmployees;
//             const formattedValues = {
//                 ...rest,
//                 employee_benefit: employee_benefit[0].split(','),
//                 experience: {
//                     ...rest.experience,
//                     experience_type: rest.experience.experience_type || ''
//                 }
//             };
//             setValues(formattedValues);
//         } else {
//             // If no data is available, initialize form fields with empty values
//             const initialFormValues = {};
//             // Populate initialFormValues with default values for each field in config
//             config.forEach(field => {
//                 initialFormValues[field.name] = '';
//             });
//             // Set the initial state of form fields
//             setValues(initialFormValues);
//         }
//     }, [editEmployees]);



//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword((prevShowPassword) => !prevShowPassword);

//     };

//     const handleTagChange = (selectedOptions) => {
//         setValues({ ...values, [TagConfig[0].name]: selectedOptions });

//     };

//     const handleOptionsChange = (updatedOptions) => {
//         setValues((prevOptions) => ({ ...prevOptions, ...updatedOptions }));

//     };
//     const handleRadioChange = (name, option) => {
//         setValues({
//             ...values,
//             [name]: option
//         });
//         setExperienced(option);
//     };

//     // const handleButtonClick = (label, type) => {
//     //     if (label === "Save" && type === "submit") {
//     //         setIsModalOpen(true);
//     //     }
//     // };

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
//           await putData(`${ADITIONAL_DETAILS_PUT_API}/${employeeId}`, values);
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


//     const handleFileChange = (name, selectedFile) => {
//         setValues({ ...values, [name]: selectedFile });
//         console.log(selectedFile.name)
//     };


//     const onSubmit = async (e) => {
//         e.preventDefault();

//         try {

//             const data = {
//                 ...values,
//                 employee_id: employeeId,

//                 // "experience":experiencedvalues
//             };
//             console.log('v2',data)

//             const formData = new FormData();
//             //add non form data to form data
//             Object.keys(data).forEach((key) => {
//               if (key !== "file") {
//                 formData.append(key, data[key]);
//               }
//             });
//             //if we have a file, add it to the form data
//             if (data.file) {
//               formData.append("file", data.file);
//             }
//             const response = await postDataImage(ADITIONAL_DETAILS_API, formData);

//             console.log('Data sent:', response);

//             // If the above API call is successful, trigger the handleSubmit function from props
//             handleSubmit(values);
//             window.location.reload();
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };
//     return (
//         <form onSubmit={onSubmit} >

//             <div className='border border-gray-200  p-7 mr-4'>
//                 <h1 className=' text-gray-800 font-semibold mb-2'>Employee Benefits</h1>
//                 <div className="form-line flex mb-4">
//                 {config.slice(1, 2).map((field, index) => (
//     <div key={index} className={`form-field ${field.fieldstyle}`}>
//         <label className={TextStyle[field.textcss].label}>{field.label}</label>
//         {field.type === 'options' && (
//             <OptionsComponent
//                 name={field.name}
//                 value={values[field.name] || ''}
//                 options={field.options}
//                 onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={TextStyle[field.textcss].input}
//                 placeholder={field.placeholder}
//                 icon={field.icon}
//             />
//         )}
//     </div>
// ))}
//                     <div>
//                         <TagComponent
//                             cardConfig={TagConfig}
//                             onOptionChange={handleTagChange}
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className='mt-4'>
//                 <OptionsComp onChange={handleOptionsChange} />
//             </div>
//                 <div className='-mt-2'>
//                     <h1 className=' text-gray-800 font-semibold mb-2'>Employee Experiance</h1>
//                     <div className='translate-x-2'>

//                         {radiocontent.map((field, index) => (

//                             <div key={index} className='flex flex-col justify-between '>


//                                 <label className='translate-y-5 -mt-4  ml-7'>{field.label}</label>
//                                 {field.type === 'radio' && (

//                                     <RadioComponent
//                                         name={field.name}
//                                         value={field.value}
//                                         checked={values[field.name] === field.value}
//                                         onChange={() => handleRadioChange(field.name, field.value)}
//                                         textcss={TextStyle[field.textcss].label}
//                                     />

//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                     {isexperienced === 'experienced' && (<div>
//                         <div>
//                             <div className="translate-x-[vh] -translate-y-[11vh] p-3 mr-2 w-14 flex ">
//                                 {config.slice(2, 4).map((field, index) => (
//                                     <div key={index}>
//                                         <label className={TextStyle[field.textcss].label}>
//                                             {field.label}
//                                         </label>
//                                         {field.type === "number" && (
//                                             <NumberComponent
//                                                 name={field.name}
//                                                 placeholder={field.placeholder}
//                                                 value={values[field.name] || ""}
//                                                 onChange={(e) => handleChange(field.name, e.target.value)}
//                                                 textcss={TextStyle[field.textcss].input}
//                                             />
//                                         )}
//                                         <div className="">
//                                             {field.type === "text" && (
//                                                 <TextComponent
//                                                     name={field.name}
//                                                     value={values[field.name] || ""}
//                                                     onChange={(e) => handleChange(field.name, e.target.value)}
//                                                     textcss={TextStyle[field.textcss].input}
//                                                     placeholder={field.placeholder}
//                                                 />
//                                             )}
//                                         </div>
//                                     </div>
//                                 ))}

//                             </div>

//                         </div>
//                         <div className="form-line flex mb-4 ml-3">
//                             {config.slice(4, 7).map((field, index) => (
//                                 <div key={index}>
//                                     <label className={DocumentStyles[field.textcss].label}>
//                                         {field.label}
//                                     </label>

//                                     {field.type === "file" && (
//                                         <FileComponent
//                                             name={field.name}
//                                             onChange={(file) => handleFileChange(field.name, file)}
//                                             textcss={DocumentStyles[field.textcss].input}
//                                             placeholder={field.placeholder}
//                                             icon={field.icon}
//                                             iconPosition={field.iconPosition}
//                                         />
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>)}
//                 </div>

//             <div className='form-line flex justify-evenly mb-4 mr-1'>
//                 <div className='w-96'></div>
//                 <div className='w-44'></div>
//                 <div className='buttons flex justify-end mt-6 w-96' >

//                     <Button  Configs={ButtonDataforAditional} onClick={handleButtonClick} />
//                 </div>
//             </div>
//             <ModalComponent
//                 isOpen={isModalOpen}
//                 onClose={handleCloseModal}
//                 config={ModalConfig}
//             />
//         </form>
//     );
// };

// export default AditionalDetailFormComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextStyle from '../Formfields/text/TextStyle';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import PasswordIcon from './PasswordIcon';
import { VscTools } from "react-icons/vsc";
import TagComponent from './TagComponent';
import { TagConfig, ButtonDataforAditional, radiocontent } from '../../../pages/Admin pages/Employee/AditionalDetail/AditionalDetailsContent';
import OptionsComp from './OptionsComp';
import { getApiUrl } from '../../../api/GetAPI';
import { ADITIONAL_DETAILS_API, ADITIONAL_DETAILS_PUT_API } from '../../../api/EndPoints';
import Button from '../../../configurations/Button/Button';
import ModalComponent from '../Formfields/modal/ModalComponent';
import { ModalConfig } from '../Formfields/modal/ModalConfig';
import { postData, postDataImage, putData, putDataFile } from '../../../services/APIService';
import TextComponent from '../Formfields/text/TextComponent';
import DocumentStyles from '../DocumentsForm/DocumentStyles';
import FileComponent from '../DocumentsForm/FileComponent';
import RadioComponent from '../Formfields/radio_button/RadioComponent';
import NumberComponent from '../Formfields/number/numbercompoent';
import { useButtonState } from '../../../context/ButtonStateContext';
import { useFormik } from 'formik';
import { createInitialValues, formSchema, simplifiedData } from '../../../configurations/ValidationSchema/ValidationSchema';
import { OptionData } from '../../../pages/Admin pages/Employee/AditionalDetail/AditionalDetailsContent';

const AditionalDetailFormComponent = ({ config, handleSubmit, employeeId, editEmployees }) => {
    const [values, setValues] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isexperienced, setExperienced] = useState(false);

    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value });
        formik.setValues({ ...formik.values, [name]: value });
    };

    const { AddMode, editMode } = useButtonState();

    ///////////////////////////////////////////////////////////////

    const mergedConfig = [];
    if (TagConfig) {

        config.forEach(item => {
            mergedConfig.push(item);
        });
        mergedConfig.push(TagConfig[0]);
        mergedConfig.push(radiocontent[1]);
        mergedConfig.push(OptionData.status);

    } else {
        console.error("TagConfig at index 1 does not exist");
    }

    console.log("Merged Config:", mergedConfig);

    const formik = useFormik({
        initialValues: createInitialValues(mergedConfig),
        validationSchema: formSchema(simplifiedData(mergedConfig)),
    });

    console.log('er', formik.values, formik.errors, values);

    //////////////////////////////////////////////////////////////////////////
    // useEffect(() => {
    //     if (editEmployees && editEmployees.Additional) {
    //         const { experience, employee_benefit, ...rest } = editEmployees.Additional;
    //         const formattedValues = {
    //             ...rest,
    //             employee_benefit: employee_benefit[0].split(','),
    //             ...experience // Directly spread experience fields into formattedValues
    //         };
    //         setValues(formattedValues);
    //         setExperienced(experience.experience_type);
    //     } else {
    //         const initialFormValues = {};
    //         config.forEach(field => {
    //             initialFormValues[field.name] = '';
    //         });
    //         setValues(initialFormValues);
    //     }
    // }, [editEmployees, config]);

    useEffect(() => {
        if (editEmployees && editEmployees.Additional) {
            const { experience, employee_benefit, ...rest } = editEmployees.Additional;
            const formattedValues = {
                ...rest,
                employee_benefit: employee_benefit[0].split(','),
                ...experience // Directly spread experience fields into formattedValues
            };
            setValues(formattedValues);
            formik.setValues(formattedValues);
            setExperienced(experience.experience_type);
        } else {
            const initialFormValues = {};
            config.forEach(field => {
                initialFormValues[field.name] = '';
            });
            setValues(initialFormValues);
        }
    }, [editEmployees, config]);



    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const handleTagChange = (selectedOptions) => {
        setValues({ ...values, [TagConfig[0].name]: selectedOptions });
        formik.setValues({ ...formik.values, [TagConfig[0].name]: selectedOptions });
    };

    const handleOptionsChange = (updatedOptions) => {
        setValues(prevOptions => ({ ...prevOptions, ...updatedOptions }));
        formik.setValues(prevOptions => ({ ...prevOptions, ...updatedOptions }));
    };

    const handleRadioChange = (name, option) => {
        setValues({ ...values, [name]: option });
        formik.setValues({ ...formik.values, [name]: option });
        setExperienced(option);
    };

    // const handleButtonClick = async (label, type) => {
    //     if (AddMode) {
    //         if (label === "Save" && type === "submit") {
    //             setIsModalOpen(true);
    //         }
    //     } else if (!AddMode && editMode) {
    //         if (label === "Save" && type === "submit") {
    //             try {
    //                 await putDataFile(`${ADITIONAL_DETAILS_PUT_API}/${editEmployees.employee_id}`, values);
    //                 console.log("PUT API called successfully");
    //             } catch (error) {
    //                 console.error("Error calling PUT API:", error);
    //             }
    //         }
    //     }
    // };

    const handleButtonClick = async (label, type) => {
        if (AddMode) {
            if (label === "Save" && type === "submit") {
                // setIsModalOpen(true);
            }
        } else if (!AddMode && editMode) {
            if (label === "Save" && type === "submit") {
                const formData = new FormData();

                // Dynamically append each key-value pair from values object to formData
                Object.keys(values).forEach(key => {
                    const value = values[key];
                    if (Array.isArray(value)) {
                        value.forEach(item => {
                            formData.append(`${key}[]`, item);
                        });
                    } else {
                        formData.append(key, value || '');
                    }
                });

                try {
                    formik.handleSubmit();
                    if (formik.isValid) {
                        const response = await putDataFile(`${ADITIONAL_DETAILS_PUT_API}?employee_id=${editEmployees.employee_id}`, formData);
                        console.log("PUT API called successfully:", response);
                        window.location.reload();
                    }
                } catch (error) {
                    console.error("Error calling PUT API:", error);
                }
            }
        }
    };


    const handleFileChange = (name, selectedFile) => {
        setValues({ ...values, [name]: selectedFile });
        formik.setValues({ ...formik.values, [name]: selectedFile });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { ...values, employee_id: employeeId };
            const formData = new FormData();
            Object.keys(data).forEach(key => {
                if (key !== "file") {
                    formData.append(key, data[key]);
                }
            });
            if (data.file) {
                formData.append("file", data.file);
            }
            formik.handleSubmit();
            if (formik.isValid) {
                const response = await postDataImage(ADITIONAL_DETAILS_API, formData);
                console.log('Data sent:', response);
                setIsModalOpen(true);
                window.location.reload();
                handleSubmit(values);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='border border-gray-200 p-7 mr-4'>
                <h1 className='text-gray-800 font-semibold mb-2'>Employee Benefits</h1>
                <div className="form-line flex mb-4">
                    {config.slice(1, 2).map((field, index) => (
                        <div key={index} className={`form-field ${field.fieldstyle}`}>
                            <label className={TextStyle[field.textcss].label}>{field.label}</label>
                            {field.type === 'options' && (
                                <OptionsComponent
                                    name={field.name}
                                    value={values[field.name] || ''}
                                    options={field.options}
                                    onChange={(e) => handleChange(field.name, e.target.value)}
                                    textcss={TextStyle[field.textcss].input}
                                    placeholder={field.placeholder}
                                    icon={field.icon}

                                    onBlur={formik.handleBlur}
                                />
                            )}
                            {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
                        </div>
                    ))}
                    <div>
                        <TagComponent
                            cardConfig={TagConfig}
                            onOptionChange={handleTagChange}
                            initialSelectedOptions={values.employee_benefit || []}

                            onBlur={formik.handleBlur}
                            formik={formik}
                        />

                    </div>
                </div>
            </div>

            <div className='mt-4'>
                <OptionsComp onChange={handleOptionsChange}
                    initialValues={{
                        employee_status: values.employee_status,
                        type: values.type,
                        reason: values.reason
                    }}

                    onBlur={formik.handleBlur}
                    formik={formik}
                />
            </div>

            <div className='-mt-2'>
                <h1 className='text-gray-800 font-semibold mb-2'>Employee Experience</h1>
                <div className='translate-x-2'>
                    {radiocontent.map((field, index) => (
                        <div key={index} className='flex flex-col justify-between'>
                            <label className='translate-y-5 -mt-4 ml-7'>{field.label}</label>
                            {field.type === 'radio' && (
                                <RadioComponent
                                    name={field.name}
                                    value={field.value}
                                    checked={values[field.name] === field.value}
                                    onChange={() => handleRadioChange(field.name, field.value)}
                                    textcss={TextStyle[field.textcss].label}
                                    onBlur={formik.handleBlur}
                                />
                            )}

                        </div>
                    ))}
                    {formik.touched["experience_type"] && formik.errors["experience_type"] && <p className='error-form text-xs ml-40 -translate-y-[84px] text-red-600'>{formik.errors["experience_type"]}</p>}
                </div>
                {isexperienced === 'experienced' && (
                    <div>
                        <div className="translate-x-[vh] -translate-y-[11vh] p-3 mr-2 w-14 flex">
                            {config.slice(2, 4).map((field, index) => (
                                <div key={index}>
                                    <label className={TextStyle[field.textcss].label}>{field.label}</label>
                                    {field.type === "number" && (
                                        <NumberComponent
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            value={values[field.name] || ""}
                                            onChange={(e) => handleChange(field.name, e.target.value)}
                                            textcss={TextStyle[field.textcss].input}
                                            onBlur={formik.handleBlur}
                                        />
                                    )}
                                    {field.type === "text" && (
                                        <TextComponent
                                            name={field.name}
                                            value={values[field.name] || ""}
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
                        <div className="form-line flex mb-4 ml-3">
                            {config.slice(4, 7).map((field, index) => (
                                <div key={index}>
                                    <label className={DocumentStyles[field.textcss].label}>{field.label}</label>
                                    {field.type === "file" && (
                                        <FileComponent
                                            name={field.name}
                                            onChange={(file) => handleFileChange(field.name, file)}
                                            textcss={DocumentStyles[field.textcss].input}
                                            placeholder={field.placeholder}
                                            icon={field.icon}
                                            iconPosition={field.iconPosition}
                                            fileData={values[field.name]} // Pass the base64 data here

                                            onBlur={formik.handleBlur}
                                        />
                                    )}
                                    {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className='form-line flex justify-evenly mb-4 mr-1'>
                <div className='w-96'></div>
                <div className='w-44'></div>
                <div className='buttons flex justify-end mt-6 w-96'>
                    <Button Configs={ButtonDataforAditional} onClick={handleButtonClick} />
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

export default AditionalDetailFormComponent;