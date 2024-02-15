import React, { useState, useEffect } from 'react';
import { fetchData } from '../../../services/APIService';
import Card from '../../../configurations/Card/Card';
import Button from '../../../configurations/Button/Button';
import { cardContent, tablesearchContent, ButtonContent, tableContent } from '../EmployeePage/EmployeeContent';
import { EMP_API, CARDS_API } from '../../../api/EndPoints'
import TableComponent from '../../../configurations/tables/TableComponent';
import AddEmployee from '../AddEmployee/AddEmployee';
import { parseExcelFile, uploadEmployeeData, generateTemplate} from '../../../excelUtils';
import SearchableComp from '../../../configurations/search/search/SearchableComp';
import {exportDataTemplate} from '../../../excelUtils';

const EmployeeComponent = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [empcardData, setCardData] = useState([]);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showImportPopup, setShowImportPopup] = useState(false);
  const [showExportPopup, setShowExportPopup] = useState(false);

  const [selectedExportOptions, setSelectedExportOptions] = useState({
    basicDetails: false,
    salaryDetails: false,
    bankDetails: false,
    documents: false,
    additionalDetails: false,
  });

  // const fetchemployeeData = async () => {
  //   try {
  //     // Fetch data from the server
  //     const serverResponse = await axios.get(getApiUrl(EMP_API)); // or use EMP_API directly
  //     const serverData = serverResponse.data;

  //     // Fetch and parse Excel data
  //     const excelData = await parseExcelFile();

  //     // Update the UI with combined data from the server and Excel file
  //     setEmployeeData([...serverData, ...excelData]);
  //   } catch (error) {
  //     console.error(`Error fetching data:`, error);
  //   }
  // };
  
  // useEffect(() => {
  //   fetchemployeeData();
  // }, []);

// const fetchCardData = async () => {
  //   try {

  //     const response = await axios.get(getApiUrl(CARDS_API));
     
  //     setCardData(response.data);
  //   } catch (error) {
  //     console.error(`Error fetching ${CARDS_API} data:`, error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCardData();
  // }, []);
  
  useEffect(() => {
    
  const fetchemployeeData = async () => {
    try {
      const empdata = await fetchData(EMP_API);
      const serverData = empdata.data;
      const excelData = await parseExcelFile();

      setEmployeeData([...serverData, ...excelData]);
    } catch (error) {
      // Handle error
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
  
  
  const handleButtonClick = (label) => {
    if (label === 'Add Employee') {
      setShowAddEmployee(true);
    } else if (label === 'Import') {
      setShowImportPopup(true);
    } else if (label === 'Export') {
      setShowExportPopup(true);
    }
  };

  const handleDownload = async (apiEndpoint, format) => {
    try {
      // Call the exportDataTemplate function
      await exportDataTemplate(apiEndpoint, format);
  
      // If needed, add any additional logic after successful download
      console.log('Download successful!');
    } catch (error) {
      console.error('Error handling download:', error);
    }
  };

  const handleExportButtonClick = async (format) => {
    try {
      // Create an array of selected options based on the state
      const baseApiUrl = 'http://192.168.0.106:8001/export/';
  
      const selectedOptions = Object.keys(selectedExportOptions).filter(
        option => selectedExportOptions[option]
      );
  
      for (const option of selectedOptions) {
        let apiEndpoint = '';
  
        switch (option) {
          case 'basicDetails':
            apiEndpoint = `${baseApiUrl}basic-details/`;
            break;
  
          case 'salaryDetails':
            apiEndpoint = `${baseApiUrl}salary-details/`;
            break;
  
          case 'bankDetails':
            apiEndpoint = `${baseApiUrl}bank-details/`;
            break;
  
          case 'documents':
            apiEndpoint = `${baseApiUrl}documents/`;
            break;
  
          case 'additionalDetails':
            apiEndpoint = `${baseApiUrl}additional-details/`;
            break;
  
          default:
            console.error(`Unsupported export option: ${option}`);
            return;
        }
  
        const adjustedFormat = (format === 'excel') ? 'xlsx' : format;
  
        await exportDataTemplate(apiEndpoint, adjustedFormat);
      }
  
      // Close the export popup
      setShowExportPopup(false);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };
  


//   const adjustedFormat = (format === 'excel') ? 'xlsx' : format;

//   // Await each export call
//   await exportDataTemplate(apiEndpoint, adjustedFormat);
// }

// // Close the export popup
// setShowExportPopup(false);
// } catch (error) {
// console.error('Error exporting data:', error);
// }
// };

  
const handleFileUpload = async (event) => {
  const file = event.target.files[0];

  try {
    const parsedData = await parseExcelFile(file);

    // Only upload the data to the server without updating the local state
    await uploadEmployeeData(parsedData, file);

    // Optional: If you still want to update the local state, uncomment the next line
    // setEmployeeData([...employeeData, ...parsedData]);

  } catch (error) {
    console.error('Error processing file content:', error);
  }

  setShowImportPopup(false);
};




const closeImportPopup = () => {
  setShowImportPopup(false);
};


  const [data, setData] = useState([]);
  const [filteredEmployeeData, setFilteredEmployeeData] = useState([]);

  const searchFun = (recsearchdata) => {
    setFilteredEmployeeData(recsearchdata);
  };

  

  return (
    <div className="flex flex-col ml-12">
      {!showAddEmployee ? (
        <>
          <div className='card p-2'>
            <Card Configs={cardContent} data={empcardData} />
          </div>

          <div className="flex items-center justify-between p-1 ml-4">
            <div className='text-left ml-4 font-lg font-bold text-gray-500'>
            <SearchableComp SearchConfig={tablesearchContent} data={employeeData} searchFunrec={searchFun} />

            
            </div>
            <div className='text-right p-1 mr-4'>
              <Button Configs={ButtonContent} onClick={handleButtonClick} />
            </div>
          </div>

          <div className="flex p-4 ml-4">
          <TableComponent config={tableContent} data={filteredEmployeeData.length > 0 ? filteredEmployeeData : employeeData} />
          </div>
        </>
      ) : (
        <AddEmployee />
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
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
        onClick={generateTemplate}
      >
        Download Template
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mr-4"
        onClick={() => document.getElementById('fileInput').click()}
      >
        Upload File
      </button>
    
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
  <button
    className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
    onClick={() => handleExportButtonClick('pdf')}
  >
    Download as PDF
  </button>

  <button
    className="bg-green-500 text-white px-4 py-2 rounded mr-4"
    onClick={() => handleExportButtonClick('excel')}
  >
    Download as Excel
  </button>

  <button
    className="bg-yellow-500 text-white px-4 py-2 rounded mr-4"
    onClick={() => handleExportButtonClick('csv')}
  >
    Download as CSV
  </button>
</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeComponent;