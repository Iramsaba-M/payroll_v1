import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";

export const formContent = [
    {
      "label": "Current Password",
      "name":"current_password",
      "type": "password",
      "placeholder": "current Password",
      "textcss": "standard",
      "icon":<IoEyeOutline />,
        "icon2":<FiEyeOff />,
    },
    {
        "label": "Type of Employee",
        "name":"type_of_employee",
        "type": "options",
        "options": [
          { "name": "Employee", "value": "Employee" },
          { "name": "Unpaid Intern", "value": "Unpaid Intern" },
          { "name": "Paid Intern", "value": "Paid Intern" }
        ],
        "placeholder": "",
        "textcss": "standard",
    },
  
    {
        "label": "Add Benefit",
        "name":"add_benefits",
        "type": "options1",
        "dropdownOptions": [
          { "label": "food", "value": "food" },
          { "label": "Transport", "value": "Transport" },
          { "label": "Accomodation", "value": "Accomodation" }
        ],
        "placeholder": "",
        "textcss": "standard",
    },
  
  ]
  
export const TagConfig = [
    {
        "label": "Add Benefit",
        "name":"employe_Benefit",
        "type": "options",
        "dropdownOptions": [
          { "label": "food", "value": "food" },
          { "label": "Transport", "value": "Transport" },
          { "label": "Accomodation", "value": "Accomodation" }
        ],
        "placeholder": "",
        "textcss": "standard",
    },
    ];

  export const ButtonDataforAditional = [
    { label: 'Save',  style: 'buttonStyle' , type:"submit"},
  ];