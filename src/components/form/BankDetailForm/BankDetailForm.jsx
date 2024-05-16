// import React, { useState } from 'react';
// import BankDetailFormComponent from './BankDetailFormComponent';
// import axios from 'axios';
// import { GoPlusCircle } from "react-icons/go";
// import Button from '../../../configurations/Button/Button';
// import { BANK_DETAILS_API } from '../../../api/EndPoints';
// import { getApiUrl } from '../../../api/GetAPI';
// import { ButtonforSave ,ButtonforaddBank} from '../../../pages/Admin pages/Employee/BankDetail/BankDetailsContent';
// import ModalComponent from '../Formfields/modal/ModalComponent';
// import {ModalConfig} from '../Formfields/modal/ModalConfig'
// import { postData } from '../../../services/APIService';
// import { useButtonState } from '../../../context/ButtonStateContext';
// import { useEffect } from 'react';
// const BankDetailForm = ({ configs, handleNextClick, handleSubmit, employeeId,editEmployees }) => {
//   const [forms, setForms] = useState([
//     { id: 0, values: {} },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [values, setValues] = useState({});
//   const {
//     AddMode,
//     editMode,

//   } = useButtonState();
//   console.log('editEmployees',editEmployees);
//   useEffect(() => {
//     if (editEmployees && editEmployees.Bank && editEmployees.Bank.bank_details) {
//       // Map bank details from editEmployees to forms state
//       const bankForms = editEmployees.Bank.bank_details.map((bank, index) => ({
//         id: index,
//         values: {
//           bank_name: bank.bank_name,
//           ifsc_code: bank.ifsc_code,
//           account_number: bank.account_number,
//           branch_code: bank.branch_code,
//           default_for_payroll: bank.default_for_payroll
//         }
//       }));
//       setForms(bankForms);
//     }
//   }, [editEmployees]);


//   const addBank = () => {
//     const newForms = [...forms, { id: forms.length, values: {} }];
//     setForms(newForms);
//   };

//   const handleFormChange = (id, values) => {
//     const updatedForms = forms.map(form => (form.id === id ? { ...form, values } : form));
//     setForms(updatedForms);
//   };


//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const allFormValues = forms.map((form) => form.values);
//       const dataToSend = { employee_id: employeeId, bank_details: allFormValues };

//       // Use the postData function
//       const response = await postData(BANK_DETAILS_API, dataToSend);

//       console.log('Data sent:', response);

//       handleSubmit(dataToSend);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
//   const handleButtonClick = async (label, type, values) => {
//     console.log("EditMode:", editMode);
//     console.log("AddMode:", AddMode);
//     console.log("Label:", label);
//     console.log("Type:", type);

//     if (AddMode) {
//       // When Add mode is active
//       if (label === "Save" && type === "submit") {
//         try {
//           setIsModalOpen(true); // Open modal

//         } catch (error) {
//           console.error("Error calling POST API:", error);
//           // Handle errors here
//         }
//       } else if (label === "Next") {
//         handleNextClick();
//       } 

//     } else  if (!AddMode && editMode) {
//       setValues(editEmployees);
//       // When edit mode is active
//       if (label === "Save" && type === "submit") {
//         try {
//           // Assuming BASIC_DETAILS_API_put is the correct endpoint URL for PUT requests
//           await putData(BASIC_DETAILS_API_put, values);
//           console.log("PUT API called successfully");
//           // Handle success or update UI accordingly
//         } catch (error) {
//           console.error("Error calling PUT API:", error);
//           // Handle errors here
//         }
//       } else if (label === "Next") {
//         handleNextClick();
//       }

//     }
//     };


//   return (
//     <form  onSubmit={onSubmit} className=''>
//       <div className='form-line flex justify-evenly mb-4  '>
//         <div >
//           {forms.map((form, index) => (
//             <div key={index} className='shadow-sm mt-7 mb-7 ml-1'>
//               <BankDetailFormComponent
//                 id={form.id}
//                 config={configs}
//                 onChange={handleFormChange}
//               />
//             </div>
//           ))}
//         </div>
//         <div className='w-64 '>
//           <div className='flex w-60 justify-center h-10  border-solid mt-4'>
//         <GoPlusCircle  onClick={() => addBank()} className='justify-center size-5'/>
//         </div>
//         <div className='flex justify-center ml-7'>
//         <button type="button" onClick={addBank} className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center  mb-2 mr-1'>Add another bank details</button>
//           {/* <Button  Configs={ButtonforaddBank} onClick={addBank} /> */}
//           </div>
//         </div>
//       </div>
//       <div className='buttons flex justify-end mr- mt-6 mb-96 -ml-1 '>

