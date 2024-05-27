//clean code
import { CiCalendar } from "react-icons/ci";
import { RiArrowDownSFill } from "react-icons/ri";
export const formContent = [
   
    {
      "name":"first_name",
      "label": "",
      "type": "text",
      "placeholder": "First Name ",
      "textcss": "standard",
      "required":true
    }, 
    {
      "name":"middle_name",
      "label": " ",
      "type": "text",
      "placeholder": "Middle Name ",
      "textcss": "standard",
      "required":true
    },
    {
      "name":"last_name",
      "label": "",
      "type": "text",
      "placeholder": "Last Name ",
      "textcss": "standard",
      "required":true
    },
    {
      "name": "dob",
      "label": "DOB* ",
      "type": "date",
      "placeholder": "dd/yy/mm",
      "textcss": "standard",
      "icon": <CiCalendar className="text-gray-500" />,
      "required":true
    },
    {
      "name":"gender",
      "label": "Gender* ",
      "type": "options",
      "options": [
          { "name": "Female", "value": "female" },
          { "name": "Male", "value": "male" }
      ],
      "placeholder":"",
      "textcss": "standard",
      "icon": <RiArrowDownSFill  className="text-gray-400" />,
      "required":true
    },
    {
      "name":"date_of_joining",
      "label": "Date Of Joining*",
      "type": "date",
      "placeholder": "dd/yy/mm",
      "textcss": "standard",
      "icon": <CiCalendar className="text-gray-500" />,
      "required":true
    },
    {
      "name":"blood_group",
      "label": "Blood group*",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard",
      "required":true
    },
    {
      "name":"designation",
      "label": "Designation*",
      "type": "options",
      "options": [
          { "name": "CEO", "value": "ceo" },
          { "name": "CTO", "value": "cto" },
          { "name": "Manager", "value": "manager" },
          { "name": "Software Engineer", "value": "Software engineer" }
      ],
      "placeholder": "",
      "textcss": "standard",
      "icon": <RiArrowDownSFill  className="text-gray-400 -mt-6" />,
      "required":true
      
    },
    {
      "name":"employee_id",
      "label": "Employee ID*",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard",
      "required":true
    },
    {
      "name":"department",
      "label": "Department*",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard",
      "required":true
    },
    {
      "name":"type_of_employee",
      "label": "Type Of Employee*",
      "type": "options",
    
      "options": [
         
          {
              "name": "employed",
              "value": "employed"
          },
          {
              "name": "intern",
              "value": "intern"
          }
      ],
       "textcss": "standard",
       "icon": <RiArrowDownSFill  className="text-gray-400 -mt-6" />,
       "required":true
       
    },

  {
    "name":"address",
    "label": "Address*",
    "type": "text",
    "placeholder": "Line",
    "textcss": "standard",
    "required":true
    
  },

  {
    "name":"grade",
    "label": "Grade* ",
    "type": "options",
    "options": [
        { "name": "G1.0", "value": "G1.0" },
        {"name": "G1.1", "value": "G1.1"},
        {"name": "G2.0", "value": "G2.0"},
        {"name": "G2.1", "value": "G2.1"},
        {"name": "G2.3", "value": "G2.3"},
        {"name": "G3.0", "value": "G3.0"},
        {"name": "G3.1", "value": "G3.1"},
        {"name": "G3.2", "value": "G3.2"},
        {"name": "G3.3", "value": "G3.3"},
        {"name": "G3.4", "value": "G3.4"},
        {"name": "G4.0", "value": "G4.0"},
    ],
    "placeholder":"",
    "textcss": "standard",
    "icon": <RiArrowDownSFill  className="text-gray-400 -mt-6" />,
    "required":true
  },

    {
      "name":"work_location",
        "label": "Work Location: ",
        "type": "options",
        "options": [
            { "name": "Headquarters", "value": "headquarters" },
            { "name": "Branch Office 1", "value": "branch_office_1" },
            { "name": "Branch Office 2", "value": "branch_office_2" },
            { "name": "Remote", "value": "remote" },
            { "name": "Client Site", "value": "client_site" }
        ],
        "textcss": "standard",
        "required":true
  
    },

  {
    "name":"personal_email",
      "label": "Personal Email* ",
      "type": "email",
      "placeholder": "Enter your email",
      "textcss": "standard",
      "required":true
    
  },
  {
    "name":"work_email",
      "label": "Work Email*",
      "type": "email",
      "placeholder": "Enter your email",
      "textcss": "standard",
      "required":true
      
  },
  {
    "name":"phone_number",
      "label": "Phone Number: ",
      "type": "tel",
      "placeholder": "Enter your phone number",
      "textcss": "standard",
      "required":true
      
  },
  {
    "name":"alternate_phone_number",
      "label": "Alternate Phone Number: ",
      "type": "tel",
      "placeholder": "Enter your phone number",
      "textcss": "standard",
      "required":true
      
  },

  {
    "name":"differently_abled",   
    "label": "Differently abled*",
    "type": "options",
    
    "options": [
       
        {
            "name": "Yes",
            "value": "Yes"
        },
        {
            "name": "No",
            "value": "No"
        }
    ],
     "textcss": "standard",
     "icon": <RiArrowDownSFill  className="text-gray-400 -mt-6" />,
     "required":true
    }, 
];

export const ButtonContent = [
    { label: 'Save',  style: 'buttonStyle' , type:"submit"},
    { label: 'Next', style: 'buttonStyle3' ,type:"Button" },
  ];