
  
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

const NotificationContent = [
  {
    title: 'Leave Notification',
    card: 'style3',
    // icon: <BlueLargeIcon icon={IoCalculatorOutline} />,
    // to: '/apps/Settings/CTCTemplateSetting',
    to: '/apps/notifications/LeaveNotification',
  },
  {
    title: 'Payroll Notification',
    card: 'style4',
    // icon: <BlueLargeIcon icon={FaHandHoldingDollar} />,
    to: '/apps/notifications/PayrollNotification',
  },
  {
    title: 'Loan Notification',
    card: 'style3',
    // icon: <BlueLargeIcon icon={TbPigMoney} />,
    to: '/apps/notifications/LoanNotification',
  },
  {
    title: ' Reimbursement Notification',
    card: 'style5',
    // icon: <BlueLargeIcon icon={GrMoney} />,
    to: '/apps/notifications/ReimbursementNotification',
  },
  {
    title: 'Payments Reminder',
    card: 'style3',
    // icon: <BlueLargeIcon icon={BsClock} />,
    to: '/apps/notifications/PaymentsReminder',
  },
  {
    title: ' Policies Notification',
    card: 'style4',
    // icon: <BlueLargeIcon icon={BsMegaphone} />,
    to: '/apps/notifications/PoliciesNotification',
  },
  {
    title: 'System Notification ',
    card: 'style3',
    // icon: <BlueLargeIcon icon={RiThermometerLine} />,
    to: '/apps/notifications/SystemNotification',
  },
  {
    title: 'Reports Notification',
    card: 'style4',
    // icon: <BlueLargeIcon icon={BsPostcardHeart} />,
    to: '/apps/notifications/ReportsNotification',
  },
  {
    title: 'Announcements',
    card: 'style3',
    // icon: <BlueLargeIcon icon={BsPostcardHeart} />,
    to: '/apps/notifications/Announcements',
  },
];

export default NotificationContent;

