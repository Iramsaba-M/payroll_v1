//clean code
import { PiUploadSimpleThin } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";

import DocumentStyles from "../../../../components/form/DocumentsForm/DocumentStyles";
export const formContent  = [
    {
      label: 'Upload Aadhar Documents',
      name:'aadhar_document',
      type: 'file',
      textcss: 'standard',
      placeholder: 'Select',
      icon: <PiUploadSimpleThin className={DocumentStyles.iconstyle} />, 
      iconPosition:"end",
    },
    {
      label: 'Enter Aadhar Number ',
      name:'aadhar_number',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard_document',
      icon:<CiEdit className={DocumentStyles.iconstyle1} />,
   
    },
    {
      label: 'Upload PAN Documents',
      name:'pan_document',
      type: 'file',
      textcss: 'standard',
      placeholder: 'Select',
      icon: <PiUploadSimpleThin className={DocumentStyles.iconstyle} />,
      iconPosition:"end",
      },
      {
        label: 'Enter PAN Number ',
        name:'pan_number',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard_document',
        icon:<CiEdit className={DocumentStyles.iconstyle1}/>,
        
      },
    
      {
        label: 'Upload ESIC Document',
        name:'esic_document',
        type: 'file',
        textcss: 'standard',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin className={DocumentStyles.iconstyle} />,
        iconPosition:"end",
      
      },
      {
        label: 'Enter ESIC Number ',
        name:'esic_number',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard_document',
        icon:<CiEdit className={DocumentStyles.iconstyle1}/>,
      },
      {
        label: 'Upload EPFO Document',
        name:'epfo_document',
        type: 'file',
        textcss: 'standard',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin className={DocumentStyles.iconstyle}/>,
        iconPosition:"end",
      },
      {
        label: 'Enter EPFO Number ',
        name:'epfo_number',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard_document',
        icon:<CiEdit className={DocumentStyles.iconstyle1} />,
      },
      {
        label: 'Upload Form 16 Document',
        name:'form16_document',
        type: 'file',
        textcss: 'standard',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin className={DocumentStyles.iconstyle}/>,
        iconPosition:"end",
     
      },
      {
        label: 'Enter Form 16 Number. ',
        name:'form16_number',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard_document',
        icon:<CiEdit className={DocumentStyles.iconstyle1}/>,
      },  
  ];


  export const customformContent = [
    {
      label: 'Custom Document',
      type: 'file',
      textcss: 'standard',
      placeholder: 'Select',
      icon: <PiUploadSimpleThin className={DocumentStyles.iconstyle} />, 
      iconPosition:"end",
    },
    {
      label: 'Custom Number',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard_document',
      icon:<CiEdit className={DocumentStyles.iconstyle1} />,
    },  
  ];
  
  export const ButtonforSave = [
    { label: 'Save',  style: 'buttonStyle' , type:"submit"},
    { label: 'Next', style: 'buttonStyle3' ,type:"Button" },
  ];

  export const ButtonforAdd = [
    { label: '+ Add Another Document',  style: 'buttonStyle3' },
  ];
  
 
  