import { CiCalendar } from "react-icons/ci";
import { RiArrowDownSFill } from "react-icons/ri";

const toolbarOptions = [
  [{ 'font': [] }],
  [{ 'header': [1, 2, false] }],
  ['bold', 'italic', 'underline', 'strike'], 
  [{ 'color': [] }, { 'background': [] }], 
  [{ 'script': 'sub' }, { 'script': 'super' }], 
  ['blockquote', 'code-block'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }], 
  [{ 'direction': 'rtl' }], 
  [{ 'align': [] }],
  ['link', 'image', 'video'],
  ['clean'] 
];

export const modules = {
  toolbar: toolbarOptions,
};

export const settingsModelconfig =[
  
  {
    "name": "categories",
    "label": "Categories",
    "type": "options",
    "options": [
      { "name": "Leave", "value": "leave" },
      { "name": "Payslip", "value": "Payslip" },
      { "name": "Payroll", "value": "payroll" },
      { "name": "Policy", "value": "policy" },
      { "name": "Alerts", "value": "alerts" },
      { "name": "Run Payroll", "value": "run payroll" }
    ],
    "placeholder": "choose category",
    "textcss": "settingmodel",
    "icon": <RiArrowDownSFill className="text-gray-400 -mt-6 " />,
    // "required": true

  },
  {
    "name": "expiry_of_announcement",
    "label": "Expiry of Announcement",
    "type": "date",
    "placeholder": "dd/yy/mm",
    "textcss": "settingmodel",
    "icon": <CiCalendar className="text-gray-500 -mt-5 -ml-9" />,
    "required": true
  },
  {
    "name": "work_location",
    "label": "Location: ",
    "type": "options",
    "placeholder": "Choose Location",
    "options": [
      { "name": "Headquarters", "value": "headquarters" },
      { "name": "Branch Office 1", "value": "branch_office_1" },
      { "name": "Branch Office 2", "value": "branch_office_2" },
      { "name": "Remote", "value": "remote" },
      { "name": "Client Site", "value": "client_site" }
    ],
    "textcss": "settingmodel",
    "required": true

  },
  {
    "name": "notifyAllEmployees",
    "label": "Notify all employees ",
    "type": "checkbox",
    "textcss": "settingmodel",
  },
  {
    "name": "disableComments",
    "label": "Disable comments ",
    "type": "checkbox",
    "textcss": "settingmodel",
  },
  {
    "name": "notifyOthers",
    "label": "Notify any others",
    "type": "CustomEmailInput",
    "textcss": "settingmodel",
  },
]
