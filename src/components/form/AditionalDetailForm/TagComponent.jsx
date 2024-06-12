
import { useState, useEffect } from 'react';
import { RiArrowDropDownFill } from "react-icons/ri";
import PropTypes from 'prop-types';

const TagComponent = ({ cardConfig, onOptionChange, initialSelectedOptions = [], onBlur, formik }) => {
    const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);

    useEffect(() => {
        if (initialSelectedOptions) {
            setSelectedOptions(initialSelectedOptions);
        }
    }, [initialSelectedOptions]);

    if (!cardConfig || !cardConfig.length) {
        return null;
    }

    const { label, dropdownOptions, placeholder } = cardConfig[0];

    const handleRemoveOption = (optionLabel) => {
        const updatedOptions = selectedOptions.filter((option) => option !== optionLabel);
        setSelectedOptions(updatedOptions);
        onOptionChange && onOptionChange(updatedOptions);
    };

    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue.trim() !== '' && !selectedOptions.includes(selectedValue.trim())) {
            const updatedOptions = [...selectedOptions, selectedValue.trim()];
            setSelectedOptions(updatedOptions);
            onOptionChange && onOptionChange(updatedOptions);
        }
    };

    return (
        <div>
            <div className='block text-gray-600 text-xs font-bold my-1'>{label}</div>
            <div className="">
                <div className="">
                    <select
                        value=""
                        onChange={handleDropdownChange}
                        style={{ appearance: 'none', background: 'transparent' }}
                        onBlur={onBlur}
                        className="border-b-2 hover:border-blue-500 border-gray-100 bg-transparent text-gray text-xs my-2 mr-14 mb-2 px-2 py-1 w-60 leading-tight focus:outline-none"
                    >
                        <option value="" disabled>{placeholder}</option>
                        {dropdownOptions.map((option, index) => (
                            <option key={index} value={option.label}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <RiArrowDropDownFill className='size-6 ml-[29vh] -mt-8 text-gray-700' />
                </div>
            </div>
            <div className="flex items-center flex-wrap mt-2">
                {selectedOptions.map((tag, index) => (
                    <span key={index} className="border-gray-100 bg-transparent text-gray text-xs mr-6 mb-2 leading-tight focus:outline-none">
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
            {formik.touched["employee_benefit"] && formik.errors["employee_benefit"] && <p className='error-form text-xs text-red-600'>{formik.errors["employee_benefit"]}</p>}
        </div>
    );
};

TagComponent.propTypes = {
    cardConfig: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            dropdownOptions: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string.isRequired
                })
            ).isRequired,
            placeholder: PropTypes.string.isRequired
        })
    ).isRequired,
    onOptionChange: PropTypes.func.isRequired,
    initialSelectedOptions: PropTypes.array,
    onBlur: PropTypes.func.isRequired,
    formik: PropTypes.object.isRequired
};
export default TagComponent;
