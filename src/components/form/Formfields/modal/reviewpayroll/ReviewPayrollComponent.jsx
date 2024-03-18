
 
import { LuPen } from "react-icons/lu";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextComponent from "../../text/TextComponent";
import ReviewPayrollStyle from "./ReviewPayrollStyle";
import Button from "../../../../../configurations/Button/Button";
import { addlop,add } from "./ReviewPayrollData";
const ReviewPayrollComponent = ({config}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/modal');
        setData(response.data[0]); // assuming the data is an array and you want the first object
      } catch (error) {
        console.error('Error fetching data:', error);
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

  return (
    <div className=" ml-2 h-60">
      <div className='flex'>
      {config.slice(0,1).map((field, index) => (
        <div key={index}  style={{display: '', alignItems: '', }}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
            {field.placeholder}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]}  // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
      <div className=''>
          {config.slice(1,2).map((field, index) => (
        <div key={index}  style={{display: '', alignItems: '', }}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
           
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]}  // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
      </div>
      </div>
        <div className='mt-'>
      {config.slice(2,3).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
      </div>
      <div className='mt-'>
      {config.slice(3,4).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
            <LuPen className="-translate-y-2 translate-x-[53vh] text-gray-400"/>
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} 
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              
            />
          )}
        </div>
      ))}
      </div>
      <button className='bg-gray-100 text-violet-400 text-xs px-2 rounded m'>+ Add LOP</button>


      {/* <Button  Configs={addlop}/> */}

      <div className='flex mt-3'> <p className='text-xs font-semibold text-green-500'>(+) EARNINGS</p>
      <p className='ml-[35vh] text-xs font-semibold'>AMOUNT</p>
      </div>

      <div className='mt-1'>
      {config.slice(4,5).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
         {config.slice(5,6).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              // placeholder={data[field.name]} // use the fetched data as the placeholder
              value={data[field.name]} 
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
         {config.slice(6,7).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} 
              //placeholder={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
         {config.slice(7,8).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} 
              ////placeholder={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
         {config.slice(8,9).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} 
              // placeholder={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
             <button className='bg-gray-100 text-violet-400 text-xs px-2 rounded md'>+ Add</button>
             <div className='mt-2'>
             {config.slice(9,10).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} 
             // placeholder={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
        
          )}
          
        </div>
      ))}
      </div>

      <div className='flex mt-'> <p className='text-xs font-semibold text-red-500'> (-) DEDUCTIONS</p>
      <p className='ml-[33.7vh] text-xs font-semibold'>AMOUNT</p>
      </div>
      <div className='mt-1'>
             {config.slice(10,11).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} 
              //placeholder={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
          
        </div>
      ))}
      </div>
      <div className=''>
             {config.slice(11,12).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} 
             // placeholder={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
          
        </div>
      ))}
      </div>
      <div className=''>
             {config.slice(12,13).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} 
              //placeholder={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
          
        </div>
      ))}
      </div>
      <button className='bg-gray-100 text-violet-400 text-xs px-2 rounded m'>+ Add</button>
      {/* <Button  Configs={add}/> */}
      <div className=''>
             {config.slice(13,14).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} 
              //placeholder={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
          
        </div>
      ))}
      </div>
      <div className='flex mt-3'> <p className='text-xs font-semibold text-black-500'>Reimbursements</p>
      <p className='ml-[34vh] text-xs font-semibold'>AMOUNT</p>
      </div>
      <button className='bg-gray-100 text-violet-400 text-xs px-2 rounded md'>+ Add</button>
      <div className='flex mt-3'> <p className='text-xs font-semibold text-black-500'>Other Deductions </p>
      <p className='ml-[33.2vh] text-xs font-semibold'>AMOUNT</p>
      
      </div>
      <button className='bg-gray-100 text-violet-400 text-xs px-2 rounded md'>+ Add</button>
      <div className='mt-2'>
             {config.slice(14,15).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} 
             // placeholder={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
          
        </div>
      ))}
      </div>
      
      <div className='mt-1'>
             {config.slice(15,16).map((field, index) => (
        <div key={index} style={{display: 'flex', alignItems: ''}}>
          <label className={ReviewPayrollStyle[field.textcss].label}>
            {field.label}
          </label>
          {field.type === "text" && (
            <TextComponent
              name={field.name}
              value={data[field.name]} 
             // placeholder={data[field.name]} // use the fetched data as the placeholder
              textcss={ReviewPayrollStyle[field.textcss].input}
              icon={field.icon}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
          
        </div>
      ))}
      
      </div>
  <button className= 'bg-blue-500 mt-2 text-white text-xs px-2  w-16 h-6 rounded md ml-[48vh]'>Save</button>
   
    
      </div>
     
    </div>
  )
}

export default ReviewPayrollComponent;