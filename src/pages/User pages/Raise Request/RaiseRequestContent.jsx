//clean code
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

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

BlueLargeIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

const RaiseRequestContent = [
  {
    title: 'Request for Loan',
    card: 'requestforloan',
    icon: <BlueLargeIcon icon={GiPayMoney} />,
    to: '/raiserequest/RequestForLoan',
  },
  {
    title: 'Request for Reimbursement',
    card: 'requestforreimbursement',
    icon: <BlueLargeIcon icon={GiReceiveMoney} />,
    to: '/raiserequest/RequestForReimbursement',
  },

];

export default RaiseRequestContent;

