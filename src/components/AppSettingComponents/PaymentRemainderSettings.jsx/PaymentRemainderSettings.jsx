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
import { Modalcalendarconfig } from '../../form/Formfields/modal/ModelCalendarconfig';
import Calendar from '../../form/Formfields/modal/CustomCalander/Calendar';
import { MdDateRange } from "react-icons/md";
import DateComponent from '../../form/Formfields/date/DateComponent';

const PaymentsReminderSettings = () => {
  const [payments, setPayments] = useState([]);
  const [values, setValues] = useState({
    due_date: dayjs().format('DD/MM/YYYY'),
    payment_date: dayjs().format('DD/MM/YYYY'),
    payment_type: "onetime",
  });
  
  const [paymentType, setPaymentType] = useState('onetime'); // State to manage selected payment type
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addcard, setAddcard] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [rec , setRec] = useState(null);
 

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
      setPaymentType(type);
    }
    
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
  };

  const handlemodel = (index = null) => {

    setIsModalOpen(true);
    setCurrentIndex(index);
  };

  const onSave = () => {
    const dataToSend = {
      ...values,
      
    };
    console.log('dataToSendPOWS', dataToSend);
    axios.post('http://localhost:3000/paymentRemaindersetting1', dataToSend)
      .then(response => {
        console.log('Data saved successfully:', response.data);
        // Optionally update the state or provide user feedback
        fetchingData();
        // Reset form values and hide the new reminder form
        setValues({
          due_date: dayjs().format('DD/MM/YYYY'),
          payment_date: dayjs().format('DD/MM/YYYY'),
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

  const handleDelete = (index) => {
    
    const paymentToDelete = payments[index];
    console.log('handleDelete called',paymentToDelete,'i',index);
    axios.delete(`http://localhost:3000/paymentRemaindersetting1/${paymentToDelete.name}`)
      .then(response => {
        console.log('Data deleted successfully:', response.data);
        fetchingData();
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  // const handlerangecal = (start, end) => {

  //   if (currentIndex !== null && payments[currentIndex]) {
  //     setPayments(prev => {
  //       const newPayments = [...prev];
  //       newPayments[currentIndex].payment_date = start;
  //       newPayments[currentIndex].due_date = end;
  //       return newPayments;
  //     });
  //   } else {
  //     setValues(prev => ({
  //       ...prev,
  //       payment_date: start,
  //       due_date: end,
  //     }));
  //   }
    
  // };

  const handlerangecal = (start = null, end = null, reccuringdates) => {
    console.log("callllll"-start, end, reccuringdates);
    if (currentIndex !== null && payments[currentIndex]) {
      setPayments(prev => {
        const newPayments = [...prev];
        newPayments[currentIndex].payment_date = ( (start === null)? payments[currentIndex].payment_date: start);
        newPayments[currentIndex].due_date = ((end === null)? payments[currentIndex].due_date: end);
        newPayments[currentIndex].payment_type = reccuringdates ? 'recurring' : payments[currentIndex].payment_type;
        newPayments[currentIndex].recurring_dates = reccuringdates;
        return newPayments;
      });
    } else {
      setValues(prev => ({
        ...prev,
        payment_date: ( (start === null) ? values.payment_date: start),
        due_date: ( (end === null) ? values.due_date: end),
        payment_type: reccuringdates ? 'recurring' : values.payment_type,
        recurring_dates: reccuringdates,
      }));
    }
  };

  // const handlerecurring =(dates)=>{
  //   if (currentIndex !== null && payments[currentIndex]) {
  //     setPayments(prev => {
  //       const newPayments = [...prev];
  //       newPayments[currentIndex].payment_type = "recurring",
  //       newPayments[currentIndex].recurring_dates = dates;
  //       return newPayments;
  //     });
  //   } else {
  //     setValues(prev => ({
  //       ...prev,
  //       payment_type : "recurring",
  //       recurring_dates : dates
  //     }));
  //   }
  // }

  console.log('paymentType', paymentType, values);

  return (
    <div>
      <div>
        <div className='flex text-gray-900 ml-8 -mt-7 mb-2 font-semibold'>
          <h2 className='flex place-items-baseline'>Payment Reminder Settings</h2>
          <TbClockDollar className='text-xl mt-1 ml-2' />
        </div>
        {!addcard ? (<div>
          <button
            onClick={() => setAddcard(true)}
            className='ml-[59rem] object-right text-sm font-medium text-gray-600  '
          ><span className='border-b-2 py-1 border-gray-400'>Add New Reminder</span></button>
        </div>) : null}
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
                  <div className={paymentStyles.dateInputContainer} onClick={() => handlemodel(index)}>

                    {config.map((field, j) => (

                      <div key={j} className={paymentStyles.dateInputRow}>
                        <label className={paymentStyles.dateLabel}>{field.label}</label>
                        {field.type === 'date' && (
                          <>
                            {/* <label className={paymentStyles.dateLabel}>{field.label}</label> */}

                            <input
                              type="text"
                              value={payment[field.name] || ''}
                              onChange={(e) => handleChange(field.name, e.target.value, index)}
                              className={paymentStyles.dateInput}
                            />
                            <div className='-ml-6'>{field.icon}</div>
                          </>
                          
                        )}
                      </div>
                    ))}
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
              <div className='flex'>
                <button onClick={() => onUpdate(index)} className='mt-2 text-sm ml-20 px-4 py-1 bg-blue-500 text-white rounded'>
                  Update
                </button>
                 <button  onClick={() => handleDelete(index)} className='mt-2 text-sm ml-9 px-4 bg-[#F64541] text-white rounded'> 
                  Delete
                </button>
              </ div>
            </div>
          ))
        ) : (
          <div>No notifications available.</div>
        )}

        {addcard ? (
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

                <div className={paymentStyles.dateInputContainer} onClick={handlemodel}>
                  {config.map((field, j) => (
                    <div key={j} className={paymentStyles.dateInputRow}>
                      <label className={paymentStyles.dateLabel}>{field.label}</label>
                      {field.type === 'date' && (
                        <>
                          <input
                            type="text"
                            value={values[field.name] || ''}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            className={paymentStyles.dateInput}
                          />
                          <div className='-ml-6'>{field.icon}</div>
                        </>
                      )}
                    </div>
                  ))}
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
        ) : null}
      </div>
      <ModalComponent

        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={Modalcalendarconfig}
        component={<Calendar onRangeChange={handlerangecal} />} //rec={handlerecurring}
      />
    </div>
  );
};

export default PaymentsReminderSettings;

