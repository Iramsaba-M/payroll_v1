
import { useState, useEffect } from 'react';
import BankDetailFormComponent from './BankDetailFormComponent';
import Button from '../../../configurations/Button/Button';
import { BANK_DETAILS_API, BANK_DETAILS_API_PUT } from '../../../api/EndPoints';
import { ButtonforSave } from '../../../pages/Admin pages/Employee/BankDetail/BankDetailsContent';
import ModalComponent from '../Formfields/modal/ModalComponent';
import { ModalConfig } from '../Formfields/modal/ModalConfig'
import { postData, putData } from '../../../services/APIService';
import { useButtonState } from '../../../context/ButtonStateContext';
import { useFormik } from 'formik';
import { createInitialValues, formSchema, simplifiedData } from '../../../configurations/ValidationSchema/ValidationSchema';
import PropTypes from 'prop-types';

const BankDetailForm = ({ configs, handleNextClick, handleSubmit, employeeId, editEmployees }) => {
  const [forms, setForms] = useState([{ id: 0, values: {} }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { AddMode, editMode } = useButtonState();
  console.log('editEmployees', editEmployees);

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editEmployees]);


  const addBank = () => {
    const newForms = [...forms, { id: forms.length, values: {} }];
    console.log('called');
    setForms(newForms);
  };

  const formik = useFormik({
    initialValues: createInitialValues(configs),
    validationSchema: formSchema(simplifiedData(configs)),
  });

  console.log('er123', formik.values, formik.errors, forms);



  const handleFormChange = (id, values) => {
    const updatedForms = forms.map(form => (form.id === id ? { ...form, values } : form));
    setForms(updatedForms);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      formik.handleSubmit();
      const allFormValues = forms.map((form) => form.values);
      const dataToSend = { employee_id: employeeId, bank_details: allFormValues };

      if (AddMode && formik.isValid) {
        const response = await postData(BANK_DETAILS_API, dataToSend);
        console.log('Data sent:', response);
        setIsModalOpen(true);
        handleSubmit(dataToSend);
      } else if (editMode && formik.isValid) {
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

  const handleButtonClick = (label) => {
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
                formik={formik}
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

BankDetailForm.propTypes = {
  configs: PropTypes.array.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  employeeId: PropTypes.string.isRequired,
  editEmployees: PropTypes.object.isRequired,
};

export default BankDetailForm;
