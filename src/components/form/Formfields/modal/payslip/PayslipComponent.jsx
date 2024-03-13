import React, { useState, useEffect } from 'react';
// import TextComponent from '../../DocumentsForm/TextComponent';
import TextComponent from '../../text/TextComponent';
import PayslipStyles from './PayslipStyles';
// import Profile from '../../../../configurations/profile/Profile';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';

const PayslipComponent = ({ config }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/payslip');
      
        setData(response.data[0]); // assuming the data is an array and you want the first object
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false whether successful or not
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (fieldName, newValue) => {
    // Update the state with the new value
    setData((prevData) => ({
      ...prevData,
      [fieldName]: newValue,
    }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Error fetching data. Please check the console for details.</p>;
  }
  return (
    <div>
        <div id="payslip-container" className=''>
        <div className='flex '>
        {/* <Profile/> */}
        <div className='mt-3'>
        <h2 className='text-sm'>InfoKalash Pvt Ltd</h2>
        <span className='text-xs'>DeshPande Foundation, Near to Airport Gokul Road,Hubli,Karnataka,India.</span>
        </div>
        </div>
        <p className='text-xl mt-2 text-center font-semibold'>Salary Slip For July 2024</p>
        <p className='ml-3 text-sm'>Employee Details</p>

          
        <div className='ml-3 mt-4'>
        <div className='flex'>
       
      {config.slice(0, 1).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(1, 2).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}
</div>

<div className='flex'>
{config.slice(2, 3).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(3, 4).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

      </div>
      </div>




<h1 className='ml-3 mt-2 text-sm'>Salary Calculations</h1>
<div className='flex mt-4'>
<div className='flex border-2 rounded-sm bg-gray-100 w-[49vh] h- ml-1 mr-[1px]  '>
<p className='text-sm ml-3'>EARNINGS</p>
<p className='ml-[28vh] text-sm items-center'> Amount</p>
</div>

<div className='flex border-2 rounded-sm bg-gray-100 w-[49vh]'>
<p className='text-sm ml-1'>DEDUCTIONS</p>
<p className='ml-[26vh] text-sm items-center'> Amount</p>
</div>
</div>

<div className='flex'>
<div className=''>
<div className='w-[49vh] border-2 ml-1  rounded-sm mr-[1px] mt-[3px] '>
{config.slice(4, 5).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(5, 6).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(6, 7).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(7, 8).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(8, 9).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(9, 10).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(10, 11).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}
{config.slice(11, 12).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}
</div>


<div className='border-2 mr-[1px]  ml-1 w-[49vh] rounded-sm mt-[3px]'>
{config.slice(12, 13).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}
</div>
</div>

<div>

<div className='border-2 w-[49vh] h-[195px] rounded-sm mt-[3px]'>
{config.slice(13, 14).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>

  
))}

{config.slice(14, 15).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(15, 16).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(16, 17).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(17, 18).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}
</div>
<div className='border-2 w-[49vh] rounded-sm mt-[3px]'>
{config.slice(18, 19).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}
</div>
</div>

</div>
<div className='border-2 w-[96vh] ml-3 mt-4 rounded-sm'>
{config.slice(19,20).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(20,21).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

{config.slice(21,22).map((field, index) => (
  <div key={index} className={PayslipStyles[field.textcss].container}>
    <label className={PayslipStyles[field.textcss].label}>
      {field.label}
    </label>
    {field.type === "text" && (
      <TextComponent
        name={field.name}
        textcss={PayslipStyles[field.textcss].input}
        icon={field.icon}
        value={data[field.name]} 
        onChange={(e) => handleInputChange(field.name, e.target.value)} 
      />
    )}
  </div>
))}

</div>
</div>
<button className='ml-[89vh] mt-5 p-1 border-2 border-blue-400 text-blue-700 text-sm rounded-md w-[8vh] shadow-md'>Print</button>

    </div>
  )
}
export default PayslipComponent;
