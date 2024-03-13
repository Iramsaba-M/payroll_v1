import { MdOutlineEdit } from 'react-icons/md';
import TableStyle2 from '../../configurations/table2/Tablestyle2';
export const Button1Content = [
    { label: ' ',  style: 'buttonStylew' , type:"submit"},
    
  ];

  export const tableContent2 = [
    {
        name: "employee_name",
        label: "EMPLOYEE NAME",
        dataType: "string",
        cssClass: "datastyle",
        clmncss : "style4"
    },
    {
        name: "designation",
        label: "DESIGNATION",
        dataType: "string",
        cssClass: "datastyle1",
        clmncss : "style4"
    },
    {
        name: "employee_id",
        label: "EMP ID",
        dataType: "string",
        cssClass: "datastyle1",
        clmncss : "style4"
    },
    {
        name: "PAYSLIPS",
        label: "PAYSLIPS",
        dataType: "string",
        cssClass: "datastyle1",
        clmncss : "style4"
    },
    
    {
      name: "DOWNLOAD",
      label: "DOWNLOAD",
      dataType: "string",
      cssClass: "datastyle1",
      clmncss : "style4"
    
    }
    
  ]

  export const tableContent3 = [
    {
        name: "netpay",
        label: "EMPLOYEE NET PAY",
        dataType: "string",
        cssClass: "datastyle2",
        clmncss : "style1"
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
    ];