// import { useState, useEffect } from 'react';
// import { paymentStyles } from './PaymentRemainderStyles';
// import axios from 'axios';
// import { PaymentConfig, TextComponentData4, config, ToggleConfig } from './PaymentRemainderConfig'; // Import ToggleConfig
// import TextComponent from '../../form/Formfields/text/TextComponent';
// import TextStyle from '../../form/Formfields/text/TextStyle';
// import Switch from "react-switch";
// import { DateRangePicker } from 'react-date-range';
// import dayjs from 'dayjs';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file

// const PaymentsReminderSettings = () => {
//   const [payments, setPayments] = useState([]);
//   const [defaultReminder, setDefaultReminder] = useState('');
//   const [values, setValues] = useState({});
//   const [daterange, setDaterange] = useState({
//     startDate: dayjs().format('YYYY-MM-DD'),
//     endDate: dayjs().format('YYYY-MM-DD'),
//   });
//   const [paymentType, setPaymentType] = useState('onetime'); // State to manage selected payment type

//   const handleRangeChange = (ranges) => {
//     setDaterange({
//       startDate: dayjs(ranges.selection.startDate).format('YYYY-MM-DD'),
//       endDate: dayjs(ranges.selection.endDate).format('YYYY-MM-DD'),
//     });
//   };

//   const handleChange = (name, value) => {
//     setValues(prevValues => ({
//       ...prevValues,
//       [name]: value
//     }));
//   };

