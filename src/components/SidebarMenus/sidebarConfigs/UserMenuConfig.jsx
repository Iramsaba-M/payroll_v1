import { MdPerson } from 'react-icons/md';
import { IoNotificationsOutline } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { SlSettings, SlUser } from "react-icons/sl";
import { LiaHomeSolid } from "react-icons/lia";
import { HiOutlineCalculator } from "react-icons/hi2";


export const APP_SIDEBAR_LINKS = {

    default: {
        submenus: [
            {
                label: 'Home',
                path: 'home',
                icon: <LiaHomeSolid />
            },
            {
                label: 'My Attendance',
                path: 'myattendance',
                icon: <SlUser />
            },
            {
                label: 'My Payslips',
                path: 'mypayslips',
                icon: <HiOutlineCalculator />
            },
            {
                label: 'Notifications',
                path: 'usernotification',
                icon: <IoNotificationsOutline />
            },
            {
                label: 'Raise a Request',
                path: 'raiserequest',
                icon: <FaCalculator />
            },
            {
                label: 'Reports',
                path: 'userreports',
                icon: <VscGraph />
            },

        ],
    },
}

export const HOME_SIDEBAR_LINKS = {
    default: {
        submenus: [
            {
                label: 'H 1',
                path: 'home',
                icon: <LiaHomeSolid />
            },
            {
                label: 'H 2',
                path: 'home',
                icon: <LiaHomeSolid />
            },
            {
                label: 'H 3',
                path: 'home',
                icon: <LiaHomeSolid />
            },
            {
                label: 'H 4',
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
                label: 'S 1',
                path: 'home',
                icon: <SlSettings />
            },
            {
                label: 'S 2',
                path: 'home',
                icon: <SlSettings />
            },
            {
                label: 'S 3',
                path: 'home',
                icon: <SlSettings />
            },
            {
                label: 'S 4',
                path: 'home',
                icon: <SlSettings />
            },
            {
                label: 'S 5',
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
                label: 'T 1',
                path: 'home',
                icon: <MdPerson />
            },
            {
                label: 'T 2',
                path: 'home',
                icon: <MdPerson />
            },
            {
                label: 'T 3',
                path: 'home',
                icon: <MdPerson />
            },
            {
                label: 'T 4',
                path: 'home',
                icon: <MdPerson />
            },
        ],
    }
}