import AppMenus from '../components/SidebarMenus/SidebarMenus/AppMenus'
import Home from '../pages/Admin pages/Home/Home'
import Employee from '../pages/Admin pages/Employee/EmployeePage/Employee'
import RunPayroll from '../pages/Admin pages/Run Payroll/RunPayroll';
import Notifications from '../pages/Admin pages/Notifications/Notifications'
import CTC_Calculator from '../pages/Admin pages/CTC Calculator/CTC_Calculator'
import Loans from '../pages/Admin pages/Loans/Loans'
import Reports from '../pages/Admin pages/Reports/Reports'
import Settings from '../pages/Admin pages/Settings/Setting'
import AddEmp from '../pages/Admin pages/Employee/AddEmployee/AddEmp'
import CTCTemplateSetting from '../pages/Admin pages/Settings/CTCTemplateSetting'
import AnnouncementSetting from '../pages/Admin pages/Settings/AnnouncementSetting'
import LeaveSetting from '../pages/Admin pages/Settings/LeaveSetting'
import PayRollSetting from '../pages/Admin pages/Settings/PayRollSetting'
import PaymentReminderSetting from '../pages/Admin pages/Settings/PaymentReminderSetting'
import PayslipSetting from '../pages/Admin pages/Settings/PayslipSetting'
import ReimbursementSetting from '../pages/Admin pages/Settings/ReimbursementSetting'
import LoanSetting from '../pages/Admin pages/Settings/LoanSetting'
import Demo_ctc from '../pages/Admin pages/Settings/cardcomponent/Demo_ctc'
import UserAppMenus from '../components/SidebarMenus/UserSidebarMenus/UserAppMenus'
import MyAttendance from '../pages/User pages/My Attendance/MyAttendance'
import MyPayslips from '../pages/User pages/My Payslips/MyPayslips'
import UserNotification from '../pages/User pages/Notifications/UserNotification'
import RaiseRequest from '../pages/User pages/Raise Request/RaiseRequest'
import UserReports from '../pages/User pages/Reports/UserReports'
import RequestForLoan from '../pages/User pages/Raise Request/RequestForLoan'
import RequestForReimbursement from '../pages/User pages/Raise Request/RequestForReimbursement'
import LoanPolicy from '../pages/Admin pages/Settings/LoanSettingsPages/LoanPolicy'
import TypeOfLoan from '../pages/Admin pages/Settings/LoanSettingsPages/TypeOfLoan'
import LoanApprovalSettings from '../pages/Admin pages/Settings/LoanSettingsPages/LoanApprovalSettings'
import Leavepolicy from '../components/AppSettingComponents/Leavepolicy/Leavepolicy'
import Holidaypolicy from '../components/AppSettingComponents/Leavepolicy/Holidaypolicy'
import TypeReimbursement from '../components/AppSettingComponents/reimbursementpolicy/typereimbursement'
import Reimbursementpolicy from '../components/AppSettingComponents/reimbursementpolicy/Reimbursementpolicy'
import Multilevel from '../components/AppSettingComponents/reimbursementpolicy/Multilevel'
import UserHome from '../pages/User pages/Home/UserHome'
import ErrorScreen from '../errorhandling/ErrorScreen'
import LeaveNotification from '../pages/Admin pages/Notifications/LeaveNotification/LeaveNotification'
import PayrollNotification from '../pages/Admin pages/Notifications/PayrollNotification/PayrollNotification'
import LoanNotification from '../pages/Admin pages/Notifications/LoanNotification/LoanNotification'
import ReimbursementNotification from '../pages/Admin pages/Notifications/ReimbursementNotification/ReimbursementNotification'
import PoliciesNotification from '../pages/Admin pages/Notifications/PoliciesNotification/PoliciesNotification'
import SystemNotification from '../pages/Admin pages/Notifications/SystemNotification/SystemNotification'
import ReportsNotification from '../pages/Admin pages/Notifications/ReportsNotification/ReportsNotification'
import Announcements from '../pages/Admin pages/Notifications/Announcements/Announcements'
import PaymentsReminder from '../pages/Admin pages/Notifications/PaymentsReminder/PaymentsReminder'

