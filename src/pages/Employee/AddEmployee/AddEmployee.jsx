import React, { useState } from 'react';
import Nav from '../../../configurations/Navbar/Nav';
import { navs } from './AddEmplyeeContent';
import BasicDetails from './BasicDetails';
import SalaryDetails from './SalaryDetails';
import BankDetails from './BankDetails';
import Documents from './Documents';
import AditionalDetails from './AditionalDetails';

const AddEmployee = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(0); 
  const [employeeId, setEmployeeId] = useState('');
 
  const handleNavClick = (itemName) => {
    const selectedIndex = navs.findIndex((item) => item.name === itemName);
    setSelectedNavItem(selectedIndex);
  };

  const handleEmpId = (employeeId) => {
    setEmployeeId(employeeId);
    // console.log("99999999999999")
    // console.log(employeeId)
    // console.log("99999999999999")
  }

  const handleNextClick = (itemName) => {
    const selectedIndex = navs.findIndex((item) => item.name === itemName);
    const nextIndex = selectedNavItem + 1;

    if (nextIndex < navs.length) {
      setSelectedNavItem(nextIndex);

      const nextForm = navs[nextIndex];
      if (nextForm.name === 'Salary Details') {
        // Assuming employeeId is obtained from BasicDetails form
        const idFromBasicDetails = employeeId; // Replace with your logic
        setEmployeeId(idFromBasicDetails);
        handleEmpId(idFromBasicDetails);
      }
      else {
        // For other forms, pass the employeeId directly
        handleEmpId(employeeId);
      }
    }
  };

   return (
    <div>
      <div className='navtabs items-center justify-center p-8 ml-16'>
        <Nav configs={navs} handleNavClick={handleNavClick} activeItem={navs[selectedNavItem].name} />

        <div className='main-body pt-4 ml-1'>
          <div className='forms'>
          {navs[selectedNavItem].name === 'Basic Details' && <BasicDetails handleNextClick={handleNextClick} handleEmpId={handleEmpId} />}
            {navs[selectedNavItem].name === 'Salary Details' && <SalaryDetails handleNextClick={handleNextClick} employeeId={employeeId}/>}
            {navs[selectedNavItem].name === 'Bank Details' && <BankDetails handleNextClick={handleNextClick} employeeId={employeeId} />}
            {navs[selectedNavItem].name === 'Documents' && <Documents handleNextClick={handleNextClick} employeeId={employeeId}/>}
            {navs[selectedNavItem].name === 'Aditional Details' && <AditionalDetails handleNextClick={handleNextClick} employeeId={employeeId} />}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AddEmployee;