
import { IconContext } from 'react-icons';
import { IoCalculatorOutline } from 'react-icons/io5';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { TbPigMoney } from 'react-icons/tb';
import { GrMoney } from 'react-icons/gr';
import { BsClock } from 'react-icons/bs';
import { BsMegaphone } from 'react-icons/bs';
import { RiThermometerLine } from 'react-icons/ri';
import { BsPostcardHeart } from 'react-icons/bs';
import PropTypes from 'prop-types';

function BlueLargeIcon({ icon: Icon }) {
  return (
    <IconContext.Provider
      value={{ color: '#3B82F6', size: '50px' }}
    >
      <div className=''>
        <Icon />
      </div>
    </IconContext.Provider>
  );
}

const SettingContent = [
  {
    title: 'CTC Calculator Template Settings',
    card: 'style3',
    icon: <BlueLargeIcon icon={IoCalculatorOutline} />,
    to: '/Settings/CTCTemplateSetting',
  },
  {
    title: 'Reimbursement Settings',
    card: 'style4',
    icon: <BlueLargeIcon icon={FaHandHoldingDollar} />,
    to: '/Settings/ReimbursementSetting',
  },
  {
    title: 'Loan Settings',
    card: 'style3',
    icon: <BlueLargeIcon icon={TbPigMoney} />,
    to: '/Settings/LoanSetting',
  },
  {
    title: 'Payroll Settings',
    card: 'style4',
    icon: <BlueLargeIcon icon={GrMoney} />,
    to: '/Settings/PayRollSetting',
  },
  {
    title: 'Payment Reminder Settings',
    card: 'style3',
    icon: <BlueLargeIcon icon={BsClock} />,
    to: '/Settings/PaymentReminderSetting',
  },
  {
    title: 'Announcement Settings',
    card: 'style4',
    icon: <BlueLargeIcon icon={BsMegaphone} />,
    to: '/Settings/AnnouncementSetting',
  },
  {
    title: 'Leave Settings',
    card: 'style3',
    icon: <BlueLargeIcon icon={RiThermometerLine} />,
    to: '/Settings/LeaveSetting',
  },
  {
    title: 'Payslip Settings',
    card: 'style4',
    icon: <BlueLargeIcon icon={BsPostcardHeart} />,
    to: '/Settings/PayslipSetting',
  },
];

BlueLargeIcon.propTypes = {
  icon: PropTypes.elementType.isRequired, // Validate icon prop as a React element type
};

export default SettingContent;

