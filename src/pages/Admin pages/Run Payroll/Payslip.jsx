//payslip
import { useState, useEffect } from 'react';
import TableComponent from '../../../configurations/tables/TableComponent'
import { tableContent2 } from './RunPayrollContents';
import DatePicker from 'react-datepicker';
import { RiArrowDropDownLine } from "react-icons/ri";
import { fetchData } from '../../../services/APIService';
// import axios from 'axios';


const Payslip = () => {

  const [tableData, setTableData] = useState([]);
  // const [showPayslipsButton, setShowPayslipsButton] = useState(true);
  const [selectedDateTop, setSelectedDateTop] = useState(new Date()); 
  // const [data, setData] = useState(null);

  // const handlePayslipsClick = () => {
  //     setShowDynamicTable(true);
  //     setShowFinalizeComponent(false);
  //     setShowPayslipsButton(false);
  //   };
  
    // const handleReviewClick = (row) => {
    //   setShowDynamicTable(false);
    //   setShowFinalizeComponent(true);
    //   setShowPayslipsButton(false);
    // };
  
    const handleDateChangeTop = (date) => {
      setSelectedDateTop(date);
    };
  
// DB.JSON
  // const fetchTableData = async () => {
  //     try {
  //       const tableData = await axios.get('http://localhost:3000/payslips'); // Fetch data based on payslips
  //       setTableData(tableData.data);
  //     } catch (error) {
  //       console.error('Error fetching table data:', error);
  //     }
  //   };
    
  //   useEffect(() => {
  //     fetchTableData(); // Fetch data on component mount or when payslips change
  //   }, [payslips]); // Include payslips in the dependency array
  
  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const formattedDate = selectedDateTop.toLocaleString('default', { month: 'short' }).toLowerCase();
        const queryParams = new URLSearchParams({
          year: selectedDateTop.getFullYear(),
          month: formattedDate,
          
        });
        const endpoint = `${payslips}/?${queryParams.toString()}`;
        console.log('Constructed URL:', endpoint);
        
        const tableData = await fetchData((endpoint));
        setTableData(tableData);
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };

    fetchTableData();
  }, [selectedDateTop]);
  
  
  return (
      <div>
         <div className='absolute right-8 top-20'>
              <p className='-translate-y-2'>Payroll For the month </p>
              <div className='ml-[30vh] border-2 w-[19vh] h-7 -mt-6 border-gray-200 rounded-md -translate-y-2 '>
                <DatePicker
                  selected={selectedDateTop}
                  onChange={handleDateChangeTop}
                  placeholderText='To'
                  dateFormat="MMMM-yyyy"
                  style={{ appearance: 'none', background: 'transparent' }}
                  className='w-[15vh] on hover:border-blue-500 ml-1 focus:outline-none'
                  showMonthYearPicker
                />
                <RiArrowDropDownLine className='-mt-6 ml-[14.5vh] text-3xl text-gray-500' />
              </div>
              <div className='cursor-pointer absolute top-[-10px] right-1 mt-2 underline underline-offset-1 text-blue-800'>payroll Historys</div>
              <TableComponent config={tableContent2} data={tableData} />
            </div>
      </div>
    )
  }
  
  export default Payslip