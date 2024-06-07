import { PiUploadSimpleThin } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import CustomStyles from "./CustomStyles";

const CustomConfig = [
  {
    label: 'Custom Document',
    type: 'file',
    textcss: 'standard',
    placeholder: 'Select',
    icon: <PiUploadSimpleThin className={CustomStyles.iconstyle} />,
  },
  {
    label: 'Custom Number',
    type: 'text',
    placeholder: 'Enter here',
    textcss: 'standard',
    icon: <CiEdit className={CustomStyles.iconstyle} />,
  },

];

export default CustomConfig;
