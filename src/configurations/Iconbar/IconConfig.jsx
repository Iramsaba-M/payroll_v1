import { BiBell, BiLogOut } from 'react-icons/bi'
import { GoHomeFill } from "react-icons/go";
import { RiSettings3Fill } from "react-icons/ri";
import IconStyle from './IconbarStyle';
import { MdPerson } from 'react-icons/md';
import { FaCalculator } from "react-icons/fa";

import { RiWallet3Fill } from "react-icons/ri";
import { IoNotificationsSharp } from "react-icons/io5";
import { PiHandCoinsBold } from "react-icons/pi";

import { VscGraph } from "react-icons/vsc";
import { CiCoinInsert } from "react-icons/ci";

const DASHBOARD_ICONBAR_LINKS =
{
    adminlinks: [
        {
            key: 'adminhome',
            path: "/Home",
            icon: <GoHomeFill className={IconStyle.style1} />
        },
        {
            key: 'Employees',
            path: "/Employees",
            icon: <MdPerson className={IconStyle.style1} />
        },
        {
            key: 'runpayroll',
            path: "/RunPayroll",
            icon: <RiWallet3Fill className={IconStyle.style1} />
        },
        {
            key: 'notifications',
            path: "/Notifications",
            icon: <IoNotificationsSharp className={IconStyle.style1} />
        },
        {
            key: 'ctccalculator',
            path: "/CTCcalculator",
            icon: <FaCalculator className={IconStyle.style1} />
        },
        {
            key: 'loans',
            path: "/Loans",
            icon: <PiHandCoinsBold className={IconStyle.style1} />
        },
        {
            key: 'reports',
            path: "/Reports",
            icon: <VscGraph className={IconStyle.style1} />
        },
        {
            key: 'settings',
            path: "/Settings",
            icon: <RiSettings3Fill className={IconStyle.style1} />
        },
    ],

    enduserlinks: [
        {
            key: 'enduserhome',
            path: "/Home",
            icon: <GoHomeFill className={IconStyle.style1} />
        },
        {
            key: 'myattendance',
            path: "/MyAttendance",
            icon: <MdPerson className={IconStyle.style1} />
        },
        {
            key: 'mypayslips',
            path: "/MyPayslips",
            icon: <FaCalculator className={IconStyle.style1} />
        },
        {
            key: 'usernotification',
            path: "/UserNotification",
            icon: <IoNotificationsSharp className={IconStyle.style1} />
        },
        {
            key: 'raiserequest',
            path: "/RaiseRequest",
            icon: <CiCoinInsert className={IconStyle.style1} />
        },
        {
            key: 'userreports',
            path: "/Reports",
            icon: <VscGraph className={IconStyle.style1} />
        },

    ],

    footerIcon: [
        {
            key: 'notifications',
            // path: "/",
            icon: <BiBell className={IconStyle.style1} />
        },
        {
            key: 'logout',
            path: "/home",
            icon: <BiLogOut className={IconStyle.style1} />
        },
    ],
}

export default DASHBOARD_ICONBAR_LINKS
