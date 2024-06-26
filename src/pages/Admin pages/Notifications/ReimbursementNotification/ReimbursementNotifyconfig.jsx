import { MdOutlineEdit } from 'react-icons/md';
import { GrView } from "react-icons/gr";
export const ReimbursementNotifyconfig = [
  {
    name: "employee_name",
    label: "EMPLOYEE NAME",
    dataType: "string",
    cssClass: "datastyle",
    clmncss: "style9"
  },
  {
    name: "employee_id",
    label: "EMPLOYEE ID",
    dataType: "string",
    cssClass: "datastyle",
    clmncss: "style9"
  },

  {
    name: "reimbursment_type",
    label: "REIMBRUSMENT TYPE",
    dataType: "string",
    cssClass: "datastyle5",
    clmncss: "style9"
  },
  {
    name: "expense_date",
    label: "EXPENSE DATE",
    dataType: "date",
    cssClass: "datastyle5",
    clmncss: "style9"
  },

  {
    name: "description",
    label: "DESCRIPTION",
    dataType: "string",
    cssClass: "datastyle5",
    clmncss: "style9"
  },

  {
    name: "amount",
    label: "AMOUNT",
    dataType: "string",
    cssClass: "datastyle5",
    clmncss: "style11"
  },
  {
    name: "documents",
    label: "INVOICE",
    dataType: "icon",
    cssClass: "datastyle5",
    clmncss: "style11",
    content: <GrView />
  },
  {
    name: "status",
    label: "STATUS",
    dataType: "icon",
    cssClass: "datastyle5",
    clmncss: "style11",
  },
  {
    name: "comments",
    label: "ADD COMMENT",
    dataType: "string",
    cssClass: "datastyle5",
    clmncss: "style9"
  },
  {
    name: "action3",
    label: "ACTION",
    dataType: "icon",
    cssClass: "datastyle5",
    clmncss: "style9",
    content: <MdOutlineEdit />
  }


];