//         <Button  Configs={ButtonforSave} onClick={handleButtonClick} />
//       </div>
//       <ModalComponent
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         config={ModalConfig}
//       />
//     </form>
//   );
// };

// export default BankDetailForm;
// BankDetailForm.jsx

import React, { useState } from 'react';
import BankDetailFormComponent from './BankDetailFormComponent';
import axios from 'axios';
import { GoPlusCircle } from "react-icons/go";
import Button from '../../../configurations/Button/Button';
import { BANK_DETAILS_API, BANK_DETAILS_API_PUT } from '../../../api/EndPoints';
import { getApiUrl } from '../../../api/GetAPI';
import { ButtonforSave, ButtonforaddBank } from '../../../pages/Admin pages/Employee/BankDetail/BankDetailsContent';
import ModalComponent from '../Formfields/modal/ModalComponent';
import { ModalConfig } from '../Formfields/modal/ModalConfig'
import { postData, putData } from '../../../services/APIService';
import { useButtonState } from '../../../context/ButtonStateContext';
import { useEffect } from 'react';

const BankDetailForm = ({ configs, handleNextClick, handleSubmit, employeeId, editEmployees }) => {
  const [forms, setForms] = useState([{ id: 0, values: {} }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { AddMode, editMode } = useButtonState();
  console.log('editEmployees',editEmployees);



  useEffect(() => {
    if (editEmployees && editEmployees.bank_details && editEmployees.bank_details.length > 0) {
      // Initialize forms with existing bank details
      setForms(editEmployees.bank_details.map((detail, index) => ({
        id: index,
        values: detail
      })));
      
         } else {
      
      setForms([{ id: 0, values: {} }]);
    }
    addbuttonofbanks();
  }, [editEmployees]);

 

  const addBank = () => {
    const newForms = [...forms, { id: forms.length, values: {} }];
    console.log('called');
    setForms(newForms);
  };

  const addbuttonofbanks = () => {
    if (editEmployees && editEmployees.Bank && editEmployees.Bank.bank_details) {
      const numberOfBanksToAdd = editEmployees.Bank.bank_details.length - forms.length;
      if (numberOfBanksToAdd > 0) {
        const newForms = [...forms];
        for (let i = 0; i < numberOfBanksToAdd; i++) {
          newForms.push({ id: newForms.length, values: {} });
        }
        setForms(newForms);
      }
    }
  };
  
  
  
  


  const handleFormChange = (id, values) => {
    const updatedForms = forms.map(form => (form.id === id ? { ...form, values } : form));
    setForms(updatedForms);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const allFormValues = forms.map((form) => form.values);
      const dataToSend = { employee_id: employeeId, bank_details: allFormValues };
  
      if (AddMode) {
        const response = await postData(BANK_DETAILS_API, dataToSend);
        console.log('Data sent:', response);
        handleSubmit(dataToSend);
      } else if (editMode) {
        // Extract employee_id directly from editEmployees
        const response = await putData(`${BANK_DETAILS_API_PUT}/${editEmployees.employee_id}`, dataToSend);
        console.log('PUT API response:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = (label, type, values) => {
    if (label === "Next") {
      handleNextClick();
    }
  };



  return (
    <form onSubmit={onSubmit} className=''>
      <div className='form-line flex justify-evenly mb-4'>
        <div>
          {forms.map((form, index) => (
            <div key={index} className='shadow-sm mt-7 mb-7 ml-1'>
              <BankDetailFormComponent
                id={form.id}
                config={configs}
                values={(editEmployees && editEmployees.Bank && editEmployees.Bank.bank_details && editEmployees.Bank.bank_details[index]) || {}}
                onChange={handleFormChange}
                editEmployees={editEmployees}
              />

            </div>
          ))}
        </div>
        <div className='w-64'>
          <div className='flex w-60 justify-center h-10 border-solid mt-4'>
            <button type="button" onClick={addBank}>Add Bank</button>
          </div>
          <div className='flex justify-center ml-7'>
            <button type="button" onClick={addBank} className='bg-gray-200 text-blue-600 p-2 px-4 rounded flex items-center mb-2 mr-1'>Add another bank details</button>
          </div>
        </div>
      </div>
      <div className='buttons flex justify-end mr- mt-6 mb-96 -ml-1'>
        <Button Configs={ButtonforSave} onClick={handleButtonClick} />
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={ModalConfig}
      />
    </form>
  );
};

export default BankDetailForm;
