// /* eslint-disable react/prop-types */
// import RequestForReimbursementStyles from './RequestForReimbursementStyles'
// import OptionsComponent from '../../components/form/Formfields/options/OptionsComponent'
// import TextComponent from '../../components/form/Formfields/text/TextComponent'
// import Button from '../../configurations/Button/Button'
// import {Addnew, Cancel, Requestreimbursement, add} from './RequestForReimbursementData'
// import RequestForLoanStyles from './RequestForLoanStyles'
// import DateComponent from '../../components/form/Formfields/date/DateComponent'
// import FileComponent from '../../components/form/DocumentsForm/FileComponent'
// const RequestForReimbursementComponent = ({config}) => {
//  return (
//     <div className=''> 
//        <div className='w-[150vh]'>
//         <h1 className='text-xl font-semibold translate-x-[5vh] -translate-y-[3.5vh]'>Request For Reimbursement</h1>
        
// <div className='border-1 border-gray-700 shadow-md h-[70vh]'>
//         <div className=' ml-7'>
//         {config.slice(0,1).map((field, index) => (
            
//               <div key={index}>
                
//                    <label className={RequestForReimbursementStyles[field.textcss].label}>
//                   {field.label}
//                 </label>
//                  {field.type === "options" && (
//                 <OptionsComponent
//                   name={field.name}
//                 //   value={values[field.name] || ""}
//                   options={field.options}
//                 //   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={RequestForReimbursementStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                 />
//               )}
//            </div>
//             ))}
//       {config.slice(1, 2).map((field, index) => (
//               <div key={index} className={`form-field ${field.fieldstyle}`}>
//                                 <div className="absolute ml-[30vh] mt-8">{field.icon}</div>
//                 <label className={RequestForReimbursementStyles[field.textcss].label}>
//                   {field.label}
//                 </label>
//                 {field.type === "date" && (
//                   <DateComponent
//                     name={field.name}
//                     placeholder={field.placeholder}
//                     // value={originalDateValues[field.name] || ""}
//                     // onChange={(e) => handleChange(field.name, e.target.value)}
//                     textcss={RequestForReimbursementStyles[field.textcss].input}
//                   />
//                 )}
           
//               </div>
//             ))}
// {config.slice(2, 3).map((field, index) => (
//   <div key={index} >
//     <label className={RequestForReimbursementStyles[field.textcss].label}>
//       {field.label}
//     </label>
//     {field.type === "text" && (
//       <TextComponent
//         name={field.name}
//         textcss={RequestForReimbursementStyles[field.textcss].input}
//         icon={field.icon}
//         placeholder={field.placeholder}
//         // value={data[field.name]} 
//         // onChange={(e) => handleInputChange(field.name, e.target.value)} 
//       />
//     )}
//   </div>
// ))}
// {config.slice(3, 4).map((field, index) => (
//   <div key={index} >
//     <label className={RequestForLoanStyles[field.textcss].label}>
//       {field.label}
//     </label>
//     {field.type === "text" && (
//       <TextComponent
//         name={field.name}
//         textcss={RequestForLoanStyles[field.textcss].input}
//         icon={field.icon}
//         placeholder={field.placeholder}
//         // value={data[field.name]} 
//         // onChange={(e) => handleInputChange(field.name, e.target.value)} 
//       />
//     )}
//   </div>
// ))}
// {config.slice(4, 6).map((field, index) => (
//             <div key={index}>
//               <label className={RequestForReimbursementStyles[field.textcss].label}>
//                 {field.label}
//               </label>
            
//               {field.type === "file" && (
//                 <FileComponent
//                   name={field.name}
//                 //   onChange={(file) => handleFileChange(field.name, file)}
//                   textcss={RequestForReimbursementStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                 />
//               )}
//             </div>
//           ))}
// <div className='mt-4'>
//         {/* <Button  Configs={Addnew} /> */}
//         <Button  Configs={add} />
//         </div>
//         <div className='flex mt-4'>
//         <Button  Configs={Requestreimbursement} />
//         <Button  Configs={Cancel} />
//         </div>
//         </div>
//       </div>
//       </div> 
//     </div>
//   )
// }

