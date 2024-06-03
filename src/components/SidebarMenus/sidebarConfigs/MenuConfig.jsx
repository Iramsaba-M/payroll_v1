import { MdPerson } from 'react-icons/md';
import { IoNotificationsOutline } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { SlSettings } from "react-icons/sl";
import { LiaHomeSolid } from "react-icons/lia";
import { PiHandCoinsLight } from "react-icons/pi";
import { LuWallet } from "react-icons/lu";

export const APP_SIDEBAR_LINKS = {

    default: {
        submenus: [
            {
                label: 'Home',
                path: 'home',
                icon: <LiaHomeSolid />
            },
            {
                label: 'Employee',
                path: 'Employees',
                icon: <MdPerson />
            },
            {
                label: 'Run Payroll',
                path: 'runpayroll',
                icon: <LuWallet />
            },
            {
                label: 'Notifications',
                path: 'notifications',
                icon: <IoNotificationsOutline />
            },
            {
                label: 'CTC Calculator',
                path: 'ctccalculator',
                icon: <FaCalculator />
            },
            {
                label: 'Loans',
                path: 'loans',
                icon: <PiHandCoinsLight />
            },
            {
                label: 'Reports',
                path: 'reports',
                icon: <VscGraph />
            },
            {
                label: 'Settings',
                path: 'Settings',
                icon: <SlSettings />
            },

        ],
    },
}

export const HOME_SIDEBAR_LINKS = {
    default: {
        submenus: [
            {
                label: 'Home 1',
                path: 'home',
                icon: <LiaHomeSolid />
            },
            {
                label: 'Home 2',
                path: 'home',
                icon: <LiaHomeSolid />
            },
            {
                label: 'Home 3',
                path: 'home',
                icon: <LiaHomeSolid />
            },
            {
                label: 'Home 4',
                path: 'home',
                icon: <LiaHomeSolid />
            },



        ],
    }
}


export const SETTINGS_SIDEBAR_LINKS = {
    default: {
        submenus: [
            {
                label: 'Setting 1',
                path: 'home',
                icon: <SlSettings />
            },
            {
                label: 'Setting 2',
                path: 'home',
                icon: <SlSettings />
            },
            {
                label: 'Setting 3',
                path: 'home',
                icon: <SlSettings />
            },
            {
                label: 'Setting 4',
                path: 'home',
                icon: <SlSettings />
            },
            {
                label: 'Setting 5',
                path: 'home',
                icon: <SlSettings />
            },
        ],
    }
}


export const TEAM_SIDEBAR_LINKS = {
    default: {
        submenus: [
            {
                label: 'Team 1',
                path: 'home',
                icon: <MdPerson />
            },
            {
                label: 'Team 2',
                path: 'home',
                icon: <MdPerson />
            },
            {
                label: 'Team 3',
                path: 'home',
                icon: <MdPerson />
            },
            {
                label: 'Team 4',
                path: 'home',
                icon: <MdPerson />
            },
            {
                label: 'Team 5',
                path: 'home',
                icon: <MdPerson />
            },

        ],
    }
}