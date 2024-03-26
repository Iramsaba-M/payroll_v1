

import React, { useState, useEffect } from 'react';
import { fetchData } from '../../../services/APIService';
import Card from '../../../configurations/Card/Card';
import Button from '../../../configurations/Button/Button';
import ButtonData from '../../../configurations/Button/ButtonData';
import ButtonConfig from '../../../configurations/Button/ButtonConfig';
import { cardContent, tablesearchContent, ButtonContent, tableContent } from '../EmployeePage/EmployeeContent';
import { EMP_API, CARDS_API } from '../../../api/EndPoints'
import TableComponent from '../../../configurations/tables/TableComponent';
import AddEmployee from '../AddEmployee/AddEmployee';
import { parseExcelFile, uploadEmployeeData, generateTemplate} from '../../../excelUtils';
import {getApiUrl} from '../../../api/GetAPI';
import { BasicDetails_export,SalaryDetails_export,BankDetails_export,Additionaldetails_export } from '../../../api/EndPoints';
import SearchableComp from '../../../configurations/search/search/SearchableComp';
import SearchInputConfig from '../../../configurations/search/search/SearchInputConfig';
import {exportDataTemplate} from '../../../excelUtils';
import { useNavigate } from 'react-router-dom';
import { importButtonData ,ExportButtonData } from '../../../pages/Employee/EmployeePage/EmployeeContent';
import DynamicTable from '../../../configurations/tables/DynamicTable';
import axios from 'axios';
import { BASIC_DETAILS_API_Get } from '../../../api/EndPoints';


