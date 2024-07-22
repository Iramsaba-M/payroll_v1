//Employee Component 
import { useState, useEffect, useCallback } from 'react';
import { fetchData, fetchData1 } from '../../../../services/APIService';
import Card from '../../../../configurations/Card/Card';
import Button from '../../../../configurations/Button/Button';
import ButtonData from '../../../../configurations/Button/ButtonData';
import ButtonConfig from '../../../../configurations/Button/ButtonConfig';
import { cardContent, tableContent, importButtonData, ExportButtonData } from '../../Employee/EmployeePage/EmployeeContent';
import AddEmployee from '../AddEmployee/AddEmployee';
import { parseExcelFile, uploadEmployeeData, generateTemplate, exportDataTemplate } from '../../../../excelUtils';
import { getApiUrl } from '../../../../api/GetAPI';
import { BasicDetails_export, SalaryDetails_export, BankDetails_export, Additionaldetails_export, EMP_API, CARDS_API, BASIC_DETAILS_API_Get, SALARY_DETAILS_GET_API, BANK_DETAILS_API_GET, DOCUMENT_DETAILS_API_GET, ADITIONAL_DETAILS_PUT_API } from '../../../../api/EndPoints';
import SearchableComp from '../../../../configurations/search/search/SearchableComp';
import SearchInputConfig from '../../../../configurations/search/search/SearchInputConfig';
import DynamicTable from '../../../../configurations/tables/DynamicTable';
import { useButtonState } from '../../../../context/ButtonStateContext';
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {
  const [employeeData, setEmployeeData] = useState({
    employees: [],
    total_pages: 1,
    page_size: 10,
    total_documents: 0,
    current_page: 0
  });
  const [empcardData, setCardData] = useState([]);
  const [showImportPopup, setShowImportPopup] = useState(false);
  const [showExportPopup, setShowExportPopup] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const { EditModeclick, AddEmployeeclick } = useButtonState();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Assuming the default page size is 10

  const [selectedExportOptions, setSelectedExportOptions] = useState({
    basicDetails: false,
    salaryDetails: false,
    bankDetails: false,
    documents: false,
    additionalDetails: false,
  });
  const [editempvalue, setEditempvalue] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployeeData = async (pageNumber) => {
      try {
        const data = await fetchData1(EMP_API, pageNumber, pageSize);
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
        console.error(`Error fetching employee data:`, error);
      }
    };

    fetchCardData();
    fetchEmployeeData(currentPage);
  }, [currentPage]);


  console.log("carddata", empcardData)

  const editEmployees = useCallback(async () => {
    if (selectedEmployeeId) {
      try {
        const basicDetailsUrl = `${BASIC_DETAILS_API_Get}/${selectedEmployeeId}`;
        const salaryDetailsUrl = `${SALARY_DETAILS_GET_API}/${selectedEmployeeId}`;
        const bankDetailsUrl = `${BANK_DETAILS_API_GET}/${selectedEmployeeId}`;
        const documentsUrl = `${DOCUMENT_DETAILS_API_GET}/${selectedEmployeeId}`;
        const additionalUrl = `${ADITIONAL_DETAILS_PUT_API}?employee_id=${selectedEmployeeId}`;

        // Fetch basic details
        let basicDetailsResponse = null;
        try {
          basicDetailsResponse = await fetchData(basicDetailsUrl);
          console.log("Basic Details Result:", basicDetailsResponse);
        } catch (error) {
          console.error("Error fetching basic details:", error);
        }

        // Fetch salary details
        let salaryDetailsResponse = null;
        try {
          salaryDetailsResponse = await fetchData(salaryDetailsUrl);
          console.log("Salary Details Result:", salaryDetailsResponse);
        } catch (error) {
          console.error("Error fetching salary details:", error);
        }

        // Fetch bank details
        let bankDetailsResponse = null;
        try {
          bankDetailsResponse = await fetchData(bankDetailsUrl);
          console.log("Bank Details Result:", bankDetailsResponse);
        } catch (error) {
          console.error("Error fetching bank details:", error);
        }

        // Fetch documents details
        let documentsDetailsResponse = null;
        try {
          documentsDetailsResponse = await fetchData(documentsUrl);
          console.log("Documents Details Result:", documentsDetailsResponse);
        } catch (error) {
          console.error("Error fetching documents details:", error);
        }

        // Fetch additional details
        let additionalDetailsResponse = null;
        try {
          additionalDetailsResponse = await fetchData(additionalUrl);
          console.log("Additional Details Result:", additionalDetailsResponse);
        } catch (error) {
          console.error("Error fetching additional details:", error);
        }

        // Merge all details into a single object
        const updatedEmpValue = {
          ...basicDetailsResponse,
          salary: salaryDetailsResponse || 0,
          Bank: bankDetailsResponse || null,
          Documents: documentsDetailsResponse || null,
          Additional: additionalDetailsResponse || null,
        };

        // Update the state
        setEditempvalue(updatedEmpValue);
      } catch (error) {
        console.error('Error in editEmployees function:', error);
      }
    }
  }, [selectedEmployeeId]);

  useEffect(() => {
    editEmployees();
  }, [selectedEmployeeId]);

  const handleAddEmployee = () => {
    setShowAddEmployee(true);
    AddEmployeeclick();
    navigate('AddEmployee');
  };

  const handleEditEmployee = (employeeId) => {
    setSelectedEmployeeId(employeeId);
    setShowAddEmployee(true);
    EditModeclick();
    navigate(`AddEmployee?employeeId=${employeeId}`);

  };

  const handleButtonClick = (label) => {
    if (label === 'Add Employee') {
      handleAddEmployee();

      console.log("AddEmployeeclick");
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
  console.log('editempvalue', editempvalue);
  return (
    <div className="flex flex-col ml-4">
      {!showAddEmployee ? (
        <>
          <div className='card p-2'>
            <Card Configs={cardContent} data={empcardData} />
          </div>

          <div className="flex items-center justify-between p-1 ml-4">
            <div className='text-left ml-4 font-lg bg-white rounded-2xl border-2 border-gray-200 font-bold text-gray-500'>
              <SearchableComp SearchConfig={SearchInputConfig} data={employeeData.employees} searchFunrec={searchFun} />
            </div>
            <div className='text-right p-1 mr-4'>
              <Button Configs={ButtonData} onClick={handleButtonClick} />
            </div>
          </div>

          <div className="flex px-2 ml-8  mt-2">
            <DynamicTable
              config={tableContent}
              data={filteredEmployeeData.length > 0 ? filteredEmployeeData : employeeData.employees}
              currentPage={currentPage}
              pageSize={pageSize}
              totalDocuments={employeeData.total_documents}
              setCurrentPage={setCurrentPage}
              onEditEmployee={handleEditEmployee} // Make sure this prop is correctly provided
            />
          </div>
        </>
      ) : (
        <AddEmployee
          employeeId={selectedEmployeeId}
          onClose={() => setShowAddEmployee(false)}
          editEmployees={editempvalue} // Pass the editEmployees function as prop
        />
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

