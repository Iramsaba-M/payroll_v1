
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import TextStyle from '../Formfields/text/TextStyle';
import OptionsComponent from '../Formfields/options/OptionsComponent';
import TagComponent from './TagComponent';
import { TagConfig, ButtonDataforAditional, radiocontent } from '../../../pages/Admin pages/Employee/AditionalDetail/AditionalDetailsContent';
import { TagConfig, ButtonDataforAditional, radiocontent } from '../../../pages/Admin pages/Employee/AditionalDetail/AditionalDetailsContent';
import OptionsComp from './OptionsComp';
import { ADITIONAL_DETAILS_API, ADITIONAL_DETAILS_PUT_API } from '../../../api/EndPoints';
import Button from '../../../configurations/Button/Button';
import ModalComponent from '../Formfields/modal/ModalComponent';
import { ModalConfig } from '../Formfields/modal/ModalConfig';
import { postDataImage, putDataFile } from '../../../services/APIService';
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
import { useButtonState } from '../../../context/ButtonStateContext';
import { useFormik } from 'formik';
import { createInitialValues, formSchema, simplifiedData } from '../../../configurations/ValidationSchema/ValidationSchema';
import { OptionData } from '../../../pages/Admin pages/Employee/AditionalDetail/AditionalDetailsContent';

const AditionalDetailFormComponent = ({ config, handleSubmit, employeeId, editEmployees }) => {
    const [values, setValues] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isexperienced, setExperienced] = useState(false);

    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value });
        formik.setValues({ ...formik.values, [name]: value });
    };

    const { AddMode, editMode } = useButtonState();


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

    // console.log('er', formik.values, formik.errors, values);

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
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editEmployees, config]);
    console.log("editEmployees", editEmployees.Additional)



    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    const handleTagChange = (selectedOptions) => {
        setValues({ ...values, [TagConfig[0].name]: selectedOptions });
        formik.setValues({ ...formik.values, [TagConfig[0].name]: selectedOptions });
        formik.setValues({ ...formik.values, [TagConfig[0].name]: selectedOptions });
    };

    const handleOptionsChange = (updatedOptions) => {
        setValues(prevOptions => ({ ...prevOptions, ...updatedOptions }));
        formik.setValues(prevOptions => ({ ...prevOptions, ...updatedOptions }));
        setValues(prevOptions => ({ ...prevOptions, ...updatedOptions }));
        formik.setValues(prevOptions => ({ ...prevOptions, ...updatedOptions }));
    };


    const handleRadioChange = (name, option) => {
        setValues({ ...values, [name]: option });
        formik.setValues({ ...formik.values, [name]: option });
        setValues({ ...values, [name]: option });
        formik.setValues({ ...formik.values, [name]: option });
        setExperienced(option);
    };

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
        formik.setValues({ ...formik.values, [name]: selectedFile });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { ...values, employee_id: employeeId };
            const data = { ...values, employee_id: employeeId };
            const formData = new FormData();
            Object.keys(data).forEach(key => {
                if (key !== "file") {
                    formData.append(key, data[key]);
                }
            Object.keys(data).forEach(key => {
                if (key !== "file") {
                    formData.append(key, data[key]);
                }
            });
            if (data.file) {
                formData.append("file", data.file);
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

                                    onBlur={formik.handleBlur}
                                />
                            )}
                            {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
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
                                            fileData={values[field.name]} // Pass the base64 data here

                                            onBlur={formik.handleBlur}
                                        />
                                    )}
                                    {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
                                    {formik.touched[field.name] && formik.errors[field.name] && <p className='error-form text-xs text-red-600'>{formik.errors[field.name]}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
                    </div>
                )}
            </div>

            <div className='form-line flex justify-evenly mb-4 mr-1'>
                <div className='w-96'></div>
                <div className='w-44'></div>
                <div className='buttons flex justify-end mt-6 w-96'>
                    <Button Configs={ButtonDataforAditional} onClick={handleButtonClick} />
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

AditionalDetailFormComponent.propTypes = {
    config: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        fieldstyle: PropTypes.string,
        textcss: PropTypes.string,
        type: PropTypes.oneOf(['options', 'number', 'text', 'file', 'radio']).isRequired,
        options: PropTypes.array,
        placeholder: PropTypes.string,
        icon: PropTypes.node,
        iconPosition: PropTypes.oneOf(['start', 'end']),
    })).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    employeeId: PropTypes.string.isRequired,
    editEmployees: PropTypes.shape({
        employee_id: PropTypes.string,
        Additional: PropTypes.shape({
            experience: PropTypes.shape({
                experience_type: PropTypes.string,
            }),
            employee_benefit: PropTypes.arrayOf(PropTypes.string),
        }),
    }),
};

export default AditionalDetailFormComponent;