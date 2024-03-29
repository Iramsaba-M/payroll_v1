// /* eslint-disable react/prop-types */

// import OptionsComponent from '../../components/form/Formfields/options/OptionsComponent'
// import TextComponent from '../../components/form/Formfields/text/TextComponent'
// import Button from '../../configurations/Button/Button'
// import {  Apply, Cancel,} from './RequestForLoanData'
// import RequestForLoanStyles from './RequestForLoanStyles'
// const RequestForLoanComponent = ({config}) => {

    
//   return (
//     <div className=''> 
//        <div className='w-[150vh]'>
//         <h1 className='text-xl font-semibold translate-x-[5vh] -translate-y-[3.5vh]'>Request For Loan</h1>
        
// <div className='border-1 border-gray-700 shadow-md h-[45vh]'>
//         <div className=' ml-7'>
//         {config.slice(0,1).map((field, index) => (
            
//               <div key={index}>
                
//                    <label className={RequestForLoanStyles[field.textcss].label}>
//                   {field.label}
//                 </label>
//                  {field.type === "options" && (
//                 <OptionsComponent
//                   name={field.name}
//                 //   value={values[field.name] || ""}
//                   options={field.options}
//                 //   onChange={(e) => handleChange(field.name, e.target.value)}
//                   textcss={RequestForLoanStyles[field.textcss].input}
//                   placeholder={field.placeholder}
//                   icon={field.icon}
//                 />
//               )}
           
                
//               </div>
//             ))}



   
// {config.slice(1, 2).map((field, index) => (
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

// {config.slice(2,3).map((field, index) => (
            
//             <div key={index}>
              
//                  <label className={RequestForLoanStyles[field.textcss].label}>
//                 {field.label}
//               </label>
//                {field.type === "options" && (
//               <OptionsComponent
//                 name={field.name}
//               //   value={values[field.name] || ""}
//                 options={field.options}
//               //   onChange={(e) => handleChange(field.name, e.target.value)}
//                 textcss={RequestForLoanStyles[field.textcss].input}
//                 placeholder={field.placeholder}
//                 icon={field.icon}
//               />
//             )}
         
              
//             </div>
//           ))}


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
//  <div className='flex  mt-3'>
//         <Button  Configs={Apply} />
//         <Button  Configs={Cancel} />
//         </div>
//         </div>
//       </div>
//       </div> 
//     </div>
//   )
// }

// export default RequestForLoanComponent






/* eslint-disable react/prop-types */
import  { useState } from 'react';
import OptionsComponent from '../../components/form/Formfields/options/OptionsComponent';
import TextComponent from '../../components/form/Formfields/text/TextComponent';
import Button from '../../configurations/Button/Button';
import { Apply, Cancel } from './RequestForLoanData';
import RequestForLoanStyles from './RequestForLoanStyles';
import axios from 'axios';
import ModalComponent from '../../components/form/Formfields/modal/ModalComponent';
import { ModalConfig2 } from '../../components/form/Formfields/modal/ModalConfig2';

const RequestForLoanComponent = ({ config }) => {
const [data, setData] = useState({});
const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (fieldName, value) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  const handleButtonClick = (type) => {
    if (type === "submit") {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/loan', data);
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className=''>
      <div className='w-[150vh]'>
        <h1 className='text-xl font-semibold translate-x-[5vh] -translate-y-[3.5vh]'>Request For Loan</h1>
        <div className='border-1 border-gray-700 shadow-md h-[45vh]'>
          <div className=' ml-7'>
            <form onSubmit={handleSubmit}>
              {config.slice(0, 1).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label} 
                  </label>
                  {field.type === 'options' && (
                    <OptionsComponent
                      // name={field.name}
                      // options={field.options}
                      // textcss={RequestForLoanStyles[field.textcss].input}
                      // icon={field.icon}
                      // placeholder={field.placeholder}
                      // value={data[field.name] || ''}
                      name={field.name}
                      options={field.options}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={data[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              ))}

              {config.slice(1, 2).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === 'text' && (
                    <TextComponent
                      name={field.name}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={data[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              ))}

              {config.slice(2, 3).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === 'options' && (
                    <OptionsComponent
                      // name={field.name}
                      // options={field.options}
                      // textcss={RequestForLoanStyles[field.textcss].input}
                      // placeholder={field.placeholder}
                      // icon={field.icon}
                      //   value={data[field.name] || ''}
                      name={field.name}
                      options={field.options}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={data[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              ))}

              {config.slice(3, 4).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === 'text' && (
                    <TextComponent
                      name={field.name}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={data[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              ))}
              <div className='flex mt-3'>
                <Button Configs={Apply}  onClick={() => handleButtonClick("submit")} />
                <Button Configs={Cancel} />
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

export default RequestForLoanComponent;