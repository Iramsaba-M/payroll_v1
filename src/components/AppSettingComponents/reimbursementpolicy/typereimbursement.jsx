// import React, { useState, useEffect } from 'react';
// import { TbPigMoney } from "react-icons/tb";
// import { IoSettingsOutline } from "react-icons/io5";
// import ReimbursementTextStyle from "./Stylesreimbrusment";
// import axios from 'axios';
// import Switch from 'react-switch';

// const TableHeaders = [
//   {
//     name: 'REIMBURSEMENT TYPE',
//     label: 'reimbursement_type',
//   },
//   {
//     name: '',
//     label: 'enable',
//     className: 'checkbox-header'
//   },
// ];

// const TypeReimbursement = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [values, setValues] = useState([]);

//   useEffect(() => {
//     // Fetch data from the endpoint when the component mounts
//     axios.get('http://localhost:3000/reimbursementpolicy')
//       .then(response => {
//         console.log('Data retrieved successfully:', response.data);
//         // Assuming the data structure and that the latest entry is the last in the array
//         const latestData = response.data[response.data.length - 1];
//         // Filter the latestData based on the 'enable' field
//         // This will include both 'enable: true' and 'enable: false' entries in your state
//         const enabledEntries = latestData.filter(entry => entry.hasOwnProperty('enable'));
//         // Update your state with the filtered data
//         setValues(enabledEntries);
//       })
//       .catch(error => {
//         console.error('Error fetching the latest data:', error);
//       });
//   }, []); // Empty dependency array ensures this effect runs only once when the component mounts
  
  


//   const handleAddRow = () => {
//     if (inputValue.trim() !== '') {
//       const newValue = { reimbursement_type: inputValue, enable: false };
//       setValues(prevValues => [...prevValues, newValue]);
//       setInputValue('');
//     }
//   };

//   const handleToggleChange = (index) => {
//     const updatedValues = [...values];
//     updatedValues[index].enable = !updatedValues[index].enable;
//     setValues(updatedValues);
//   };

//   const handleSave = () => {
//     // Make the POST request with the current data
//     axios.post('http://localhost:3000/reimbursementpolicy', values) // Send the values array directly
//       .then(response => {
//         console.log('Data posted successfully:', response.data);
//         // If the server response also omits the wrapper, adjust accordingly.
//         // Assuming the server responds with the same array format.
//         setValues(response.data || []);
//       })
//       .catch(error => {
//         console.error('Error posting data:', error);
//       });
// };

//   return (
//     <div>
//       <div className="flex items-center">
//         <div className='text-lg font-bold w-72 text-gray-400 px-4 ml-28'>
//           Types Of Reimbursement
//         </div>
//         <TbPigMoney className="mr-10 size-6 text-gray-500" />
//         <button onClick={handleSave} className="bg-blue-400 text-white py-2 px-4 ml-[75vh] rounded-lg">Save</button>
//       </div>
//       <div className="table-container ml-28">
//         <table className="w-[130vh] mt-5 border border-gray-200 hover:border-blue-500">
//           <thead className="bg-gray-100 text-gray-600 font-normal h-[5vh]">
//             <tr>
//               {TableHeaders.map((header, index) => (
//                 <th key={index} className={header.className || ReimbursementTextStyle.header}>
//                   {header.name}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {values.map((value, index) => (
//               <tr key={index}>
//                 <td className={ReimbursementTextStyle.value}>{value.reimbursement_type}</td>
//                 <td>
//                   <Switch
//                     onChange={() => handleToggleChange(index)}
//                     checked={value.enable}
//                     handleDiameter={24}
//                     uncheckedIcon={false}
//                     checkedIcon={false}
//                   />
//                 </td>
//               </tr>
//             ))}
//             <tr>
//               <td>
//                 <input
//                   type="text"
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   className="border border-gray-300 px-2 py-1 rounded-md"
//                 />
//               </td>
//               <td>
//                 <button onClick={handleAddRow} className="bg-blue-400 text-white py-1 px-2 mr-[10px] rounded-md">Add row+</button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TypeReimbursement;


import axios from 'axios';
import { IoSettingsOutline } from "react-icons/io5";
import TextStyle from "../../../components/form/Formfields/text/TextStyle";
import TextComponent from "../../../components/form/Formfields/text/TextComponent";
import Switch from "react-switch";
import { useState, useEffect } from "react";

const TypeOfReimbursement = () => {
  const TableHeaders = [
    {
      name: 'Reimbursement Type',
      className: 'TableHeadersR',
    },
    {
      name: 'Enable/Disable',
      className: 'TableHeaders',
    },
  ];

  const [reimbursementData, setReimbursementData] = useState([]);
  const [newReimbursementType, setNewReimbursementType] = useState('');
  const [newReimbursementEnabled, setNewReimbursementEnabled] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/saverem")
    // axios.get('http://192.168.0.134:5000/reimbursements/')
      .then(response => setReimbursementData(response.data))
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  const handleNewReimbursementSubmit = async (e) => {
    e.preventDefault();
    const newReimbursement = {
      reimbursement_type: newReimbursementType,
      enable: newReimbursementEnabled
    };
    try {
      const response = await axios.post("http://localhost:3000/saverem", newReimbursement);
      // const response = await axios.post('http://192.168.0.134:5000/reimbursements/', newReimbursement);
      if (response.status === 200 || response.status === 201) {
        console.log("New data posted successfully");
        setReimbursementData([...reimbursementData, newReimbursement]); // Optionally add to local state
        setNewReimbursementType(''); // Reset the input field
        setNewReimbursementEnabled(false); // Reset the switch
      } else {
        console.error("Failed to post new data");
      }
    } catch (error) {
      console.error("Error posting new data: ", error);
    }
  };

  return (
    <form onSubmit={handleNewReimbursementSubmit} className=" ">
      <div className=' w-[120vh]  '>
        <div className='-translate-y-[4vh] ml-12 flex '>
          <h1 className="text-xl font-semibold ml-6 ">Types Of Reimbursement</h1>
          <IoSettingsOutline className="h-5 w-5 ml-6 mt-2 "/>
        </div>
        <table className="w-[140vh] mt- ml-[9vh]">
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
            {reimbursementData.map((item, index) => (
              <tr key={index} className="h-12 ">
                <td className="">
                  <TextComponent
                    name={`type_${index}`}
                    value={item.reimbursement_type}
                    textcss='ml-4'
                    onChange={(e) => {
                      const newData = [...reimbursementData];
                      newData[index].reimbursement_type = e.target.value;
                      setReimbursementData(newData);
                    }}
                  />
                </td>
                <td className="">
                  <Switch
                    onChange={(checked) => {
                      const newData = [...reimbursementData];
                      newData[index].enable = checked;
                      setReimbursementData(newData);
                    }}
                    checked={item.enable}
                    onColor="#60A5FA"
                    handleDiameter={20}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    className="ml-[15vh]"
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td className="h-12">
                <TextComponent
                  name='new_reimbursement_type'
                  value={newReimbursementType}
                  onChange={e => setNewReimbursementType(e.target.value)}
                  placeholder='Add new'
                  textcss={TextStyle['e']}
                />
              </td>
              <td>
                <Switch
                  onChange={setNewReimbursementEnabled}
                  checked={newReimbursementEnabled}
                  onColor="#60A5FA"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  className="ml-[15vh]"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="ml-[150vh] mt-12 ">
          <button type='submit' className="bg-blue-400 text-white py-2 px-4 -ml-[80px] rounded-lg">save</button>
        </div>
      </div>
    </form>
  );
}

export default TypeOfReimbursement;