const EmployeeComponent = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [empcardData, setCardData] = useState([]);

  const [showImportPopup, setShowImportPopup] = useState(false);
  const [showExportPopup, setShowExportPopup] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const [selectedExportOptions, setSelectedExportOptions] = useState({
    basicDetails: false,
    salaryDetails: false,
    bankDetails: false,
    documents: false,
    additionalDetails: false,
  });

  useEffect(() => {  
    const fetchemployeeData = async () => {
      try {
        const data = await fetchData(EMP_API);
        setEmployeeData(data); 
      } catch (error) {
        console.error(`Error fetching employee data:`, error);
      }
    };

    const fetchCardData = async () => {
      try {
        const data = await fetchData(CARDS_API);
        setCardData(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchCardData();
    fetchemployeeData();
  }, []);
  

  // const navigate = useNavigate();
  // const handleAddEmployee = () => {
  //   setShowAddEmployee(true);
  //   navigate('AddEmployee');
  // };

  // const handleEditEmployee = (employeeId) => {
  //   setSelectedEmployeeId(employeeId);
  //   setShowAddEmployee(true);
  //   console.log('Employee ID passed:', employeeId); // Log the employeeId here
  //   navigate(`AddEmployee?employeeId=${employeeId}`);
  // };

  // useEffect(() => {
  //   const fetchDataAndSetState = async () => {
  //     const queryParams = new URLSearchParams(location.search);
  //     const empId = queryParams.get('employeeId');

  //     // Construct the API URL with the employee ID
  //     const apiUrl = `${EMP_API}?employeeId=${empId}`;
  //     console.log('API URL:', apiUrl); // Log the API URL

  //     try {
  //       const data = await fetchData(apiUrl);
  //       setEmployeeData(data);
  //     } catch (error) {
  //       console.error('Error fetching employee data:', error);
  //     }
  //   };

  //   fetchDataAndSetState();
  // }, [location.search]);

  // useEffect(() => {
  //   const fetchTotalCTCAndEmployees = async () => {
  //     if (selectedEmployeeId) {
       
  //       try {
  //         const result = await fetchData(`${BASIC_DETAILS_API_Get}?employeeId=${selectedEmployeeId}`);
  //         console.log('Total CTC and Employees Data:', result);
  //         // Process data as needed
  //       } catch (error) {
  //         console.error('Error fetching total CTC and employees data:', error);
  //       }
  //     }
  //   };

  //   fetchTotalCTCAndEmployees();
  // }, [selectedEmployeeId]);``

  // const handleAddEmployee = () => {
  //   setShowAddEmployee(true);
  //   navigate('AddEmployee');
  // };

  // const handleEditEmployee = (employeeId) => {
  //   setSelectedEmployeeId(employeeId);
  //   setShowAddEmployee(true);
  //   navigate(`AddEmployee?employeeId=${employeeId}`);
  // };

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const queryParams = new URLSearchParams(location.search);
      const empId = queryParams.get('employeeId');

      // Construct the API URL with the employee ID
      const apiUrl = `${EMP_API}?employeeId=${empId}`;
      console.log('API URL:', apiUrl); // Log the API URL

      try {
        const data = await fetchData(apiUrl);
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchDataAndSetState();
  }, [location.search]);

  useEffect(() => {
    const fetchTotalCTCAndEmployees = async () => {


      
      if (selectedEmployeeId) {
        try {
          const result = await fetchData(`${BASIC_DETAILS_API_Get}?employeeId=${selectedEmployeeId}`);
          console.log('Total CTC and Employees Data:', result);
          // Process data as needed
        } catch (error) {
          console.error('Error fetching total CTC and employees data:', error);
        }
      }
    };

    fetchTotalCTCAndEmployees();
  }, [selectedEmployeeId]);

  const handleAddEmployee = () => {
    setShowAddEmployee(true);
    navigate('AddEmployee');
  };

  const handleEditEmployee = (employeeId) => {
    setSelectedEmployeeId(employeeId);
    setShowAddEmployee(true);
    setIsEditMode(true); // Set edit mode to true
    navigate(`AddEmployee?employeeId=${employeeId}`);
  };
  const handleButtonClick = (label) => {
    if (label === 'Add Employee') {
      handleAddEmployee();
    } else if (label === 'Import') {
      setShowImportPopup(true);
    } else if (label === 'Export') {
      setShowExportPopup(true);
    } else if (label === 'Download Template') {
      generateTemplate(true);
    } else if (label === 'Upload File') {
      document.getElementById('fileInput').click(); 
    } else if (label === 'Download as PDF') {
      handleExportButtonClick('pdf');
    } else if (label === 'Download as Excel') {
      handleExportButtonClick('excel');
    } else if (label === 'Download as CSV') {
      handleExportButtonClick('csv');
    }
  };

  const handleExportButtonClick = async (format) => {
    try {
      const selectedOptions = Object.keys(selectedExportOptions).filter(
        option => selectedExportOptions[option]
      );
  
      for (const option of selectedOptions) {
        let apiEndpoint = '';
  
        switch (option) {
          case 'basicDetails':
            apiEndpoint = getApiUrl(BasicDetails_export);
            break;
          case 'salaryDetails':
            apiEndpoint = getApiUrl(SalaryDetails_export);
            break;
          case 'bankDetails':
            apiEndpoint = getApiUrl(BankDetails_export);
            break;
          case 'documents':
            apiEndpoint = getApiUrl(Documents_export);
            break;
          case 'additionalDetails':
            apiEndpoint = getApiUrl(Additionaldetails_export);
            break;
          default:
            console.error(`Unsupported export option: ${option}`);
            return;
        }
  
        const adjustedFormat = (format === 'excel') ? 'xlsx' : format;
  
        await exportDataTemplate(apiEndpoint, adjustedFormat);
      }
  
      setShowExportPopup(false);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };
  
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    try {
      const parsedData = await parseExcelFile(file);
      await uploadEmployeeData(parsedData, file);
    } catch (error) {
      console.error('Error processing file content:', error);
    }

    setShowImportPopup(false);
  };

  const closeImportPopup = () => {
    setShowImportPopup(false);
  };

  const [filteredEmployeeData, setFilteredEmployeeData] = useState([]);

  const searchFun = (recsearchdata) => {
    setFilteredEmployeeData(recsearchdata);
  };

  return (
    <div className="flex flex-col ml-4">
      {!showAddEmployee ? (
        <>
          <div className='card p-2'>
            <Card Configs={cardContent} data={empcardData} />
          </div>

          <div className="flex items-center justify-between p-1 ml-4">
            <div className='text-left ml-4 font-lg font-bold text-gray-500'>
              <SearchableComp SearchConfig={SearchInputConfig} data={employeeData} searchFunrec={searchFun} />
            </div>
            <div className='text-right p-1 mr-4'>
              <Button Configs={ButtonData} onClick={handleButtonClick} />
            </div>
          </div>

          <div className="flex p-2 ml-8 mt-8">
          <DynamicTable
  config={tableContent} 
  data={filteredEmployeeData.length > 0 ? filteredEmployeeData : employeeData} 
  onEditEmployee={handleEditEmployee} // Make sure this prop is correctly provided
/>

          </div>
        </>
      ) : (
        <AddEmployee employeeId={selectedEmployeeId} onClose={() => setShowAddEmployee(false)} />
      )}

{showImportPopup && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded shadow-lg relative">
      <div className="absolute top-2 right-2 cursor-pointer" onClick={closeImportPopup}>
        <span className="text-gray-500 text-2xl font-bold">&times;</span>
      </div>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileUpload}
      />
      

      {/* Replace static buttons with ButtonConfig component */}
      <ButtonConfig Config={importButtonData} onClick={handleButtonClick} />
    
    </div>
  </div>
)}

{showExportPopup && (
   <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
   <div className="bg-white p-8 rounded shadow-lg flex flex-col items-center relative">
     <div className="absolute top-2 right-2 cursor-pointer" onClick={() => setShowExportPopup(false)}>
       <span className="text-gray-500 text-2xl font-bold">&times;</span>
     </div>
      <div className="flex mb-4">
        <div className="mr-8">
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={selectedExportOptions.basicDetails}
                onChange={() =>
                  setSelectedExportOptions(prevState => ({
                    ...prevState,
                    basicDetails: !prevState.basicDetails,
                  }))
                }
              />
              <span className="ml-2">Basic Details</span>
            </label>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={selectedExportOptions.salaryDetails}
                onChange={() =>
                  setSelectedExportOptions(prevState => ({
                    ...prevState,
                    salaryDetails: !prevState.salaryDetails,
                  }))
                }
              />
              <span className="ml-2">Salary Details</span>
            </label>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={selectedExportOptions.bankDetails}
                onChange={() =>
                  setSelectedExportOptions(prevState => ({
                    ...prevState,
                    bankDetails: !prevState.bankDetails,
                  }))
                }
              />
              <span className="ml-2">Bank Details</span>
            </label>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={selectedExportOptions.documents}
                onChange={() =>
                  setSelectedExportOptions(prevState => ({
                    ...prevState,
                    documents: !prevState.documents,
                  }))
                }
              />
              <span className="ml-2">Documents</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
            checked={selectedExportOptions.additionalDetails}
            onChange={() =>
              setSelectedExportOptions(prevState => ({
                ...prevState,
                additionalDetails: !prevState.additionalDetails,
              }))
            }
          />
          <span className="ml-2">Additional Details</span>
        </label>
      </div>
      

      <div className="flex mt-4">
  
  <ButtonConfig Config={ExportButtonData} onClick={handleButtonClick} />
</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeComponent;

