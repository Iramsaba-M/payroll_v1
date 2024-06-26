

const paymentContent = [
    {
      title: 'Leave Notification',
      card: 'style3',
    },
    {
      title: 'Payroll Notification',
      card: 'style4',
    },
    {
      title: 'Loan Notification',
      card: 'style3',
    },
    {
      title: ' Reimbursement Notification',
      card: 'style5',
    },
  ];
  
  export default paymentContent;

  export const internContent = [

    { heading: 'Interns',  card: 'reportstyle1', contentKey: 'interns', contentstyle: 'reportcontent', headstyle: 'reportheading' },
  
  ];
  export const insuranceContent = [
  
    { heading: 'Insurance  Contribution',  card: 'reportstyle1', contentKey: 'insurance', contentstyle: 'reportcontent', headstyle: 'reportheading' },
  
  ];
  export const pfContent = [
  
  
    { heading: 'PF Contribution', card: 'reportstyle1', contentKey: 'pf', contentstyle: 'reportcontent', headstyle: 'reportheading' },
  
  ];
  export const PaymentConfig = {
    buttons: [
      { label: "Pay Now", action: () => console.log("Roll Out"),buttonClass:'buttonStyle' },
      { label: "Remind me later", action: () => console.log("Hold"),buttonClass:'buttonStyle2',options:[
        { label: "Remind me Tomorrow", action: () => console.log("Roll Out1"),buttonClass:'buttonStyle2' },

        { label: "Remind me after 2 days", action: () => console.log("Roll Out2"),buttonClass:'buttonStyle2' },
       
        { label: "Remind me on Due date", action: () => console.log("Roll Out3"),buttonClass:'buttonStyle2' },
      ] }
    ]
  };
  
  