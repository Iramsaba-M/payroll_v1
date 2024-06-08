import { MdOutlineEdit } from 'react-icons/md';

export const LeavetableContent = [
  {
    name: "employee_name",
    label: "EMPLOYEE NAME",
    dataType: "string",
    cssClass: "datastyle",
    clmncss: "style8"
  },
  {
    name: "employee_id",
    label: "EMPLOYEE ID",
    dataType: "string",
    cssClass: "datastyle",
    clmncss: "style8"
  },
  {
    name: "start_date",
    label: "START DATE",
    dataType: "Date",
    cssClass: "datastyle5",
    clmncss: "style8"
  },
  {
    name: "end_date",
    label: "END DATE",
    dataType: "Date",
    cssClass: "datastyle5",
    clmncss: "style8"
  },
  {
    name: "leave_type",
    label: "LEAVE TYPE",
    dataType: "string",
    cssClass: "datastyle5",
    clmncss: "style8"
  },
  {
    name: "reason",
    label: "REASON",
    dataType: "string",
    cssClass: "datastyle5",
    clmncss: "style8"
  },
  {
    name: "status",
    label: "STATUS",
    dataType: "string",
    cssClass: "datastyle5",
    clmncss: "style8",
  },
  {
    name: "comments",
    label: "ADD COMMENT",
    dataType: "string",
    cssClass: "datastyle5",
    clmncss: "style8",

  },
  {
    name: "action",
    label: "ACTION",
    dataType: "icon",
    cssClass: "datastyle5",
    clmncss: "style10",
    content: <MdOutlineEdit />
  }
];
