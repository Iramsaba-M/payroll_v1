//clean code
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import { RiArrowDropDownFill } from "react-icons/ri";
import { PiUploadSimpleThin } from "react-icons/pi";
import DocumentStyles from "../../../../components/form/DocumentsForm/DocumentStyles";
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
        "required": true,
        "icon":<RiArrowDropDownFill className="h-7 w-6 -mt-6 text-gray-800 " />
    },
    {
      "name":"year_of_experience",
      "label": "Year of Experience",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard"
    },
    {
      "name":"feedback",
      "label": "Feedback",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard"
    },
    {
      label: 'Experience Certificate',
      name:'experience_certificate',
      type: 'file',
      textcss: 'additionalstandard2',
      placeholder: 'Select',
      icon: <PiUploadSimpleThin className={DocumentStyles.iconstyle2} /> 
    },
    {
      label: 'Payslips',
      name:'payslips',
      type: 'file',
      textcss: 'additionalstandard2',
      placeholder: 'Select',
      icon: <PiUploadSimpleThin className={DocumentStyles.iconstyle2} />
      },
      {
        label: 'Bank Status',
        name:'bank_status',
        type: 'file',
        textcss: 'additionalstandard2',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin className={DocumentStyles.iconstyle2} />
        }, 
  ]
  
export const TagConfig = [
    {
        "label": "Add Benefit",
        "name":"employee_benefit",
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

  export const OptionData = {
    employeeStatusOptions: [
      { name: 'Active', value: 'Active' },
      { name: 'Inactive', value: 'Inactive' },
      { name: 'Terminate', value: 'Terminate' },
      { name: 'Retired', value: 'Retired' },
      
    ],
  
    typeOptions: [
      { name: 'On Leave', value: 'Leave' },
      { name: 'Suspended', value: 'Suspended' },
    ],
  
    suspendedOptions: [
      { name: 'Due to Disciplinary Action', value: 'Due to Disciplinary Action' },
      { name: 'Other Reason', value: 'Other Reason' },
    ],
  
    leaveOptions: [
      { name: 'Maternity Leave', value: 'Maternity Leave' },
      { name: 'Paternity Leave', value: 'Paternity Leave' },
      { name: 'Vacation Leave', value: 'Vacation Leave' },
      { name: 'Medical Leave', value: 'Medical Leave' },
      { name: 'Sabbatical Leave', value: 'Sabbatical Leave' },
      { name: 'Marriage Leave', value: 'Marriage Leave' },


    ],
  };
  
 