
import { useState, useEffect } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import TextComponent from "../../../../components/form/Formfields/text/TextComponent";
import OptionsComponent from "../../../../components/form/Formfields/options/OptionsComponent";
import { MdOutlineEdit, MdCheck, MdCancel } from "react-icons/md";
import TextStyle from '../../../../components/form/Formfields/text/TextStyle';
import ErrorScreen from '../../../../errorhandling/ErrorScreen';

// Assuming data structure and helper components are imported correctly
import {
  OptionsComponentData1,
  OptionsComponentData2,
  TableHeaders,
  TextComponentData1,
  TextComponentData2,
  TextComponentData3,
  TextComponentData4,

} from './LoanPolicyData';
import { Loan_policy_get, Loan_policy_patch, Loan_policy_post } from '../../../../api/EndPoints';
import { fetchData, patchDatafiles, postDataImage } from '../../../../services/APIService';

const LoanPolicy = () => {
  const [formData, setFormData] = useState({
    loan_type: '',
    maximum_amount: '',
    no_of_repayment: '',
    roi_in_percentage: '',
    eligibility: '',
    document_needed: ''
  });

  const [tableData, setTableData] = useState([]);
  const [file, setFile] = useState(null);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [editRowData, setEditRowData] = useState(null);
  const [prevname, setPrevname] = useState(null);
  const [errorCode, setErrorCode] =useState(null);
  


  const handleEditClick = (rowIndex, row) => {
    setPrevname(row);
    setEditRowIndex(rowIndex);
    setEditRowData({ ...row });
  };

  const handleCancel = () => {
    setEditRowIndex(null);
    setEditRowData(null);
  };

  // const handleSave = async () => {
  //   const formData = new FormData();
    
  //   formData.append('loan_type', editRowData.loan_type);
  //   formData.append('maximum_amount', editRowData.maximum_amount || '');
  //   formData.append('no_of_repayment', editRowData.no_of_repayment || '');
  //   formData.append('roi_in_percentage', editRowData.roi_in_percentage || '');
  //   formData.append('eligibility', editRowData.eligibility || '');
  //   formData.append('document_needed', editRowData.document_needed || '');
    
  //   // Handling boolean field
  //   if (editRowData.enable !== undefined) {
  //     formData.append('enable', editRowData.enable ? 'true' : 'false');
  //   }
    
  //   const url = `http://192.168.0.136:5000/loan/${encodeURIComponent(editRowData.loan_type)}`;
  
  //   try {
  //     const response = await axios.patch(url, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //     console.log('Loan Updated:', response.data.message);
  //     fetchTableData(); // Refresh the table data after update
  //   } catch (error) {
  //     console.error('Failed to update loan:', error);
  //   }
  
  //   handleCancel(); // Reset edit state
  // };
  // const handleChange = (e) => {
  //   if (editRowIndex !== null) {
  //     setEditRowData(prev => ({
  //       ...prev,
  //       [e.target.name]: e.target.value
  //     }));
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value
  //     });
  //   }
  // };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('new_loan_type', editRowData.loan_type || '');
    formData.append('maximum_amount', editRowData.maximum_amount || '');
    formData.append('no_of_repayment', editRowData.no_of_repayment || '');
    formData.append('roi_in_percentage', editRowData.roi_in_percentage || '');
    formData.append('eligibility', editRowData.eligibility || '');
    formData.append('document_needed', editRowData.document_needed || '');
    
    // Handling boolean field
    if (editRowData.enable !== undefined) {
      formData.append('enable', editRowData.enable ? 'true' : 'false');
    }
    
  const url = `${Loan_policy_patch}/${encodeURIComponent(prevname.loan_type)}`;



    
    try {
      const response = await patchDatafiles(url, formData); // Using the service API function
      console.log('Loan Updated:', response.message);
      fetchTableData(); // Refresh the table data after update
    } catch (error) {
      console.error('Failed to update loan:', error);
    }
  
    handleCancel(); // Reset edit state
  };
  
  const handleChange = (e) => {
    if (editRowIndex !== null) {
      setEditRowData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = new FormData();
  
  //   // Append text fields
  //   Object.keys(formData).forEach(key => {
  //     if (formData[key] !== null) {
  //       form.append(key, formData[key]);
  //     }
  //   });
  
  //   // Handle Boolean value - assuming `enable` needs to be included
  //   form.append('enable', true);
  
  //   // Handle File Upload - Assume you have state `file` for this example
  //   if (file) {
  //     form.append('policy_file', file, file.name);
  //   }
  
  //   // Making the POST request
  //   try {
  //     const response = await axios.post('http://192.168.0.136:5000/loan', form, {
        
  //       headers: {
  //         'accept': 'application/json',
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //     console.log('Submission response:', response.data);
  //     fetchTableData();
  //     setFormData({
  //       loan_type: '',
  //       maximum_amount: '',
  //       no_of_repayment: '',
  //       roi_in_percentage: '',
  //       eligibility: '',
  //       document_needed: ''
  //     });
  //     setFile(null);  // Reset file if you maintain file state
  //   } catch (error) {
  //     console.error('Failed to submit form:', error.response ? error.response.data : error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
  
    // Append text fields
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null) {
        form.append(key, formData[key]);
      }
    });
  
    // Handle Boolean value - assuming `enable` needs to be included
    form.append('enable', true);
  
    // Handle File Upload - Assume you have state `file` for this example
    if (file) {
      form.append('policy_file', file, file.name);
    }
  
    // Making the POST request using service API
    try {
      const response = await postDataImage(Loan_policy_post, form);
      console.log('Submission response:', response.data);
      fetchTableData();
      setFormData({
        loan_type: '',
        maximum_amount: '',
        no_of_repayment: '',
        roi_in_percentage: '',
        eligibility: '',
        document_needed: ''
      });
      setFile(null);  // Reset file if you maintain file state
    } catch (error) {
      console.error('Failed to submit form:', error.response ? error.response.data : error);
    }
  };
  

  const fetchTableData = async () => {
    try {
      // const response = await axios.get('http://192.168.0.136:5000/loans');
      const response = await fetchData(Loan_policy_get);
      // setTableData(response.data);
      setTableData(response);
    } catch (error) {
      console.error('Error posting data:', error);
      setErrorCode(error.response ? error.response.status : 500); // Set error code based on response
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  if (errorCode) {
    return <ErrorScreen errorCode={errorCode} />; // Render ErrorScreen if an error occurred
  }

  return (
    <form onSubmit={handleSubmit} className='p-8 w-[150vh]'>
      <div className='-translate-y-[8.5vh] flex'>
        <h1 className="text-xl font-semibold ">Types Of Loan List</h1>
        <IoSettingsOutline className="h-5 w-5 ml-6 mt-2" />
      </div>
      <table className="w-[150vh] -mt-8 overflow-x-auto overflow-y-auto">
        <thead className="bg-gray-100 text-gray-600 font-normal h-[8vh]">
          <tr>
            {TableHeaders.map((header, index) => (
              <th key={index} className={TextStyle[header.className]}>
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="h-10 border border-b-1">
        {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className={`h-12 border border-b-1 ${editRowIndex === rowIndex ? 'bg-blue-100' : ''}`}>
                {TextComponentData1.map((data, i) => (
                  <td key={i} className="">
                   <TextComponent
                      name={data.name}
                      onChange={(e) => handleChange(e, rowIndex)}
                      value={editRowIndex === rowIndex ? editRowData.reimbursement_type : row[data.name]}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                    />
                  </td>
                ))}
                {TextComponentData2.map((data, i) => (
                  <td key={i} className="">
                   <TextComponent
                      name={data.name}
                      onChange={(e) => handleChange(e, rowIndex)}
                      value={editRowIndex === rowIndex ? editRowData.reimbursement_type : row[data.name]}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                    />

                    
                  </td>
                ))}
                {TextComponentData3.map((data, i) => (
                  <td key={i} className="">
                   <TextComponent
                      name={data.name}
                      onChange={(e) => handleChange(e, rowIndex)}
                      value={editRowIndex === rowIndex ? editRowData.reimbursement_type : row[data.name]}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                    />
                  </td>
                ))}
                {TextComponentData4.map((data, i) => (
                  <td key={i} className="">
                   <TextComponent
                      name={data.name}
                      onChange={(e) => handleChange(e, rowIndex)}
                      value={editRowIndex === rowIndex ? editRowData.reimbursement_type : row[data.name]}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                    />
                  </td>
                ))}
                {OptionsComponentData1.map((data, i) => (
                  <td key={i} className="">
                    <OptionsComponent
                      name={data.name}
                      onChange={handleChange}
                      value={row[data.name]}
                      options={data.options}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                      icon={data.icon}
                    />
                  </td>
                ))}
                {OptionsComponentData2.map((data, i) => (
                  <td key={i} className="">
                    <OptionsComponent
                      name={data.name}
                      onChange={handleChange}
                      value={row[data.name]}
                      options={data.options}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                      icon={data.icon}
                    />
                  </td>
                  
                ))}
                 <td>
                  {editRowIndex === rowIndex ? (
                    <>
                      <MdCheck className="cursor-pointer" onClick={handleSave} />
                      <MdCancel className="cursor-pointer" onClick={handleCancel} />
                    </>
                  ) : (
                    <MdOutlineEdit className="cursor-pointer ml-2" onClick={() => handleEditClick(rowIndex, row)} />
                  )}
                </td>
              </tr>
            ))}
          <tr className=' h-12 border border-b-1'>
            {TextComponentData1.map((data, i) => (
              <td key={i} className="">
                <TextComponent
                  name={data.name}
                  onChange={handleChange}
                  value={formData[data.name]}
                  placeholder={data.placeholder}
                  textcss={TextStyle[data.textcss]}
                />
              </td>
            ))}
    {TextComponentData2.map((data, i) => (
    <td key={i} className="">
      <TextComponent
        name={data.name}
        onChange={handleChange}
        value={formData[data.name]}
        placeholder={data.placeholder}
        textcss={TextStyle[data.textcss]}
      />
    </td>
  ))}

  {TextComponentData3.map((data, i) => (
    <td key={i} className="">
      <TextComponent
        name={data.name}
        onChange={handleChange}
        value={formData[data.name]}
        placeholder={data.placeholder}
        textcss={TextStyle[data.textcss]}
      />
    </td>
  ))}

  {TextComponentData4.map((data, i) => (
    <td key={i} className="">
      <TextComponent
        name={data.name}
        onChange={handleChange}
        value={formData[data.name]}
        placeholder={data.placeholder}
        textcss={TextStyle[data.textcss]}
      />
    </td>
  ))}

  {OptionsComponentData1.map((data, i) => (
    <td key={i} className="">
      <OptionsComponent
        name={data.name}
        onChange={handleChange}
        value={formData[data.name]}
        options={data.options}
        placeholder={data.placeholder}
        textcss={TextStyle[data.textcss]}
        icon={data.icon}
      />
    </td>
  ))}

  {OptionsComponentData2.map((data, i) => (
    <td key={i} className="">
      <OptionsComponent
        name={data.name}
        onChange={handleChange}
        value={formData[data.name]}
        options={data.options}
        placeholder={data.placeholder}
        textcss={TextStyle[data.textcss]}
        icon={data.icon}
      />
    </td>
  ))}
          </tr>
        </tbody>
      </table>
      <div className="ml-[150vh] mb-2">
      <button type='submit' className="bg-blue-400 text-white py-2 px-4 -ml-[60px] mt-2 rounded-lg">save</button>


      </div>
    </form>
  );
}

export default LoanPolicy;
