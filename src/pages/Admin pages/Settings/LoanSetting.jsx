// import React from 'react';

// const LoanSetting = () => {
//   return (
//     <div>
//       Loan Setting
//     </div>
//   );
// }

// export default LoanSetting;


import { Outlet, useNavigate } from 'react-router-dom';
import {  Loanpolicycontent, TypeOfLoan,LoanApprovalSettings } from '../../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
import Box from '../../../components/AppSettingComponents/CTCTemplateSettingForm/Box';
import { IoMdArrowBack } from "react-icons/io";
import { useEffect, useState } from 'react';

// import axios from 'axios';
// import { fetchData } from '../../services/APIService';
// import { ctctemplatename } from '../../api/EndPoints';
// import Card from '../../configurations/Card/Card';

const LoanSetting = () => {
  const navigate = useNavigate();
  const [cardclick, setCardClick] = useState(false)

  const handleClick = (path) => {
    navigate(path);
    console.log(path)
    setCardClick(true)
  };
  const handleBackClick = () => {
    navigate('/apps/settings/LoanSetting');
    setCardClick(false);
  };

  return (
    <div>
      
 
      {
        (!cardclick) &&
        <div>
      <div className='ml-36' onClick={()=>handleClick(TypeOfLoan[0].path)}  >
        <Box Configs={TypeOfLoan} />
      </div>
      <div className='ml-36' onClick={()=>handleClick(Loanpolicycontent[0].path)}  >
        <Box Configs={Loanpolicycontent} />
      </div>
      <div className='ml-36' onClick={()=>handleClick(LoanApprovalSettings[0].path)}  >
        <Box Configs={LoanApprovalSettings} />
      </div>
      </div>}
      {cardclick && (
        <>
        <div className='-mt-6 '>
          <button onClick={handleBackClick}><IoMdArrowBack /></button>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default LoanSetting;