import { FaCalculator } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { LiaHomeSolid } from "react-icons/lia";
import { LuWallet } from "react-icons/lu";
import { MdPerson } from "react-icons/md";
import { PiHandCoinsLight } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { VscGraph } from "react-icons/vsc";

export const APP_SIDEBAR_LINKS = {

    default: {
        submenus: [
            {
                label: 'Home',
                path: 'Home',
            },
            {
                label: 'Employee',
                path: 'Employees',
            },
            {
                label: 'Run Payroll',
                path: 'runpayroll',
            },
            {
                label: 'Notifications',
                path: 'notifications',
            },
            {
                label: 'CTC Calculator',
                path: 'ctccalculator',
            },
            {
                label: 'Loans',
                path: 'loans',
            },
            {
                label: 'Reports',
                path: 'reports',
            },
            {
                label: 'Settings',
                path: 'Settings',
            },
            // {
            //     label: 'Home',
            //     path: 'home',
            //     icon: <LiaHomeSolid />
            // },
            // {
            //     label: 'Employee',
            //     path: 'Employees',
            //     icon: <MdPerson />
            // },
            // {
            //     label: 'Run Payroll',
            //     path: 'runpayroll',
            //     icon: <LuWallet />
            // },
            // {
            //     label: 'Notifications',
            //     path: 'notifications',
            //     icon: <IoNotificationsOutline />
            // },
            // {
            //     label: 'CTC Calculator',
            //     path: 'ctccalculator',
            //     icon: <FaCalculator />
            // },
            // {
            //     label: 'Loans',
            //     path: 'loans',
            //     icon: <PiHandCoinsLight />
            // },
            // {
            //     label: 'Reports',
            //     path: 'reports',
            //     icon: <VscGraph />
            // },
            // {
            //     label: 'Settings',
            //     path: 'Settings',
            //     icon: <SlSettings />
            // },

        ],
    },
}
