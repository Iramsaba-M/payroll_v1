// import React from 'react'
// import Card from '../../configurations/Card/CardConfig'
// import { leavesdata } from './AttendanceContent'

// const MyLeave = () => {
//     return (
//         <div>MyLeave
//             <div className='p-2 border-2'>
//                 <h1 className='text-gray-400 text-base font-bold'>Leave Balance</h1>
//                 <div className='bg-gray-100 p-2 rounded-md border-2 '>
//                     <Card Config={leavesdata} />
//                 </div>
//             </div>

//             <div className=' mt-2 flex justify-between border-2 p-2'>
//                 <div className='bg-gray-100 border-2 '>
//                     <input type="radio" id="html" name="fav_language" value="HTML">
//                         <label for="html">HTML</label><br>
//                             <input type="radio" id="css" name="fav_language" value="CSS">
//                                 <label for="css">CSS</label><br>
//                 </div>
//                 <div className='bg-gray-100 border-2'>
//                                     fghjkfghjkl
//                                 </div>
//                             </div>
//                 </div>
//                         )
// }
//  export default MyLeave;


import React, { useState, useEffect } from 'react';
import Card from '../../configurations/Card/CardConfig';
import { LeaveButtons, leavesdata } from './AttendanceContent';
import RadioComponent from '../../components/form/Formfields/radio_button/RadioComponent';
import TextStyle from '../../components/form/Formfields/text/TextStyle';
import DatePicker from 'react-datepicker';
import TextareaComponent from '../../components/form/Formfields/textarea/TextareaComponent';
import FileComponent from '../../components/form/Formfields/file/FileComponent';
import DocumentStyles from '../../components/form/DocumentsForm/DocumentStyles';
import ButtonConfig from '../../configurations/Button/ButtonConfig';
// import { DateRangePicker } from 'react-date-range-dayjs';
import { DateRangePicker } from 'react-date-range';
import dayjs from 'dayjs';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import axios from 'axios';

const MyLeave = ({ config,applyleave }) => {
    const [values, setValues] = useState({});
    const [leavebalance, setLeavebalance] = useState(null);
    // const [selectedDate, setSelectedDate] = useState(null);
    // const [selectedDate1, setSelectedDate1] = useState(null);
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

    // useEffect(() => {
    //     const currentDate = new Date();
    //     const currentMonth = currentDate.getMonth();
    //     const currentYear = currentDate.getFullYear();

    //     // Set the end date to the last day of the previous month
    //     const endDate = new Date(currentYear, currentMonth, 0);

    //     // If the current month is February, adjust the start date to exclude it
    //     const startDate = new Date(
    //         currentMonth === 1 ? currentYear - 1 : currentYear,
    //         currentMonth === 1 ? 0 : currentMonth - 12,
    //         1
    //     );
    //     setSelectedDate(startDate);
    //     setSelectedDate1(endDate);
    // }, []);



    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
    // const handleDateChange1 = (date) => {
    //     const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    //     setSelectedDate1(lastDayOfMonth);
    // };
    const handleFileChange = (selectedFile) => {
        console.log('Selected file:', selectedFile);
    };

    const handleRangechange = (ranges) => {
        setDaterange(ranges.selection)
        // console.log(date); //DayJs object
    }
   const handlebuttonclick =(label)=>{
    if (label === 'Apply Leave' ) {
        // SetApplyleave(true);
        // handlePunchin(true);
        console.log('p1');
      } else if (label === 'Cancle') {
        // handlePunchout(true);
        applyleave(false);
        console.log(applyleave)
      }
   }
    const handleRadioChange = (name, option) => {
        setValues({
            ...values,
            [name]: option
        });
        console.log(values)
    };
    const fetchData = async () => {
        try {


            const response = await axios.get('http://localhost:3000/end_user_attendance')

            // const response = await postData(Home_and_Report_BarGraphdata, {
            //   year: year,
            //   month: month,
            // });
            console.log('Post Response cards:', response.data);

            setLeavebalance(response.data.leave_balance)
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='-mt-16 overflow-auto max-h-[87vh] -ml-3 p-2 '>
            <div className='p-2 border-2 '>
                <h1 className='text-gray-400 text-base font-bold'>Leave Balance</h1>
                <div className='bg-gray-100 p-2 rounded-md border-2'>
                    <Card Config={leavesdata} multiclone={leavebalance} />
                </div>
            </div>

            <div className='mt-2 flex justify-between  '>
                <div className='bg-gray-100 border-2 py-3 w-[77vh] px-10  text-gray-500 text-sm rounded-md '>
                    {/* <div className='py-1 text-sm ml-10'>
                        <input type="radio" name="leave" value="Full_Day" />
                        <label className=' ml-3' >Full Day</label>
                    </div>
                    <div className='text-sm ml-10 '>
                        <input type="radio" name="leave" value="half_Day" />
                        <label className=' ml-3 '   >Half Day</label>
                    </div> */}
                    {config.map((field, index) => (
                        // <div key={index} className={`form-field ${field.fieldstyle}`}>
                        <div key={index} className='flex flex-col justify-between'>

                            {/* <label className={TextStyle[field.textcss].label}>{field.label}</label> */}
                            <label className='translate-y-5   ml-7'>{field.label}</label>
                            {field.type === 'radio' && (
                                
                                <RadioComponent
                                    // label={field.label}
                                    name="leaveType" // Make sure to pass the name prop
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
                        {/* <p>Start Date</p>
                        <p>End Date</p> */}
                        {/* <div className='flex  border-t border-s-2 border-b-2 border-r w-[28vh] h-8 rounded-md ml-4 '>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="dd-MMM-yyyy"
                                placeholderText='From'
                                className='w-[12vh]  on hover:border-blue-500 text-center  focus:outline-none '
                                showMonthYearPicker
                            />
                            <div className='text-gray-400'>~</div>
                            <DatePicker
                                selected={selectedDate1}
                                onChange={handleDateChange1}
                                placeholderText='To'
                                dateFormat="dd-MMM-yyyy"
                                style={{ appearance: 'none', background: 'transparent' }}
                                className='w-[12vh]  on hover:border-blue-500 text-center  focus:outline-none '
                                showMonthYearPicker
                            />
                        </div> */}
                        <DateRangePicker ranges={[daterange]} onChange={handleRangechange}
                            // className="custom-calendar" 
                            rdrDefinedrangeswraper={false} showDateDisplay={true} // Remove the date display
                            showPreview={false} // Remove the preview box
                            moveRangeOnFirstSelection={false} // Remove the "now" button
                            showSelectionPreview={false}
                        //  className='w-[12vh] h-[50vh]'
                        />

                    </div>
                </div>
            </div>

            <div>

                <div className="form-line flex mb-4  ">
                    {config.slice(2, 4).map((field, index) => (
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
                            {field.type === 'file' && (
                                <FileComponent
                                    name={field.name}
                                    onChange={(file) => handleFileChange(file)}
                                    textcss={TextStyle[field.textcss]}
                                    placeholder={field.placeholder}
                                    icon={field.icon}
                                />
                            )}
                        </div>
                    ))}
                    <div className='mt-9 ml-8 '>
                        {/* <ButtonConfig Config={LeaveButtons} onClick={handlebuttonclick} />  */}
                        <ButtonConfig Config={LeaveButtons} onClick={ handlebuttonclick} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyLeave;
