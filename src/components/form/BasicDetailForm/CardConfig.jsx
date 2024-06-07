
import CardStyles from './CardStyles';
import { BsPersonPlus } from "react-icons/bs";

const CardConfig = [

  { label: <BsPersonPlus className={CardStyles.iconStyle} /> },
  { label: 'Upload', css: 'Header', name: 'photo_content', type: 'file', required: true },
];

export default CardConfig;
