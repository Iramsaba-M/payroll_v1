//clean code
import  { useState } from 'react';
import Nav from '../../../../configurations/Navbar/Nav';
import { navsContent } from './AddEmplyeeContent';
import BasicDetails from '../BasicDetails/BasicDetails';
import SalaryDetails from '../SalaryDetail/SalaryDetails';
import BankDetails from '../BankDetail/BankDetails';
import Documents from '../Documents/Documents';
import AditionalDetails from '../AditionalDetail/AditionalDetails';


const AddEmployee = ({editEmployees}) => {
  const [selectedNavItem, setSelectedNavItem] = useState(0);
  const [employeeId, setEmployeeId] = useState('');
  
  const [editMode, setEditMode] = useState(false);
  console.log('editemp',editEmployees);
  // Function to toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleNavClick = (itemName) => {
    const selectedIndex = navsContent.findIndex((item) => item.name === itemName);
    setSelectedNavItem(selectedIndex);
  };

  const handleEmpId = (employeeId) => {
    setEmployeeId(employeeId);
  };

  const handleNextClick = () => {
    const nextIndex = selectedNavItem + 1;

    if (nextIndex < navsContent.length) {
      const nextForm = navsContent[nextIndex];

      if (nextForm.name === 'Salary Details') {
        const idFromBasicDetails = employeeId;
        setEmployeeId(idFromBasicDetails);
        handleEmpId(idFromBasicDetails);
      }

      setSelectedNavItem(nextIndex);
    }
  };



  const handleButtonClick = (formData) => {
    // Handle form submission here
    console.log('Form data submitted:', formData);
  };
  

  return (
    <div>
      <div className='navtabs items-center justify-center p-8 ml-16'>
        <Nav configs={navsContent} handleNavClick={handleNavClick} activeItem={navsContent[selectedNavItem].name}  />

  

        <div className='main-body pt-4 ml-1'>
          <div className='forms'>
            {navsContent[selectedNavItem].name === 'Basic Details' && (
              <BasicDetails
          
                handleNextClick={handleNextClick}
                handleEmpId={handleEmpId}
                editEmployees={editEmployees}
              />

            )}
            {navsContent[selectedNavItem].name === 'Salary Details' && (
              <SalaryDetails
                handleNextClick={handleNextClick}
                employeeId={employeeId}
                editEmployees={editEmployees}
              />
            )}
            {navsContent[selectedNavItem].name === 'Bank Details' && (
              <BankDetails
                handleNextClick={handleNextClick}
                employeeId={employeeId}
                editEmployees={editEmployees}
              />
            )}
            {navsContent[selectedNavItem].name === 'Documents' && (
              <Documents
                handleNextClick={handleNextClick}
                employeeId={employeeId}
                editEmployees={editEmployees}
              />
            )}
            {navsContent[selectedNavItem].name === 'Aditional Details' && (
              <AditionalDetails
                handleNextClick={handleNextClick}
                employeeId={employeeId}
                editEmployees={editEmployees}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