// export default RequestForReimbursementComponent







// import React, { useState } from 'react';
// import RequestForReimbursementStyles from './RequestForReimbursementStyles';
// import OptionsComponent from '../../components/form/Formfields/options/OptionsComponent';
// import TextComponent from '../../components/form/Formfields/text/TextComponent';
// import Button from '../../configurations/Button/Button';
// import { Addnew, Cancel, Requestreimbursement, add } from './RequestForReimbursementData';
// import RequestForLoanStyles from './RequestForLoanStyles';
// import DateComponent from '../../components/form/Formfields/date/DateComponent';
// import FileComponent from '../../components/form/DocumentsForm/FileComponent';

// const RequestForReimbursementComponent = ({ config }) => {
//   const [formData, setFormData] = useState([{ id: 0, values: {} }]);

//   const addNewForm = () => {
//     setFormData([...formData, { id: formData.length, values: {} }]);
//   };

//   const handleFormChange = (id, fieldName, value) => {
//     setFormData(
//       formData.map((form) =>
//         form.id === id ? { ...form, values: { ...form.values, [fieldName]: value } } : form
//       )
//     );
//   };

//   return (
//     <div className=''>
//       <div className='w-[150vh]'>
//         <h1 className='text-xl font-semibold translate-x-[5vh] -translate-y-[3.5vh]'>Request For Reimbursement</h1>
//         <div className='border-1 border-gray-700 shadow-md h-full'>
//           <div className=' ml-7'>
//             {formData.map((form, index) => (
//               <div key={index}>
//                 {/* Render input fields for each form data object */}
//                 {config.map((field, fieldIndex) => (
//                   <div key={fieldIndex}>
//                     <label className={RequestForReimbursementStyles[field.textcss].label}>
//                       {field.label}
//                     </label>
//                     {field.type === 'options' && (
//                       <OptionsComponent
//                         name={field.name}
//                         value={form.values[field.name] || ''}
//                         options={field.options}
//                         onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
//                         textcss={RequestForReimbursementStyles[field.textcss].input}
//                         placeholder={field.placeholder}
//                         icon={field.icon}
//                       />
//                     )}
//                     {field.type === 'date' && (
//                       <DateComponent
//                         name={field.name}
//                         placeholder={field.placeholder}
//                         value={form.values[field.name] || ''}
//                         onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
//                         textcss={RequestForReimbursementStyles[field.textcss].input}
//                       />
//                     )}
//                     {field.type === 'text' && (
//                       <TextComponent
//                         name={field.name}
//                         textcss={
//                           field.name === 'reason'
//                             ? RequestForReimbursementStyles[field.textcss].input
//                             : RequestForLoanStyles[field.textcss].input
//                         }
//                         icon={field.icon}
//                         placeholder={field.placeholder}
//                         value={form.values[field.name] || ''}
//                         onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
//                       />
//                     )}
//                     {field.type === 'file' && (
//                       <FileComponent
//                         name={field.name}
//                         onChange={(file) => handleFormChange(form.id, field.name, file)}
//                         textcss={RequestForReimbursementStyles[field.textcss].input}
//                         placeholder={field.placeholder}
//                         icon={field.icon}
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ))}
//             <div className='mt-4'>
//               <Button Configs={add} onClick={addNewForm} />
//             </div>
//             <div className='flex mt-4'>
//               <Button Configs={Requestreimbursement} />
//               <Button Configs={Cancel} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestForReimbursementComponent;









// import React, { useState } from 'react';
// import RequestForReimbursementStyles from './RequestForReimbursementStyles';
// import OptionsComponent from '../../components/form/Formfields/options/OptionsComponent';
// import TextComponent from '../../components/form/Formfields/text/TextComponent';
// import Button from '../../configurations/Button/Button';
// import { Addnew, Cancel, Requestreimbursement, add } from './RequestForReimbursementData';
// import RequestForLoanStyles from './RequestForLoanStyles';
// import DateComponent from '../../components/form/Formfields/date/DateComponent';
// import FileComponent from '../../components/form/DocumentsForm/FileComponent';
// import { FaTimes } from 'react-icons/fa';

