// CardConfig.js
import { FaRegHandshake, FaHandHoldingDollar, } from 'react-icons/fa6';
import { LuTimerReset } from "react-icons/lu";
import { BsDatabaseFillLock } from "react-icons/bs";
// import { FcDataConfiguration } from "react-icons/fc";

 export const CardConfig = [
  { label: 'Convinience', icon: <FaRegHandshake />, description: 'Simplify payroll with our convenient app. Manage compensation, taxes, and benefits effortlessly. Say goodbye to manual tasks.' },
  { label: 'Hassle Free', icon: <FaHandHoldingDollar />, description: 'Enjoy hassle-free payroll management. Easily handle compensation, taxes, and benefits. Streamline your workflow effortlessly' },
  { label: 'Time Saving', icon: <LuTimerReset />, description: 'Save time with our app. Manage compensation, taxes, and benefits effortlessly for streamlined efficiency.' },
  { label: 'Data Security', icon: <BsDatabaseFillLock  />, description: 'Ensure data security. Safeguard sensitive information with robust measures for peace of mind and compliance.' }
];



