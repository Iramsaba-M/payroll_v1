//clean code
import { RiArrowDownSFill } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
export const RequestForLoanData = [
  {
    "name": "loan_type",
    "label": "Type Of Loan ",
    "type": "options",
    "options": [
      { "name": "Home", "value": "Home" },
      { "name": "vehicle", "value": "vehicle" },
      { "name": "personal", "value": "personal" },
      { "name": "medical", "value": "medical" }
    ],
    "placeholder": "Select Type",
    "textcss": "standard",
    "icon": <RiArrowDownSFill className="text-black -mt-6 ml-[16vh]" />,
    "required": true
  },
  {
    "name": "amount",
    "label": "Amount",
    "type": "text",
    "placeholder": "Enter Amount",
    "textcss": "standard",
    "required": true
  },
  {
    "name": "installment_period",
    "label": "Installment period",
    "type": "options",
    "required": true,
    "options": [
      { "name": "1", "value": "1" },
      { "name": "2", "value": "2" },
      { "name": "3", "value": "3" },
      { "name": "4", "value": "4" },
      { "name": "5", "value": "5" },
      { "name": "6", "value": "6" },
      { "name": "7", "value": "7" },
      { "name": "8", "value": "8" },
      { "name": "9", "value": "9" },
      { "name": "10", "value": "10" },
      { "name": "11", "value": "11" },
      { "name": "12", "value": "12" },
      { "name": "13", "value": "13" },
      { "name": "14", "value": "14" },
      { "name": "15", "value": "15" },
      { "name": "16", "value": "16" },
      { "name": "17", "value": "17" },
      { "name": "18", "value": "18" },
      { "name": "19", "value": "19" },
      { "name": "20", "value": "20" },
      { "name": "21", "value": "21" },
      { "name": "22", "value": "22" },
      { "name": "23", "value": "23" },
      { "name": "24", "value": "24" },
      { "name": "25", "value": "25" },
      { "name": "26", "value": "26" },
      { "name": "27", "value": "27" },
      { "name": "28", "value": "28" },
      { "name": "29", "value": "29" },
      { "name": "30", "value": "30" },
      { "name": "31", "value": "31" },
      { "name": "32", "value": "32" },
      { "name": "33", "value": "33" },
      { "name": "34", "value": "34" },
      { "name": "35", "value": "35" },
      { "name": "36", "value": "36" }

    ],
    "placeholder": "Select Type",
    "textcss": "standard",
    "icon": <CiCalendar className="text-black -mt-6 ml-[16vh]" />,
  },
  {
    "name": "reason",
    "label": "Reason",
    "type": "text",
    "placeholder": "Type Here",
    "textcss": "standard",
    "required": false

  },

];

export const Apply = [
  { label: 'Apply', style: 'buttonStyleApply', type: "submit" },
  { label: 'Apply', style: 'buttonStyleApply', type: "submit" },
];
export const View_Policies = [
  { label: 'View policies', style: 'buttonStyleViewPolicies', type: "button" },
];

export const Cancel = [
  { label: 'Cancel', style: 'buttonStyleCancel', type: "button" },
];