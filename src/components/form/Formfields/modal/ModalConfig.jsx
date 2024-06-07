
import { RxCross1 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
export const ModalConfig = [
  {
    buttonStyle: 'CrossButton',
    icon: <RxCross1 />,
    MainDiv: 'MainDiv',
    ModalBody: 'ModalBody',

    labels: [
      {
        text: 'Data Saved',
        css: 'standard',
      },
      {
        text: <IoCheckmark className=" ml-[50vh] mt-[13vh] text-blue-600" />,
        css: 'right',
      },
      {
        text: '___________________',
        css: 'standardline',
      },
    ]
  },

];