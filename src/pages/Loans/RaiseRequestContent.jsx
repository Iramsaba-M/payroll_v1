// import React from 'react';
// import { IconContext } from 'react-icons';
// import { FaBeer } from 'react-icons/fa';
// import { CiCalculator1 } from "react-icons/ci";
// import { IoCalculatorOutline } from "react-icons/io5";
// import { RiHandCoinLine } from "react-icons/ri";
// import { FaHandHoldingDollar } from "react-icons/fa6";
// import { TbPigMoney } from "react-icons/tb";
// import { GrMoney } from "react-icons/gr";
// import { BsClock } from "react-icons/bs";
// import { BsMegaphone } from "react-icons/bs";
// import { RiThermometerLine } from "react-icons/ri";
// import { BsPostcardHeart } from "react-icons/bs";
// // import { BsPostcardHeart } from "react-icons/bs";
// import CTCTemplateSetting from './CTCTemplateSetting';
// import PayRollSetting from './PayRollSetting';
// // import { useHistory } from 'react-router-dom';



// const SettingContent=[
//         {
//             "title":"CTC Calculator Template Settings", "card": 'style3' , "icon":<BlueLargeIcon icon={IoCalculatorOutline}  />, "onClick": <CTCTemplateSetting />,  
//         },
//         {
//             "title":"Reimbursement Settings","card": 'style4' , "icon":<BlueLargeIcon icon={FaHandHoldingDollar} />,
//         },
//         {
//             "title":"Loan Settings","card": 'style3', "icon":<BlueLargeIcon icon={TbPigMoney} />,
//         },
//         {
//             "title":"Payroll Settings","card": 'style4', "icon":<BlueLargeIcon icon={GrMoney} />,  "onClick": <PayRollSetting />
//         },
//         {
//             "title":"Payment Reminder Settings","card": 'style3', "icon":<BlueLargeIcon icon={BsClock} />,
//         },
//         {
//             "title":"Announcement Settings","card": 'style4', "icon":<BlueLargeIcon icon={BsMegaphone} />,
//         },
//         {
//             "title":"Leave Settings","card": 'style3', "icon":<BlueLargeIcon icon={RiThermometerLine} />,
//         },
//         {
//             "title":"Payslip Settings", "card": 'style4' , "icon":<BlueLargeIcon icon={BsPostcardHeart} />,
//         },
        
// ]

// export default SettingContent;

// function BlueLargeIcon({ icon: Icon }) {
//     return (
//       <IconContext.Provider
//         value={{ color: 'blue', size: '50px'}}
//       >
//         <div className=''>
//           <Icon />
//         </div>
//       </IconContext.Provider>
//     );
//   }
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { IconContext } from 'react-icons';
import { IoCalculatorOutline } from 'react-icons/io5';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { TbPigMoney } from 'react-icons/tb';
import { GrMoney } from 'react-icons/gr';
import { BsClock } from 'react-icons/bs';
import { BsMegaphone } from 'react-icons/bs';
import { RiThermometerLine } from 'react-icons/ri';
import { BsPostcardHeart } from 'react-icons/bs';

function BlueLargeIcon({ icon: Icon }) {
  return (
    <IconContext.Provider
      value={{ color: '#3B82F6', size: '70px' }}
    >
      <div className='flex justify-center'>
        <Icon />
      </div>
    </IconContext.Provider>
  );
}

const RaiseRequestContent = [
  {
    title: 'Request for Loan',
    card: 'requestforloan',
    icon: <BlueLargeIcon icon={GiPayMoney} />,
    to: '/apps/loans/RequestForLoan',
  },
  {
    title: 'Request for Reimbursement',
    card: 'requestforreimbursement',
    icon: <BlueLargeIcon icon={GiReceiveMoney } />,
    to: '/apps/loans/RequestForReimbursement',
  },
  
];

export default RaiseRequestContent;

