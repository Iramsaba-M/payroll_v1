import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Card from '../../configurations/Card/CardConfig';
import TableComponent from '../../configurations/tables/TableComponent';
import { tableContent } from '../Employee/EmployeePage/EmployeeContent';
import { RunPayrolltableContent,finalizeButtons } from './RunPayrollContent';
import Button from '../../configurations/Button/Button';
import { RiArrowDropDownLine } from "react-icons/ri";

const RunPayrollFinalizeCompomnent = () => {
  const [selectedDateTop, setSelectedDateTop] = useState(null);
   const data = [
    {
      employee_name: "vikas",
      designation: "UI",
      attendance: "45",
      gross_salary: "150000",
      net_pay: "4567",
      payroll_status:"finalized"
    },
    {
      employee_name: "vikas",
      designation: "UI",
      attendance: "45",
      gross_salary: "150000",
      net_pay: "4567",
      payroll_status:"finalized"
    },
    {
      employee_name: "vikas",
      designation: "UI",
      attendance: "45",
      gross_salary: "150000",
      net_pay: "4567",
      payroll_status:"finalized"
    },
  ];
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const defaultMonth = currentMonth === 1 ? 0 : currentMonth === 0 ? 11 : currentMonth - 1;
    const selectedDateTop = new Date(
      currentMonth === 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear(),
      defaultMonth
    );
    setSelectedDateTop(selectedDateTop);
  }, []);

  const handleDateChangeTop = (date) => {
    setSelectedDateTop(date);
  };
  const cardContent = [
    {heading:'EMPLOYEES NET PAY', card:'reportstyle1'  },
    { card:'reportstyle1' ,heading:'PAYROLL EXPENSE' },

    
  ];

  return (
    <div className='ml-8'>
      <div className='flex-col h-10'>
        <p>Payroll For the month </p>
        <div className='ml-[25vh] border-2 w-[22vh] h-8 -mt-7 border-gray-400 rounded-sm  '>
          <DatePicker
            selected={selectedDateTop}
            onChange={handleDateChangeTop}
            placeholderText='To'
            dateFormat="MMMM-yyyy"
            style={{ appearance: 'none', background: 'transparent' }}
            className='w-[17vh] on hover:border-blue-500 text-center ml-3  focus:outline-none '
            showMonthYearPicker
            
          />
          <RiArrowDropDownLine className='-mt-6 ml-[18vh] text-3xl text-gray-500'/>
        </div>
      </div>
      <div className='flex flex-row ml-10 justify-center '>
        <p className='w-[20vh] '>1{")"}Review Payrol</p>
        <p className='w-[20vh]'>2{")"}Approve Payrol</p>
        <p>3{")"}Print Payrol</p>
      </div>
      <div>
      <Card Config={cardContent} contentvalue={200000}  />
      {/* <Card Config={cardContent} contentvalue={200000} contentvalue2={45677} /> */}

      </div>
      <div className="flex ">
          <TableComponent config={RunPayrolltableContent}
           data={data}
           />
          </div>

          <div className='mt-4 text-xs font-semibold p-3 flex justify-col justify-between '>
            <div>
            <p>* Net salary is calculated after reviewing Employees Attendence and Leave Policies of Companies</p>
            <p className='mt-2'> * Attendence = No of Days Present & Paid Holidays</p>
            </div>
            <div >
              <Button Configs={finalizeButtons}/>
            </div>
          </div>

    </div>
  );
}

export default RunPayrollFinalizeCompomnent;
