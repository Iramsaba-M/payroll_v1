//ADMIN

//Employees

// export const EMP_API = 'employee/basic-details/';

// export const CARDS_API = 'cardData';

export const EMP_API = 'employee/basic-details/employees/paginations/';

export const BASIC_DETAILS_API_Get = 'employee/basic-details';

export const CARDS_API = 'employee/total_ctc_and_employees';

export const Delete_All ='employee/employee_delete/'

export const BANK_DETAILS_API_GET='employee/bank-details';

export const BASIC_DETAILS_API = 'employee/basic-details';

export const SALARY_DETAILS_POST_API = 'employee/salary_details/generate_ctc';

export const SALARY_DETAILS_GET_API = 'employee/salary_details';

export const BANK_DETAILS_API = 'employee/bank-details';

export const DOCUMENTS_API = 'employee/document-details';

export const ADITIONAL_DETAILS_API = 'employee/additional-details';

export const Import_GET_API = 'employee/download_template';

export const Import_UPLOAD__GET_API = 'employee/upload_and_process';

export const BasicDetails_export = 'employee/export/basic-details/';

export const SalaryDetails_export = 'employee/export/salary-details';

export const BankDetails_export = 'employee/export/bank-details';

export const Additionaldetails_export = 'employee/export/additional-details';

//Employee- PUT
export const BASIC_DETAILS_API_put = 'employee/basic-details';

export const BANK_DETAILS_API_PUT='employee/bank-details';

export const SALARY_DETAILS_PUT_API = 'employee/salary_details';

//Runpayroll
export const Runpayroll ='run_payroll/fetch_monthly_data';//sb done api testing

export const payslips ='run_payroll/fetch_employee_data ';//sb done api testing 

export const view ='history/dowload';

//Setting- Leave setting

export const admin_settings_Holiday_list = 'settings/settings-holiday';

export const admin_settings_Leave_Policy = 'settings/settings-policy';

//Setting- Loan setting
export const Type_of_loan_get ='settings/loan';

export const Type_of_loan_post ='settings/loan';

export const Type_of_loan_patch ='settings/loan';

export const Loan_policy_get ='settings/loan';

export const Loan_policy_post ='settings/loan';

export const Loan_policy_patch ='settings/loan';

//Setting- Reibursement setting
export const Reimbrusement_settings_get ='settings/settings/reimbursements';

export const Reimbrusement_settings_post ='settings/settings/reimbursements';

export const Reimbrusement_settings_patch ='settings/settings/reimbursements';

export const DOCUMENT_DETAILS_API_GET ='employee/document-details';

export const DOCUMENTS_DETAILS_PUT_API= 'employee/document-details';

export const ADITIONAL_DETAILS_PUT_API = 'employee/additional-details';

//Setting- CTC setting
export const ctctemplate = 'test';

export const ctctemplatename ='tempname';

export const reviewpayroll = 'modal';

//Home and Report 
export const Home_and_Reportdata ='reports/calculate_total_monthly_ctc'

export const Home_and_Report_BarGraphdata ='reports/calculate_graph_data'

//Admin Notification
 
export const Leave_notification_admin ='leave_settings/';
 
export const Leave_notification_patch ='update_leave_settings/';
 
export const Loan_notification_admin ='loan_employee';
 
export const Loan_notification_patch ='employees/';

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ENDUSER

//My Attendance
// export const EndUser_ApplyLeave = 'enduser_applyleave';

export const EndUser_ApplyLeave = 'enduser/apply_leave/';//api done 

export const EndUser_Leave_Balance ="enduser/apply_leave/balanace/"//api done 

// export const EndUser_Attendance = 'enduser/my-attendence/punch/';

export const EndUser_Get_Attendance = 'enduser/my-attendence/employee/';//api done 

export const EndUser_punch_status = 'enduser/my-attendence/punch/';//frontend all ok backend minor error all rready punched by employee 

//My Payslips
export const mypayslip ='enduser/payslip';//sb done api testing

export const mypayslipdownload ='payslip/';

//Notification
export const EndUser_notification = 'enduser/user/notification/';

//Raise a request
export const EndUser_ApplyLoan = 'enduser/user/apply/request';

export const EndUser_ApplyReimbursement = 'enduser/reimbursement/apply';//sb tested for  reimbursement form multiple reim also checked with backend 

//Report
export const EndUser_leaves_report ='enduser/user/employee_leaves/';

//enduser_home
export const ENDUSER_HOME_EMPLOYEE_CTC ='employees'

