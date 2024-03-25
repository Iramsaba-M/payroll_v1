import { RiArrowDownSFill } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";
import { TfiBrushAlt } from "react-icons/tfi";
export const RequestForReimbursementData= [
    {
        "name":"typeofreimbursement",
        "label": "Type Of Reimbursement ",
        "type": "options",
        "options": [
            { "name": "Travel", "value": "Travel" },
            { "name": "Food", "value": "Food" },
            { "name": "Hotel & Accommodation", "value": "Hotel & Accommodation" },
            { "name": "Medical", "value": "medical" },
            { "name": "Fuel", "value": "Fuel" },
            { "name": "Asset", "value": "Asset" },
            { "name": "Office supplies", "value": "Office supplies" },
            { "name": "Others", "value": "Others" },
        ],
        "placeholder":"Select Type",
        "textcss": "standard",
        "icon": <RiArrowDownSFill  className="text-black -mt-6 ml-[16vh]" />,
      },
      {
        "name":"expensedate",
        "label": "Expense Date",
        "type": "date",
        "placeholder": "Select Date",
        "textcss": "standard",
        "icon": <CiCalendar className="absolute text-black -mt-8 ml-[46vh]" />,
      },
      {
        "name":"amount",
        "label": "Amount",
        "type": "text",
        "placeholder": "Enter Amount",
        "textcss": "standard",
        // "icon": <CiCalendar className="text-gray-500" />,
      },






    //   {
    //     "name":"typeofloan",
    //     "label": "Installment period",
    //     "type": "options",
    //     "options": [
    //         { "name": "1", "value": "1" },
    //         { "name": "2", "value": "2" },
    //         { "name": "3", "value": "3" },
    //         { "name": "4", "value": "4" },
    //         { "name": "5", "value": "5" },
    //         { "name": "6", "value": "6" },
    //         { "name": "7", "value": "7" },
    //         { "name": "8", "value": "8" },
    //         { "name": "9", "value": "9" },
    //         { "name": "10", "value": "10" },
    //         { "name": "11", "value": "11" },
    //         { "name": "12", "value": "12" },
    //         { "name": "13", "value": "13" },
    //         { "name": "14", "value": "14" },
    //         { "name": "15", "value": "15" },
    //         { "name": "16", "value": "16" },
    //         { "name": "17", "value": "17" },
    //         { "name": "18", "value": "18" },
    //         { "name": "19", "value": "19" },
    //         { "name": "20", "value": "20" },
    //         { "name": "21", "value": "21" },
    //         { "name": "22", "value": "22" },
    //         { "name": "23", "value": "23" },
    //         { "name": "24", "value": "24" },
    //         { "name": "25", "value": "25" },
    //         { "name": "26", "value": "26" },
    //         { "name": "27", "value": "27" },
    //         { "name": "28", "value": "28" },
    //         { "name": "29", "value": "29" },
    //         { "name": "30", "value": "30" },
    //         { "name": "31", "value": "31" },
    //         { "name": "32", "value": "32" },
    //         { "name": "33", "value": "33" },
    //         { "name": "34", "value": "34" },
    //         { "name": "35", "value": "35" },
    //         { "name": "36", "value": "36" }
          
    //     ],
    //     "placeholder":"Select Type",
    //     "textcss": "standard",
    //     "icon": <CiCalendar className="text-black -mt-6 ml-[16vh]" />,
    //   },
      {
        "name":"description",
        "label": "Description",
        "type": "text",
        "placeholder": "Add Description",
        "textcss": "standard",
        // "icon": <CiCalendar className="text-gray-500" />,
      },
      {
        icon: <TfiBrushAlt  className="mr-2 text-gray-500" />, 
        label: 'Supporting images or documents',
        name:'aadhar_document',
        type: 'file',
        textcss: 'standard_document',
        placeholder: 'Choose file(s)...',
        iconPosition:"start",
     
      },

    ];

    export const Addnew= [
        { label: 'Add New',  style: 'buttonStyleAddnew' , type:"button"},
      ];
      // export const add = [
      //   {
      //     label: (
      //       <button className=''>
      //         <span className=''><FiPlus  className=""/></span> <div className='border border-cyan-500 text-cyan-500 p-1 px-4 rounded-sm flex items-center mb-2 mr-2 h-10 w-[30vh]'>Add New</div>
      //       </button>
      //     ),
      //     type: "button",
      //   },
      // ];
      export const add = [
        { label: 'Add New', icon:<AiFillPlusCircle className="text-cyan-500" />, style: 'buttonStyleAddnew',type:"button" },
    
       ];
      
      export const Cancel= [
        { label: 'Cancel',  style: 'buttonStyleCancel' , type:"button"},
      ];
      export const Requestreimbursement= [
        { label: 'Request Reimbursement',  style: 'buttonStyleApply' , type:"submit"},
      ];
      