//clean code
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { IconContext } from 'react-icons';


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
    to: '/apps/raiserequest/RequestForLoan',
  },
  {
    title: 'Request for Reimbursement',
    card: 'requestforreimbursement',
    icon: <BlueLargeIcon icon={GiReceiveMoney } />,
    to: '/apps/raiserequest/RequestForReimbursement',
  },
  
];

export default RaiseRequestContent;

