import HomeMenus from '../components/SidebarMenus/SidebarMenus/HomeMenus'
import AppMenus from '../components/SidebarMenus/SidebarMenus/AppMenus'
import SettingsMenus from '../components/SidebarMenus/SidebarMenus/SettingsMenus'
import TeamMeanus from '../components/SidebarMenus/SidebarMenus/TeamMenus'
import Home from '../pages/Home/Home'
import Employee from '../pages/Employee/EmployeePage/Employee';
import RunPayroll from '../pages/Run Payroll/RunPayroll';
import Notifications from '../pages/Notifications/Notifications'
import CTC_Calculator from '../pages/CTC Calculator/CTC_Calculator'
import Loans from '../pages/Loans/Loans'
import Reports from '../pages/Reports/Reports'
import Settings from '../pages/Settings/Setting'
import AddEmp from '../pages/Employee/AddEmployee/AddEmp'
import CTCTemplateSetting from '../pages/Settings/CTCTemplateSetting'
import AnnouncementSetting from '../pages/Settings/AnnouncementSetting'
import LeaveSetting from '../pages/Settings/LeaveSetting'
import PayRollSetting from '../pages/Settings/PayRollSetting'
import PaymentReminderSetting from '../pages/Settings/PaymentReminderSetting'
import PayslipSetting from '../pages/Settings/PayslipSetting'
import ReimbursementSetting from '../pages/Settings/ReimbursementSetting'
import LoanSetting from '../pages/Settings/LoanSetting'
import Demo_ctc from '../pages/Settings/cardcomponent/Demo_ctc'
import Demo from '../pages/Settings/cardcomponent/Demo'
import RequestForLoan from '../pages/Loans/RequestForLoan'
import RequestForReimbursement from '../pages/Loans/RequestForReimbursement'
const routesConfig = [
  {
    path: '/',
    label:"Home",
    element: <HomeMenus />,
    children: [
        {
          path: 'home1',
          element: <Home />,
        },
        {
          path: 'home2',
          element: <Employee />,
        },
        {
          path: 'home3',
          element: <RunPayroll />,
        },
        {
          path: 'home4',
          element: <Notifications />,
        },
      ],
  },
  {
    path: '/team',
    label:"Team",
    element: <TeamMeanus />,
    children: [
        {
            path: 'home1',
            element: <Home />,
          },
          {
            path: 'home2',
            element: <Employee />,
          },
          {
            path: 'home3',
            element: <RunPayroll />,
          },
          {
            path: 'home4',
            element: <Notifications />,
          },
    ],
  },
  {
    path: 'apps',
    label:"Appplication",
    element: <AppMenus />,
    children: [
        {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'Employees',
            element: <Employee />,
            children: [
              {
                  path: 'AddEmployee',
                  element: <AddEmp/>,
              },    
            ],
          },
          {
            path: 'runpayroll',
            element: <RunPayroll />,
            // children: [
            //   {
            //       path: 'Reviewpayroll',
            //       element: <ReviewPayroll/>,
            //   },    
            // ],
          },
          {
            path: 'notifications',
            element: <Notifications />,
          },
          {
            path: 'ctccalculator',
            element: <CTC_Calculator />,
          },
          {
            path: 'loans',
            element: <Loans />,
            children: [
              {
                  path: 'RequestforLoan',
                  element: <RequestForLoan/>,
                  // children: [
                  //   {
                  //     path: 'RequestForReimbursement',
                  //     element: <RequestForReimbursement/>,
                  //   },
                    
                  // ]
                },
                {
                  path: 'RequestForReimbursement',
                  element: <RequestForReimbursement/>,
                },
                {
                  path: 'ReimbursementSetting',
                  element: <ReimbursementSetting />,
                },
              
                
            ],
          },
          {
            path: 'reports',
            element: <Reports />,
          },
          {
            path: 'settings',
            element: <Settings />,
            children: [
              {
                  path: 'CTCTemplateSetting',
                  element: <CTCTemplateSetting />,
                  children: [
                    {
                      path: 'Demo_ctc',
                      element: <Demo_ctc/>,
                    },
                   
                  ]
                },
                {
                  path: 'Demo_ctc',
                  element: <Demo_ctc />,
                },
                {
                  path: 'PayRollSetting',
                  element: <PayRollSetting />,
                },
                {
                  path: 'ReimbursementSetting',
                  element: <ReimbursementSetting />,
                },
                {
                  path: 'LoanSetting',
                  element: <LoanSetting />,
                },
                {
                  path: 'PayslipSetting',
                  element: <PayslipSetting />,
                },
                {
                  path: 'PaymentReminderSetting',
                  element: <PaymentReminderSetting />,
                },
                {
                  path: 'AnnouncementSetting',
                  element: <AnnouncementSetting />,
                },
                {
                  path: 'LeaveSetting',
                  element: <LeaveSetting />,
                },
                
            ],
          },
      ],
  },
  {
    path: 'settings',
    label:"Setting",
    element: <SettingsMenus />,
    children: [
        {
            path: 'home1',
            element: <Home />,
          },
          {
            path: 'home2',
            element: <Employee />,
          },
          {
            path: 'home3',
            element: <RunPayroll />,
          },
          {
            path: 'home4',
            element: <Notifications />,
          },
    ],
  },
];

export default routesConfig;