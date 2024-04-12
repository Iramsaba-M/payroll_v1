import { RiArrowDownSFill } from "react-icons/ri";
export const TableHeaders = [
    {
      name: 'Policy Name',
      className: 'leavetableHeader',
      
    },
    {
      name: 'Allowed Leaves',
      className: 'TableHeaders1',
    },
    {
      name: 'Duration',
      className: 'leavetableHeader',
  
    },
    
    {
      name: 'Carry Forward?',
      className: 'TableHeaders1',
    },
    {
        name: 'Eligible for Encashment?',
        className: 'TableHeaders1',
      },
      {
        name: 'Pay Type ',
        className: 'TableHeaders1',
      },
   
  ];
  

  export const TextComponentData1= [

    {
      name: 'policy_name',
      placeholder: 'policy name',
      textcss: 'leavepolicyname',
    },
 
    
  ];


  export const TextComponentData2= [

    {
      name: 'allowed_leaves',
      placeholder: 'Add no of leaves ',
      textcss: 'leavetablecolumnstyles2',
    },
 
    
  ];


  export const TextComponentData3= [

    {
      name: 'duration',
      placeholder: 'Add duration',
      textcss: 'leavecolumn',
    },
 
    
  ];

  export const TextComponentData4 =[

    {
      name: 'forward',
      placeholder: '',
      textcss: 'leavetablecolumnstyles',
    },
 
    
  ];
  export const TextComponentData5 =[

    {
      name: 'encashment',
      placeholder: '',
      textcss: 'leavetablecolumnstyles',
    },
 
    
  ];

  
export const OptionsComponentData1 = [
  {
    name: 'Paytype',
    options: [
      { name: 'UnPaid Leave', value: 'unpaid_leave' },
      { name: 'Paid Leave', value: 'paid_leave' },
      
    ],
    placeholder: '',
    textcss: "leaverowoptionstyle",
    icon: <RiArrowDownSFill  className="text-gray-400 -mt-7  -translate-x-[7vh]" />,
  },

];

  
export const ButtonContent = [
    { label: 'Submit',  style: 'buttonStyle' , type:"submit"},
   
  ];
