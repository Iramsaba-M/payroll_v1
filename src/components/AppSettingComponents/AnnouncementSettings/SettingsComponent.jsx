

// import { useState } from "react";
// import TextStyle from "../../form/Formfields/text/TextStyle";
// import { IoSettingsOutline } from "react-icons/io5"; // Import the settings icon
// import OptionsComponent from "../../form/Formfields/options/OptionsComponent"; // Assuming you have this component
// import DateComponent from "../../form/Formfields/date/DateComponent"; // Assuming you have this component
// import { settingsModelconfig } from "./AnnouncementSettingContent";

// const SettingsComponent = ({ Settingvalue }) => {
//     const [notifyAllEmployees, setNotifyAllEmployees] = useState(false);
//     const [disableComments, setDisableComments] = useState(false);
//     const [values, setValues] = useState({});
//     const [emailSuggestions,setEmailSuggestions]=useState ()

//     useEffect(() => {
//         const fetchEmails = async () => {
//           try {
//             const response = await fetch('http://localhost:3000/emails');
//             const data = await response.json();
//             setEmailSuggestions(data);
//           } catch (error) {
//             console.error('Error fetching email suggestions:', error);
//           }
//         };
//         fetchEmails();
//       }, []);

//     const handleChange = (name, value) => {
//         setValues({ ...values, [name]: value });
//         Settingvalue({ ...values, [name]: value });
//     };

//     const handleCheckboxChange = (name, value) => {
//         setValues({ ...values, [name]: value });
//         Settingvalue({ ...values, [name]: value });
//     };

//     return (
//         <div className="preview mt-4 p-2 bg-white border rounded">
//             <h1 className="flex font-bold text-blue-500 items-center">Publish Settings <span className="ml-2"><IoSettingsOutline /></span></h1>
//             <div>
//                 {settingsModelconfig.map((field, index) => (
//                     <div key={index} className={`form-field ${field.fieldstyle}`}>
//                         <div className="absolute ml-[30vh] mt-8">{field.icon}</div>
//                         <label className={TextStyle[field.textcss].label}>
//                             {field.label}
//                         </label>
//                         {field.type === "options" && (
//                             <OptionsComponent
//                                 name={field.name}
//                                 options={field.options}
//                                 onChange={(e) => handleChange(field.name, e.target.value)}
//                                 textcss={TextStyle[field.textcss].input}
//                                 placeholder={field.placeholder}
//                                 value={values[field.name] || ""}
//                             />
//                         )}
//                         {field.type === "date" && (
//                             <DateComponent
//                                 name={field.name}
//                                 placeholder={field.placeholder}
//                                 onChange={(e) => handleChange(field.name, e.target.value)}
//                                 textcss={TextStyle[field.textcss].input}
//                                 value={values[field.name] || ""}
//                             />
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <div className="form-field mt-4">
//                 <input
//                     type="checkbox"
//                     id="notifyAllEmployees"
//                     checked={notifyAllEmployees}
//                     onChange={(e) => {
//                         setNotifyAllEmployees(e.target.checked);
//                         handleCheckboxChange("notifyAllEmployees", e.target.checked);
//                     }}
//                     className="mr-2"
//                 />
//                 <label htmlFor="notifyAllEmployees" >
//                     Notify all employees
//                 </label>
//             </div>
//             <div className="form-field mt-4">
//                 <input
//                     type="checkbox"
//                     id="disableComments"
//                     checked={disableComments}
//                     onChange={(e) => {
//                         setDisableComments(e.target.checked);
//                         handleCheckboxChange("disableComments", e.target.checked);
//                     }}
//                     className="mr-2"
//                 />
//                 <label htmlFor="disableComments" >
//                     Disable comments
//                 </label>
//             </div>
//             <div>
//                 <p>Notify any others</p>
//                 <div className="search">

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SettingsComponent;



// import React, { useState, useEffect } from "react";
// import TextStyle from "../../form/Formfields/text/TextStyle";
// import { IoSettingsOutline } from "react-icons/io5";
// import OptionsComponent from "../../form/Formfields/options/OptionsComponent";
// import DateComponent from "../../form/Formfields/date/DateComponent";
// import { settingsModelconfig } from "./AnnouncementSettingContent";
// import CustomEmailInput from "./Customemailinput";

