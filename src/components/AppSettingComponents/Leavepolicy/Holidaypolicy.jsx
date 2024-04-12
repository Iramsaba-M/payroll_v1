// import React from 'react';
// import { FaRegPaperPlane } from "react-icons/fa";
// import { PiAirplaneTilt } from "react-icons/pi";
// import { MdOutlineCalendarMonth } from "react-icons/md";
// import Table2 from '../../../configurations/table2/Table2';
// import { Holiday_list } from './HolidaypolicyContent';
// import ReactSwitch from 'react-switch';



// const TableHeaders = [
//   {
//     label: 'Holiday Name',
//     name: 'holiday_name',
//     className: 'checkbox-header'
//   },
//   {
//     label: 'DATE',
//     name: 'date',
//     className: 'checkbox-header'
//   },

//   {
//     label: '',
//     name: 'editholiday',
//     className: 'checkbox-header' 
//   },
//   {
//     name: 'Enable_or_Disable',
//     label: 'Enable/Disable',
//     className: 'checkbox-header' 
//   },
// ];
// const values = ['Food', 'Travel', 'Fuel', 'Medical', 'Hotel', 'Others'];

// const Holidaypolicy = () => {
//   return (
//     <div className='flex flex-col  ml-10 -mt-7'>
//       <div className='flex flex-row justify-between px-2 '>
//         <div className='w-72 flex font-bold text-xl '><h2 className='px-3'>Holiday List </h2><PiAirplaneTilt className='mt-1' /></div>
//         <div className='flex '><p>2023</p><MdOutlineCalendarMonth className='mt-1' /></div>
//       </div>
//       <div>
//         <div>


//           <table className="w-[100vh] mt-5 ml-28">
//             <thead className="bg-gray-100 text-gray-600 font-normal h-[5vh]">
//               <tr>
//                 {TableHeaders.map((header, index) => (
//                   <th key={index} className={header.className || ReimbursementTextStyle.header}>
//                     {header.label}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {/* Render a row for each value */}
//               {values.map((value, index) => (
//                 <tr key={index}>

//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Holidaypolicy;

// const ReimbursementTextStyle = {
//   header: 'text-gray-500 text-xs font-bold flex item-start mt-2 ml-2', // Style for table headers
//   value: 'text-black text-sm px-4 py-4', // Style for values
//   checkbox: 'text-center ml-10'
// };




// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import TextStyle from '../../form/Formfields/text/TextStyle';
// import { ButtonContent, TableHeaders, TextComponentData1, TextComponentData2, TextComponentData3, TextComponentData4 } from './HolidaypolicyContent'
// import TextComponent from '../../form/Formfields/text/TextComponent';
// import Switch from "react-switch"; // import the Switch component
// import ButtonConfig from '../../../configurations/Button/ButtonConfig';
// import { BiEditAlt } from "react-icons/bi";
// import { PiAirplaneTilt } from "react-icons/pi";

// const Holidaypolicy = () => {
//   const [formData, setFormData] = useState({
//     policyname: '',
//     date: '',
//   });
//   const [tableData, setTableData] = useState([]);
//   const [holidaystate, setHolidaystate] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const editcolumn=(e)=>{

//   }


//   const handleSubmit = async (e) => {

//     e.preventDefault();
//     const leavedata = { ...formData, "enable": holidaystate}
//     await axios.post('http://localhost:3000/admin_leavepolicy', leavedata);
//     fetchTableData();
//     // Reset form data
//     setFormData({
//       policyname: '',
//       date:'',
//       holidaystate:''
//     });
//   };

//   const fetchTableData = async () => {
//     const response = await axios.get('http://localhost:3000/admin_leavepolicy');
//     setTableData(response.data);
//   };

//   useEffect(() => {
//     fetchTableData();
//   }, []);

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='px-8 mt-8'>
//         <div className='-translate-y-[8vh] flex '>
//           <h1 className="text-xl ">Holiday List</h1>
//           <PiAirplaneTilt className="h-6 w-6 ml-6 mt-1  " />
//         </div>
//         <table className="w-[80vh]  ml-3">
//           <thead className="bg-gray-100 text-gray-600 font-normal h-[8vh] ">
//             <tr>
//               {TableHeaders.map((header, index) => (
//                 <th key={index} className={TextStyle[header.className]}>
//                   {header.name}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="h-10 border border-b-1">
//             {tableData.map((row, rowIndex) => (
//               <tr key={rowIndex} className='h-12 border border-b-1'>
//                 {TextComponentData1.map((data, i) => (
//                   <td key={i} className="">
//                     <TextComponent
//                       name={data.name}
//                       onChange={handleChange}
//                       value={row[data.name]}
//                       placeholder={data.placeholder}
//                       textcss={TextStyle[data.textcss]}
//                     />
//                   </td>
//                 ))}
//                 {TextComponentData2.map((data, i) => (
//                   <td key={i} className="">
//                     <TextComponent
//                       name={data.name}
//                       onChange={handleChange}
//                       value={row[data.name]}
//                       placeholder={data.placeholder}
//                       textcss={TextStyle[data.textcss]}
//                     />
//                   </td>
//                 ))}
//                 {TextComponentData3.map((data, i) => (

