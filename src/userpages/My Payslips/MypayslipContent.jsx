import { MdOutlineFileDownload  } from 'react-icons/md';

export const Mypayslipcontent = [
    {
     name: "year",
     label: "Year ",
     dataType: "string",
     cssClass: "datastyle",
     clmncss: "style5"
   },
   {
     name: "month",
     label: "Month",
     dataType: "string",
     cssClass: "datastyle1",
     clmncss: "style5"
   },
   {
    name: "download",
    label: "Download",
    dataType: "icon",
    cssClass: "datastyle1",
    clmncss: "style5",
    content: <MdOutlineFileDownload />
  },
]