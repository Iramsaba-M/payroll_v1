import ReviewPayrollStyle from "./ReviewPayrollStyle";
import { FiPlus } from "react-icons/fi";
export const ReviewPayrollData = [
  {
    label: '',
    name: 'name',
    type: 'text',
    placeholder: '',
    textcss: 'name',


  },
  {
    label: 'Net Pay',
    name: 'netpay',
    type: 'text',
    placeholder: '',
    textcss: 'standard',


  },
  {
    label: 'Emp.ID:',
    name: 'empid',
    type: 'text',
    placeholder: '',
    textcss: 'empid',


  },
  {
    label: 'Payable Days',
    name: 'payabledays',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'payabledays',


  },
  {
    label: 'Basic',
    name: 'basic',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'basic',


  },
  {
    label: 'Basic Arrer',
    name: 'basicarrer',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'basicarrer',


  },
  {
    label: 'House Rent Allowance',
    name: 'houserentallowance',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'houserentallowance',


  },
  {
    label: 'Fixed Allowance',
    name: 'fixedallowance',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'fixedallowance',



  },
  {
    label: 'Fixed Allowance Arrear',
    name: 'fixedallowancearrear',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'fixedallowancearrear',


  },
  {
    label: 'Gross Salary',
    name: 'grosssalary',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'GROSS',


  },
  {
    label: 'EPF',
    name: 'epf',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'EPF',


  },
  {
    label: 'ESIC',
    name: 'esic',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'ESIC',


  },
  {
    label: 'PT',
    name: 'pt',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'PT',


  },
  {
    label: 'Net Salary',
    name: 'netsalary',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'netsalary',


  },
  {
    label: 'Net Pay',
    name: 'netpay',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'netpay',


  },

  {
    label: '',
    name: 'input',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'standard_document8',


  },

];

export const ButtonforSave = [
  { label: 'Save', style: 'buttonStyle', type: "submit" },
  { label: 'Next', style: 'buttonStyle3', type: "Button" },
];




export const addlop = [
  { label: '+ Add LOP', style: 'buttonStyleaddlop', type: "button" },
];


export const add = [
  {
    label: (
      <button className={ReviewPayrollStyle.i}>
        <span className={ReviewPayrollStyle.ii}><FiPlus  className="ml-0.5 h-[13px]"/></span> <div className={ReviewPayrollStyle.iii}>Add</div>
      </button>
    ),
    type: "button",
  },
];

