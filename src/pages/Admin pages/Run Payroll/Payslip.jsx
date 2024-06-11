 //payslip
import { useState, useEffect, useCallback } from 'react';
import { tableContent2 } from './RunPayrollContents';
import DatePicker from 'react-datepicker';
import { RiArrowDropDownLine } from "react-icons/ri";
import { fetchData } from '../../../services/APIService';
import { payslips } from '../../../api/EndPoints';
import DynamicTable from '../../../configurations/tables/DynamicTable';

const Payslip = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedDateTop, setSelectedDateTop] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handleDateChangeTop = (date) => {
    setSelectedDateTop(date);
  };

  const fetchTableData = useCallback(async () => {
    try {
      const formattedDate = selectedDateTop.toLocaleString('default', { month: 'short' }).toLowerCase();
      const queryParams = new URLSearchParams({
        year: selectedDateTop.getFullYear(),
        month: formattedDate,
      });
      const endpoint = `${payslips}/?${queryParams.toString()}`;
      console.log('Constructed URL:', endpoint);

      const data = await fetchData(endpoint);
      console.log('Fetched data:', data);
      setTableData(data);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  }, [selectedDateTop]);

  useEffect(() => {
    fetchTableData();
  }, [fetchTableData]);

  return (
    <div>
      <div className='absolute right-8 top-20'>
        <p className='-translate-y-2 ml-2'>Payroll For the month </p>
        <div className='ml-[22vh] border-2 w-[20vh] h-7 -mt-6 border-gray-200 rounded-md -translate-y-2 '>
          <DatePicker
            selected={selectedDateTop}
            onChange={handleDateChangeTop}
            placeholderText='To'
            dateFormat="MMMM-yyyy"
            style={{ appearance: 'none', background: 'transparent' }}
            className='w-[16vh] on hover:border-blue-500 ml-1 focus:outline-none'
            showMonthYearPicker
          />
          <RiArrowDropDownLine className='-mt-6 ml-[16vh] text-3xl text-gray-500' />
        </div>
        <div className='cursor-pointer absolute top-[-10px] right-1 mt-2 underline underline-offset-1 text-blue-800'>payroll History</div>
       
        <DynamicTable
              config={tableContent2}
              data={tableData}
              currentPage={currentPage}
              pageSize={pageSize}
              totalDocuments={tableData.total_documents}
              setCurrentPage={setCurrentPage}
             
            />
      </div>
    </div>
  );
};

export default Payslip;
