import React, { useState } from 'react';
import axios from 'axios';
import TextStyle from '../Formfields/text/TextStyle';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import PasswordIcon from './PasswordIcon';
import { VscTools } from "react-icons/vsc";
import TagComponent from './TagComponent';
import { TagConfig, ButtonDataforAditional } from '../../../pages/Employee/AditionalDetail/AditionalDetailsContent';
import OptionsComp from './OptionsComp';
import { getApiUrl } from '../../../api/GetAPI';
import { ADITIONAL_DETAILS_API } from '../../../api/EndPoints';
import Button from '../../../configurations/Button/Button';
import ModalComponent from '../Formfields/modal/ModalComponent';
import { ModalConfig } from '../Formfields/modal/ModalConfig'
import { postData } from '../../../services/APIService';
import TextComponent from '../Formfields/text/TextComponent';
import DocumentStyles from '../DocumentsForm/DocumentStyles';
import FileComponent from '../DocumentsForm/FileComponent';
const AditionalDetailFormComponent = ({ config, handleSubmit, employeeId }) => {
    const [values, setValues] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [experienced, setExperienced] = useState(false);

    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value });
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);

    };

    const handleTagChange = (selectedOptions) => {
        setValues({ ...values, [TagConfig[0].name]: selectedOptions });

    };

    const handleOptionsChange = (updatedOptions) => {
        setValues((prevOptions) => ({ ...prevOptions, ...updatedOptions }));

    };

    const handleButtonClick = (label, type) => {
        if (label === "Save" && type === "submit") {
            setIsModalOpen(true);
        }
    };

    const handleFileChange = (name, selectedFile) => {
        setValues({ ...values, [name]: selectedFile });
    };
    const handleCheckboxChange = (event) => {
        setExperienced(event.target.checked); // Update experienced state when checkbox is clicked
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                ...values,
                employee_id: employeeId
            };
            console.log('v2',values)
            // Use the postData function
            const response = await postData(ADITIONAL_DETAILS_API, data);

            console.log('Data sent:', response);

            // If the above API call is successful, trigger the handleSubmit function from props
            handleSubmit(values);
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <form onSubmit={onSubmit} >
            
            <div className='border border-gray-200  p-7 mr-4'>
                <h1 className=' text-gray-800 font-semibold mb-2'>Employee Benefits</h1>
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
                                />
                            )}
                        </div>
                    ))}
                    <div>
                        <TagComponent
                            cardConfig={TagConfig}
                            onOptionChange={handleTagChange}
                        />
                    </div>
                </div>
            </div>

            <div className='mt-4'>
                <OptionsComp onChange={handleOptionsChange} />
            </div>
            <div className='-mt-2'>
                <input type="checkbox"  onChange={handleCheckboxChange} />
                <label > Experienced</label>
                {experienced &&(<div> 
                <div>
                    <div className="translate-x-[vh] -translate-y-[11vh] p-3 mr-2 w-14 flex ">
                        {config.slice(2, 4).map((field, index) => (
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
                                        <TextComponent
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
                <div className="form-line flex mb-4 ml-3">
                    {config.slice(4, 7).map((field, index) => (
                        <div key={index}>
                            <label className={DocumentStyles[field.textcss].label}>
                                {field.label}
                            </label>
                           
                            {field.type === "file" && (
                                <FileComponent
                                    name={field.name}
                                    onChange={(file) => handleFileChange(field.name, file)}
                                    textcss={DocumentStyles[field.textcss].input}
                                    placeholder={field.placeholder}
                                    icon={field.icon}
                                    iconPosition={field.iconPosition}
                                />
                            )}
                        </div>
                    ))}
                </div>
                </div>)}
            </div>

            <div className='form-line flex justify-evenly mb-4 mr-1'>
                <div className='w-96'></div>
                <div className='w-44'></div>
                <div className='buttons flex justify-end mt-6 w-96' >
                    {/* <button type="submit" className='bg-blue-600 text-white px-4 rounded flex items-center p-2 mb-2 mr-5'>Save</button> */}
                    {/* <Button  Configs={ButtonDataforAditional} onClick={handleButtonClick} /> */}
                    <Button  Configs={ButtonDataforAditional} onClick={handleButtonClick} />
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