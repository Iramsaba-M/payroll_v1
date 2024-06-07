//clean code
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
    headstyle: 'attendanceheading'
  },

]
export const Attendanccard2 = [
  { heading: 'Leave History', card: 'leavestyle5', headstyle: 'attendanceheading' },
]

////////////////////////////////////////////////////////////////////////////////////////
export const leavesdata = [
  {
    card: 'leavestyle', name: 'casual', multivalue: [
      { heading: 'Casual Leave', name: 'casual', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', name: 'sick',
    multivalue: [
      { heading: 'Sick Leave', name: 'sick', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', name: 'marriage',
    multivalue: [
      { heading: 'Marriage Leave', name: 'marriage', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', name: 'paternity', multivalue: [
      { heading: 'Paternity Leave', name: 'paternity', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', name: 'maternity', multivalue: [
      { heading: ' Maternity   Leave', name: 'maternity', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', name: 'bereavement', multivalue: [
      { heading: 'Bereavement Leave', name: 'bereavement', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', name: 'unpaid', multivalue: [
      { heading: 'Unpaid Leave', name: 'unpaid', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
  {
    card: 'leavestyle', name: 'vacation', multivalue: [
      { heading: 'Vacation Leave', name: 'vacation', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },

]
///////////////////////////////////////////////////////////////////
export const leavecard1 = [
  {
    card: 'leavestyle', name: 'cl', multivalue: [
      { heading: 'Casual Leave', name: 'cl', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
]
export const leavecard2 = [
  {
    card: 'leavestyle', name: 'sl',
    multivalue: [
      { heading: 'Sick Leave', name: 'sl', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
]
export const leavecard3 = [
  {
    card: 'leavestyle', name: 'marriage',
    multivalue: [
      { heading: 'Marriage Leave', name: 'marriage', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
]
export const leavecard4 = [
  {
    card: 'leavestyle', multivalue: [
      { heading: 'Paternity Leave', name: 'paternity', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
]
export const leavecard5 = [
  {
    card: 'leavestyle', name: 'paternity', multivalue: [
      { heading: 'Maternity Leave', name: 'maternity', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
]
export const leavecard6 = [
  {
    card: 'leavestyle', name: 'bereavement', multivalue: [
      { heading: 'Bereavement Leave', name: 'bereavement', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
]
export const leavecard7 = [
  {
    card: 'leavestyle', name: 'unpaid', multivalue: [
      { heading: 'Unpaid Leave', name: 'unpaid', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
]
export const leavecard8 = [
  {
    card: 'leavestyle', name: 'vacation', multivalue: [
      { heading: 'Vacation Leave', name: 'vacation', multiheadingstyle: 'leavemultivaluehead', multivaluestyle: 'leavemultivalue' },
    ],
  },
]

export const leavesdata2 = [

  { heading: 'CL ', name: 'casual' },
  { heading: 'SL ', name: 'sick' },
  { heading: 'Marriage', name: 'marriage' },
  { heading: 'Paternity', name: 'paternity' },
  { heading: 'Maternity', name: 'maternity' },
  { heading: 'Bereavement', name: 'bereavement' },
  { heading: 'Unpaid', name: 'unpaid' },
  { heading: 'Vacations', name: 'vacation' },

]
export const radiocontent = [
  { label: 'Half Day', type: 'radio', textcss: "standard", name: 'leave_day', value: 'half_day' }, //leavetype
  { label: 'Full Day', type: 'radio', textcss: "standard", name: 'leave_day', value: 'full_day' },
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
    iconPosition: 'end',
  },
]

export const leavehistorytable = {
  tableposition: "Attendancetableheight",
  column: [
    {
      name: "start_date",
      label: "Date",
      dataType: "string",
      cssClass: "leavedatastyle", // datastyle
      clmncss: "leavestyles" // payrollstyle3
    },
    {
      name: "type_of_leave",
      label: "Type of Leave",
      dataType: "string",
      cssClass: "leavedatastyle", // datastyle
      clmncss: "leavestyles" // payrollstyle3
    }
  ]
};