//                   <td key={i} className="edit" onClick={editcolumn}>
//                     <div className=' flex justify-center'>
//                     <BiEditAlt className='text-2xl  text-gray-400' />
//                     </div>
//                   </td>

//                 ))}

//                 {TextComponentData4.map((data, i) => (
//                   <td key={i} className="">
//                     <div className='text-center w-[30vh]'>
//                       <Switch
//                         onChange={(checked) => setHolidaystate(checked)}
//                         checked={row[data.name]}
//                         onColor="#86d3ff" // color when the switch is on
//                         onHandleColor="#2693e6" // handle color when the switch is on
//                         handleDiameter={25} // handle size
//                         uncheckedIcon={false} // remove the unchecked icon
//                         checkedIcon={false} // remove the checked icon
//                         boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" // box shadow
//                         height={25} // height of the switch
//                         width={50} // width of the switch
//                         className="" // class name for further CSS customization
//                       />
//                     </div>
//                   </td>
//                 ))}


//               </tr>
//             ))}



//             <tr className=' h-12 border border-b-1'>
//               <td className="">
//                 {TextComponentData1.map((data, i) => (
//                   <td key={i} className="">
//                     <TextComponent
//                       name={data.name}
//                       onChange={handleChange}
//                       value={formData[data.name]}
//                       placeholder={data.placeholder}
//                       textcss={TextStyle[data.textcss]}
//                     />
//                   </td>
//                 ))}
//               </td>

//               {TextComponentData2.map((data, i) => (
//                 <td key={i} className="">
//                   <TextComponent
//                     name={data.name}
//                     onChange={handleChange}
//                     value={formData[data.name]}
//                     placeholder={data.placeholder}
//                     textcss={TextStyle[data.textcss]}
//                   />
//                 </td>
//               ))}
//               {TextComponentData3.map((data, i) => (
//                 <td key={i} className="">
//                   <div className='w-[20vh] flex justify-center'>
//                     <BiEditAlt className='text-2xl  text-gray-400' />
//                     </div>
//                 </td>
//               ))}

//               {TextComponentData4.map((data, i) => (
//                 <td key={i} className="">
//                   <div className='text-center w-[30vh]'>
//                     <Switch
//                       onChange={(checked) => setHolidaystate(checked)}
//                       checked={holidaystate}
//                       onColor="#86d3ff" // color when the switch is on
//                       onHandleColor="#2693e6" // handle color when the switch is on
//                       handleDiameter={25} // handle size
//                       uncheckedIcon={false} // remove the unchecked icon
//                       checkedIcon={false} // remove the checked icon
//                       boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" // box shadow
//                       height={25} // height of the switch
//                       width={50} // width of the switch
//                       className="" // class name for further CSS customization
//                     /></div>
//                 </td>
//               ))}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className='flex justify-end mr-6 py-5'>
//         <ButtonConfig Config={ButtonContent} />
//       </div>
//     </form>
//   )
// }





import { useState, useEffect } from 'react';
import axios from 'axios';
import TextStyle from '../../form/Formfields/text/TextStyle';
import { ButtonContent, TableHeaders, TextComponentData1, TextComponentData2, TextComponentData3, TextComponentData4 } from './HolidaypolicyContent'
import TextComponent from '../../form/Formfields/text/TextComponent';
import Switch from "react-switch"; // import the Switch component
import ButtonConfig from '../../../configurations/Button/ButtonConfig';
import { BiEditAlt } from "react-icons/bi";
import { PiAirplaneTilt } from "react-icons/pi";


