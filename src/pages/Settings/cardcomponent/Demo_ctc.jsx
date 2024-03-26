
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IoIosArrowBack } from 'react-icons/io';
// import TextComponent from '../../../components/form/Formfields/text/TextComponent';
// import TextStyle from '../../../components/form/Formfields/text/TextStyle';
// import OptionsComponent from '../../../components/form/Formfields/options/OptionsComponent';

// const Demo_ctc = () => {
//   const navigate = useNavigate();
//   const handleGoBack = () => {
//     window.history.back();
//   };
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleOptionChange = (value) => {
//     setSelectedOptions(prevOptions => [...prevOptions, { name: value, value }]);
//   };

//   // const TableCellData = [
//   //   {
//   //     name: 'Components',
//   //     render: (option, index) => (
//   //       <td className="border border-blue-600 text-center">{option.name}</td>
//   //     ),
//   //   },
//   //   {
//   //     name: 'Value',
//   //     render: (option, index) => (
//   //       <td className="border border-blue-600">
//   //         <TextComponent
//   //           name={`value_${index}`}
//   //           placeholder=""
//   //           textcss="ml-4 w-[10vh] outline-none bg-transparent"
//   //         />
//   //       </td>
//   //     ),
//   //   },
//   //   {
//   //     name: 'of Component',
//   //     render: (option, index) => (
//   //       <td className="border border-blue-600">
//   //         <OptionsComponent
//   //           name={`component_${index}`}
//   //           options={[
//   //             { name: "CTC", value: "CTC" },
//   //             { name: "Gross Salary", value: "Gross Salary" },
//   //           ]}
//   //           placeholder=""
//   //           textcss="w-[15vh] flex justify-center ml-16"
//   //         />
//   //       </td>
//   //     ),
//   //   },
//   //   {
//   //     name: 'Condition type',
//   //     render: (option, index) => (
//   //       <td className="border border-blue-600">
//   //         <OptionsComponent
//   //           name={`component_${index}`}
//   //           options={[
//   //             { name: "<", value: "<" },
//   //             { name: ">=", value: ">=" },
//   //           ]}
//   //           placeholder=""
//   //           textcss="w-[5vh] flex justify-center ml-12"
//   //         />
//   //       </td>
//   //     ),
//   //   },
//   //   {
//   //     name: 'Type Value',
//   //     render: (option, index) => (
//   //       <td className="border border-blue-600">
//   //         <TextComponent
//   //           name={`value_${index}`}
//   //           placeholder=""
//   //           textcss="w-[13vh] ml-16 outline-none bg-transparent"
//   //         />
//   //       </td>
//   //     ),
//   //   },
//   //   {
//   //     name: 'Condition Value',
//   //     render: (option, index) => (
//   //       <td className="border border-blue-600">
//   //         <TextComponent
//   //           name={`value_${index}`}
//   //           placeholder=""
//   //           textcss="w-[13vh] ml-16 outline-none bg-transparent"
//   //         />
//   //       </td>
//   //     ),
//   //   },
//   // ];

//   const TextData = [
//     {
//       "name": "templatename",
//       "label": "Template Name",
//       "type": "text",
//       "placeholder": "Enter here",
//       "textcss": "templatename"
//     }
//   ];

//   const OptionData = [
//     {
//       "name": "gender",
//       "label": " ",
//       "type": "options",
//       "options": [
//         { "name": "DA", "value": "DA" },
//         { "name": "LTA", "value": "LTA" },
//         { "name": "Gratutity", "value": "Gratutity" },
//         { "name": "insurance", "value": "insurance" },
//         { "name": "EPF", "value": "EPF" },
//         { "name": "Add Allowances", "value": "Add Allowances" },
//       ],
//       "placeholder": " Select Components",
//       "textcss": "ctcoption"
//     },
//   ];

//   const TableHeaders = [
//     {
//       name: 'Components',
//       className: 'px-1 w-[40vh] border-r-2 border-b-2',
//     },
//     {
//       name: '% Value',
//       className: 'px-1 w-[40vh] border-r-2 border-b-2',
//     },
//     {
//       name: '% of Component',
//       className: 'px-1 w-[80vh] border-r-2 border-b-2',
//     },
//     {
//       name: 'Condition type',
//       className: 'px-1 w-[80vh] border-r-2 border-b-2',
//     },
//     {
//       name: 'Type Value',
//       className: 'px-1 w-[80vh] border-r-2 border-b-2',
//     },
//     {
//       name: 'Condition Value',
//       className: 'px-0 w-[80vh] border-b-2',
//     },
//   ];

//   return (
//     <form >
//     <div className=" p-8 bg-gray-100">
//       <div className="flex items mb-8">
//         <div className="back-button" onClick={handleGoBack}>
//           <IoIosArrowBack size={24} />
//         </div>
//         <h1 className="text-2xl font-bold">Add CTC Template</h1>
//       </div>

//       <div className='flex'>
//         <div className='ml-6 mt-4'>
//           {TextData.map((field, index) => (
//             <div key={index} className={`form-field ${field.fieldstyle}`}>
//               <label className={TextStyle[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   textcss={TextStyle[field.textcss].input}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className='mt-9 ml-[65vh]'>
//           {OptionData.map((field, index) => (
//             <div key={index} className={`form-field ${field.fieldstyle}`}>
//               <label className={TextStyle[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "options" && (
//                 <OptionsComponent
//                   name={field.name}
//                   options={field.options}
//                   onChange={(e) => handleOptionChange(e.target.value)}
//                   textcss={TextStyle[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="table-container">
//         <table className="w-[150vh] mt-10 border border-blue-600">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               {TableHeaders.map((header, index) => (
//                 <th key={index} className={header.className}>
//                   {header.name}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {selectedOptions.map((option, index) => (
//               <tr key={index} className="border border-blue-600 h-10">
//                 <td className="border border-blue-600  text-center">{option.name}</td>
//                 <td className="border border-blue-600">
//                   <TextComponent
//                     name={`value_${index}`}
//                     placeholder=""
//                     textcss="ml-4 w-[10vh] outline-none bg-transparent"
//                   />
//                 </td>

//                 <td className="border border-blue-600">
//                   <OptionsComponent
//                     name={`component_${index}`}
//                     options={[
//                       { name: "CTC", value: "CTC" },
//                       { name: "Gross Salary", value: "Gross Salary" },
//                     ]}
//                     placeholder=""
//                     textcss="w-[15vh] flex justify-center ml-16"
//                   />
//                 </td>

//                 <td className="border border-blue-600">
//                   <OptionsComponent
//                     name={`component_${index}`}
//                     options={[
//                       { name: "<", value: "<" },
//                       { name: ">=", value: ">=" },
//                     ]}
//                     placeholder=""
//                     textcss="w-[5vh] flex justify-center ml-12"
//                   />
//                 </td>

//                 <td className="border border-blue-600">
//                   <TextComponent
//                     name={`value_${index}`}
//                     placeholder=""
//                     textcss="w-[13vh] ml-16 outline-none bg-transparent "
//                   />
//                 </td>
//                 <td className="border border-blue-600">
//                   <TextComponent
//                     name={`value_${index}`}
//                     placeholder=""
//                     textcss="w-[13vh] ml-16 outline-none bg-transparent"
//                   />
//                 </td>
//               </tr>
//             ))}

// {/* {selectedOptions.map((option, index) => (
//     <tr key={index} className="border border-purple-600">
//       {TableCellData.map((element, Index) => (
//         <div key={Index}>
//           {element.render(option, index)}
//         </div>
//       ))}
//     </tr>
//   ))} */}
//           </tbody>
//         </table>
//       </div>
//     </div>
    
//     <button type="submit" className="save-button">Save Template</button>
//     </form>
//   );
// };

// export default Demo_ctc;


// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IoIosArrowBack } from 'react-icons/io';
// import TextComponent from '../../../components/form/Formfields/text/TextComponent';
// import TextStyle from '../../../components/form/Formfields/text/TextStyle';
// import OptionsComponent from '../../../components/form/Formfields/options/OptionsComponent';
// import { TextData, OptionData, TableHeaders } from './Demo_ctc_data';
// const Demo_ctc = () => {
//   const navigate = useNavigate();
//   const handleGoBack = () => {
//     window.history.back();
//   };
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [templateName, setTemplateName] = useState('');
//   const handleOptionChange = (value) => {
//     setSelectedOptions(prevOptions => [...prevOptions, { name: value, value }]);
//   };


//   // Step 2: Create a function to gather the data
//   const gatherDataAndPost = async () => {
//     const tableData = selectedOptions.map((option, index) => ({
//       name: option.name,
//       value: document.querySelector(`input[name="value_${index}"]`).value,
//       component: document.querySelector(`select[name="component_${index}"]`).value,
//       conditionType: document.querySelector(`select[name="conditionType_${index}"]`).value,
//       typeValue: document.querySelector(`input[name="typeValue_${index}"]`).value, 
//       conditionValue: document.querySelector(`input[name="conditionValue_${index}"]`).value, 
//     }));

//     const dataToPost = {
//       templateName,
//       tableData,
//     };

  

//   try {
//     const response = await axios.post('http://localhost:3000/test', dataToPost);
//     console.log(response.data);

//     // Log the structure of Demo_ctc
//     console.log(dataToPost);

//     // Reset the form
//     setSelectedOptions([]);
//     setTemplateName('');
//   } catch (error) {
//     console.error(error);
//   }
// };
 
//   return (
//     <form onSubmit={gatherDataAndPost} >
//     <div className=" p-8 bg-gray-100">
//       <div className="flex items mb-8">
//         <div className="back-button" onClick={handleGoBack}>
//           <IoIosArrowBack size={24} />
//         </div>
//         <h1 className="text-2xl font-bold">Add CTC Template</h1>
//       </div>

//       <div className='flex'>
//         <div className='ml-6 mt-4'>
//           {TextData.map((field, index) => (
//             <div key={index} className={`form-field ${field.fieldstyle}`}>
//               <label className={TextStyle[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   textcss={TextStyle[field.textcss].input}
//                   onChange={(e) => setTemplateName(e.target.value)} 
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className='mt-9 ml-[65vh]'>
//           {OptionData.map((field, index) => (
//             <div key={index} className={`form-field ${field.fieldstyle}`}>
//               <label className={TextStyle[field.textcss].label}>
//                 {field.label}
//               </label>
//               {field.type === "options" && (
//                 <OptionsComponent
//                   name={field.name}
//                   options={field.options}
//                   onChange={(e) => handleOptionChange(e.target.value)}
//                   textcss={TextStyle[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="table-container">
//         <table className="w-[150vh] mt-10 border border-blue-600">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               {TableHeaders.map((header, index) => (
//                 <th key={index} className={header.className}>
//                   {header.name}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {selectedOptions.map((option, index) => (
//               <tr key={index} className="border border-blue-600 h-10">
//                 <td className="border border-blue-600  text-center">{option.name}</td>
//                 <td className="border border-blue-600">
//                   <TextComponent
//                     name={`value_${index}`}
//                     placeholder=""
//                     textcss="ml-4 w-[10vh] outline-none bg-transparent"
//                   />
//                 </td>

//                 <td className="border border-blue-600">
//                   <OptionsComponent
//                     name={`component_${index}`}
//                     options={[
//                       { name: "CTC", value: "CTC" },
//                       { name: "Gross Salary", value: "Gross Salary" },
//                     ]}
//                     placeholder="enter "
//                     textcss="w-[15vh] flex justify-center ml-16"
//                   />
//                 </td>

//                 <td className="border border-blue-600">
//                   <OptionsComponent
//                       name={`conditionType_${index}`}
//                     options={[
//                       { name: "<", value: "<" },
//                       { name: ">=", value: ">=" },
//                     ]}
//                     placeholder="enter"
//                     textcss="w-[5vh] flex justify-center ml-12"
//                   />
//                 </td>

//                 <td className="border border-blue-600">
//                   <TextComponent
//                name={`typeValue_${index}`}
//                     placeholder=""
//                     textcss="w-[13vh] ml-16 outline-none bg-transparent "
//                   />
//                 </td>
//                 <td className="border border-blue-600">
//                   <TextComponent
//                        name={`conditionValue_${index}`} // Update this line
//                     placeholder=""
//                     textcss="w-[13vh] ml-16 outline-none bg-transparent"
//                   />
//                 </td>
//               </tr>
//             ))}


//           </tbody>
//         </table>
//       </div>
//     </div>
    
//     <button type="submit" className="save-button">Save Template</button>
//     </form>
//   );
// };

// export default Demo_ctc;
































/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import TextComponent from '../../../components/form/Formfields/text/TextComponent';
import TextStyle from '../../../components/form/Formfields/text/TextStyle';
import OptionsComponent from '../../../components/form/Formfields/options/OptionsComponent';
import { TextData, OptionData, TableHeaders ,TextComponentData,OptionsComponentData, TextComponentData1,SaveTemplate} from './Demo_ctc_data';
import ButtonConfig from '../../../configurations/Button/ButtonConfig';
const Demo_ctc = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    window.history.back();
  };
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [templateName, setTemplateName] = useState('');
  const handleOptionChange = (value) => {
    setSelectedOptions(prevOptions => [...prevOptions, { name: value, value }]);
  };


  // Step 2: Create a function to gather the data
  const gatherDataAndPost = async () => {
    const tableData = selectedOptions.map((option, index) => ({
      name: option.name,
      value: document.querySelector(`input[name="value_${index}"]`).value,
      component: document.querySelector(`select[name="component_${index}"]`).value,
      conditionType: document.querySelector(`select[name="conditionType_${index}"]`).value,
      typeValue: document.querySelector(`input[name="typeValue_${index}"]`).value, 
      conditionValue: document.querySelector(`input[name="conditionValue_${index}"]`).value, 
    }));

    const dataToPost = {
      templateName,
      tableData,
    };

  

  try {
    const response = await axios.post('http://localhost:3000/test', dataToPost);
    console.log(response.data);

    // Log the structure of Demo_ctc
    console.log(dataToPost);

    // Reset the form
    setSelectedOptions([]);
    setTemplateName('');
  } catch (error) {
    console.error(error);
  }
};
 
  return (
    <form onSubmit={gatherDataAndPost} >
    <div className=" p-8 w-[160vh]">
      <div className="flex items mb-8">
        <div className="back-button" onClick={handleGoBack}>
          <IoIosArrowBack size={24} />
        </div>
        <h1 className="text-2xl font-bold">Add CTC Template</h1>
      </div>

      <div className='flex'>
        <div className='ml-6 mt-4'>
          {TextData.map((field, index) => (
            <div key={index} className={`form-field ${field.fieldstyle}`}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  textcss={TextStyle[field.textcss].input}
                  onChange={(e) => setTemplateName(e.target.value)} 
                />
              )}
            </div>
          ))}
        </div>

        <div className='mt-9 ml-[65vh]'>
          {OptionData.map((field, index) => (
            <div key={index} className={`form-field ${field.fieldstyle}`}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  options={field.options}
                  onChange={(e) => handleOptionChange(e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="table-container">
        <table className="w-[150vh] mt-10 border border-blue-600 ">
          <thead className="bg-violet-500' text-white">
            <tr>
              {TableHeaders.map((header, index) => (
                <th key={index} className={header.className}>
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>

          

<tbody>
  {selectedOptions.map((option, index) => (
    <tr key={index} className="border border-blue-600 h-10">
      <td className="border border-blue-600  text-center">{option.name}</td>
    

      {TextComponentData.slice(0,1).map((data, i) => (
        <td className="border border-blue-600">
          <TextComponent
            name={`${data.name}_${index}`}
            placeholder={data.placeholder}
            textcss={data.textcss}
          />
        </td>
      ))}

      {OptionsComponentData.slice(0,2).map((data, i) => (
        <td className="border border-blue-600">
          <OptionsComponent
            name={`${data.name}_${index}`}
            options={data.options}
            placeholder={data.placeholder}
            textcss={data.textcss}
          />
        </td>
      ))}

{TextComponentData1.slice(0,2).map((data, i) => (
        <td className="border border-blue-600">
          <TextComponent
            name={`${data.name}_${index}`}
            placeholder={data.placeholder}
            textcss={data.textcss}
          />
        </td>
      ))}

     
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
    
    {/* <button type="submit" className="save-button">Save Template</button> */}
    <div className='ml-[137vh] mt-4'>
    <ButtonConfig Config={SaveTemplate}  />
    </div>
    </form>
  );
};

export default Demo_ctc;