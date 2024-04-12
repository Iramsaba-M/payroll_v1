// // export default Reimbursementpolicy;
// import React, { useState, useEffect } from 'react';
// import { IoSettingsOutline } from "react-icons/io5";
// import axios from 'axios';
// import Switch from 'react-switch';
// import OptionsComponent from '../../form/Formfields/options/OptionsComponent';

// const Reimbursementpolicy = () => {
//   const [values, setValues] = useState([]);
//   const [minAmounts, setMinAmounts] = useState({});
//   const [maxAmounts, setMaxAmounts] = useState({});
//   const [showOptions, setShowOptions] = useState(true); // Set to true to always show OptionsComponent
//   const [selectedClaimingOption, setSelectedClaimingOption] = useState("");

//   const claimingOptions = [
//     { name: "Within 1 month of expense made", value: "Within 1 month of expense made" },
//     { name: "Within 2 months of expense made", value: "Within 2 months of expense made" },
//     // Add more options as needed
//   ];

//   const tableHeaders = [
//     { name: 'Policy Name', label: 'reimbursement_type' },
//     { name: 'Minimum Amount', label: 'minimum_amount' },
//     { name: 'Maximum Amount', label: 'maximum_amount' },
//     { name: '', label: 'enable', className: 'checkbox-header' }
//   ];

//     const tableStyles = {
//     header: 'text-gray-600 bg-gray-100 font-normal px-2 py-1',
//     value: 'text-gray-800 px-2 py-4',
//   };

//   useEffect(() => {
//     // Fetch data from db.json or your API endpoint
//     axios.get('http://localhost:3000/reimbursementpolicy')
//       .then(response => {
//         // Access the last element of the response array, assuming it's the latest set of policies
//         const fetchedData = response.data[response.data.length - 1]; // This fetches the last set of policies
  
//         setValues(fetchedData); // Set the fetched data to state
  
//         // Initialize minAmounts and maxAmounts states based on the latest fetched data
//         const initialMinAmounts = {};
//         const initialMaxAmounts = {};
//         fetchedData.forEach(item => {
//           initialMinAmounts[item.reimbursement_type] = item.minimum_amount || 0; // Assuming you have a minimum_amount key
//           initialMaxAmounts[item.reimbursement_type] = item.maximum_amount || 0; // Assuming you have a maximum_amount key
//         });
  
//         // Assuming you have setMinAmounts and setMaxAmounts functions ready for updating state
//         setMinAmounts(initialMinAmounts);
//         setMaxAmounts(initialMaxAmounts);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
  

//   // const handleSave = () => {
//   //   // Prepare data to be sent to the server
//   //   const dataToSave = values.map(item => ({
//   //     reimbursement_type: item[tableHeaders[0].label],
//   //     period: selectedClaimingOption, // Add selectedClaimingOption as period
//   //     minimum_amount: minAmounts[item[tableHeaders[0].label]] || 0,
//   //     maximum_amount: maxAmounts[item[tableHeaders[0].label]] || 0,
//   //     enable: item.checked || false
//   //   }));
  
//   //   // Make a POST request to store the data in the database
//   //   axios.post('http://localhost:3000/reimbursementpolicy', dataToSave)
//   //     .then(response => {
//   //       console.log('Data saved successfully:', response.data);
//   //       // Clear values after saving
//   //       setValues([]);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error saving data:', error);
//   //     });
//   // };

//   const handleSave = () => {
//     // Prepare data to be sent to the server
//     const dataToSave = values.map(item => ({
//       reimbursement_type: item[tableHeaders[0].label],
//       period: selectedClaimingOption, // Assuming selectedClaimingOption is correctly set
//       minimum_amount: minAmounts[item[tableHeaders[0].label]] || 0,
//       maximum_amount: maxAmounts[item[tableHeaders[0].label]] || 0,
//       enable: item.checked || false
//     }));
  
//     // Make a POST request to store the data in the database
//     axios.post('http://localhost:3000/reimbursementpolicy', dataToSave)
//       .then(response => {
//         console.log('Data saved successfully:', response.data);
//         // Clear values after saving
//         setValues([]);
//         // Fetch the latest data after successful post
//         fetchLatestData(); // Assuming fetchLatestData is a function that fetches the data and updates the state accordingly
//       })
//       .catch(error => {
//         console.error('Error saving data:', error);
//       });
//   };
  
//   // Function to fetch the latest data
//   const fetchLatestData = () => {
//     axios.get('http://localhost:3000/reimbursementpolicy')
//       .then(response => {
//         // Assuming the data structure and that the latest entry is the last in the array
//         const latestData = response.data[response.data.length - 1];
//         // Update your state with the latest fetched data
//         // This might involve setting the state for the values, minAmounts, and maxAmounts based on the latestData structure
//         // For example:
//         setValues(latestData);
//         // Adjust the logic for minAmounts and maxAmounts initialization if needed
//       })
//       .catch(error => {
//         console.error('Error fetching the latest data:', error);
//       });
//   };
  

