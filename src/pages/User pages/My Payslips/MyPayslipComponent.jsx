import { useState, useEffect } from 'react';
import { Mypayslipcontent } from './MypayslipContent';
import { mypayslip } from '../../../api/EndPoints';
import { fetchData } from '../../../services/APIService';
import ErrorScreen from '../../../errorhandling/ErrorScreen';
import DynamicTable from '../../../configurations/tables/DynamicTable';

const MyPayslipComponent = () => {
  const [tableData, setTableData] = useState([]);
  const [errorCode, setErrorCode] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const fetchTableData = async () => {
    try {
      // db.json
      // const response = await axios.get('http://localhost:3000/mypayslip');
      // const tableData = response.data; // Assuming response.data is the array of table data
      // setTableData(tableData);

      const employeeId = 2;
      const params = new URLSearchParams({ employee_id: employeeId });
      const url = `${mypayslip}?${params.toString()}`;
      console.log(url);

      const tableData = await fetchData(url); // Fetch data based on payslips
      setTableData(tableData);
    } catch (error) {
      console.error('Error fetching table data:', error);
      setErrorCode(error.response ? error.response.status : 500);
    }
  };

  useEffect(() => {
    fetchTableData(); // Fetch data on component mount
  }, []); // No dependencies

  if (errorCode) {
    return <ErrorScreen errorCode={errorCode} />; // Render ErrorScreen if an error occurred
  }

  return (
    <div className='px-[60px] mt-10'>
     
      <DynamicTable
              config={Mypayslipcontent}
              data={tableData}
              currentPage={currentPage}
              pageSize={pageSize}
              totalDocuments={tableData.total_documents}
              setCurrentPage={setCurrentPage}
             
            />
    </div>
  );
}

export default MyPayslipComponent;