// const RequestForReimbursementComponent = ({ config }) => {
//   const [formData, setFormData] = useState([{ id: 0, values: {} }]);

//   const addNewForm = () => {
//     setFormData([...formData, { id: formData.length, values: {} }]);
//   };

//   const handleFormChange = (id, fieldName, value) => {
//     setFormData(
//       formData.map((form) =>
//         form.id === id ? { ...form, values: { ...form.values, [fieldName]: value } } : form
//       )
//     );
//   };

//   const removeForm = (id) => {
//     setFormData(formData.filter((form) => form.id !== id));
//   };

//   return (
//     <div className=''>
//       <div className='w-[150vh]'>
//         <h1 className='text-xl font-semibold translate-x-[5vh] -translate-y-[3.5vh]'>Request For Reimbursement</h1>
//         <div className='border-1 border-gray-700 shadow-md h-full'>
//           <div className=' ml-7'>
//             {formData.map((form, index) => (
//               <div key={index} className="flex items-center">
//                 <div>
//                   {config.map((field, fieldIndex) => (
//                     <div key={fieldIndex}>
//                       <label className={RequestForReimbursementStyles[field.textcss].label}>
//                         {field.label}
//                       </label>
//                       {field.type === 'options' && (
//                         <OptionsComponent
//                           name={field.name}
//                           value={form.values[field.name] || ''}
//                           options={field.options}
//                           onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
//                           textcss={RequestForReimbursementStyles[field.textcss].input}
//                           placeholder={field.placeholder}
//                           icon={field.icon}
//                         />
//                       )}
//                       {field.type === 'date' && (
//                         <DateComponent
//                           name={field.name}
//                           placeholder={field.placeholder}
//                           value={form.values[field.name] || ''}
//                           onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
//                           textcss={RequestForReimbursementStyles[field.textcss].input}
//                         />
//                       )}
//                       {field.type === 'text' && (
//                         <TextComponent
//                           name={field.name}
//                           textcss={
//                             field.name === 'reason'
//                               ? RequestForReimbursementStyles[field.textcss].input
//                               : RequestForLoanStyles[field.textcss].input
//                           }
//                           icon={field.icon}
//                           placeholder={field.placeholder}
//                           value={form.values[field.name] || ''}
//                           onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
//                         />
//                       )}
//                       {field.type === 'file' && (
//                         <FileComponent
//                           name={field.name}
//                           onChange={(file) => handleFormChange(form.id, field.name, file)}
//                           textcss={RequestForReimbursementStyles[field.textcss].input}
//                           placeholder={field.placeholder}
//                           icon={field.icon}
//                         />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//                 {index !== 0 && (
//                   <FaTimes
//                     className="ml-2 text-red-500 cursor-pointer"
//                     onClick={() => removeForm(form.id)}
//                   />
//                 )}
//               </div>
//             ))}
//             <div className='mt-4'>
//               <Button Configs={add} onClick={addNewForm} />
//             </div>
//             <div className='flex mt-4'>
//               <Button Configs={Requestreimbursement} />
//               <Button Configs={Cancel} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestForReimbursementComponent;



// import React, { useState } from 'react';
// import axios from 'axios';
// import RequestForReimbursementStyles from './RequestForReimbursementStyles';
// import OptionsComponent from '../../components/form/Formfields/options/OptionsComponent';
// import TextComponent from '../../components/form/Formfields/text/TextComponent';
// import Button from '../../configurations/Button/Button';
// import { Addnew, Cancel, Requestreimbursement, add } from './RequestForReimbursementData';
// import RequestForLoanStyles from './RequestForLoanStyles';
// import DateComponent from '../../components/form/Formfields/date/DateComponent';
// import FileComponent from '../../components/form/DocumentsForm/FileComponent';
// import { FaTimes } from 'react-icons/fa';
// import ModalComponent from '../../components/form/Formfields/modal/ModalComponent';
// import { ModalConfig2 } from '../../components/form/Formfields/modal/ModalConfig2';