//   const handleChange = (name, value) => {
//     // Handle change for OptionsComponent
//     setSelectedClaimingOption(value);
//     console.log(name, value);
//     // Implement your logic here
//   };

//   const handleMinAmountChange = (policyName, value) => {
//     const intValue = parseInt(value);
//     if (!isNaN(intValue) && intValue >= 0) {
//       setMinAmounts(prevState => ({
//         ...prevState,
//         [policyName]: intValue
//       }));
//     }
//   };

//   const handleMaxAmountChange = (policyName, value) => {
//     const intValue = parseInt(value);
//     if (!isNaN(intValue) && intValue >= 0) {
//       setMaxAmounts(prevState => ({
//         ...prevState,
//         [policyName]: intValue
//       }));
//     }
//   };

//   return (
//     <div>
//       <div className="flex items-center">
//         <div className='text-lg font-bold w-72 mt-[-70px]  text-gray-400 px-4 ml-24'>
//           Types Of Reimbursement
//         </div>
//         <IoSettingsOutline className="mr-14  mt-[-70px] size-6 text-gray-500" />
//         <button onClick={handleSave} className="bg-blue-400 text-white py-2  px-4 ml-[530px] rounded-lg">Save</button>
//       </div>
//       {showOptions && (
//         <div className="ml-28 mt-4 flex items-center">
//           <label className="text-gray-600 mr-4">Claiming Option</label>
//           <select className="b-4 rounded-md mt-1 w-82 px-4 py-2" onChange={(e) => handleChange("Claiming Option", e.target.value)}>
//             <option value="">Select Option</option>
//             {claimingOptions.map((option, index) => (
//               <option key={index} value={option.value}>{option.name}</option>
//             ))}
//           </select>
//         </div>
//       )}
//       <div className="table-container ml-28 mt-4">
//         <table className="w-full border border-gray-200 hover:border-blue-500">
//           <thead>
//             <tr>
//               {tableHeaders.map((header, index) => (
//                 <th key={index} className={tableStyles.header}>{header.name}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {values.map((value, index) => (
//               <tr key={index}>
//                 <td className={tableStyles.value}>{value[tableHeaders[0].label]}</td>
//                 <td>
//                   <input
//                     type="number"
//                     placeholder="0"
//                     value={minAmounts[value[tableHeaders[0].label]] || ''}
//                     onChange={(e) => handleMinAmountChange(value[tableHeaders[0].label], e.target.value)}
//                     className=" b-4 px-2 py-1 ml-20 rounded-md w-28"
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     placeholder="0"
//                     value={maxAmounts[value[tableHeaders[0].label]] || ''}
//                     onChange={(e) => handleMaxAmountChange(value[tableHeaders[0].label], e.target.value)}
//                     className=" b-4 px-2 py-1 ml-20 rounded-md w-28"
//                   />
//                 </td>
//                 <td>
//                   <Switch
//                     onChange={() => handleToggleChange(index)}
//                     checked={value.checked || false} // Set a default value if it's undefined
//                     handleDiameter={0}
//                     uncheckedIcon={false}
//                     checkedIcon={false}
//                   />

//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Reimbursementpolicy;

import Switch from 'react-switch';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoSettingsOutline } from "react-icons/io5";
import OptionsComponent from '../../form/Formfields/options/OptionsComponent';
import TextStyle from '../../form/Formfields/text/TextStyle';
import { RiArrowDownSFill } from "react-icons/ri";
import TextComponent from '../../form/DocumentsForm/TextComponent';
// import { RiArrowDownSFill } from "react-icons/ri";
const TableHeaders = [
  {
    name: 'Policy Name',
    className: 'TableHeaders1',

  },
  {
    name: 'Maximum Amount',
    className: 'TableHeaders',
  },
  {
    name: 'Minimum Amount',
    className: 'TableHeaders',
  },
  {
    name: 'Enable',
    className: 'TableHeaders',
  },


];


const TextComponentData1 = [

  {
    name: 'reimbursement_type',
    placeholder: 'policy name',
    textcss: 'aa',
  },


];


const TextComponentData2 = [

  {
    name: 'maximum_amount',
    placeholder: '',
    textcss: 'cc',
  },


];
const TextComponentData3 = [

  {
    name: 'minimum_amount',
    placeholder: '',
    textcss: 'cc',
  },


];

const TextComponentData4 = [

  {
    name: 'enable',
    textcss: 'aa',
  },


];


