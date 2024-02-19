import { CiCalendar } from "react-icons/ci";
export const formContent = [
    // {
    //   "name": "employee_name",
    //   "label": "Employee Name",
    //   "type": "tripleInput",
    //   "placeholders": ["First Name", "Middle Name", "Last Name"],
    //   "textcss": "standard1",
    //   "keys": ["First_name", "Middle_Name", "Last_Name"], // keys for first name, middle name, and last name
    // },
    {
      "name":"first_name",
      "label": "",
      "type": "text",
      "placeholder": "First Name ",
      "textcss": "standard"
    }, 
    {
      "name":"middle_name",
      "label": " ",
      "type": "text",
      "placeholder": "Middle Name ",
      "textcss": "standard"
    },
    {
      "name":"last_name",
      "label": "",
      "type": "text",
      "placeholder": "Last Name ",
      "textcss": "standard"
    },
    {
      "name": "dob",
      "label": "DOB* ",
      "type": "date",
      "placeholder": "dd/yy/mm",
      "textcss": "standard",
      "icon": <CiCalendar className="text-gray-500" />,
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
      "textcss": "standard"
    },
    {
      "name":"date_of_joining",
      "label": "Date Of Joining*",
      "type": "date",
      "placeholder": "dd/yy/mm",
      "textcss": "standard",
      "icon": <CiCalendar className="text-gray-500" />,
    },
    {
      "name":"blood_group",
      "label": "Blood group*",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard"
    },
    {
      "name":"designation",
      "label": "Designation*",
      "type": "options",
      "options": [
          { "name": "CEO", "value": "ceo" },
          { "name": "CTO", "value": "cto" },
          { "name": "Manager", "value": "manager" },
          { "name": "Software Engineer", "value": "software_engineer" }
      ],
      "textcss": "standard"
    },
    {
      "name":"employee_id",
      "label": "Employee ID*",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard"
    },
    {
      "name":"department",
      "label": "Department*",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "standard"
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
       "textcss": "standard"
       
    },
  //   {
  //     "name":"address_line1",
  //     "label": "Address: ",
  //     "type": "doubleInput",
  //     "placeholders": ["Line 1", "Line 2"],
  //     "textcss": "standard",
  //     "keys": ["Line 1", "Line 2"],
  // },
  {
    "name":"address_line1",
    "label": "Address*",
    "type": "text",
    "placeholder": "Line 1 ",
    "textcss": "standard"
    
  },
  {
    "name":"address_line2",
    "label": "",
    "type": "text",
    "placeholder": "Line 2",
    "textcss": "standard"
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
     "textcss": "standard"
     
    },
  {
    "name":"personal_email",
      "label": "Personal Email* ",
      "type": "email",
      "placeholder": "Enter your email",
      "textcss": "standard2"
     
  },
  {
    "name":"work_email",
      "label": "Work Email*",
      "type": "email",
      "placeholder": "Enter your email",
      "textcss": "standard2"
      
  },
  {
    "name":"phone_number",
      "label": "Phone Number: ",
      "type": "tel",
      "placeholder": "Enter your phone number",
      "textcss": "standard"
      
  },
  {
    "name":"alternate_phone_number",
      "label": "Alternate Phone Number: ",
      "type": "tel",
      "placeholder": "Enter your phone number",
      "textcss": "standard"
      
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
      "textcss": "standard"

  },
  
];

export const ButtonContent = [
    { label: 'Save',  style: 'buttonStyle' , type:"submit"},
    { label: 'Next', style: 'buttonStyle3' ,type:"Button" },
  ];