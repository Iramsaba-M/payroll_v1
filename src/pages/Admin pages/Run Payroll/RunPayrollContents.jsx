import { MdOutlineFileDownload, MdOutlineEdit } from 'react-icons/md';
export const Button1Content = [
  { label: ' ', style: 'buttonStylew', type: "submit" },
];
export const tableContent2 = [
  {
    name: "employee_name",
    label: "EMPLOYEE NAME",
    dataType: "string",
    cssClass: "datastyle",
    clmncss: "stylep"
  },
  {
    name: "designation",
    label: "DESIGNATION",
    dataType: "string",
    cssClass: "datastyle1",
    clmncss: "stylep"
  },
  {
    name: "employee_id",
    label: "EMP ID",
    dataType: "string",
    cssClass: "datastyle1",
    clmncss: "stylep"
  },
  {
    name: "PAYSLIPS",
    label: " PAYSLIPS",
    dataType: "Date",
    cssClass: "datastyle1",
    clmncss: "stylep",
    content: 'view'
  },
  {
    name: "download",
    label: "DOWNLOAD",
    dataType: "icon",
    cssClass: "datastyle1",
    clmncss: "stylep",
    content: <MdOutlineFileDownload />
  },
]
export const tableContent3 = {
  tableposition: "review",
  column: [
    {
      name: "netpay",
      label: "EMPLOYEE NET PAY",
      dataType: "string",
      cssClass: "datastyle2",
      clmncss: "style1"
    },
    {
      name: "month",
      label: "MONTH",
      dataType: "string",
      cssClass: "datastyle1",
      clmncss: "style1",
    },
    {
      name: "payment-date",
      label: "PAYMENT DATE",
      dataType: "string",
      cssClass: "datastyle1",
      clmncss: "style1",
    },
    {
      name: "total-employee",
      label: "NO OF EMPLOYEES",
      dataType: "string",
      cssClass: "datastyle2",
      clmncss: "style1",
    },
    {
      name: "action",
      label: " ACTION",
      dataType: "string",
      cssClass: "datastyle4",
      clmncss: "style1",
      actionStyles: {
        'Review': 'datastyle3', // Specify the class name directly
        'Processed': 'datastyle4', // Specify the class name directly
      },
    },
  ],
};
export const RunPayrolltableContent = [
  {
    name: "name",
    label: "EMPLOYEE NAME",
    dataType: "string",
    cssClass: "datastyle",
    clmncss: "payrollstyle3"
  },
  {
    name: "designation",
    label: "DESIGNATION",
    dataType: "string",
    cssClass: "payrolldatastyle4",
    clmncss: "payrollstyle3"
  },
  {
    name: "attendance",
    label: "Attendance",
    dataType: "string",
    cssClass: "payrolldatastyle4",
    clmncss: "payrollstyle3"
  },
  {
    name: "gross",
    label: "Gross Salary",
    dataType: "string",
    cssClass: "payrolldatastyle4",
    clmncss: "payrollstyle3"
  },
  {
    name: "netpay",
    label: "Net Pay",
    dataType: "string",
    cssClass: "payrolldatastyle4",
    clmncss: "payrollstyle3"
  },
  {
    name: "status",
    label: "PAYROLL STATUS",
    dataType: "string",
    cssClass: "payrolldatastyle4",
    clmncss: "payrollstyle4",
    statusStyles: {
      'Finalized': 'payrolldatastyle3',
      'Finalize now': 'payrolldatastyle5',
    },
  },
  {
    name: "finalizeedit",
    label: "EDIT",
    dataType: "icon",
    cssClass: "datastyle2",
    clmncss: "payrollstyle3",
    content: <MdOutlineEdit />
  },
];
export const statusButtons = [{
  label: "status"
}]
export const finalizeButtons = [
  { label: 'Bulk Finalize', style: 'payrollbuttonStyle1' },
]
export const ApproveandProcess = [
  { label: 'Approve & Process Payroll', style: 'payrollbuttonStyle1' },
]
export const PrintPayslip = [
  { label: 'Print Payslips', style: 'payrollbuttonStyle1' },
]
export const cardContent = [
  {
    heading: 'Taxes & Deduction',
    multivalue: [
      { heading: 'PF', name: 'pf', multiheadingstyle: 'payrollmultivaluehead', multivaluestyle: 'payrollmaultivalue' },
      { heading: 'ESIC', name: 'esic', multiheadingstyle: 'payrollmultivaluehead', multivaluestyle: 'payrollmaultivalue' },
      { heading: 'PT', name: 'pt', multiheadingstyle: 'payrollmultivaluehead', multivaluestyle: 'payrollmaultivalue' }
    ],
    card: 'payrollstyle2',
    headstyle: 'payrollheading3'
  },
];
export const cardContent2 = [
  {
    heading: 'PAYROLL EXPENSE',
    card: 'payrollstyle1',
    contentstyle: 'payrollcontent',
    headstyle: 'payrollheading'
  },
];
export const cardContent3 = [
  {
    heading: 'EMPLOYEE NET PAY',
    card: 'payrollstyle3',
    contentstyle: 'payrollcontent',
    headstyle: 'payrollheading'
  },
];
export const cardContent4 = [
  {
    heading: 'TOTAL EMPLOYEES ',
    card: 'payrollstyle1',
    contentstyle: 'payrollcontent2',
    headstyle: 'payrollheading2'
  },
];
export const cardContent5 = [
  {
    heading: 'PAYABLE DAYS',
    card: 'payrollstyle3',
    contentstyle: 'payrollcontent2',
    headstyle: 'payrollheading2'
  },
];