// const SettingsComponent = ({ Settingvalue }) => {
//     const [notifyAllEmployees, setNotifyAllEmployees] = useState(false);
//     const [disableComments, setDisableComments] = useState(false);
//     const [values, setValues] = useState({});
//     const [emailSuggestions, setEmailSuggestions] = useState([]);

//     useEffect(() => {
//         const fetchEmails = async () => {
//             try {
//                 const response = await fetch('http://localhost:3000/emails');
//                 const data = await response.json();
//                 const emails = data.map(item => item.email); // Extract email strings
//                 setEmailSuggestions(emails);
//             } catch (error) {
//                 console.error('Error fetching email suggestions:', error);
//             }
//         };
//         fetchEmails();
//     }, []);

//     const handleChange = (name, value) => {
//         setValues({ ...values, [name]: value });
//         Settingvalue({ ...values, [name]: value });
//     };

//     const handleCheckboxChange = (name, value) => {
//         setValues({ ...values, [name]: value });
//         Settingvalue({ ...values, [name]: value });
//     };

//     const handleEmailsChange = (emails) => {
//         setValues({ ...values, notifyOthers: emails });
//         Settingvalue({ ...values, notifyOthers: emails });
//     };

//     return (
//         <div className="preview mt-4 p-2 bg-whit border rounded bg-blue-50 ">
//             <h1 className="flex font-bold text-blue-500 items-center">Publish Settings <span className="ml-2"><IoSettingsOutline /></span></h1>
//             <div className="ml-2">
//                 <div>
//                     {settingsModelconfig.map((field, index) => (
//                         <div key={index} className='flex items-baseline'>
//                             <div className="absolute ml-[17rem] mt-8">{field.icon}</div>
//                             <label className={TextStyle[field.textcss].label}>
//                                 {field.label}
//                             </label>
//                             {field.type === "options" && (
//                                 <OptionsComponent
//                                     name={field.name}
//                                     options={field.options}
//                                     onChange={(e) => handleChange(field.name, e.target.value)}
//                                     textcss={TextStyle[field.textcss].input}
//                                     placeholder={field.placeholder}
//                                     value={values[field.name] || ""}
//                                 />
//                             )}
//                             {field.type === "date" && (
//                                 <DateComponent
//                                     name={field.name}
//                                     placeholder={field.placeholder}
//                                     onChange={(e) => handleChange(field.name, e.target.value)}
//                                     textcss={TextStyle[field.textcss].input}
//                                     value={values[field.name] || ""}
//                                 />
//                             )}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="form-field mt-4 items-baseline text-gray-700 text-sm">
//                     <input
//                         type="checkbox"
//                         id="notifyAllEmployees"
//                         checked={notifyAllEmployees}
//                         onChange={(e) => {
//                             setNotifyAllEmployees(e.target.checked);
//                             handleCheckboxChange("notifyAllEmployees", e.target.checked);
//                         }}
//                         className="mr-1 mt-1"
//                     />
//                     <label htmlFor="notifyAllEmployees" >
//                         Notify all employees
//                     </label>
//                 </div>
//                 <div className="form-field mt-3 items-baseline text-gray-700 text-sm">
//                     <input
//                         type="checkbox"
//                         id="disableComments"
//                         checked={disableComments}
//                         onChange={(e) => {
//                             setDisableComments(e.target.checked);
//                             handleCheckboxChange("disableComments", e.target.checked);
//                         }}
//                         className="mr-1"
//                     />
//                     <label htmlFor="disableComments" >
//                         Disable comments
//                     </label>
//                 </div>
//                 <div className="flex mt-2 items-baseline">
//                     <p className="text-sm text-gray-700 w-40">Notify any others</p>
//                     <div className="ml-3">
//                         <CustomEmailInput
//                             emailSuggestions={emailSuggestions}
//                             onEmailsChange={handleEmailsChange}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SettingsComponent;