const OptionData = [
  {
    "name": "period",
    "label": " Claiming period :",
    "type": "options",
    "options": [
      { "name": "Within 1 month of expense made", "value": "Within 1 month of expense made" },
      { "name": "Within 2 month of expense made", "value": "Within 2 month of expense made" },
      { "name": "Within 3 month of expense made", "value": "Within 3 month of expense made" },
      { "name": "Within 4 month of expense made", "value": "Within 4 month of expense made" },
      { "name": "Within 5 month of expense made", "value": "Within 5 month of expense made" },
      { "name": "Within 6 month of expense made", "value": "Within 6 month of expense made" },
    ],
    "placeholder": "Select Components ",
    "textcss": "Remoption",
    "icon": <RiArrowDownSFill className="text-gray-400 -mt-3  -translate-x-16" />,
  },
];
const ReimbrusementPolicy = () => {
  const [formData, setFormData] = useState({
    reimbursement_type: '',
    maximum_amount: '',
    minimum_amount: '',
    period: '',
  });
  const [tableData, setTableData] = useState([]);

  const handleSwitchChange = (checked, rowIndex) => {
    const newData = [...tableData];
    newData[rowIndex].enable = checked; // Update the enable state at the correct row index
    setTableData(newData);
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }));
};


  const handleOptionChange = (value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      period: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Only formData is sent, not the entire tableData
    await axios.post('http://localhost:3000/savepolicy', formData);
    // await axios.post( 'http://192.168.0.134:5000/reimbursements/', formData);
    fetchTableData(); // Optionally fetch table data if needed to see updates
    setFormData({
      reimbursement_type: '',
      maximum_amount: '',
      minimum_amount: '',
      period: '',
      enable: '', // Assuming enable should also be reset
    });
};

  const fetchTableData = async () => {
    // const response = await axios.get('http://192.168.0.162:5000/reimbursements/');
    const response = await axios.get(' http://localhost:3000/savepolicy');
    const fetchedData = response.data.map(item => ({
      ...item,
      enable: item.enable || false // Default to false if undefined
    }));
    setTableData(fetchedData);
  };

  useEffect(() => {
    fetchTableData();
  }, []);



  return (

    <form onSubmit={handleSubmit}>
      <div className='p-8 w-[130vh]'>
        <div className='-translate-y-[8.5vh] flex '>
          <h1 className="text-xl font-semibold ">Reimbursement policy</h1>
          <IoSettingsOutline className="h-5 w-5 ml-6 mt-2 " />
        </div>

        <div className='-mt-12 overflow-x-hidden w-56'>
          {OptionData.map((field, index) => (
            <div key={index} className={`form-field ${field.fieldstyle}`}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  options={field.options}
                  onChange={(e) => handleOptionChange(e.target.value)} // Assuming OptionsComponent can handle this prop
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>

        <table className="w-[140vh] -mt-4 ">
          <thead className="bg-gray-100 text-gray-600 font-normal h-[8vh] ">
            <tr>
              {TableHeaders.map((header, index) => (
                <th key={index} className={TextStyle[header.className]}>
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="h-10 border border-b-1">
            {tableData.map((row, rowIndex) => (
             <tr key={rowIndex} className='h-12 border border-b-1'>
             {TextComponentData1.map((data, i) => (
               <td key={i} className="">
                 <TextComponent
                   name={data.name}
                   onChange={(handleChange)}
                   value={row[data.name]}
                   placeholder={data.placeholder}
                   textcss={TextStyle[data.textcss]}
                 />
               </td>
             ))}
                {TextComponentData2.map((data, i) => (
                  <td key={i} className="">
                    <TextComponent
                      name={data.name}
                      onChange={handleChange}
                      value={row[data.name]}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                    />
                  </td>
                ))}
                {TextComponentData3.map((data, i) => (
                  <td key={i} className="">
                    <TextComponent
                      name={data.name}
                      onChange={handleChange}
                      value={row[data.name]}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                    />
                  </td>
                 ))}
                <td>
                  <Switch
                    onChange={(checked) => handleSwitchChange(checked, rowIndex)}
                    checked={row.enable} // Use the `enable` value from the current row data
                    handleDiameter={20}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    className='ml-24'
                  />
                </td>
              </tr>
            ))}
            <tr className=' h-12 border border-b-1'>
              <td className="">
                {TextComponentData1.map((data, i) => (
                  <td key={i} className="">
                    <TextComponent
                      name={data.name}
                      onChange={handleChange}
                      value={formData[data.name]}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                    />
                  </td>
                ))}
              </td>

              {TextComponentData2.map((data, i) => (
                <td key={i} className="">
                  <TextComponent
                    name={data.name}
                    onChange={handleChange}
                    value={formData[data.name]}
                    placeholder={data.placeholder}
                    textcss={TextStyle[data.textcss]}
                  />
                </td>
              ))}

              {TextComponentData3.map((data, i) => (
                <td key={i} className="">
                  <TextComponent
                    name={data.name}
                    onChange={handleChange}
                    value={formData[data.name]}
                    placeholder={data.placeholder}
                    textcss={TextStyle[data.textcss]}
                  />
                </td>
              ))}

              <td>

                <Switch
                  onChange={handleSwitchChange}
                  checked={formData.enable || false} // Reflect formData's 'enable' status
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  className='ml-24'
                />


              </td>
            </tr>

          </tbody>
        </table>
      </div>
      {/* <button type="submit">Submit</button> */}
      <div className="ml-[140vh] mb-2 ">
        {" "}
        {/* <ButtonConfig Config={ButtonSave} /> */}
        <button type='submit' className="bg-blue-400 text-white py-2  px-4 -ml-[26px] rounded-lg">Save</button>
      </div>
    </form>
  )
}

export default ReimbrusementPolicy;