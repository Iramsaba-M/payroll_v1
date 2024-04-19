import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export const TableHeaders = [
    {
      name: 'Policy Name',
      className: 'leavetableHeader',
      
    },
    {
      name: 'Allowed Leaves',
      className: 'leavetableHeade',
    },
    {
      name: 'Duration',
      className: 'leavetableHeade',
  
    },
    
    {
      name: 'Carry Forward?',
      className: '',
    },
    {
        name: 'Eligible for Encashment?',
        className: '',
      },
      {
        name: 'Pay Type ',
        className: 'leavetableHeader',
      },
      {
        name: 'Edit ',
        className: '',
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
    name: 'paytype',
    options: [
      { name: 'UnPaid Leave', value: 'unpaid_leave' },
      { name: 'Paid Leave', value: 'paid_leave' },
      
    ],
    placeholder: '',
    textcss: "leaverowoptionstyle",
    icon: <MdOutlineKeyboardArrowDown  className=" -mt-7  -translate-x-[15vh]" />,
  },

];

  
export const ButtonContent = [
    { label: 'Submit',  style: 'buttonStyle' , type:"submit"},
   
  ];