const routesConfig = [
  {
    path: '/errorscreen',
    element: <ErrorScreen />,
  },
  {

    label: "Person Data",
    children: [

      {
        path: '/',
        label: "Appplication",
        element: <UserAppMenus />,
        children: [
          {
            index: true,
            element: <UserHome />, // Default component for Person Data
          },
          {
            path: 'Home',
            element: <UserHome />,
          },
          {
            path: 'MyAttendance',
            element: <MyAttendance />,
          },
          {
            path: 'MyPayslips',
            element: <MyPayslips />,
          },
          {
            path: 'UserNotification',
            element: <UserNotification />,
          },
          {
            path: 'RaiseRequest',
            element: <RaiseRequest />,
            children: [
              {
                path: 'RequestforLoan',
                element: <RequestForLoan />,
              },
              {
                path: 'RequestForReimbursement',
                element: <RequestForReimbursement />,
              },
              {
                path: 'ReimbursementSetting',
                element: <ReimbursementSetting />,
              },


            ],
          },
          {
            path: 'Reports',
            element: <UserReports />,
          },
        ],
      },

    ]
  },

  {
    label: "Admin Data",
    children: [

      {
        path: '/',
        label: "Appplication",
        element: <AppMenus />,
        children: [
          {
            index: true,
            element: <Home />, // Default component for Person Data
          },
          {
            path: 'Home',
            element: <Home />,
          },
          {
            path: 'Employees',
            element: <Employee />,
            children: [
              {
                path: 'AddEmployee',
                element: <AddEmp />,
              },
            ],
          },
          {
            path: 'runpayroll',
            element: <RunPayroll />,
          },
          {
            path: 'notifications',
            element: <Notifications />,
            children: [
              {
                path: 'LeaveNotification',
                element: <LeaveNotification />,
              },
              {
                path: 'PayrollNotification',
                element: <PayrollNotification />,
              },
              {
                path: 'LoanNotification',
                element: <LoanNotification />,
              },
              {
                path: 'ReimbursementNotification',
                element: <ReimbursementNotification />,
              },
              {
                path: 'PaymentsReminder',
                element: <PaymentsReminder />,
              },
              {
                path: 'PoliciesNotification',
                element: <PoliciesNotification />,
              },
              {
                path: 'SystemNotification',
                element: <SystemNotification />,
              },
              {
                path: 'ReportsNotification',
                element: <ReportsNotification />,
              },
              {
                path: 'Announcements',
                element: <Announcements />,
              },
            ]
          },
          {
            path: 'ctccalculator',
            element: <CTC_Calculator />,
          },
          {
            path: 'loans',
            element: <Loans />,
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
                    element: <Demo_ctc />,
                  },
                ]
              },

              {
                path: 'PayRollSetting',
                element: <PayRollSetting />,
              },
              {
                path: 'ReimbursementSetting',
                element: <ReimbursementSetting />,
                children: [
                  {
                    path: 'TypeReimbursement',
                    element: <TypeReimbursement />,
                  },
                  {
                    path: 'Reimbursementpolicy',
                    element: <Reimbursementpolicy />,
                  },
                  {
                    path: 'Multilevel',
                    element: <Multilevel />,
                  },
                ],
              },
              {
                path: 'LoanSetting',
                element: <LoanSetting />,
                children: [
                  {
                    path: 'TypeOfLoan',
                    element: <TypeOfLoan />,
                  },
                  {
                    path: 'LoanPolicy',
                    element: <LoanPolicy />,
                  },
                  {
                    path: 'LoanApprovalSettings',
                    element: <LoanApprovalSettings />,
                  },
                ],
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
                children: [
                  {
                    path: 'LeavePolicy',
                    element: <Leavepolicy />,
                  },
                  {
                    path: 'HolidayPolicy',
                    element: <Holidaypolicy />,
                  },
                ],
              },

            ],
          },
        ],
      },

    ]
  }

];

export default routesConfig;

