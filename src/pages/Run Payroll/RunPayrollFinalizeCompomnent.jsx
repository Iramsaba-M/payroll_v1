import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Card from '../../configurations/Card/CardConfig';
import TableComponent from '../../configurations/tables/TableComponent';
import { RunPayrolltableContent,finalizeButtons, ApproveandProcess, PrintPayslip } from './RunPayrollContent';
import Button from '../../configurations/Button/Button';
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from 'axios';

const RunPayrollFinalizeCompomnent = () => {
  // const [selectedDateTop, setSelectedDateTop] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Review Payroll");

  const [data, setData] = useState([]);
  const [selectedDateTop, setSelectedDateTop] = useState(new Date());

  useEffect(() => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    setSelectedDateTop(firstDayOfMonth);
  }, []);
  // useEffect(() => {
  //   const currentDate = new Date();
  //   const currentMonth = currentDate.getMonth();
  //   const defaultMonth = currentMonth === 1 ? 0 : currentMonth === 0 ? 11 : currentMonth - 1;
  //   const selectedDateTop = new Date(
  //     currentMonth === 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear(),
  //     defaultMonth
  //   );
  //   setSelectedDateTop(selectedDateTop);
  // }, []);

  const handleDateChangeTop = (date) => {
    setSelectedDateTop(date);
  };

  const handleFinalize = () => {
    setSelectedOption("Approve Payroll");
    const updatedData = data.map((row) => ({
      ...row,
      payroll_status: 'Finalized',
    }));

    setData(updatedData);

  }
  const handleApprove = () => {
    setSelectedOption("Print Payslip");
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option);

  };
  const cardContent = [
    {
      heading: 'Taxes & Deduction',
      multivalue: [
        { heading: 'PF', name: 'pf' },
        { heading: 'ESIC', name: 'esic' },
        { heading: 'PT', name: 'pt' }
      ],
      card: 'payrollstyle2',
      headstyle: 'payrollheading3'
    },
  ];
  const cardContent2 = [
    {
      heading: 'PAYROLL EXPENSE',
      card: 'payrollstyle1',
      contentstyle: 'payrollcontent',
      headstyle: 'payrollheading'
    },
  ];
  const cardContent3 = [
    {
      heading: 'EMPLOYEE NET PAY',
      card: 'payrollstyle3',
      contentstyle: 'payrollcontent',
      headstyle: 'payrollheading'
    },
  ];
  const cardContent4 = [
    {
      heading: 'TOTAL EMPLOYEES ',
      card: 'payrollstyle1',
      contentstyle: 'payrollcontent2',
      headstyle: 'payrollheading2'
    },
  ];
  const cardContent5 = [
    {
      heading: 'PAYABLE DAYS',
      card: 'payrollstyle3',
      contentstyle: 'payrollcontent2',
      headstyle: 'payrollheading2'
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from cardpiedata endpoint...');
        const year = selectedDateTop.getFullYear();
        const month = selectedDateTop.toLocaleString('en-us', { month: 'short' }).toLowerCase();
        // Rest of your code

        const response = await axios.get('http://localhost:3000/Approve_payroll')
        
        // const response = await postData(Home_and_Report_BarGraphdata, {
        //   year: year,
        //   month: month,
        // });
        // console.log('Post Response cards:', response.data);
        setData(response.data);
        // console.log('setCardData:', cardData);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
    fetchData();
  }, [selectedDateTop]);

  return (
    <div className='ml-14 mt-3'>
      <div className='flex flex-row justify-between h-10 text-sm'>
        <div>
        <p>Payroll For the month </p>
        <div className='ml-[22vh] border-2 w-[19vh] h-7 -mt-6 border-gray-400 rounded-md  '>
          <DatePicker
            selected={selectedDateTop}
            onChange={handleDateChangeTop}
            placeholderText='To'
            dateFormat="MMMM-yyyy"
            style={{ appearance: 'none', background: 'transparent' }}
            className='w-[15vh] on hover:border-blue-500 ml-1 focus:outline-none '
            showMonthYearPicker

          />
          <RiArrowDropDownLine className='-mt-6 ml-[14.5vh] text-3xl text-gray-500' />
        </div>
        </div>
        <div className='flex flex-row '>
          <p className='mr-2 underline underline-offset-1 text-blue-800'>Payslip</p>
          <p className='mr-2 underline underline-offset-1 text-blue-800'>PayrollHistory</p>
        </div>
      </div>
      <div className='flex flex-row ml-10 -mt-2 justify-center  '>
        
        <p
          className={`w-[20vh] cursor-pointer text-sm ${selectedOption === "Review Payroll" ? 'font-bold' : ''}`}
          onClick={() => handleOptionClick("Review Payroll")}
        >
          1{")"}Review Payrol
        </p>
        <p
          className={`w-[20vh] cursor-pointer text-sm ${selectedOption === "Approve Payroll" ? 'font-bold' : ''}`}
          onClick={() => handleOptionClick("Approve Payroll")}
        >
          2{")"}Approve Payrol
        </p>
        
        <p
          className={`w-[20vh] cursor-pointer text-sm ${selectedOption === "Print Payslip" ? 'font-bold' : ''}`}
          onClick={() => handleOptionClick("Print Payslip")}
        >
          3{")"}Print Payslip
        </p>
        
      </div>
      <div className='flex justify-between -mt-1'>
        <div>
          <div className='flex shad'>

            <Card Config={cardContent2} contentvalue={567} />
            <Card Config={cardContent3} contentvalue={567} />
          </div>
          <div className='flex -mt-7  '>
            <Card Config={cardContent4} contentvalue={567} />
            <Card Config={cardContent5} contentvalue={567} />
          </div>
        </div>
        <div>
          <Card Config={cardContent} multiclone={{ pf: 567865465, esic: 567, pt: 5678 }} />

        </div>
      </div>
      <div className="flex  justify-center -mt-2">
        <TableComponent config={RunPayrolltableContent}
          data={data}
        />
      </div>

      <div className=' text-xs font-semibold mt-4 flex justify-col justify-between '>
        <div>
          <p>* Net salary is calculated after reviewing Employees Attendence and Leave Policies of Companies</p>
          <p className='mt-3'> * Attendence = No of Days Present & Paid Holidays</p>
        </div>
        <div >
          {selectedOption === "Review Payroll" && <Button Configs={finalizeButtons} onClick={handleFinalize} />}
          {selectedOption === "Approve Payroll" && <Button Configs={ApproveandProcess} onClick={handleApprove} />}
          {selectedOption === "Print Payslip" && <Button Configs={PrintPayslip} onClick={handleApprove} />}
        </div>
      </div>

    </div>
  );
}

export default RunPayrollFinalizeCompomnent;
