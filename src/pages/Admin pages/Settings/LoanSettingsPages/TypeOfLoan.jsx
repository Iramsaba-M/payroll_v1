
import { useState, useEffect } from "react";
import { BsFiletypePdf } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEdit, MdCheck, MdCancel } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri"; // Icon for delete
import { AiOutlineUpload } from "react-icons/ai"; // Icon for upload
import TextComponent from "../../../../components/form/Formfields/text/TextComponent";
import FileComponent from "../../../../components/form/DocumentsForm/FileComponent";
import Switch from "react-switch";
import { TableHeaders, TextComponentData1, FileComponentData } from "./TypeOfLoanData";
import TextStyle from "../../../../components/form/Formfields/text/TextStyle";
import { fetchData, patchDatafiles, postDataImage } from "../../../../services/APIService";
import { Type_of_loan_get, Type_of_loan_patch, Type_of_loan_post } from "../../../../api/EndPoints";
import ErrorScreen from "../../../../errorhandling/ErrorScreen";

const TypeOfLoan = () => {
  const [loanData, setLoanData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editState, setEditState] = useState({});
  const [loanType, setLoanType] = useState("");
  const [enable, setEnable] = useState(false);
  const [file, setFile] = useState(null);
  const [prevname, setPrevname] = useState(null);
  const [errorCode, setErrorCode] = useState(null);

  const fetchData1 = async () => {
    try {
      const response = await fetchData(Type_of_loan_get);
      // setLoanData(response.data);
      setLoanData(response); // This line seems redundant
    } catch (error) {
      console.error('Error posting data:', error);
      setErrorCode(error.response ? error.response.status : 500); // Set error code based on response
    }

  };
  useEffect(() => {
    fetchData1();
  }, []);

  if (errorCode) {
    return <ErrorScreen errorCode={errorCode} />; // Render ErrorScreen if an error occurred
  }

  const handleEdit = (index) => {
    setEditingIndex(index);
    const selectedLoan = { ...loanData[index] };
    setPrevname(selectedLoan.loan_type); // Set prevname to the original loan_type
    setEditState(selectedLoan);
    const selectedLoan = { ...loanData[index] };
    setPrevname(selectedLoan.loan_type); // Set prevname to the original loan_type
    setEditState(selectedLoan);
  };


  const handleCancel = () => {
    setEditingIndex(null);
    setEditState({});
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('new_loan_type', editState.loan_type || '');
    formData.append('enable', editState.enable ? 'true' : 'false');
    formData.append('maximum_amount', editState.maximum_amount || '');
    formData.append('no_of_repayment', editState.no_of_repayment || '');
    formData.append('roi_in_percentage', editState.roi_in_percentage || '');
    formData.append('eligibility', editState.eligibility || '');
    formData.append('document_needed', editState.document_needed || '');

    // Assuming editState.loan_type is your identifier for the loan
    // const loanType = editState.loan_type;

    const url = `${Type_of_loan_patch}/${encodeURIComponent(prevname)}`;


    // Handle file appending similarly to your CURL example
    if (editState.policy_file instanceof File) {
      formData.append('policy', editState.policy_file, editState.policy_file.name);
    }

    try {
      const response = await patchDatafiles(url, formData); // Using the service API function
      console.log('Loan Updated:', response);
      fetchData1(); // Optionally refresh the data
      handleCancel(); // Reset edit state
    } catch (error) {
      console.error('Failed to update loan:', error.response ? error.response.data : error.message);
    }
  };


  const downloadPdf = (base64String, fileName) => {
    const linkSource = `data:application/pdf;base64,${base64String}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error("No file selected or wrong file type.");
      return;
    }
    const formData = new FormData();
    formData.append('loan_type', loanType);
    formData.append('policy_file', file);
    formData.append('enable', enable);

    try {
      const response = await postDataImage(Type_of_loan_post, formData); // Using the service API function
      console.log('Success:', response.data);
      fetchData1(); // Refresh data after posting
      fetchData1(); // Refresh data after posting
    } catch (error) {
      console.error('Error posting data:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" ">
      <div className=' w-[160vh]'>
        <div className='-translate-y-[4vh] ml-12 flex'>
          <h1 className="text-xl font-semibold ml-6 ">Types Of Loan List</h1>
          <IoSettingsOutline className="h-5 w-5 ml-6 mt-2" />
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
                <td>
                  {editingIndex === i ? (
                    editState.policy_file ? (
                      <>
                        <RiDeleteBin6Line className="h-6 w-6 ml-32cursor-pointer" onClick={() => setEditState({ ...editState, policy_file: null })} />
                        <span>{editState.policy_file.name || "No file selected"}</span>
                      </>
                    ) : (
                      <label className="cursor-pointer">
                        <AiOutlineUpload className="h-6 w-6 ml-32" />
                        <input type="file" className="hidden" accept="application/pdf"
                          onChange={(e) => setEditState({ ...editState, policy_file: e.target.files[0] })} />
                      </label>
                    )
                  ) : (
                    <BsFiletypePdf className="h-6 w-6 ml-32  cursor-pointer" onClick={() => downloadPdf(loan.policy, `${loan.loan_type.replace(/\s+/g, '_')}.pdf`)} />
                  )}
                </td>
                <td>
                  {editingIndex === i ? (
                    <>
                      <MdCheck className="h-6 w-6 ml-32 cursor-pointer" onClick={handleSave} />
                      <MdCancel className="h-6 w-6 ml-32 cursor-pointer" onClick={handleCancel} />
                    </>
                  ) : (
                    <MdOutlineEdit className="h-6 w-6 ml-32" onClick={() => handleEdit(i)} />
                  )}
                </td>
                <td>
                  <Switch
                    onChange={(checked) => setEditState({ ...editState, enable: checked })}
                    checked={editingIndex === i ? editState.enable : loan.enable}
                    onColor="#6b6aef"
                    handleDiameter={28}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    className="ml-32"
                  />
                </td>
              </tr>
            ))}
            <tr>
  {TextComponentData1.map((data, i) => (
    <td key={i}>
      <TextComponent
        value={loanType}
        onChange={(e) => setLoanType(e.target.value)}
        placeholder={data.placeholder}
      />
    </td>
  ))}
  {FileComponentData.slice(0, 1).map((data, i) => (
    <td key={i}>
      <FileComponent
        name="policy_file"
        placeholder="Upload Policy File"
        onChange={(file) => {
          if (file) {
            console.log("Selected File:", file);
            if (file.type === "application/pdf") {
              setFile(file);
              console.log("PDF file selected:", file);
            } else {
              console.error("Invalid file type, only PDFs are allowed.");
            }
          } else {
            console.error("No file selected.");
          }
        }}
        textcss={TextStyle[data.textcss]}
        accept="application/pdf"
      />
    </td>
  ))}
  <td>
    {/* <MdOutlineEdit className="h-6 w-6 ml-32" onClick={() => handleEdit(i)} /> */}
  </td>
  <td>
    <Switch
      onChange={(checked) => setEnable(checked)}
      checked={enable}
      onColor="#6b6aef"
      handleDiameter={28}
      uncheckedIcon={false}
      checkedIcon={false}
      className="ml-32"
    />
  </td>
</tr>

          </tbody>
        </table>
        <td>
          <button type='submit' className="bg-blue-400 text-white py-2 px-4 ml-[150vh] mt-4 rounded-lg">save</button>
        </td>
      </div>
    </form>
  );
};

export default TypeOfLoan;
