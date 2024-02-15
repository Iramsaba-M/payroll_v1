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
            path: 'employee',
            element: <Employee />,
            children: [
              {
                  path: 'addemployee',
                  element: <AddEmp/>,
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