export const formContent = [
    {
      "name":"ctc_template",
      "label": "CTC Template",
      "type": "options",
      "options": [
          { "name": "template 1", "value": "template 1" },
          { "name": "template 2", "value": "template 2" },
          { "name": "template 3", "value": "template 3" },
         
      ],
      "textcss": "standard",
      "required":true
    },
    {
      "name":"annual_ctc",
      "label": "Annual CTC",
      "type": "number",
      "placeholder": "Enter Annual CTC",
      "numbercss": "standard",
      "fieldstyle": "inline-block ",
      "numberType": "text",
      "required":true
    },
    {
      "name":"monthly_ctc",
      "label": "Monthly CTC",
      "type": "number",
      "placeholder": "Enter Monthly CTC",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "text",
      "required":true
    },
    {
      "name":"basic",
      "label": "Basic",
      "type": "number",
      "placeholder": "Enter Basic",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "text",
      "required":true
    },
    {
      "name":"da",
      "label": "DA",
      "type": "number",
      "placeholder": "Enter DA",
      "numbercss": "standard",
      "fieldstyle": "inline-block",
      "numberType": "text",
      "required":true
    },
    {
      "name":"hra",
      "label": "HRA",
      "type": "number",
      "placeholder": "Enter HRA",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "text",
      "required":true
    },
    {
      "name":"allowances",
      "label": "Allowances",
      "type": "number",
      "placeholder": "Enter Allowances",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "text",
      "required":true
    },
    {
      "name":"other_special_allowance",
      "label": "Other Special Allowances",
      "type": "number",
      "placeholder": "Enter Other Special Allowances",
      "numbercss": "standard",
      "fieldstyle": "inline-block",
      "numberType": "text",
      "required":true
    },
    {
      "name":"gross_salary",
      "label": "Gross Salary",
      "type": "number",
      "placeholder": "",
      "numbercss": "standardcolour",
      "fieldstyle": "inline-block",
      "numberType": "text",
      "required":true
    },
    {
      "name":"epf",
      "label": "EPF",
      "type": "number",
      "placeholder": "Enter EPF",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "text",
      "required":true
    },
    {
      "name":"esic",
      "label": "ESIC",
      "type": "number",
      "placeholder": "Enter ESIC",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "text",
      "required":true
    },
    {
      "name":"pt",
      "label": "PT",
      "type": "number",
      "placeholder": "Enter PT",
      "numbercss": "standard",
      "fieldstyle": "inline-block",
      "numberType": "text",
      "required":true
    },
    {
      "name":"gratuity",
      "label": "Gratuity",
      "type": "number",
      "placeholder": "Enter Gratuity",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "float",
      "required":true
    },
    {
      "name":"medical_insurance",
      "label": "Medical Insurance",
      "type": "number",
      "placeholder": "Enter Medical Insurance",
      "numbercss": "standard",
      "fieldstyle": "inline-block mr-4",
      "numberType": "text",
      "required":false
    },
    {
      "name":"others",
      "label": "Others",
      "type": "number",
      "placeholder": "Enter Others",
      "numbercss": "standard",
      "fieldstyle": "inline-block",
      "numberType": "text",
      "required":false
    },
    {
      "name":"net_salary",
      "label": "Net Salary",
      "type": "number",
      "placeholder": "",
      "numbercss": "standardcolour",
      "fieldstyle": "inline-block",
      "numberType": "text",
      "required":false
    }
  ]

export const Button1Content = [
  { label: 'Generate CTC ',  style: 'buttonStylew' , type:"submit"},
  { label: 'Revise CTC', style: 'buttonStylew1' ,type:"Button" },
];

export const Button2Content = [
  { label: 'Save',  style: 'buttonStyle' , type:"submit"},
  { label: 'Next', style: 'buttonStyle3' ,type:"Button" },
];