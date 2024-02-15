 import { PiUploadSimpleThin } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import DemoStyles from "./DemoStyles";


const DocumentsData  = [
    {
      label: 'Upload Aadhar Documents',
      name:'aadhar_document',
      type: 'file',
      textcss: 'standard',
      placeholder: 'Select',
      icon: <PiUploadSimpleThin className={DemoStyles.iconstyle} />, 
    },
    {
      label: 'Enter Aadhar Number ',
      name:'aadhar_number',
      type: 'text',
      placeholder: 'Enter here',
      textcss: 'standard',
      icon:<CiEdit className={DemoStyles.iconstyle} />,
   
    },
    {
        label: 'Upload PAN Documents',
        name:'pan_document',
        type: 'file',
        textcss: 'standard',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin className={DemoStyles.iconstyle} />,
      },
      {
        label: 'Enter PAN Number ',
        name:'pan_number',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard',
        icon:<CiEdit className={DemoStyles.iconstyle}/>,
        
      },
    
      {
        label: 'Upload ESIC Document',
        name:'esic_document',
        type: 'file',
        textcss: 'standard',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin className={DemoStyles.iconstyle} />,
      },
      {
        label: 'Enter ESIC Number ',
        name:'esic_number',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard',
        icon:<CiEdit className={DemoStyles.iconstyle}/>,
      },
      {
        label: 'Upload EPFO Document',
        name:'epfo_document',
        type: 'file',
        textcss: 'standard',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin className={DemoStyles.iconstyle}/>,
      },
      {
        label: 'Enter EPFO Number ',
        name:'epfo_number',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard',
        icon:<CiEdit className={DemoStyles.iconstyle} />,
      },
      {
        label: 'Upload Form 16 Document',
        name:'form16_document',
        type: 'file',
        textcss: 'standard',
        placeholder: 'Select',
        icon: <PiUploadSimpleThin className={DemoStyles.iconstyle}/>,
        isTrue:true,
      },
      {
        label: 'Enter Form 16 Aadhar Number. ',
        name:'form16_aadhar_number',
        type: 'text',
        placeholder: 'Enter here',
        textcss: 'standard',
        icon:<CiEdit className={DemoStyles.iconstyle}/>,
      },
      
      
  
  ];
  
  export default DocumentsData ;
  