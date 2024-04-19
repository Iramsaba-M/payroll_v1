
  
import React from 'react';
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
      value={{ color: '#3B82F6', size: '50px'}}
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
    to: '/apps/Settings/CTCTemplateSetting',
  },
  {
    title: 'Reimbursement Settings',
    card: 'style4',
    icon: <BlueLargeIcon icon={FaHandHoldingDollar} />,
    to: '/apps/Settings/ReimbursementSetting',
  },
  {
    title: 'Loan Settings',
    card: 'style3',
    icon: <BlueLargeIcon icon={TbPigMoney} />,
    to: '/apps/Settings/LoanSetting',
  },
  {
    title: 'Payroll Settings',
    card: 'style4',
    icon: <BlueLargeIcon icon={GrMoney} />,
    to: '/apps/Settings/PayRollSetting',
  },
  {
    title: 'Payment Reminder Settings',
    card: 'style3',
    icon: <BlueLargeIcon icon={BsClock} />,
    to: '/apps/Settings/PaymentReminderSetting',
  },
  {
    title: 'Announcement Settings',
    card: 'style4',
    icon: <BlueLargeIcon icon={BsMegaphone} />,
    to: '/apps/Settings/AnnouncementSetting',
  },
  {
    title: 'Leave Settings',
    card: 'style3',
    icon: <BlueLargeIcon icon={RiThermometerLine} />,
    to: '/apps/Settings/LeaveSetting',
  },
  {
    title: 'Payslip Settings',
    card: 'style4',
    icon: <BlueLargeIcon icon={BsPostcardHeart} />,
    to: '/apps/Settings/PayslipSetting',
  },
];

export default SettingContent;

