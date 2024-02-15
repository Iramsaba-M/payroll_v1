export const formContent = [
    {
      "label": "Bank Name",
      "name":"bank_name",
      "type": "options",
      "options": [
        { "name": "Bank1", "value": "Bank1" },
        { "name": "Bank2", "value": "Bank2" },
        { "name": "Bank3", "value": "Bank3" }
      ],
      "placeholder": "",
      "textcss": "standard",
  
    },
    {
      "label": "IFSC Code",
      "name":"ifsc_code",
      "type": "text",
      "placeholder": "Enter Here",
      "textcss": "standard"
    },
  
    {
      "label": "Account Number ",
      "name":"account_number",
      "type": "number",
      "placeholder": "Enter Here",
      "textcss": "standard"
    },
    {
      "label": "Branch Code ",
      "name":"branch_code",
      "type": "text",
      "placeholder": "Enter Here",
      "textcss": "standard"
    },
  
  ]
  
  
  export const ButtonforDefault = [
    { label: 'Set default for payroll', style: 'buttonStyle3' ,type:"Button" },
  ];
  
  export const ButtonforaddBank = [
    { label: 'Add another bank details', style: 'buttonStyle3' ,type:"Button" },
  ];

  export const ButtonforSave = [
    { label: 'Save',  style: 'buttonStyle' , type:"submit"},
    { label: 'Next', style: 'buttonStyle3' ,type:"Button" },
  ];