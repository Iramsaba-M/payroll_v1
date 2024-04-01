


import React, { useState, useEffect } from 'react';
import Card from '../../configurations/Card/CardConfig';
import { LeaveButtons, leavecard1, leavecard2, leavecard3, leavecard4, leavecard5, leavecard6, leavecard7, leavecard8, leavesdata } from './AttendanceContent';
import RadioComponent from '../../components/form/Formfields/radio_button/RadioComponent';
import TextStyle from '../../components/form/Formfields/text/TextStyle';
import DatePicker from 'react-datepicker';
import TextareaComponent from '../../components/form/Formfields/textarea/TextareaComponent';
// import FileComponent from '../../components/form/Formfields/file/FileComponent';
import DocumentStyles from '../../components/form/DocumentsForm/DocumentStyles';
import ButtonConfig from '../../configurations/Button/ButtonConfig';
import { DateRangePicker } from 'react-date-range';
import dayjs from 'dayjs';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import axios from 'axios';
import { fetchData, postData, postDataImage } from '../../services/APIService';
import {  EndUser_ApplyLeave, EndUser_Leave_Balance } from '../../api/EndPoints';
import FileComponent from '../../components/form/DocumentsForm/FileComponent';

const MyLeave = ({ config, applyleave }) => {
    const [values, setValues] = useState({});
    const [leavebalance, setLeavebalance] = useState(null);
    const [leavetype, setLeavetype] = useState(null);
    const [option, setOption] = useState(null);
    // const [isClicked, setIsClicked] = useState(false);
    const [daterange, setDaterange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });
    //  console.log('value', applyleave)


    // Handler function to update values state
    const handleChange = (name, value) => {
        setValues({
            ...values,
            [name]: value
        });

    };

    const handleFileChange = (selectedFile) => {
        console.log('Selected file:', selectedFile);
        setValues({
            ...values,
            doc: selectedFile
        });
    };

    const handleRangechange = (ranges) => {
        setDaterange(ranges.selection)
        console.log('daterange', daterange); //DayJs object
    }
    const handlebuttonclick = (label) => {
        if (label === 'Apply Leave') {
            // onSubmit(true);
            // console.log('p1');
        } else if (label === 'Cancle') {
            applyleave(false);
            console.log(applyleave)
        }
    }
    const handleLeavetype = (name) => {
        setLeavetype(name);
        // setIsClicked(!isClicked);
        console.log('head', name)

    }
    //    console.log(values)
    const handleRadioChange = (name, option) => {
        setValues({
            ...values,
            [name]: option
        });

        console.log(values.leavetype)
    };
    const fetchgetData = async () => {
        try {


            // const response = await axios.get('http://localhost:3000/end_user_attendance')

            const queryParams = { employee_id: 'IK02' };
            const endpoint = `${EndUser_Leave_Balance}?employee_id=${queryParams.employee_id}`; // Construct endpoint URL
            const response = await fetchData(endpoint);
            
            // console.log('Post Response cards:', response.data);
            console.log('Post Response cards:', response);

            setLeavebalance(response.leave_balance)
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    useEffect(() => {
        fetchgetData();
    }, []);
    // useEffect(() => {
    //     handleLeavetype();
    // }, []);
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const emp = 'IK02';



            const formData = new FormData();
            // Append form data
            formData.append('employee_id', emp);
            formData.append("start_date", dayjs(daterange.startDate).format('DD-MM-YYYY'));
            formData.append("end_date", dayjs(daterange.endDate).format('DD-MM-YYYY'));
            formData.append('leave_type', leavetype);

            // Append file if selected

            Object.entries(values).forEach(([key, value]) => {
                formData.append(key, value);

            });
            // console.log('val', emp, leavetype, values)
            if (values.doc) {
                formData.append('document', values.doc);
                // console.log('val2', values.doc, 'form', formData.document)
            }

            console.log('Data:', formData);
            const formDataArray = [...formData.entries()];

            // Iterate over formDataArray and log key-value pairs to the console
            formDataArray.forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
            });

            const response = await postDataImage(EndUser_ApplyLeave, formData);


            console.log('Data sent:', response);
            // handlesubmit();
        } catch (error) {
            console.error('Error:', error);
        }
    };
    // useEffect(() => {
    //     onSubmit();
    // }, []);

    return (
        <form onSubmit={onSubmit} className='mt-2 overflow-auto max-h-[87vh] ml-5 p-2 '>
            <div className='p-2 border-2 '>
                <h1 className='text-gray-400 text-base font-bold'>Leave Balance</h1>
                <div className='bg-gray-100 p-2 flex  rounded-md border-2'>
                    <Card Config={leavesdata} multiclone={leavebalance} onClick={handleLeavetype} />

                </div>
            </div>

            <div className='mt-2 flex justify-between  '>
                <div className='bg-gray-100 border-2 py-3 w-[77vh] px-10  text-gray-500 text-sm rounded-md '>

                    {config.map((field, index) => (
                        // <div key={index} className={`form-field ${field.fieldstyle}`}>
                        <div key={index} className='flex flex-col justify-between'>

                            {/* <label className={TextStyle[field.textcss].label}>{field.label}</label> */}
                            <label className='translate-y-5   ml-7'>{field.label}</label>
                            {field.type === 'radio' && (

                                <RadioComponent
                                    // label={field.label}
                                    name={field.name}
                                    value={field.value}
                                    checked={values[field.name] === field.value}
                                    onChange={() => handleRadioChange(field.name, field.value)}
                                // textcss={TextStyle[field.textcss].input}
                                />

                            )}
                        </div>
                    ))}

                </div>
                <div className='bg-gray-100 border-2 text-sm text-gray-500 p-1  w-[77vh] rounded-md'>
                    <div>
                        <DateRangePicker ranges={[daterange]} onChange={handleRangechange}
                            rdrDefinedrangeswraper={false} showDateDisplay={true} // Remove the date display
                            showPreview={false} // Remove the preview box
                            moveRangeOnFirstSelection={false} // Remove the "now" button
                            showSelectionPreview={false}

                        />

                    </div>
                </div>
            </div>

            <div>

                <div className="form-line flex justify-between  ">
                    {config.slice(2, 3).map((field, index) => (
                        <div key={index} className={`form-field ${field.fieldstyle}`}>

                            <label className={TextStyle[field.textcss].label}>{field.label}</label>
                            {field.type === 'textarea' && (
                                <TextareaComponent
                                    name={field.name}
                                    value={values[field.name] || ''}
                                    onChange={(e) => handleChange(field.name, e.target.value)}
                                    textcss={TextStyle[field.textcss]}
                                    placeholder={field.placeholder}
                                />
                            )}

                        </div>
                    ))}
                    <div className='mt-9  flex   '>
                        {config.slice(3, 4).map((field, index) => (
                            <div key={index} className={`form-field ${field.fieldstyle}`}>


                                {field.type === 'file' && (
                                    <FileComponent
                                        name={field.name}
                                        onChange={(file) => handleFileChange(file)}
                                        textcss={TextStyle[field.textcss]}
                                        placeholder={field.placeholder}
                                        icon={field.icon}
                                        iconPosition={field.iconPosition}
                                    />
                                )}
                            </div>
                        ))}
                        <ButtonConfig Config={LeaveButtons} onClick={handlebuttonclick} />
                    </div>

                </div>
            </div>
        </form>
    );
}

export default MyLeave;
