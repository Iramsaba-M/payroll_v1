
import { RiArrowDownSFill } from "react-icons/ri";
export const TableHeaders = [
    {
      name: 'Policy Name',
      className: 'TableHeaders1',
      
    },
    {
      name: 'Maximum Amount',
      className: 'TableHeaders',
    },
    {
      name: 'No Of Installments Repayment',
      className: 'TableHeaders',
  
    },
    
    {
      name: 'ROI',
      className: 'TableHeaders',
    },

    {
        name: 'Apply Eligibility',
        className: 'TableHeaders11',
      },

      {
        name: 'Document Needed',
        className: 'TableHeaders111',
      },
   
  ];
  

  export const TextComponentData1= [

    {
      name: 'policyname',
      placeholder: 'policy name',
      textcss: 'aa',
    },
 
    
  ];


  export const TextComponentData2= [

    {
      name: 'maxamt',
      placeholder: '',
      textcss: 'c',
    },
 
    
  ];


  export const TextComponentData3= [

    {
      name: 'noofinstallments',
      placeholder: '',
      textcss: 'b',
    },
 
    
  ];

  export const TextComponentData4 =[

    {
      name: 'roi',
      placeholder: '',
      textcss: 'b',
    },
 
    
  ];

  
export const OptionsComponentData1 = [
  {
    name: 'applyeligibility',
    options: [
      { name: 'Employee', value: 'Employee' },
      { name: 'Paid intern', value: 'Paid intern' },
      { name: 'Unpaid Intern', value: 'Unpaid Intern' },
      { name: 'Contractor', value: 'Contractor' },
      { name: 'Freelancer', value: 'Freelancer' },
    ],
    placeholder: '',
    textcss: "aaa",
    icon: <RiArrowDownSFill  className="text-gray-400 -mt-7  -translate-x-[11vh]" />,
  },

];

  
export const OptionsComponentData2 = [
  {
    name: 'documentneeded',
    options: [
      { name: 'yes', value: 'yes' },
      { name: 'no', value: 'no' },

    ],
    placeholder: '',
    textcss: "bb",
    icon: <RiArrowDownSFill  className="text-gray-400 -mt-7  -translate-x-[14vh]" />,
  },

];


export const ButtonSave = [
  { label: 'Save',  style: 'buttonStyle', type:"submit" },
];