// SettingsComponentStyles.js
// export const settingsStyles = {
//     container: "preview mt-4 p-2  border border-grey rounded-md shadow bg-blue-50 ",
//     header: "flex font-bold text-blue-500 items-center",
//     icon: "ml-2",
//     fieldContainer: "flex items-baseline",
//     fieldIcon: "absolute ml-[17rem] mt-8",
//     formField: "form-field -mt-2 items-baseline text-gray-700 text-sm",
//     checkboxLabel: "text-sm text-gray-700",
//     emailInputContainer: "flex mt-2 items-baseline mt-3 w-[29rem]",
//     emailInputLabel: "text-sm text-gray-700 ",
//     emailInputWrapper: "ml-3",
// };


import React, { useState, useEffect } from "react";
import TextStyle from "../../form/Formfields/text/TextStyle";
import { IoSettingsOutline } from "react-icons/io5";
import OptionsComponent from "../../form/Formfields/options/OptionsComponent";
import DateComponent from "../../form/Formfields/date/DateComponent";
import { settingsModelconfig } from "./AnnouncementSettingContent";
import CustomEmailInput from "./Customemailinput";
import { settingsStyles } from "./AnnouncementSettingStyles";

const SettingsComponent = ({ Settingvalue }) => {
    // const [notifyAllEmployees, setNotifyAllEmployees] = useState(false);
    // const [disableComments, setDisableComments] = useState(false);
    const [values, setValues] = useState({});
    const [emailSuggestions, setEmailSuggestions] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const response = await fetch('http://localhost:3000/emails');
                const data = await response.json();
                const emails = data.map(item => item.email); // Extract email strings
                setEmailSuggestions(emails);
            } catch (error) {
                console.error('Error fetching email suggestions:', error);
            }
        };
        fetchEmails();
    }, []);

    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value });
        Settingvalue({ ...values, [name]: value });
    };

    const handleCheckboxChange = (name, value) => {
        setValues({ ...values, [name]: value });
        Settingvalue({ ...values, [name]: value });
    };

    const handleEmailsChange = (emails) => {
        setValues({ ...values, notifyOthers: emails });
        Settingvalue({ ...values, notifyOthers: emails });
    };

    return (
        <div className={settingsStyles.container}>
            <h1 className={settingsStyles.header}>
                Publish Settings
                <span className={settingsStyles.icon}>
                    <IoSettingsOutline />
                </span>
            </h1>
            <div className="ml-2">
                <div>
                    {settingsModelconfig.slice(0, 3).map((field, index) => (
                        <div key={index} className={settingsStyles.fieldContainer}>
                            <div className={settingsStyles.fieldIcon}>{field.icon}</div>
                            <label className={TextStyle[field.textcss].label}>
                                {field.label}
                            </label>
                            {field.type === "options" && (
                                <OptionsComponent
                                    name={field.name}
                                    options={field.options}
                                    onChange={(e) => handleChange(field.name, e.target.value)}
                                    textcss={TextStyle[field.textcss].input}
                                    placeholder={field.placeholder}
                                    value={values[field.name] || ""}
                                />
                            )}
                            {field.type === "date" && (
                                <DateComponent
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    onChange={(e) => handleChange(field.name, e.target.value)}
                                    textcss={TextStyle[field.textcss].input}
                                    value={values[field.name] || ""}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className={settingsStyles.formField}>
                    {settingsModelconfig.map((field, index) => (
                        <div key={index} >
                            {field.type === "checkbox" && (
                                <>
                                    <input
                                        type={field.type}
                                        id={field.name}
                                        checked={values[field.name] || ""}
                                        onChange={(e) => {
                                            // setNotifyAllEmployees(e.target.checked);
                                            handleCheckboxChange(field.name, e.target.checked);
                                        }}
                                        className="mr-1 mt-3"
                                    />
                                    <label htmlFor={field.name} className={settingsStyles.checkboxLabel}>
                                        {field.label}
                                    </label>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className={settingsStyles.emailInputContainer}>
                    <p className={settingsStyles.emailInputLabel}>Notify any others</p>
                    <div className={settingsStyles.emailInputWrapper}>
                        <CustomEmailInput
                            emailSuggestions={emailSuggestions}
                            onEmailsChange={handleEmailsChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsComponent;