// const RequestForReimbursementComponent = ({ config }) => {
//   const [formData, setFormData] = useState([{ id: 0, values: {} }]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const addNewForm = () => {
//     setFormData([...formData, { id: formData.length, values: {} }]);
//   };

//   const handleFormChange = (id, fieldName, value) => {
//     setFormData(
//       formData.map((form) =>
//         form.id === id ? { ...form, values: { ...form.values, [fieldName]: value } } : form
//       )
//     );
//   };
//   const handleButtonClick = (type) => {
//     if (type === "submit") {
//       setIsModalOpen(true);
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const removeForm = (id) => {
//     setFormData(formData.filter((form) => form.id !== id));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await Promise.all(
//         formData.map(async (form) => {
//           const response = await axios.post('http://localhost:3000/re', form.values);
//           console.log('Data sent successfully:', response.data);
//         })
//       );
//     } catch (error) {
//       console.error('Error sending data:', error);
//     }
//   };

//   return (
//     <div className=''>
//       <div className='w-[150vh]'>
//         <h1 className='text-xl font-semibold translate-x-[5vh] -translate-y-[3.5vh]'>Request For Reimbursement</h1>
//         <div className='border-1 border-gray-700 shadow-md h-full'>
//           <div className=' ml-7'>
//             <form onSubmit={handleSubmit}>
//               {formData.map((form, index) => (
//                 <div key={index} className="flex items-center">
                  
//                   <div>
//                     {config.map((field, fieldIndex) => (
//                       <div key={fieldIndex}>
//                         <label className={RequestForReimbursementStyles[field.textcss].label}>
//                           {field.label}
//                         </label>
//                         {field.type === 'options' && (
//                           <OptionsComponent
//                             name={field.name}
//                             value={form.values[field.name] || ''}
//                             options={field.options}
//                             onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
//                             textcss={RequestForReimbursementStyles[field.textcss].input}
//                             placeholder={field.placeholder}
//                             icon={field.icon}
//                           />
//                         )}
                        
//                         {field.type === 'date' && (
                          
//                           <DateComponent
//                             name={field.name}
//                             placeholder={field.placeholder}
//                             value={form.values[field.name] || ''}
//                             onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
//                             textcss={RequestForReimbursementStyles[field.textcss].input}
//                             icon={field.icon}

//                           />
                          
//                         )}
//                         {field.type === 'text' && (
//                           <TextComponent
//                             name={field.name}
//                             textcss={
//                               field.name === 'reason'
//                                 ? RequestForReimbursementStyles[field.textcss].input
//                                 : RequestForLoanStyles[field.textcss].input
//                             }
//                             icon={field.icon}
//                             placeholder={field.placeholder}
//                             value={form.values[field.name] || ''}
//                             onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
//                           />
//                         )}
//                         {field.type === 'file' && (
//                           <FileComponent
//                             name={field.name}
//                             onChange={(file) => handleFormChange(form.id, field.name, file)}
//                             textcss={RequestForReimbursementStyles[field.textcss].input}
//                             placeholder={field.placeholder}
//                             icon={field.icon}
//                             iconPosition={field.iconPosition}
//                           />
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                   {index !== 0 && (
//                     <FaTimes
//                       className="ml-2 text-red-500 cursor-pointer"
//                       onClick={() => removeForm(form.id)}
//                     />
//                   )}
//                 </div>
//               ))}
//               <div className='mt-4'>
//                 <Button Configs={add} onClick={addNewForm} />
//               </div>
//               <div className='flex mt-4'>
//                 <Button Configs={Requestreimbursement}  onClick={handleButtonClick} />
//                 <Button Configs={Cancel} />
                
//               </div>
//               <ModalComponent
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
        
//         config={ModalConfig2}
       
//       />
//             </form>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default RequestForReimbursementComponent;


import React, { useState } from 'react';
import axios from 'axios';
import RequestForReimbursementStyles from './RequestForReimbursementStyles';
import OptionsComponent from '../../components/form/Formfields/options/OptionsComponent';
import TextComponent from '../../components/form/Formfields/text/TextComponent';
import Button from '../../configurations/Button/Button';
import { Addnew, Cancel, Requestreimbursement, add } from './RequestForReimbursementData';
import RequestForLoanStyles from './RequestForLoanStyles';
import DateComponent from '../../components/form/Formfields/date/DateComponent';
import FileComponent from '../../components/form/DocumentsForm/FileComponent';
import { FaTimes } from 'react-icons/fa';
import ModalComponent from '../../components/form/Formfields/modal/ModalComponent';
import { ModalConfig2 } from '../../components/form/Formfields/modal/ModalConfig2';
import ButtonConfig from '../../configurations/Button/ButtonConfig';

const RequestForReimbursementComponent = ({ config }) => {
  const [formData, setFormData] = useState([{ id: 0, values: {} }]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNewForm = () => {
    setFormData([...formData, { id: formData.length, values: {} }]);
  };

  const handleFormChange = (id, fieldName, value) => {
    setFormData(
      formData.map((form) =>
        form.id === id ? { ...form, values: { ...form.values, [fieldName]: value } } : form
      )
    );
  };
 const handleButtonClick = (type) => {
    if (type === "submit") {
      setIsModalOpen(true);
    }
  };
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const removeForm = (id) => {
    setFormData(formData.filter((form) => form.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Promise.all(
        formData.map(async (form) => {
          const response = await axios.post('http://localhost:3000/re', form.values);
          console.log('Data sent successfully:', response.data);
        })
      );
      // Open the modal after successful form submission
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className=''>
      <div className='w-[150vh]'>
        <h1 className='text-xl font-semibold translate-x-[5vh] -translate-y-[3.5vh]'>Request For Reimbursement</h1>
        <div className='border-1 border-gray-700 shadow-md h-full'>
          <div className=' ml-7'>
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={(e) => handleSubmit(e, 'Requestreimbursement')}>
              {formData.map((form, index) => (
                <div key={index} className="flex items-center">
                  
                  <div>
                    {config.map((field, fieldIndex) => (
                      <div key={fieldIndex}>
                        <label className={RequestForReimbursementStyles[field.textcss].label}>
                          {field.label}
                        </label>
                        {field.type === 'options' && (
                          <OptionsComponent
                            name={field.name}
                            value={form.values[field.name] || ''}
                            options={field.options}
                            onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
                            textcss={RequestForReimbursementStyles[field.textcss].input}
                            placeholder={field.placeholder}
                            icon={field.icon}
                          />
                        )}
                        
                        {field.type === 'date' && (
                          
                          <DateComponent
                            name={field.name}
                            placeholder={field.placeholder}
                            value={form.values[field.name] || ''}
                            onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
                            textcss={RequestForReimbursementStyles[field.textcss].input}
                            icon={field.icon}

                          />
                          
                        )}
                        {field.type === 'text' && (
                          <TextComponent
                            name={field.name}
                            textcss={
                              field.name === 'reason'
                                ? RequestForReimbursementStyles[field.textcss].input
                                : RequestForLoanStyles[field.textcss].input
                            }
                            icon={field.icon}
                            placeholder={field.placeholder}
                            value={form.values[field.name] || ''}
                            onChange={(e) => handleFormChange(form.id, field.name, e.target.value)}
                          />
                        )}
                        {field.type === 'file' && (
                          <FileComponent
                            name={field.name}
                            onChange={(file) => handleFormChange(form.id, field.name, file)}
                            textcss={RequestForReimbursementStyles[field.textcss].input}
                            placeholder={field.placeholder}
                            icon={field.icon}
                            iconPosition={field.iconPosition}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  {index !== 0 && (
                    <FaTimes
                      className="ml-2 text-red-500 cursor-pointer"
                      onClick={() => removeForm(form.id)}
                    />
                  )}
                </div>
              ))}
              <div className='mt-4'>
                <ButtonConfig Config={add} onClick={addNewForm} />
              </div>
              <div className='flex mt-4'>
                <ButtonConfig Config={Requestreimbursement} onClick={() => handleButtonClick("submit")}  />
                <ButtonConfig Config={Cancel}/>
                
              </div>
              <ModalComponent
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                config={ModalConfig2}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForReimbursementComponent;
