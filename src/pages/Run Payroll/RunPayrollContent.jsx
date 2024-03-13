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