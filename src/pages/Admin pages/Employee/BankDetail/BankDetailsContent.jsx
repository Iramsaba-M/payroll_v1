//clean code
import { RiArrowDownSFill } from "react-icons/ri";
export const formContent = [
    {
      "label": "Bank Name",
      "name":"bank_name",
      "type": "options",
      "options": [
        { "name": "State Bank of India", "value": "State Bank of India" },
        { "name": "ICICI Bank", "value": "ICICI Bank" },
        { "name": "Axis Bank", "value": "Axis Bank" },
        { "name": "HDFC Bank", "value": "HDFC Bank" }
      ],
      "placeholder": "",
      "textcss": "standard",
      "icon": <RiArrowDownSFill  className="text-gray-400 -mt-6" />,
      "required":true
    },
    {
      "label": "IFSC Code",
      "name":"ifsc_code",
      "type": "text",
      "placeholder": "Enter Here",
      "textcss": "standard",
      "required":true
    },
  
    {
      "label": "Account Number ",
      "name":"account_number",
      "type": "number",
      "placeholder": "Enter Here",
      "textcss": "standard",
      "required":true
    },
    {
      "label": "Branch Code ",
      "name":"branch_code",
      "type": "text",
      "placeholder": "Enter Here",
      "textcss": "standard",
      "required":true
    },
  ]
  export const ButtonforDefault = [
    { label: 'Set default for payroll', style: 'buttonStyle3' ,type:"Button" },
  ];
  
  export const ButtonforaddBank = [
    { label: 'Add another bank details', style: 'buttonStyle3' ,type:"Button" },
  ];

  export const ButtonforSave = [
    { label: 'Save',  style: 'buttonStyle' , type:"submit"},
    { label: 'Next', style: 'buttonStyle3' ,type:"Button" },
  ];