const Holidaypolicy = () => {
  const [date, setHolidaydate] = useState("");
  const [holiday_name, setHolidayPolicyName] = useState("");
  const [enable, setSwitchSaving] = useState(false);
  const [holidayData, setHolidayData] = useState([]);

  const resetForm = () => {
    setHolidaydate("");
    setHolidayPolicyName("");
    setSwitchSaving(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:3000/admin_holiday");
        const response = await axios.get("http://192.168.0.134:5001/settings/holiday");

        console.log('response.get', response.data)
        setHolidayData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const updateData = async () => {
    try {
      const response = await axios.patch("http://localhost:3000/admin_holiday", {
        "date": date,
        "holiday_name": holiday_name,
        "enable": enable,
      });
      if (response.status === 200) {
        setHolidayData(response.data);
      }
    } catch (error) {
      console.error("Error updating data: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newdata = {
      "date": date,
      "holiday_name": holiday_name,
      "enable": enable,
    };
    console.log('data', newdata)
    try {
      const response = await axios.post("http://localhost:3000/admin_holiday", newdata);

      if (response.status === 200 || response.status === 201) {
        setHolidayData([newdata, ...holidayData]); // add the new loan at the beginning of the array
        resetForm(); // reset the form
        updateData(); // update the data
      } else {
        // handle error
      }
    } catch (error) {
      console.error("Error posting data: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" ">
      <div className=' w-[160vh]  '>
        <div className='-translate-y-[4vh] ml-12 flex '>
          <h1 className="text-xl font-semibold ml-6 ">Holiday List</h1>
          <PiAirplaneTilt className="h-5 w-5 ml-6 mt-2 " />
        </div>
        <table className="w-[150vh] mt- ml-[9vh]">
          <thead className="bg-gray-100 text-gray-600 font-normal h-[10vh] shadow-t-lg shadow-r-lg ">
            <tr>
              {TableHeaders.map((header, index) => (
                <th key={index} className={TextStyle[header.className]}>
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="shadow-lg">
            {holidayData.map((field, i) => (
              <tr key={i} className="h-12 ">
                <td className="">
                  <TextComponent
                    name={`holiday_name_${i}`}
                    value={field.holiday_name}

                    textcss='ml-4'
                    onChange={(e) => {
                      const newholidayData = [...holidayData];
                      newholidayData[i].date = e.target.value;
                      setHolidayData(newholidayData);
                    }}
                  />
                </td>
                <td className="">
                  <TextComponent
                    name={`date_${i}`}
                    value={field.date}
                    textcss=''
                    onChange={(e) => {
                      const newholidayData = [...holidayData];
                      newholidayData[i].holiday_name = e.target.value;
                      setHolidayData(newholidayData);
                    }}
                  />
                </td>
                <td className="">
                  <BiEditAlt className='text-2xl w-[20vh]  text-gray-400 ' />
                </td>
                <td className="">
                  <Switch
                    onChange={(checked) => {
                      const newholidayData = [...holidayData];
                      newholidayData[i].enable = checked;
                      setHolidayData(newholidayData);
                    }}
                    checked={field.enable}
                    onColor="#6b6aef" // color when the switch is on
                    handleDiameter={0}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    className="ml-[15vh]" // class name for further CSS customization
                  />
                </td>
              </tr>
            ))}
            <tr>
              {TextComponentData1.map((data, i) => (
                <td key={i} className="h-12">
                  <TextComponent
                    name={data.name}
                    value={date}
                    onChange={(e) => setHolidaydate(e.target.value)}
                    placeholder={data.placeholder}
                    textcss={TextStyle[data.textcss]}
                  />
                </td>
              ))}
              {TextComponentData2.map((data, i) => (
                <td key={i} className="">
                  <TextComponent
                    name={data.name}
                    value={holiday_name}
                    onChange={(e) => setHolidayPolicyName(e.target.value)}
                    placeholder={data.placeholder}
                    textcss={TextStyle[data.textcss]}
                  />
                </td>
              ))}
              <td className=" ">
                <BiEditAlt className="text-2xl w-[20vh] text-gray-400 " />
              </td>
              <td className="">
                <Switch
                  onChange={(checked) => setSwitchSaving(checked)}
                  checked={enable}
                  onColor="#6b6aef" // color when the switch is on
                  handleDiameter={0} // handle size
                  uncheckedIcon={false} // remove the unchecked icon
                  checkedIcon={false} // remove the checked icon
                  className="ml-[15vh]" // class name for further CSS customization
                />
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <div className="ml-[148vh] mt-10 ">
          <ButtonConfig Config={ButtonContent} />
        </div>
    </form>
  )
}


export default Holidaypolicy;

