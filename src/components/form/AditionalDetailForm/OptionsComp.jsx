
import { useState, useEffect } from 'react';
import { OptionData } from '../../../pages/Admin pages/Employee/AditionalDetail/AditionalDetailsContent';
import { RiArrowDropDownFill } from "react-icons/ri";

const OptionsComp = ({ onChange, initialValues = {},onBlur,formik }) => {
  const [employee_status, setEmployeeStatus] = useState(initialValues.employee_status || '');
  const [type, setType] = useState(initialValues.type || '');
  const [selectedLeaveOption, setSelectedLeaveOption] = useState(initialValues.reason || '');

  useEffect(() => {
    setEmployeeStatus(initialValues.employee_status || '');
    setType(initialValues.type || '');
    setSelectedLeaveOption(initialValues.reason || '');
  }, [initialValues]);

  const handleEmployeeStatusChange = (value) => {
    setEmployeeStatus(value);
    setType('');
    setSelectedLeaveOption('');
    onChange({ employee_status: value });
  };

  const handleTypeChange = (value) => {
    setType(value);
    setSelectedLeaveOption('');
    onChange({ employee_status, type: value });
  };

  const handleLeaveOptionChange = (value) => {
    setSelectedLeaveOption(value);
    onChange({ employee_status, type, reason: value });
  };

  return (
    <div>
      <h1 className='text-gray-800 font-semibold mb-2'>Employee Status</h1>
      <div className='flex mb-4'>
        <div className='form-line flex mb-4'>
          <label className='block text-gray-600 text-xs font-bold my-1'></label>
          <select
            style={{ appearance: 'none', background: 'transparent' }}
            className="border-b-2 hover:border-blue-500 border-gray-100 bg-transparent text-gray text-xs my-2 mr-14 mb-2 px-2 py-1 w-60"
            value={employee_status}
            onChange={(e) => handleEmployeeStatusChange(e.target.value)}
            onBlur={onBlur}
          >
            <option value="" disabled>Select Employee Status</option>
            {OptionData.employeeStatusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <RiArrowDropDownFill className='size-6 -ml-[11vh] mt-2 text-gray-700' />
          {formik.touched["employee_status"] && formik.errors["employee_status"] && <p className='error-form text-xs -ml-28 -translate-y-7 text-red-600'>{formik.errors["employee_status"]}</p>}
        </div>
        <div className='flex justify-col mb-4 ml-28'>
          {employee_status === 'Inactive' && (
            <div className='flex justify-evenly'>
              <label className='block text-gray-600 text-xs font-bold my-1'></label>
              <select
                style={{ appearance: 'none', background: 'transparent' }}
                className="border-b-2 hover:border-blue-500 border-gray-100 bg-transparent text-gray text-xs my-2 mr-14 mb-2 px-2 py-1 w-60 leading-tight focus:outline-none"
                value={type}
                onChange={(e) => handleTypeChange(e.target.value)}
                onBlur={onBlur}
              >
                <option value="" disabled>Select Additional Status</option>
                {OptionData.typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
              <RiArrowDropDownFill className='h-6 w-6 -ml-[11vh] mt-2 text-gray-700' />
              {type === 'Leave' && (
                <div className='ml-20'>
                  <label className='block text-gray-600 text-xs font-bold my-1'></label>
                  <select
                    style={{ appearance: 'none', background: 'transparent' }}
                    className="border-b-2 hover:border-blue-500 border-gray-100 bg-transparent text-gray text-xs my-2 mr-14 mb-2 px-2 py-1 w-60 leading-tight focus:outline-none"
                    value={selectedLeaveOption}
                    onChange={(e) => handleLeaveOptionChange(e.target.value)}
                    onBlur={onBlur}
                  >
                    <option value="" disabled>Select Leave Option</option>
                    {OptionData.leaveOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <RiArrowDropDownFill className='h-6 w-6 -mt-8 ml-[29vh] text-gray-700' />
                </div>
              )}
              {type === 'Suspended' && (
                <div className='ml-20'>
                  <label className='block text-gray-600 text-xs font-bold my-1'></label>
                  <select
                    style={{ appearance: 'none', background: 'transparent' }}
                    className="border-b-2 hover:border-blue-500 border-gray-100 bg-transparent text-gray text-xs my-2 mr-14 mb-2 px-2 py-1 w-60 leading-tight focus:outline-none"
                    value={selectedLeaveOption}
                    onChange={(e) => handleLeaveOptionChange(e.target.value)}
                    onBlur={onBlur}
                  >
                    <option value="" disabled>Select Suspended Option</option>
                    {OptionData.suspendedOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <RiArrowDropDownFill className='h-6 w-6 -mt-9 ml-[29vh] text-gray-700' />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OptionsComp;
