import React, { useState } from 'react';
import axios from 'axios';
import TextStyle from '../Formfields/text/TextStyle';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import PasswordIcon from './PasswordIcon';
import { VscTools } from "react-icons/vsc";
import TagComponent from './TagComponent';
import {TagConfig, ButtonDataforAditional} from '../../../pages/Employee/AditionalDetail/AditionalDetailsContent';
import OptionsComp from './OptionsComp';
import { getApiUrl } from '../../../api/GetAPI';
import { ADITIONAL_DETAILS_API } from '../../../api/EndPoints';
import Button from '../../../configurations/Button/Button';
const AditionalDetailFormComponent = ({ config, handleSubmit, employeeId }) => {
    const [values, setValues] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value });
    };
    // const handleCloseModal = () => {
    //     setIsModalOpen(false);
    //   };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);

    };

    const handleTagChange = (selectedOptions) => {
        setValues({ ...values, [TagConfig[0].name]: selectedOptions });

    };

    const handleOptionsChange = (updatedOptions) => {
        setValues((prevOptions) => ({ ...prevOptions, ...updatedOptions }));

    };

    // const handleButtonClick = (label, type) => {
    //     if (label === "Save" && type === "submit") {
    //       setIsModalOpen(true);
    //     } 
    //   };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const data={
                ...values,employee_id:employeeId
            }
            // console.log(data);
              const response = await axios.post(getApiUrl(ADITIONAL_DETAILS_API), data);


            console.log('Data sent:', response.data);

            // If the above API call is successful, trigger the handleSubmit function from props
            handleSubmit(values);
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
        }

    };
    return (
        <form onSubmit={onSubmit} >
            <div className='border border-gray-300  mb-5 p-5 mr-4'>
                <h1 className='text-gray-800 font-semibold mb-2'>Security</h1>
                <div className="form-line flex mb-4 ">
                    {config.slice(0, 1).map((field, index) => (
                        <div key={index} className={`form-field ${field.fieldstyle}`}>

                            <label className={TextStyle[field.textcss].label}>{field.label}</label>
                            {field.type === 'password' && (
                                <PasswordIcon
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    value={values[field.name] || ''}
                                    onChange={(e) => handleChange(field.name, e.target.value)}
                                    textcss={TextStyle[field.textcss].input}
                                    icon={showPassword ? field.icon2 : field.icon}
                                    showPassword={showPassword}
                                    togglePasswordVisibility={togglePasswordVisibility}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex justify-col'>
                    <button type="button" className=' text-blue-600  rounded flex items-center  mb-2 mr-2'>Reset Password  </button>
                    <span className='ml-2' ><VscTools /></span>
                </div>
            </div>

            <div className='border border-gray-300  p-7 mr-4'>
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
            <div className='form-line flex justify-evenly mb-4 mr-1'>      
              <div className='w-96'></div> 
              <div className='w-44'></div>                    
            <div className='buttons flex justify-end mt-6 w-96' >
                {/* <button type="submit" className='bg-blue-600 text-white px-4 rounded flex items-center p-2 mb-2 mr-5'>Save</button> */}
                {/* <Button  Configs={ButtonDataforAditional} onClick={handleButtonClick} /> */}
                <Button  Configs={ButtonDataforAditional} onClick={()=>onSubmit} />
            </div>
            </div> 
            {/* <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={ModalConfig}
      /> */}
        </form>
    );
};

export default AditionalDetailFormComponent;