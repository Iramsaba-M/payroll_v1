export const TextData = [
    {
      "name": "templatename",
      "label": "Template Name",
      "type": "text",
      "placeholder": "Enter here",
      "textcss": "templatename"
    }
  ];

   export const OptionData = [
    {
      "name": "gender",
      "label": " ",
      "type": "options",
      "options": [
        { "name": "DA", "value": "DA" },
        { "name": "LTA", "value": "LTA" },
        { "name": "Gratutity", "value": "Gratutity" },
        { "name": "insurance", "value": "insurance" },
        { "name": "EPF", "value": "EPF" },
        { "name": "Add Allowances", "value": "Add Allowances" },
      ],
      "placeholder": " Select Components",
      "textcss": "ctcoption"
    },
  ];

  export const TableHeaders = [
    {
      name: 'Components',
      className: 'px-1 w-[40vh] border-r-2 border-b-2 bg-violet-500',
    },
    {
      name: '% Value',
      className: 'px-1 w-[40vh] border-r-2 border-b-2 bg-violet-500',
    },
    {
      name: '% of Component',
      className: 'px-1 w-[80vh] border-r-2 border-b-2 bg-violet-500',
    },
    {
      name: 'Condition type',
      className: 'px-1 w-[80vh] border-r-2 border-b-2 bg-violet-500',
    },
    {
      name: 'Type Value',
      className: 'px-1 w-[80vh] border-r-2 border-b-2 bg-violet-500',
    },
    {
      name: 'Condition Value',
      className: 'px-0 w-[80vh] border-b-2 bg-violet-500',
    },
  ];

  export const OptionsComponentData = [
    {
      name: 'component',
      options: [
        { name: 'CTC', value: 'CTC' },
        { name: 'Gross Salary', value: 'Gross Salary' },
      ],
      placeholder: 'enter',
      textcss: 'w-[15vh] flex justify-center ml-16',
    },
    {
      name: 'conditionType',
      options: [
        { name: '<', value: '<' },
        { name: '>=', value: '>=' },
      ],
      placeholder: 'enter',
      textcss: 'w-[5vh] flex justify-center ml-12',
    },
  ];

  export const TextComponentData = [
    {
      name: 'value',
      placeholder: '',
      textcss: 'ml-4 w-[10vh] outline-none bg-transparent',
    },
   
  ];

  export const TextComponentData1= [
  
    {
      name: 'typeValue',
      placeholder: '',
      textcss: 'w-[13vh] ml-16 outline-none bg-transparent',
    },
    {
      name: 'conditionValue',
      placeholder: '',
      textcss: 'w-[13vh] ml-16 outline-none bg-transparent',
    },
  ];

  export const SaveTemplate = [
    { label: 'Save Template',  style: 'buttonStyle3' , type:"submit" },
  ];