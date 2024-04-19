
import { useState, useEffect } from "react";
import axios from 'axios';
// import { CiEdit, CiTickSquare, CiCloseSquare } from "react-icons/ci";
import { BsFiletypePdf } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FileComponentData, TableHeaders, TextComponentData1 } from "./TypeOfLoanData";
import TextComponent from "../../../../components/form/Formfields/text/TextComponent";
import FileComponent from "../../../../components/form/DocumentsForm/FileComponent";
import ButtonConfig from "../../../../configurations/Button/ButtonConfig";
import { ButtonSave } from "./LoanPolicyData";
import Switch from "react-switch";
import { MdOutlineEdit, MdCheck, MdCancel } from "react-icons/md";
import TextStyle from "../../../../components/form/Formfields/text/TextStyle";
import { CiEdit } from "react-icons/ci";

const TypeOfLoan = () => {
  const [loanData, setLoanData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editState, setEditState] = useState(null);
  const [loanType, setLoanType] = useState("");
  const [loanPolicyName, setLoanPolicyName] = useState("");
  const [enable, setEnable] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.0.136:5000/loans/");
        setLoanData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditState({ ...loanData[index] });
  };

  const handleSave = async () => {
    const formData = new FormData();
  
    // Append specific data fields to formData
    formData.append('loan_type', editState.loan_type);
    if (editState.enable !== undefined) {
      formData.append('enable', editState.enable ? 'true' : 'false');
    }
  
    // Assume editState.policy_file is the File object from input
    if (editState.policy_file) {
      const base64Content = await convertFileToBase64(editState.policy_file);
      formData.append('policy_filename', editState.policy_file.name);
      formData.append('policy', base64Content);
    }
  
    const url = `http://192.168.0.136:5000/loan/${encodeURIComponent(editState.loan_type)}`;
  
    try {
      const response = await axios({
        method: 'patch',
        url: url,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
      });
  
      if (response.status === 200) {
        console.log('Loan Updated:', response.data);
        fetchData(); // Optionally refresh the table data
        handleCancel(); // Reset edit state
      }
    } catch (error) {
      console.error('Failed to update loan:', error);
    }
  };
  const downloadPdf = (base64String, fileName) => {
    if (!base64String) {
      console.error("No PDF data available.");
      return;
    }
    const linkSource = `data:application/pdf;base64,${base64String}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };
  
  
  
  
  const handleCancel = () => {
    setEditingIndex(null);  // Resets your editing state
  };

 
  const convertFileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]); // Split to remove the 'data:*/*;base64,' part
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!file) {
      console.error("No file selected or wrong file type.");
      return;
    }
  
    const base64 = await convertFileToBase64(file);
    const formData = new FormData();
    formData.append('loan_type', loanType);
    formData.append('policy', base64); // Now sending as base64
    formData.append('enable', enable);
  
    // Debugging log to inspect FormData contents
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value instanceof Blob ? `${value.name}, ${value.size} bytes` : value}`);
    }
  
    try {
      const response = await axios({
        method: 'post',
        url: 'http://192.168.0.136:5000/loan',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error posting data:', error.response ? error.response.data : error.message);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className=" ">
      <div className=' w-[160vh]'>
        <div className='-translate-y-[4vh] ml-12 flex'>
          <h1 className="text-xl font-semibold ml-6 ">Types Of Loan List</h1>
          <IoSettingsOutline className="h-5 w-5 ml-6 mt-2"/>
        </div>
        <table className="w-[150vh] ml-[9vh]">
          <thead className="bg-gray-100 text-gray-600 font-normal h-[10vh] shadow-t-lg shadow-r-lg ">
            <tr>
              {TableHeaders.map((header, index) => (
                <th key={index} className={TextStyle[header.className]}>
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="shadow-lg">
            {loanData.map((loan, i) => (
              <tr key={i} className={editingIndex === i ? "h-12 bg-yellow-100" : "h-12"}>
                <td>
                  {editingIndex === i ? (
                    <TextComponent
                      value={editState.loan_type}
                      onChange={(e) => setEditState({ ...editState, loan_type: e.target.value })}
                    />
                  ) : (
                    <span>{loan.loan_type}</span>
                  )}
                </td>
                <BsFiletypePdf 
  className="ml-[15vh] h-6 w-6 mt-4 cursor-pointer" 
  onClick={() => {
    const loanType = loan.loan_type;
    const policyFileBase64 = loan.policy // Adjusted to match the backend key

    console.log('Loan Type:', loanType);
    console.log('PDF Base64:', policyFileBase64);

    if (loanType && policyFileBase64) {
      downloadPdf(policyFileBase64, `${loanType.replace(/\s+/g, '_')}.pdf`);
    } else {
      console.error('Invalid loan data or missing PDF.');
    }
  }}
/>


                <td>
                  {editingIndex === i ? (
                    <>
                      <MdCheck className="h-6 w-6" onClick={() => handleSave(i)} />
                      <MdCancel className="h-6 w-6" onClick={handleCancel} />
                    </>
                  ) : (
                    <MdOutlineEdit className="ml-[17vh] h-6 w-6" onClick={() => handleEdit(i)} />
                  )}
                </td>
                <td>
                  {editingIndex === i ? (
                    <Switch
                      onChange={(checked) => setEditState({ ...editState, enable: checked })}
                      checked={editState.enable}
                      onColor="#6b6aef"
                      handleDiameter={28}
                      uncheckedIcon={false}
                      checkedIcon={false}
                    />
                  ) : (
                    <Switch
                      onChange={(checked) => {
                        const newLoanData = [...loanData];
                        newLoanData[i].enable = checked;
                        setLoanData(newLoanData);
                      }}
                      checked={loan.enable}
                      onColor="#6b6aef"
                      handleDiameter={28}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      className="ml-32"
                    />
                  )}
                </td>
              </tr>
            ))}
            <tr>
    {TextComponentData1.map((data, i) => (
          <td key={i} className="h-12">
            <TextComponent
              name={data.name}
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              placeholder={data.placeholder}
              textcss={TextStyle[data.textcss]}
            />
          </td>
        ))}

         {FileComponentData.slice(0,1).map((data, i) => (
            <td key={i} className="">
<FileComponent
  name="policy_file"
  placeholder="Upload Policy File"
  onChange={(event) => setFile(event.target.files[0])}
  textcss={TextStyle[data.textcss]}
  accept="application/pdf" // Ensure only PDF files are accepted
/>


            </td>
          ))} 
        <td className=" ">
        <MdOutlineEdit className="ml-[17vh] h-6 w-6"/>
        </td>
        <td className="">
          <Switch
            onChange={(checked) => setEnable(checked)}

            checked={enable}
            onColor="#6b6aef" // color when the switch is on
            handleDiameter={0} // handle size
            uncheckedIcon={false} // remove the unchecked icon
            checkedIcon={false} // remove the checked icon
            className="ml-32" // class name for further CSS customization
          />
        </td>
      </tr>
          </tbody>
        </table>
        <div className="ml-[150vh] mt-12">
        <button type='submit' className="bg-blue-400 text-white py-2 px-4 -ml-[80px] rounded-lg">save</button>
        </div>
      </div>
    </form>
  );
};

export default TypeOfLoan;
fi