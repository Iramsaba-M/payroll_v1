import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Card from '../../configurations/Card/CardConfig';
import TableComponent from '../../configurations/tables/TableComponent';
import { RunPayrolltableContent,finalizeButtons, ApproveandProcess, PrintPayslip,cardContent,cardContent2,cardContent3,cardContent4,cardContent5,tableContent2 } from './RunPayrollContents';
import Button from '../../configurations/Button/Button';
import { RiArrowDropDownLine } from "react-icons/ri";
import { payslips } from '../../api/EndPoints';
import { fetchData } from '../../services/APIService';
import axios from 'axios';
import Payslip from '../Run Payroll/Payslip';


const RunPayrollFinalizeCompomnent = () => {
  const [selectedOption, setSelectedOption] = useState("Review Payroll");
  const [showpayslip, setShowpayslip] = useState(false);
  const [payrolldata, setPayrollData] = useState([]);
  const [payrolltabledata, setpayrollTableData] = useState([]);
  const [selectedDateTop, setSelectedDateTop] = useState(new Date());
  const [tableData, setTableData] = useState([]);

  const fetchTableData = async () => {
    try {
      const tableData = await fetchData(payslips); // Fetch data based on payslips
      setTableData(tableData);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };
  
  useEffect(() => {
    fetchTableData(); // Fetch data on component mount or when payslips change
  }, [payslips]); // Include payslips in the dependency array


  useEffect(() => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    setSelectedDateTop(firstDayOfMonth);
  }, []);
 

  const handleDateChangeTop = (date) => {
    setSelectedDateTop(date);
  };

  const handleFinalize = () => {
    setSelectedOption("Approve Payroll");
    const updatedData = payrolltabledata.map((row) => ({
      ...row,
      status: 'Finalized',
    }));

    setpayrollTableData(updatedData);

  }
  const handleApprove = () => {
    setSelectedOption("Print Payslip"); 
  }
  const handlePrintPayslip=()=>{
    setShowpayslip(true);
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option);

  };

  
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from cardpiedata endpoint...');
        const year = selectedDateTop.getFullYear();
        const month = selectedDateTop.toLocaleString('en-us', { month: 'short' }).toLowerCase();
        // Rest of your code

        const response = await axios.get('http://localhost:3000/reviewPayroll')
        
        // const response = await postData(Home_and_Report_BarGraphdata, {
        //   year: year,
        //   month: month,
        // });
        console.log('Post Response cards:', response.data);
        setPayrollData(response.data[0]);
        setpayrollTableData(response.data[0].employees)
        console.log('payrolldData:', payrolldata);
        console.log('setpayrolltabledata:', payrolltabledata);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
    fetchData();
  }, [selectedDateTop]);

  return (
    <div>
    {!showpayslip && ( 
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
          <p className='mr-2 underline underline-offset-1 text-blue-800' onClick={handlePrintPayslip}>Payslip</p>
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

            <Card Config={cardContent2} contentvalue={payrolldata.total_expense} />
            <Card Config={cardContent3} contentvalue={payrolldata.net_pay} />
          </div>
          <div className='flex -mt-7  '>
            <Card Config={cardContent4} contentvalue={payrolldata.total_employees} />
            <Card Config={cardContent5} contentvalue={payrolldata.payable_days} />
          </div>
        </div>
        <div>
          <Card Config={cardContent} multiclone={payrolldata} />

        </div>
      </div>
      <div className="flex  justify-center -mt-2">
        <TableComponent config={RunPayrolltableContent}
          data={payrolltabledata} 
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
          {selectedOption === "Print Payslip" && <Button Configs={PrintPayslip} onClick={handlePrintPayslip} />}
        </div>
      </div>

    </div>)}
    {showpayslip && <Payslip />}
    </div>
  );
}

export default RunPayrollFinalizeCompomnent;