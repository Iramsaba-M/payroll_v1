
import { RiArrowDownSFill } from "react-icons/ri";
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
    "name": "templatename",
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
    "placeholder": "Select Components",
    "textcss": "ctcoption",
    "icon": <RiArrowDownSFill className="text-gray-400 -mt-3  -translate-x-16" />,
  },
];
export const nameData = [{
  optionName: 'name',
  valueName: 'value',
  componentName: 'component',
  conditionTypeName: 'conditionType',
  typeValueName: 'typeValue',
  conditionValueName: 'conditionValue',
}];

export const TableHeaders = [
  {
    name: 'Components',
    className: 'TableHeaders',

  },
  {
    name: '% Value',
    className: 'TableHeaders',
  },
  {
    name: '% of Component',
    className: 'TableHeaders',

  },

  {
    name: 'Condition type',
    className: 'TableHeaders',
  },
  {
    name: 'Type Value',
    className: 'TableHeaders',
  },
  {
    name: 'Condition Value',
    className: 'TableHeaders',
  },
];

export const config1 = {
  name: 'name',
  value: 'value',
  component: 'component',
  conditionType: 'conditionType',
  typeValue: 'typeValue',
  conditionValue: 'conditionValue',
};

export const OptionsComponentData = [
  {
    name: 'component',
    options: [
      { name: 'CTC', value: 'CTC' },
      { name: 'Gross Salary', value: 'Gross Salary' },
      { name: 'Gross Salary - HRA', value: 'Gross Salary' },
      { name: 'Monthly CTC', value: 'Gross Salary' },
    ],
    placeholder: '',
    textcss: "OptionsComponentData",
    icon: <RiArrowDownSFill className="text-gray-400 -mt-7  -translate-x-[7vh]" />,
  },
  {
    name: 'conditionType',
    options: [
      { name: '<', value: '<' },
      { name: '>=', value: '>=' },
    ],
    placeholder: '',
    textcss: 'OptionsComponentData2',
    icon: <RiArrowDownSFill className="text-gray-400 -mt-7  -translate-x-[12vh] " />,


  },
];

export const TextComponentData = [
  {
    name: 'value',
    placeholder: '',
    textcss: 'textcss',
  },

];

export const TextComponentData1 = [

  {
    name: 'typeValue',
    placeholder: '',
    textcss: 'textcss',
  },
  {
    name: 'conditionValue',
    placeholder: '',
    textcss: 'textcss',
  },
];

export const SaveTemplate = [
  { label: 'Save Template', style: 'buttonStyle3', type: "submit" },
];