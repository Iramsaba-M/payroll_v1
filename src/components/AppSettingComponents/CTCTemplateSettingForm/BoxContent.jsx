import { MdEditNote } from "react-icons/md";

import { TbArrowBigRight } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import { LiaPeopleCarrySolid } from "react-icons/lia";
export const BoxContent = [
    { card: 'style1', title: 'Add New Template',icon:<TbArrowBigRight className="ml-5" />,icon2:<FaPlus  className="h-5 w-5 "/> },

  ];

  export const BoxContent2 = [
    { card: 'style1', title: '',icon:<TbArrowBigRight  className="ml-5"/> },

  ];
  export const HolidayListcontent = [
    { card: 'style1',path:'./HolidayPolicy', title: 'Holiday List',icon:<TbArrowBigRight className="ml-5" />,icon2:<FaRegPaperPlane  className="h-6 w-5 -ml-12"/> },

  ];
  export const Leavepolicycontent = [
    { card: 'style1',path:'./LeavePolicy', title: 'Leave Policy',icon:<TbArrowBigRight className="ml-5" />,icon2:<LiaPeopleCarrySolid  className="h-7 w-6 -ml-12 "/> },

  ];