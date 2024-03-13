
 



export const ReviewPayrollData= [
  {
    label:'',
    name:'name',
    type: 'text',
    placeholder: '',
    textcss: 'standard1',
 
 
  },
  {
    label: 'Net Pay',
    name:'netpay',
    type: 'text',
    placeholder: '',
    textcss: 'standard',
 
 
  },
  {
    label:'Emp.ID:',
    name:'empid',
    type: 'text',
    placeholder: '',
    textcss: 'standard2',
 
 
  },
  {
    label: 'Payable Days',
    name:'payabledays',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'standard3',

 
  },
    {
      label: 'Basic',
      name:'basic',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard_document1',
   
   
    },
    {
      label: 'Basic Arrer',
      name:'basicarrer',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard_document2',
   
   
    },
    {
      label: 'House Rent Allowance',
      name:'houserentallowance',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard_document',
   
   
    },
    {
      label: 'Fixed Allowance', 
      name:'fixedallowance',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard_document3',
   
   
      
    },
    {
      label: 'Fixed Allowance Arrear',
      name:'fixedallowancearrear',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'fixedallowancearrear',
   
   
    },
    {
      label: 'Gross Salary',
      name:'grosssalary',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'GROSS',
   
   
    },
    {
      label: 'EPF',
      name:'epf',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'EPF',
   
   
    },
    {
      label: 'ESIC',
      name:'esic',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'ESIC',
   
   
    },
    {
      label: 'PT',
      name:'pt',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'PT',
   
   
    },
    {
      label: 'Net Salary',
      name:'netsalary',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard_document5',
   
   
    },
    {
      label: 'Net Pay',
      name:'netpay',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard_document6',
   
   
    },
    // {
    //   label: 'Net Pay',
    //   name:'netpay',
    //   type: 'text',
    //   placeholder: 'Enter here',
    //   textcss: 'standard_document7',
   
   
    // },
    {
      label: '',
      name:'input',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard_document8',
   
   
    },
    
  ];
  
  export const ButtonforSave = [
    { label: 'Save',  style: 'buttonStyle' , type:"submit"},
    { label: 'Next', style: 'buttonStyle3' ,type:"Button" },
  ];


  export const ButtonforAdd = [
    { label: '+ Add Another Document',  style: 'buttonStyle3' },
  ];
  
  export const addlop = [
    { label: '+ Add LOP',  style: 'buttonStyleaddlop' , type:"button"},
  ];
    
  // export const add = [
  //   { label: '+ Add',  style:'buttonStyleadd' , type:"button"},
  // ];
  export const add = [
    {
      label: (
        <button className="rounded flex mb-2 mr-2 text-xs px-1">
          <span className="bg-gray-400 text-white w-4 rounded-lg">+</span> <div className="ml-1">Add</div>
        </button>
      ),
      type: "button",
    },
  ];
  
 