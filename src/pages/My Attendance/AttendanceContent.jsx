import { BiUpArrowAlt } from "react-icons/bi";

export const AttendanceButtons = [
  { label: 'Punch In', style: 'AttendancebuttonStyle3' },
  { label: 'Punch Out', style: 'AttendancebuttonStyle2' },
  { label: 'Apply Leave', style: 'AttendancebuttonStyle1' },
]

export const LeaveButtons = [
  { label: 'Cancle', style: 'AttendancebuttonStyle2' },
  { label: 'Apply Leave', style: 'AttendancebuttonStyle1' },
]

export const Attendanccard = [
  {
    heading: 'Leave Balance',
    card: 'leavestyle2',
    headstyle: 'payrollheading3'
  },

  // { heading: 'Leave History', card: 'payrollstyle2',headstyle: 'payrollheading3' },

]
export const Attendanccard2 = [
  { heading: 'Leave History', card: 'leavestyle2', headstyle: 'payrollheading3' },
]
export const leavesdata = [
  {
    card: 'leavestyle', multivalue: [
      { heading: 'Casual Leave', name: 'cl', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle',
    multivalue: [
      { heading: 'Sick Leave', name: 'sl', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle',
    multivalue: [
      { heading: 'Marriage Leave', name: 'marriage', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', multivalue: [
      { heading: 'Paternity Leave', name: 'paternity', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', multivalue: [
      { heading: 'Maternity Leave', name: 'maternity', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', multivalue: [
      { heading: 'Bereavement Leave', name: 'bereavement', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', multivalue: [
      { heading: 'Unpaid Leave', name: 'unpaid', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', multivalue: [
      { heading: 'Vacation Leave', name: 'vacation', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },

]
export const leavesdata2 = [

  { heading: 'Casual Leave ', value: '345', name: 'cl' },
  { heading: 'Sick Leave ', value: '345', name: 'sl' },
  { heading: 'Marriage Leave ', value: '345', name: 'marriage' },
  { heading: 'Paternity Leave ', value: '345', name: 'paternity' },
  { heading: 'Maternity Leave ', value: '345', name: 'maternity' },
  { heading: 'Bereavement Leave', value: '345', name: 'bereavement' },
  { heading: 'Unpaid Leave ', value: '345', name: 'unpaid' },
  { heading: 'Vacation Leave ', value: '345', name: 'vacation' },

]
export const radiocontent = [
  { label: 'Half Day', type: 'radio', textcss: "standard", name: 'leavetype', }, //leavetype
  { label: 'Full Day', type: 'radio', textcss: "standard", name: 'leavetype' },
  {
    label: "",
    name: "reason",
    type: "textarea",
    placeholder: "Reason",
    textcss: "leavetextarea"//standard  leavetextarea
  },
  {
    label: '',
    name: 'doc',
    type: 'file',
    textcss: 'leaveuploadinput',
    placeholder: 'Upload Doc',
    icon: <BiUpArrowAlt className="text-2xl ml-3 text-gray-600" />,
  },
]

export const leavehistorytable = [
  {
    name: "date",
    label: " Date",
    dataType: "string",
    cssClass: "leavedatastyle",//datastyle
    clmncss: "leavestyles"//payrollstyle3
  },
  {
    name: "type_of_leave",
    label: " Type of Leave",
    dataType: "string",
    cssClass: "leavedatastyle",//datastyle
    clmncss: "leavestyles"//payrollstyle3
  },
]

