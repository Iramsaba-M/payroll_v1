import React, { useState } from 'react';
import { RiArrowDropDownFill } from "react-icons/ri";
// import DropCardStyles from './TagStyles';


const TagComponent = ({ cardConfig, onOptionChange }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    

    if (!cardConfig || !cardConfig.length) {
        return null;
    }

    const { label, dropdownOptions,value, placeholder, } = cardConfig[0];

    const handleRemoveOption = (optionLabel) => {
        const updatedOptions = selectedOptions.filter((option) => option !== optionLabel);
        setSelectedOptions(updatedOptions);
        onOptionChange && onOptionChange(updatedOptions);
        
    };

    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue.trim() !== '' && !selectedOptions.includes(selectedValue.trim())) {
            setSelectedOptions([...selectedOptions, selectedValue.trim()]);
            // setNewOption('');
            onOptionChange && onOptionChange([...selectedOptions, selectedValue.trim()]);
        }
        
    };
  
    return (
        <div >
           
            <div className='block text-gray-600 text-xs font-bold my-1'>{label}</div>
            <div className="">
                <div className="">
                    <select
                        value={value}
                        onChange={handleDropdownChange}
                        style={{ appearance: 'none', background: 'transparent' }} 
                        className="border-b-2 hover:border-blue-500 border-gray-100 bg-transparent text-gray text-xs my-2 mr-14 mb-2 px-2 py-1 w-60 leading-tight focus:outline-none"
                    > {value ? null : (
                        <option value="" disabled selected> {placeholder} </option>
                    )}
                        {/* <option value="" disabled selected> {placeholder} </option> */}
                        {dropdownOptions.map((option, index) => (
                            <option key={index} value={option.label}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {value && (
                        <p className="text-gray-500 mt-1"></p>
                    )}
                </div> <RiArrowDropDownFill className='size-6 ml-[29vh] -mt-8 text-gray-700' />
            </div>
            <div className="flex items-center flex-wrap mt-2">
                {selectedOptions.map((tag, index) => (
                    <span key={index}
                   
                    className=" border-gray-100 bg-transparent text-gray text-xs  mr-6 mb-2  leading-tight focus:outline-none"
                     >
                        
                        {tag}
                        <span
                            className="text-gray-400 hover:text-red-500 ml-2"
                            onClick={() => handleRemoveOption(tag)}
                            role="button"
                        >
                            &times;

                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TagComponent;
