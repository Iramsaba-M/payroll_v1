import { RiArrowDownSFill } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";
import { TfiBrushAlt } from "react-icons/tfi";
export const RequestForReimbursementData = [
  {
    "name": "reimbursment_type",
    "label": "Type Of Reimbursement ",
    "type": "options",
    "options": [
      { "name": "Travel", "value": "Travel" },
      { "name": "Food", "value": "Food" },
      { "name": "Hotel & Accommodation", "value": "Hotel & Accommodation" },
      { "name": "Medical", "value": "medical" },
      { "name": "Fuel", "value": "Fuel" },
      { "name": "Asset", "value": "Asset" },
      { "name": "Office supplies", "value": "Office supplies" },
      { "name": "Others", "value": "Others" },
    ],
    "placeholder": "Select Type",
    "textcss": "standard",
    "icon": <RiArrowDownSFill className="text-black -mt-6 ml-[16vh]" />,
    "required": true
  },
  {
    "name": "expense_date",
    "label": "Expense Date",
    "type": "date",
    "placeholder": "Select Date",
    "textcss": "standard",
    "icon": <CiCalendar className="absolute text-black -mt-8 ml-[46vh]" />,
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
    "name": "description",
    "label": "Description",
    "type": "text",
    "placeholder": "Add Description",
    "textcss": "standard",
    "required": false
  },
  {
    icon: <TfiBrushAlt className="mr-2 text-gray-500" />,
    label: 'Supporting images or documents',
    name: 'documents',
    type: 'file',
    textcss: 'standard_document',
    placeholder: 'Choose file(s)...',
    iconPosition: "start",
    required: false

  },

];

export const Addnew = [
  { label: 'Add New', style: 'buttonStyleAddnew', type: "button" },
];

export const add = [
  { label: 'Add New', icon: <AiFillPlusCircle className="text-cyan-500" />, style: 'buttonStyleAddnew', type: "button" },

];

export const Cancel = [
  { label: 'Cancel', style: 'buttonStyleCancel', type: "button" },
];
export const Requestreimbursement = [
  { label: 'Request Reimbursement', style: 'buttonStyleApply', type: "submit" },
];