//   useEffect(() => {
//     axios.get('http://localhost:3000/paymentRemaindersetting')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setPayments(response.data);
//         } else {
//           throw new Error('Unexpected data format');
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const togglePaymentType = (name, type) => {
//     setValues(prevValues => ({
//       ...prevValues,
//       [name]: type
//     }));
//     setPaymentType(type);
//   };

//   const onSave = () => {
//     const dataToSend = {
//       ...values,
//       startDate: daterange.startDate,
//       endDate: daterange.endDate,
//     };

//     axios.post('http://localhost:3000/paymentRemaindersetting', dataToSend)
//       .then(response => {
//         console.log('Data saved successfully:', response.data);
//         // Optionally update the state or provide user feedback
//       })
//       .catch(error => {
//         console.error('Error saving data:', error);
//       });
//   };

//   return (
//     <div className={paymentStyles.wrapperStyle}>
//       {payments.length > 0 ? (
//         payments.map((payment, index) => (
//           <div className={paymentStyles.containerStyle}>
//         <div className={paymentStyles.textContainerStyle}>
//           {config.slice(0, 1).map((field, index) => (
//             <div key={index} className='flex w-[17rem] justify-between'>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   value={values[field.name] || ''}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={TextStyle[field.textcss].input}
//                   placeholder={field.placeholder}
//                 />
//               )}
//               {TextComponentData4.map((data, i) => (
//                 <div key={i} className=''>
//                   <Switch
//                     onChange={(checked) => handleChange(data.name, checked)}
//                     checked={values[data.name] || false}
//                     onColor="#6b6aef"
//                     handleDiameter={20}
//                     uncheckedIcon={false}
//                     checkedIcon={false}
//                     boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//                     height={25}
//                     width={50}
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//           <div className=''>
//             <div className={paymentStyles.dateInputContainer}>
//               <div className={paymentStyles.dateInputRow}>
//                 <label className={paymentStyles.dateLabel}>Start Date:</label>
//                 <input type="date" value={daterange.startDate} onChange={(e) => handleRangeChange({ selection: { startDate: e.target.value, endDate: daterange.endDate } })} className={paymentStyles.dateInput} />
//               </div>
//               <div className={paymentStyles.dateInputRow}>
//                 <label className={paymentStyles.dateLabel}>End Date:</label>
//                 <input type="date" value={daterange.endDate} onChange={(e) => handleRangeChange({ selection: { startDate: daterange.startDate, endDate: e.target.value } })} className={paymentStyles.dateInput} />
//               </div>
//             </div>
//           </div>
//           {ToggleConfig.map((toggle, index) => (
//             <div key={index} className='flex w-[17rem] text-sm justify-between mt-3'>
//               <h1 className='font-semibold '>{toggle.label}</h1>
//               <div className='flex justify-between border-4 border-blue-500 rounded-sm text-sm'>
//                 {toggle.options.map((option, i) => (
//                   <button
//                     key={i}
//                     className={`px-1 ${paymentType === option.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-500'}`}
//                     onClick={() => togglePaymentType(toggle.name, option.name)}
//                   >
//                     {option.value}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//         ))
//       ) : (
//         <div>No notifications available.</div>
//       )}

//       <div className={paymentStyles.containerStyle}>
//         <div className={paymentStyles.textContainerStyle}>
//           {config.slice(0, 1).map((field, index) => (
//             <div key={index} className='flex w-[17rem] justify-between'>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   value={values[field.name] || ''}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={TextStyle[field.textcss].input}
//                   placeholder={field.placeholder}
//                 />
//               )}
//               {TextComponentData4.map((data, i) => (
//                 <div key={i} className=''>
//                   <Switch
//                     onChange={(checked) => handleChange(data.name, checked)}
//                     checked={values[data.name] || false}
//                     onColor="#6b6aef"
//                     handleDiameter={20}
//                     uncheckedIcon={false}
//                     checkedIcon={false}
//                     boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//                     height={25}
//                     width={50}
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//           <div className=''>
//             <div className={paymentStyles.dateInputContainer}>
//               <div className={paymentStyles.dateInputRow}>
//                 <label className={paymentStyles.dateLabel}>Start Date:</label>
//                 <input type="date" value={daterange.startDate} onChange={(e) => handleRangeChange({ selection: { startDate: e.target.value, endDate: daterange.endDate } })} className={paymentStyles.dateInput} />
//               </div>
//               <div className={paymentStyles.dateInputRow}>
//                 <label className={paymentStyles.dateLabel}>End Date:</label>
//                 <input type="date" value={daterange.endDate} onChange={(e) => handleRangeChange({ selection: { startDate: daterange.startDate, endDate: e.target.value } })} className={paymentStyles.dateInput} />
//               </div>
//             </div>
//           </div>
//           {ToggleConfig.map((toggle, index) => (
//             <div key={index} className='flex w-[17rem] text-sm justify-between mt-3'>
//               <h1 className='font-semibold '>{toggle.label}</h1>
//               <div className='flex justify-between border-4 border-blue-500 rounded-sm text-sm'>
//                 {toggle.options.map((option, i) => (
//                   <button
//                     key={i}
//                     className={`px-1 ${paymentType === option.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-500'}`}
//                     onClick={() => togglePaymentType(toggle.name, option.name)}
//                   >
//                     {option.value}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div>
//           <button onClick={onSave} className='mt-1 ml-20 px-4 py-1 bg-blue-500 text-white rounded'>
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentsReminderSettings;

// import { useState, useEffect } from 'react';
// import { paymentStyles } from './PaymentRemainderStyles';
// import axios from 'axios';
// import { config, TextComponentData4, ToggleConfig } from './PaymentRemainderConfig';
// import TextComponent from '../../form/Formfields/text/TextComponent';
// import TextStyle from '../../form/Formfields/text/TextStyle';
// import Switch from 'react-switch';
// import dayjs from 'dayjs';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { TbClockDollar } from "react-icons/tb";
// import ModalComponent from '../../form/Formfields/modal/ModalComponent';
// import { ModalConfig } from '../../form/Formfields/modal/ModalConfig';

// const PaymentsReminderSettings = () => {
//   const [payments, setPayments] = useState([]);
//   const [values, setValues] = useState({});
//   const [daterange, setDaterange] = useState({
//     startDate: dayjs().format('YYYY-MM-DD'),
//     endDate: dayjs().format('YYYY-MM-DD'),
//   });
//   const [paymentType, setPaymentType] = useState('onetime'); // State to manage selected payment type
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleRangeChange = (name, value,Index = null) => {
//     if (Index !== null) {
//       setPayments(prev => ({ ...prev, [name]: value }));
//     } else {
//       setValues(prevValues => ({
//         ...prevValues,
//         [name]: value,
//       }));
//     }
//   };

//   const handleChange = (name, value,Index = null) => {

//     if (Index !== null) {
//       setPayments(prev => ({ ...prev, [name]: value }));
//     } else {
//       setValues(prevValues => ({
//         ...prevValues,
//         [name]: value,
//       }));
//     }
//     // setValues(prevValues => ({
//     //   ...prevValues,
//     //   [name]: value,
//     // }));
//   };

//   useEffect(() => {
//     axios.get('http://localhost:3000/paymentRemaindersetting1')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           console.log(response.data);
//           setPayments(response.data);
//         } else {
//           throw new Error('Unexpected data format');
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const togglePaymentType = (name, type,Index=null) => {
//     if (Index !== null) {
//       setPayments(prev => ({ ...prev, [name]: type }));
//       setPaymentType(type);
//     } else {
//       setValues(prevValues => ({
//         ...prevValues,
//         [name]: type,
//       }));
//       setPaymentType(type);
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handlemodel=() =>{
//     // setIsModalOpen(true);
//     alert('click')
//     console.log('click');
//   }

//   const onSave = () => {
//     const dataToSend = {
//       ...values,
//       startDate: daterange.startDate,
//       endDate: daterange.endDate,
//     };

//     axios.post('http://localhost:3000/paymentRemaindersetting1', dataToSend)
//       .then(response => {
//         console.log('Data saved successfully:', response.data);
//         // Optionally update the state or provide user feedback
//       })
//       .catch(error => {
//         console.error('Error saving data:', error);
//       });
//   };

//   return (
//     <div>
//       <div className='flex text-gray-900 ml-8 -mt-7 mb-2 font-semibold'>
//         <h2 className='flex place-items-baseline'>Payment Reminder Settings </h2> <TbClockDollar className='text-xl mt-1 ml-2 ' />
//       </div>
//     <div className={paymentStyles.wrapperStyle}>
//       {payments.length > 0 ? (
//         payments.map((payment, index) => (
//           <div key={index} className={paymentStyles.containerStyle}>
//             <div className={paymentStyles.textContainerStyle}>
//               {config.slice(0, 1).map((field, i) => (
//                 <div key={i} className='flex w-[17rem] justify-between'>
//                   {field.type === 'text' && (
//                     <TextComponent
//                       name={field.name}
//                       value={ payment[field.name] || ''}
//                       onChange={(e) => handleChange(field.name, e.target.value,index)}
//                       textcss={TextStyle[field.textcss].input}
//                       placeholder={field.placeholder}
//                     />
//                   )}
//                   {TextComponentData4.map((data, j) => (
//                     <div 
//                     // key={j} 
//                     className=''>
//                       <Switch
//                         onChange={(checked) => handleChange(data.name, checked,index)}
//                         checked={ payment[data.name] || false}
//                         onColor="#6b6aef"
//                         handleDiameter={20}
//                         uncheckedIcon={false}
//                         checkedIcon={false}
//                         boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//                         height={25}
//                         width={50}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               ))}
//               <div className=''>
//                 <div className={paymentStyles.dateInputContainer}>
//                   <div className={paymentStyles.dateInputRow}>
//                     <label className={paymentStyles.dateLabel}>Start Date:</label>
//                     <input
//                       type="date"
//                       value={ payment.startDate || ''}
//                       onChange={(e) => handleRangeChange('startDate', e.target.value,index)}
//                       className={paymentStyles.dateInput}
//                     />
//                   </div>
//                   <div className={paymentStyles.dateInputRow}>
//                     <label className={paymentStyles.dateLabel}>End Date:</label>
//                     <input
//                       type="date"
//                       value={ payment.endDate || ''}
//                       onChange={(e) => handleRangeChange('endDate', e.target.value,index)}
//                       className={paymentStyles.dateInput}
//                     />
//                   </div>
//                 </div>
//               </div>
//               {ToggleConfig.map((toggle, k) => (
//                 <div
//                 //  key={k}
//                   className='flex w-[17rem] text-sm justify-between mt-3'>
//                   <h1 className='font-semibold '>{toggle.label}</h1>
//                   <div className='flex justify-between border-4 border-blue-500 rounded-sm text-sm'>
//                     {toggle.options.map((option, l) => (
//                       <button
//                         // key={l}
//                         className={`px-1 rounded-none ${payment.payment_type === option.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-500'}`}
//                         onClick={() => togglePaymentType(toggle.name, option.name,index)}
//                       >
//                         {option.value}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <div>No notifications available.</div>
//       )}

//       <div className={paymentStyles.containerStyle}>
//         <div className={paymentStyles.textContainerStyle}>
//           {config.slice(0, 1).map((field, index) => (
//             <div key={index} className='flex w-[17rem] justify-between'>
//               {field.type === "text" && (
//                 <TextComponent
//                   name={field.name}
//                   value={values[field.name] || ''}
//                   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={TextStyle[field.textcss].input}
//                   placeholder={field.placeholder}
//                 />
//               )}
//               {TextComponentData4.map((data, i) => (
//                 <div key={i} className=''>
//                   <Switch
//                     onChange={(checked) => handleChange(data.name, checked)}
//                     checked={values[data.name] || false}
//                     onColor="#6b6aef"
//                     handleDiameter={20}
//                     uncheckedIcon={false}
//                     checkedIcon={false}
//                     boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//                     height={25}
//                     width={50}
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//           <div className=''>
//             <button 
//             // onClick={handlemodel}
//             >
//             <div className={paymentStyles.dateInputContainer} >
//               <div className={paymentStyles.dateInputRow}>
//                 <label className={paymentStyles.dateLabel}>Start Date:</label>
//                 <input type="date" value={daterange.startDate} onChange={(e) => handleRangeChange('startDate', e.target.value)} className={paymentStyles.dateInput} />
//               </div>
//               <div className={paymentStyles.dateInputRow}>
//                 <label className={paymentStyles.dateLabel}>End Date:</label>
//                 <input type="date" value={daterange.endDate} onChange={(e) => handleRangeChange('endDate', e.target.value)} className={paymentStyles.dateInput} />
//               </div>
//             </div>
//             </button>
//           </div>
//           {ToggleConfig.map((toggle, index) => (
//             <div key={index} className='flex w-[17rem] text-sm justify-between mt-3'>
//               <h1 className='font-semibold '>{toggle.label}</h1>
//               <div className='flex justify-between border-4 border-blue-500 rounded-sm text-sm'>
//                 {toggle.options.map((option, i) => (
//                   <button
//                     key={i}
//                     className={`px-1 rounded-none ${paymentType === option.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-500'}`}
//                     onClick={() => togglePaymentType(toggle.name, option.name)}
//                   >
//                     {option.value}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div>
//           <button onClick={onSave} className='mt-1 ml-20 px-4 py-1 bg-blue-500 text-white rounded'>
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//     <ModalComponent
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         config={ModalConfig}
//       />
//     </div>
//   );
// };

// export default PaymentsReminderSettings;

// import { useState, useEffect } from 'react';
// import { paymentStyles } from './PaymentRemainderStyles';
// import axios from 'axios';
// import { config, TextComponentData4, ToggleConfig } from './PaymentRemainderConfig';
// import TextComponent from '../../form/Formfields/text/TextComponent';
// import TextStyle from '../../form/Formfields/text/TextStyle';
// import Switch from 'react-switch';
// import dayjs from 'dayjs';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { TbClockDollar } from "react-icons/tb";
// import ModalComponent from '../../form/Formfields/modal/ModalComponent';
// import { ModalConfig } from '../../form/Formfields/modal/ModalConfig';

// const PaymentsReminderSettings = () => {
//   const [payments, setPayments] = useState([]);
//   const [values, setValues] = useState({});
//   const [daterange, setDaterange] = useState({
//     startDate: dayjs().format('YYYY-MM-DD'),
//     endDate: dayjs().format('YYYY-MM-DD'),
//   });
//   const [paymentType, setPaymentType] = useState('onetime'); // State to manage selected payment type
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleRangeChange = (name, value, index = null) => {
//     if (index !== null) {
//       setPayments(prev => {
//         const newPayments = [...prev];
//         newPayments[index][name] = value;
//         return newPayments;
//       });
//     } else {
//       setValues(prevValues => ({
//         ...prevValues,
//         [name]: value,
//       }));
//     }
//   };

//   const handleChange = (name, value, index = null) => {
//     if (index !== null) {
//       setPayments(prev => {
//         const newPayments = [...prev];
//         newPayments[index][name] = value;
//         return newPayments;
//       });
//     } else {
//       setValues(prevValues => ({
//         ...prevValues,
//         [name]: value,
//       }));
//     }
//   };

//   useEffect(() => {
//     axios.get('http://localhost:3000/paymentRemaindersetting1')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           console.log(response.data);
//           setPayments(response.data);
//         } else {
//           throw new Error('Unexpected data format');
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const togglePaymentType = (name, type, index = null) => {
//     if (index !== null) {
//       setPayments(prev => {
//         const newPayments = [...prev];
//         newPayments[index][name] = type;
//         return newPayments;
//       });
//     } else {
//       setValues(prevValues => ({
//         ...prevValues,
//         [name]: type,
//       }));
//     }
//     setPaymentType(type);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handlemodel = () => {
//     alert('click');
//     console.log('click');
//   };

//   const onSave = () => {
//     const dataToSend = {
//       ...values,
//       startDate: daterange.startDate,
//       endDate: daterange.endDate,
//     };

//     axios.post('http://localhost:3000/paymentRemaindersetting1', dataToSend)
//       .then(response => {
//         console.log('Data saved successfully:', response.data);
//         // Optionally update the state or provide user feedback
//       })
//       .catch(error => {
//         console.error('Error saving data:', error);
//       });
//   };

//   return (
//     <div>
//       <div className='flex text-gray-900 ml-8 -mt-7 mb-2 font-semibold'>
//         <h2 className='flex place-items-baseline'>Payment Reminder Settings</h2>
//         <TbClockDollar className='text-xl mt-1 ml-2' />
//       </div>
//       <div className={paymentStyles.wrapperStyle}>
//         {payments.length > 0 ? (
//           payments.map((payment, index) => (
//             <div key={index} className={paymentStyles.containerStyle}>
//               <div className={paymentStyles.textContainerStyle}>
//                 {config.slice(0, 1).map((field, i) => (
//                   <div key={i} className='flex w-[17rem] justify-between'>
//                     {field.type === 'text' && (
//                       <TextComponent
//                         name={field.name}
//                         value={payment[field.name] || ''}
//                         onChange={(e) => handleChange(field.name, e.target.value, index)}
//                         textcss={TextStyle[field.textcss]?.input}
//                         placeholder={field.placeholder}
//                       />
//                     )}
//                     {TextComponentData4.map((data, j) => (
//                       <div key={j} className=''>
//                         <Switch
//                           onChange={(checked) => handleChange(data.name, checked, index)}
//                           checked={payment[data.name] || false}
//                           onColor="#6b6aef"
//                           handleDiameter={20}
//                           uncheckedIcon={false}
//                           checkedIcon={false}
//                           boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//                           height={25}
//                           width={50}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//                 <div className=''>
//                   <div className={paymentStyles.dateInputContainer}>
//                     <div className={paymentStyles.dateInputRow}>
//                       <label className={paymentStyles.dateLabel}>Start Date:</label>
//                       <input
//                         type="date"
//                         value={payment.startDate || ''}
//                         onChange={(e) => handleRangeChange('startDate', e.target.value, index)}
//                         className={paymentStyles.dateInput}
//                       />
//                     </div>
//                     <div className={paymentStyles.dateInputRow}>
//                       <label className={paymentStyles.dateLabel}>End Date:</label>
//                       <input
//                         type="date"
//                         value={payment.endDate || ''}
//                         onChange={(e) => handleRangeChange('endDate', e.target.value, index)}
//                         className={paymentStyles.dateInput}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {ToggleConfig.map((toggle, k) => (
//                   <div key={k} className='flex w-[17rem] text-sm justify-between mt-3'>
//                     <h1 className='font-semibold '>{toggle.label}</h1>
//                     <div className='flex justify-between border-4 border-blue-500 rounded-sm text-sm'>
//                       {toggle.options.map((option, l) => (
//                         <button
//                           key={l}
//                           className={`px-1 rounded-none ${payment.payment_type === option.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-500'}`}
//                           onClick={() => togglePaymentType(toggle.name, option.name, index)}
//                         >
//                           {option.value}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>No notifications available.</div>
//         )}

//         <div className={paymentStyles.containerStyle}>
//           <div className={paymentStyles.textContainerStyle}>
//             {config.slice(0, 1).map((field, index) => (
//               <div key={index} className='flex w-[17rem] justify-between'>
//                 {field.type === "text" && (
//                   <TextComponent
//                     name={field.name}
//                     value={values[field.name] || ''}
//                     onChange={(e) => handleChange(field.name, e.target.value)}
//                     textcss={TextStyle[field.textcss]?.input}
//                     placeholder={field.placeholder}
//                   />
//                 )}
//                 {TextComponentData4.map((data, i) => (
//                   <div key={i} className=''>
//                     <Switch
//                       onChange={(checked) => handleChange(data.name, checked)}
//                       checked={values[data.name] || false}
//                       onColor="#6b6aef"
//                       handleDiameter={20}
//                       uncheckedIcon={false}
//                       checkedIcon={false}
//                       boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//                       height={25}
//                       width={50}
//                     />
//                   </div>
//                 ))}
//               </div>
//             ))}
//             <div className=''>
//               <button onClick={handlemodel}>
//                 <div className={paymentStyles.dateInputContainer}>
//                   <div className={paymentStyles.dateInputRow}>
//                     <label className={paymentStyles.dateLabel}>Start Date:</label>
//                     <input type="date" value={daterange.startDate} onChange={(e) => handleRangeChange('startDate', e.target.value)} className={paymentStyles.dateInput} />
//                   </div>
//                   <div className={paymentStyles.dateInputRow}>
//                     <label className={paymentStyles.dateLabel}>End Date:</label>
//                     <input type="date" value={daterange.endDate} onChange={(e) => handleRangeChange('endDate', e.target.value)} className={paymentStyles.dateInput} />
//                   </div>
//                 </div>
//               </button>
//             </div>
//             {ToggleConfig.map((toggle, index) => (
//               <div key={index} className='flex w-[17rem] text-sm justify-between mt-3'>
//                 <h1 className='font-semibold '>{toggle.label}</h1>
//                 <div className='flex justify-between border-4 border-blue-500 rounded-sm text-sm'>
//                   {toggle.options.map((option, i) => (
//                     <button
//                       key={i}
//                       className={`px-1 rounded-none ${paymentType === option.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-500'}`}
//                       onClick={() => togglePaymentType(toggle.name, option.name)}
//                     >
//                       {option.value}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div>
//             <button onClick={onSave} className='mt-1 ml-20 px-4 py-1 bg-blue-500 text-white rounded'>
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//       <ModalComponent
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         config={ModalConfig}
//       />
//     </div>
//   );
// };

// export default PaymentsReminderSettings;

// import { useState, useEffect } from 'react';
// import { paymentStyles } from './PaymentRemainderStyles';
// import axios from 'axios';
// import { config, TextComponentData4, ToggleConfig } from './PaymentRemainderConfig';
// import TextComponent from '../../form/Formfields/text/TextComponent';
// import TextStyle from '../../form/Formfields/text/TextStyle';
// import Switch from 'react-switch';
// import dayjs from 'dayjs';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { TbClockDollar } from "react-icons/tb";
// import ModalComponent from '../../form/Formfields/modal/ModalComponent';
// import { ModalConfig } from '../../form/Formfields/modal/ModalConfig';

// const PaymentsReminderSettings = () => {
//   const [payments, setPayments] = useState([]);
//   const [values, setValues] = useState({
//     due_date: dayjs().format('YYYY-MM-DD'),
//     payment_date: dayjs().format('YYYY-MM-DD'),
//     'payment_type':"onetime",
//   });
//   const [daterange, setDaterange] = useState({
//     startDate: dayjs().format('YYYY-MM-DD'),
//     endDate: dayjs().format('YYYY-MM-DD'),
//   });
//   const [paymentType, setPaymentType] = useState('onetime'); // State to manage selected payment type
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [addcard, setAddcard] = useState(false);

//   const handleRangeChange = (name, value, index = null) => {
//     if (index !== null) {
//       setPayments(prev => {
//         const newPayments = [...prev];
//         newPayments[index][name] = value;
//         return newPayments;
//       });
//     } else {
//       setValues(prevValues => ({
//         ...prevValues,
//         [name]: value,
//       }));
//     }
//     console.log('fghjk',name, value);
//   };

//   const handleChange = (name, value, index = null) => {
//     if (index !== null) {
//       setPayments(prev => {
//         const newPayments = [...prev];
//         newPayments[index][name] = value;
//         return newPayments;
//       });
//     } else {
//       setValues(prevValues => ({
//         ...prevValues,
//         [name]: value,
//       }));
//     }
//   };

//   // useEffect(() => {
//   //   axios.get('http://localhost:3000/paymentRemaindersetting1')
//   //     .then(response => {
//   //       if (Array.isArray(response.data)) {
//   //         console.log(response.data);
//   //         setPayments(response.data);
//   //       } else {
//   //         throw new Error('Unexpected data format');
//   //       }
//   //     })
//   //     .catch(error => console.error('Error fetching data:', error));
//   // }, []);
//   const fetchingData = async () => {
//     try {

//       const response = await axios.get('http://localhost:3000/paymentRemaindersetting1')
//       if (Array.isArray(response.data)) {
//         console.log(response.data);
//         setPayments(response.data);
//       } else {
//         throw new Error('Unexpected data format');
//       }
//     } catch (error) {
//       console.error('Error posting data:', error);
//       // setErrorCode(error.response ? error.response.status : 500); // Set error code based on response
//     }
//   };

//   useEffect(() => {
//     fetchingData();
//   }, []);

//   const togglePaymentType = (name, type, index = null) => {
//     if (index !== null) {
//       setPayments(prev => {
//         const newPayments = [...prev];
//         newPayments[index][name] = type;
//         return newPayments;
//       });
//     } else {
//       setValues(prevValues => ({
//         ...prevValues,
//         [name]: type,
//       }));
//     }
//     setPaymentType(type);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handlemodel = () => {
//     alert('click');
//     console.log('click');
//   };

//   const onSave = () => {
//     const dataToSend = {
//       ...values,
//       // startDate: daterange.startDate,
//       // endDate: daterange.endDate,
//     };
//     console.log('dataToSendPOWS',dataToSend);
//     axios.post('http://localhost:3000/paymentRemaindersetting1', dataToSend)

//       .then(response => {
//         console.log('Data saved successfully:', response.data);
//         // Optionally update the state or provide user feedback
//         fetchingData();
//       })
//       .catch(error => {
//         console.error('Error saving data:', error);
//       });
//   };

//   const onUpdate = (index) => {
//     const paymentToUpdate = payments[index];
//     console.log('paymentToUpdate', paymentToUpdate);
//     axios.patch(`http://localhost:3000/paymentRemaindersetting1`, paymentToUpdate)
//       .then(response => {
//         console.log('Data updated successfully:', response.data);
//         // Optionally update the state or provide user feedback
//         fetchingData();
//       })
//       .catch(error => {
//         console.error('Error updating data:', error);
//       });
//   };
//     console.log('paymentType'-paymentType,values);
//   return (
//     <div>
//       <div>
//         <div className='flex text-gray-900 ml-8 -mt-7 mb-2 font-semibold'>
//           <h2 className='flex place-items-baseline'>Payment Reminder Settings</h2>
//           <TbClockDollar className='text-xl mt-1 ml-2' />
//         </div>
//         <div>
//           <button
//             onClick={() => setAddcard(true)}
//             className='ml-[54rem] object-right text-sm text-gray-600 -mt-4 mb-4'
//           ><span className='border-b py-1 border-gray-600'>Add New Reminder</span></button>
//         </div>
//       </div>
//       <div className={paymentStyles.wrapperStyle}>
//         {payments.length > 0 ? (
//           payments.map((payment, index) => (
//             <div key={index} className={paymentStyles.containerStyle}>
//               <div className={paymentStyles.textContainerStyle}>
//                 {config.slice(0, 1).map((field, i) => (
//                   <div key={i} className='flex w-[17rem] justify-between'>
//                     {field.type === 'text' && (
//                       <TextComponent
//                         name={field.name}
//                         value={payment[field.name] || ''}
//                         onChange={(e) => handleChange(field.name, e.target.value, index)}
//                         textcss={TextStyle[field.textcss]?.input}
//                         placeholder={field.placeholder}
//                       />
//                     )}
//                     {TextComponentData4.map((data, j) => (
//                       <div key={j} className=''>
//                         <Switch
//                           onChange={(checked) => handleChange(data.name, checked, index)}
//                           checked={payment[data.name] || false}
//                           onColor="#6b6aef"
//                           handleDiameter={20}
//                           uncheckedIcon={false}
//                           checkedIcon={false}
//                           boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//                           height={25}
//                           width={50}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//                 <div className=''>
//                   <div className={paymentStyles.dateInputContainer}>
//                     <div className={paymentStyles.dateInputRow}>
//                       <label className={paymentStyles.dateLabel}>Set Due Date</label>
//                       <input
//                         type="date"
//                         value={payment.due_date || ''}
//                         onChange={(e) => handleRangeChange('due_date', e.target.value, index)}
//                         className={paymentStyles.dateInput}
//                       />
//                     </div>
//                     <div className={paymentStyles.dateInputRow}>
//                       <label className={paymentStyles.dateLabel}>Set Payment Date</label>
//                       <input
//                         type="date"
//                         value={payment.payment_date || ''}
//                         onChange={(e) => handleRangeChange('payment_date', e.target.value, index)}
//                         className={paymentStyles.dateInput}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {ToggleConfig.map((toggle, k) => (
//                   <div key={k} className='flex w-[17rem] text-sm justify-between mt-3'>
//                     <h1 className='font-semibold '>{toggle.label}</h1>
//                     <div className='flex justify-between border-4 border-blue-500 rounded-sm text-sm'>
//                       {toggle.options.map((option, l) => (
//                         <button
//                           key={l}
//                           className={`px-1 rounded-none ${payment.payment_type === option.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-500'}`}
//                           onClick={() => togglePaymentType(toggle.name, option.name, index)}
//                         >
//                           {option.value}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button onClick={() => onUpdate(index)} className='mt-1 ml-20 px-4 py-1 bg-green-500 text-white rounded'>
//                 Update
//               </button>
//             </div>
//           ))
//         ) : (
//           <div>No notifications available.</div>
//         )}

//         {addcard && (<div className={paymentStyles.containerStyle}>
//           <div className={paymentStyles.textContainerStyle}>
//             {config.slice(0, 1).map((field, index) => (
//               <div key={index} className='flex w-[17rem] justify-between'>
//                 {field.type === "text" && (
//                   <TextComponent
//                     name={field.name}
//                     value={values[field.name] || ''}
//                     onChange={(e) => handleChange(field.name, e.target.value)}
//                     textcss={TextStyle[field.textcss]?.input}
//                     placeholder={field.placeholder}
//                   />
//                 )}
//                 {TextComponentData4.map((data, i) => (
//                   <div key={i} className=''>
//                     <Switch
//                       onChange={(checked) => handleChange(data.name, checked)}
//                       checked={values[data.name] || false}
//                       onColor="#6b6aef"
//                       handleDiameter={20}
//                       uncheckedIcon={false}
//                       checkedIcon={false}
//                       boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//                       height={25}
//                       width={50}
//                     />
//                   </div>
//                 ))}
//               </div>
//             ))}
//             <div className=''>
//               <button
//               // onClick={handlemodel}
//               >
//                 <div className={paymentStyles.dateInputContainer}>
//                   <div className={paymentStyles.dateInputRow}>
//                     <label className={paymentStyles.dateLabel}>Set Due Date</label>
//                     <input type="date" value={values.startDate} onChange={(e) => handleRangeChange('due_date', e.target.value)} className={paymentStyles.dateInput} />
//                   </div>
//                   <div className={paymentStyles.dateInputRow}>
//                     <label className={paymentStyles.dateLabel}>Set Payment Date</label>
//                     <input type="date" value={values.endDate} onChange={(e) => handleRangeChange('payment_date', e.target.value)} className={paymentStyles.dateInput} />
//                   </div>
//                 </div>
//               </button>
//             </div>
//             {ToggleConfig.map((toggle, index) => (
//               <div key={index} className='flex w-[17rem] text-sm justify-between mt-3'>
//                 <h1 className='font-semibold '>{toggle.label}</h1>
//                 <div className='flex justify-between border-4 border-blue-500 rounded-sm text-sm'>
//                   {toggle.options.map((option, i) => (
//                     <button
//                       key={i}
//                       className={`px-1 rounded-none ${paymentType === option.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-500'}`}
//                       onClick={() => togglePaymentType(toggle.name, option.name)}
//                     >
//                       {option.value}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div>
//             <button onClick={onSave} className='mt-1 ml-20 px-4 py-1 bg-blue-500 text-white rounded'>
//               Save
//             </button>
//           </div>
//         </div>)}
//       </div>
//       <ModalComponent
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         config={ModalConfig}
//       />
//     </div>
//   );
// };

// export default PaymentsReminderSettings;

import { useState, useEffect } from 'react';
import { paymentStyles } from './PaymentRemainderStyles';
import axios from 'axios';
import { config, TextComponentData4, ToggleConfig } from './PaymentRemainderConfig';
import TextComponent from '../../form/Formfields/text/TextComponent';
import TextStyle from '../../form/Formfields/text/TextStyle';
import Switch from 'react-switch';
import dayjs from 'dayjs';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { TbClockDollar } from "react-icons/tb";
import ModalComponent from '../../form/Formfields/modal/ModalComponent';
import { ModalConfig } from '../../form/Formfields/modal/ModalConfig';

const PaymentsReminderSettings = () => {
  const [payments, setPayments] = useState([]);
  const [values, setValues] = useState({
    due_date: dayjs().format('YYYY-MM-DD'),
    payment_date: dayjs().format('YYYY-MM-DD'),
    payment_type: "onetime",
  });
  // const [daterange, setDaterange] = useState({
  //   startDate: dayjs().format('YYYY-MM-DD'),
  //   endDate: dayjs().format('YYYY-MM-DD'),
  // });
  const [paymentType, setPaymentType] = useState('onetime'); // State to manage selected payment type
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addcard, setAddcard] = useState(false);

  const handleRangeChange = (name, value, index = null) => {
    if (index !== null) {
      setPayments(prev => {
        const newPayments = [...prev];
        newPayments[index][name] = value;
        return newPayments;
      });
    } else {
      setValues(prevValues => ({
        ...prevValues,
        [name]: value,
      }));
    }
    console.log('fghjk', name, value);
  };

  const handleChange = (name, value, index = null) => {
    if (index !== null) {
      setPayments(prev => {
        const newPayments = [...prev];
        newPayments[index][name] = value;
        return newPayments;
      });
    } else {
      setValues(prevValues => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const fetchingData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/paymentRemaindersetting1')
      if (Array.isArray(response.data)) {
        console.log(response.data);
        setPayments(response.data);
      } else {
        throw new Error('Unexpected data format');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      // setErrorCode(error.response ? error.response.status : 500); // Set error code based on response
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const togglePaymentType = (name, type, index = null) => {
    if (index !== null) {
      setPayments(prev => {
        const newPayments = [...prev];
        newPayments[index][name] = type;
        return newPayments;
      });
    } else {
      setValues(prevValues => ({
        ...prevValues,
        [name]: type,
      }));
    }
    setPaymentType(type);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const handlemodel = () => {
  //   alert('click');
  //   console.log('click');
  // };

  const onSave = () => {
    const dataToSend = {
      ...values,
      // startDate: daterange.startDate,
      // endDate: daterange.endDate,
    };
    console.log('dataToSendPOWS', dataToSend);
    axios.post('http://localhost:3000/paymentRemaindersetting1', dataToSend)
      .then(response => {
        console.log('Data saved successfully:', response.data);
        // Optionally update the state or provide user feedback
        fetchingData();
        // Reset form values and hide the new reminder form
        setValues({
          due_date: dayjs().format('YYYY-MM-DD'),
          payment_date: dayjs().format('YYYY-MM-DD'),
          payment_type: "onetime",
        });
        setAddcard(false);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  const onUpdate = (index) => {
    const paymentToUpdate = payments[index];
    console.log('paymentToUpdate', paymentToUpdate);
    axios.patch(`http://localhost:3000/paymentRemaindersetting1/${paymentToUpdate.id}`, paymentToUpdate)
      .then(response => {
        console.log('Data updated successfully:', response.data);
        // Optionally update the state or provide user feedback
        fetchingData();
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  console.log('paymentType', paymentType, values);

  return (
    <div>
      <div>
        <div className='flex text-gray-900 ml-8 -mt-7 mb-2 font-semibold'>
          <h2 className='flex place-items-baseline'>Payment Reminder Settings</h2>
          <TbClockDollar className='text-xl mt-1 ml-2' />
        </div>
        <div>
          <button
            onClick={() => setAddcard(true)}
            className='ml-[59rem] object-right text-sm font-medium text-gray-600  '
          ><span className='border-b-2 py-1 border-gray-400'>Add New Reminder</span></button>
        </div>
      </div>
      <div className={paymentStyles.wrapperStyle}>
        {payments.length > 0 ? (
          payments.map((payment, index) => (
            <div key={index} className={paymentStyles.containerStyle}>
              <div className={paymentStyles.textContainerStyle}>
                {config.slice(0, 1).map((field, i) => (
                  <div key={i} className='flex w-[17rem] justify-between'>
                    {field.type === 'text' && (
                      <TextComponent
                        name={field.name}
                        value={payment[field.name] || ''}
                        onChange={(e) => handleChange(field.name, e.target.value, index)}
                        textcss={TextStyle[field.textcss]?.input}
                        placeholder={field.placeholder}
                      />
                    )}
                    {TextComponentData4.map((data, j) => (
                      <div key={j} className=''>
                        <Switch
                          onChange={(checked) => handleChange(data.name, checked, index)}
                          checked={payment[data.name] || false}
                          // onColor="#6b6aef"
                          onColor='#3B82F6'
                          handleDiameter={20}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                          height={25}
                          width={50}
                        />
                      </div>
                    ))}
                  </div>
                ))}
                <div className=''>
                  <div className={paymentStyles.dateInputContainer}>
                    <div className={paymentStyles.dateInputRow}>
                      <label className={paymentStyles.dateLabel}>Set Due Date</label>
                      <input
                        type="date"
                        value={payment.due_date || ''}
                        onChange={(e) => handleRangeChange('due_date', e.target.value, index)}
                        className={paymentStyles.dateInput}
                      />
                    </div>
                    <div className={paymentStyles.dateInputRow}>
                      <label className={paymentStyles.dateLabel}>Set Payment Date</label>
                      <input
                        type="date"
                        value={payment.payment_date || ''}
                        onChange={(e) => handleRangeChange('payment_date', e.target.value, index)}
                        className={paymentStyles.dateInput}
                      />
                    </div>
                  </div>
                </div>
                {ToggleConfig.map((toggle, k) => (
                  <div key={k} className='flex w-[17rem] text-sm items-center justify-between mt-3'>
                    <h1 className='font-semibold '>{toggle.label}</h1>
                    <div className='flex justify-between border-4 border-blue-500 rounded-sm text-xs'>
                      {toggle.options.map((option, l) => (
                        <button
                          key={l}
                          className={`px-2 py-0.5 rounded-none ${payment.payment_type === option.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-500'}`}
                          onClick={() => togglePaymentType(toggle.name, option.name, index)}
                        >
                          {option.value}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => onUpdate(index)} className='mt-2 text-sm ml-20 px-4 py-1 bg-blue-500 text-white rounded'>
                Update
              </button>
            </div>
          ))
        ) : (
          <div>No notifications available.</div>
        )}

        {addcard && (
          <div className={paymentStyles.containerStyle}>
            <div className={paymentStyles.textContainerStyle}>
              {config.slice(0, 1).map((field, index) => (
                <div key={index} className='flex w-[17rem] justify-between'>
                  {field.type === "text" && (
                    <TextComponent
                      name={field.name}
                      value={values[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      textcss={TextStyle[field.textcss]?.input}
                      placeholder={field.placeholder}
                    />
                  )}
                  {TextComponentData4.map((data, i) => (
                    <div key={i} className=''>
                      <Switch
                        onChange={(checked) => handleChange(data.name, checked)}
                        checked={values[data.name] || false}
                        // onColor="#6b6aef"
                        onColor='#3B82F6'
                        handleDiameter={20}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        height={25}
                        width={50}
                      />
                    </div>
                  ))}
                </div>
              ))}
              <div className=''>
                <div className={paymentStyles.dateInputContainer}>
                  <div className={paymentStyles.dateInputRow}>
                    <label className={paymentStyles.dateLabel}>Set Due Date</label>
                    <input type="date" value={values.due_date} onChange={(e) => handleRangeChange('due_date', e.target.value)} className={paymentStyles.dateInput} />
                  </div>
                  <div className={paymentStyles.dateInputRow}>
                    <label className={paymentStyles.dateLabel}>Set Payment Date</label>
                    <input type="date" value={values.payment_date} onChange={(e) => handleRangeChange('payment_date', e.target.value)} className={paymentStyles.dateInput} />
                  </div>
                </div>
              </div>
              {ToggleConfig.map((toggle, index) => (
                <div key={index} className='flex w-[17rem] text-sm items-center justify-between mt-3'>
                  <h1 className='font-semibold '>{toggle.label}</h1>
                  <div className='flex justify-between border-4 border-blue-500 rounded-sm text-xs'>
                    {toggle.options.map((option, i) => (
                      <button
                        key={i}
                        className={`px-2 py-0.5  rounded-none ${paymentType === option.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-500'}`}
                        onClick={() => togglePaymentType(toggle.name, option.name)}
                      >
                        {option.value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button onClick={onSave} className='mt-2 ml-20 px-6 text-sm py-1 bg-blue-500 text-white rounded'>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={ModalConfig}
      />
    </div>
  );
};

export default PaymentsReminderSettings;

