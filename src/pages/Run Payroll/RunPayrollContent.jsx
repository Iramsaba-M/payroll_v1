export const RunPayrolltableContent = [
 
    {
      name: "employee_name",
      label: "EMPLOYEE NAME",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "payrollstyle3"
  },
  {
      name: "designation",
      label: "DESIGNATION",
      dataType: "string",
      cssClass: "payrolldatastyle4",
      clmncss : "payrollstyle3"
  },
  {
      name: "attendance",
      label: "Attendance",
      dataType: "string",
      cssClass: "payrolldatastyle4",
      clmncss : "payrollstyle3"
  },
  {
    name: "gross_salary",
    label: "Gross Salary",
    dataType: "string",
    cssClass: "payrolldatastyle4",
    clmncss : "payrollstyle3"
},
{
    name: "net_pay",
    label: "Net Pay",
    dataType: "string",
    cssClass: "payrolldatastyle4",
    clmncss : "payrollstyle3"
},
{
    name: "payroll_status",
    label: "PAYROLL STATUS",
    dataType: "string",
    cssClass: "payrolldatastyle4",
    clmncss : "payrollstyle4",
    statusStyles: {
      'Finalized': 'payrolldatastyle3', 
      'Finalize now': 'payrolldatastyle5', 
    },
},
  
  ];

  export const statusButtons=[{
    label:"status"
  }]
  export const finalizeButtons=[
  { label: 'Bulk Finalize', style: 'payrollbuttonStyle1' },
]
export const ApproveandProcess=[

  { label: 'Approve & Process Payroll', style: 'payrollbuttonStyle1' },
]
export const PrintPayslip=[

  { label: 'Print Payslips', style: 'payrollbuttonStyle1' },
]

export const cardContent = [
  {
    heading: 'Taxes & Deduction',
    multivalue: [
      { heading: 'PF', name: 'pf' },
      { heading: 'ESIC', name: 'esic' },
      { heading: 'PT', name: 'pt' }
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