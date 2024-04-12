import { MdEditNote } from "react-icons/md";

import { TbArrowBigRight } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { TbPigMoney ,TbMoneybag} from "react-icons/tb";
import { TiTickOutline } from "react-icons/ti";
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
  export const Reimbursementcontent = [
    { card: 'style1',path:'./TypeReimbursement', title: 'Types of Reimbursement',icon:<TbArrowBigRight className="ml-5" />,icon2:<TbPigMoney   className="h-7 w-6 ml-12 "/> },
    ];
    export const Reimbursementpolicy = [
      { card: 'style1',path:'./Reimbursementpolicy', title: 'Reimbursement Policy ',icon:<TbArrowBigRight className="ml-5" />,icon2:<TbMoneybag  className="h-7 w-6 ml-12 "/> },
      ];
      export const Multilevel = [
        { card: 'style1',path:'./Multilevel', title: 'Multilevel Approval',icon:<TbArrowBigRight className="ml-5" />,icon2:<TiTickOutline  className="h-7 w-6 ml-12 "/> },
        ];




