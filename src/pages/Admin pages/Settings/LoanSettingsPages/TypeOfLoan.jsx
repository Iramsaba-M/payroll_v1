
import { CiEdit } from "react-icons/ci";
import axios from 'axios';
import { IoSettingsOutline } from "react-icons/io5";
import { FaFilePdf, FaPen } from "react-icons/fa"; // import the icons
import TextStyle from "../../../../components/form/Formfields/text/TextStyle";
import { FileComponentData, TableHeaders, TextComponentData1, TextComponentData2 } from "./TypeOfLoanData";
import TextComponent from "../../../../components/form/Formfields/text/TextComponent";
import { TextComponentData } from "./TypeOfLoanData";
import { useState, useEffect } from "react";
import Switch from "react-switch"; // import the Switch component
import FileComponent from "../../../../components/form/DocumentsForm/FileComponent";
import ButtonConfig from "../../../../configurations/Button/ButtonConfig";
import { ButtonSave } from "./LoanPolicyData";
import { BsFiletypePdf } from "react-icons/bs";
const TypeOfLoan = () => {
  const [loanType, setLoanType] = useState("");
  const [loanPolicyName, setLoanPolicyName] = useState("");
  const [switchSaving, setSwitchSaving] = useState(false);
  const [loanData, setLoanData] = useState([]);

  const resetForm = () => {
    setLoanType("");
    setLoanPolicyName("");
    setSwitchSaving(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/saveloan");
        setLoanData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const updateData = async () => {
    try {
      const response = await axios.patch("http://localhost:3000/saveloan", {
        loanType,
        loanPolicyName,
        switchSaving,
      });
      if (response.status === 200) {
        setLoanData(response.data);
      }
    } catch (error) {
      console.error("Error updating data: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLoan = {
      loanType,
      loanPolicyName,
      switchSaving,
    };

    try {
      const response = await axios.post("http://localhost:3000/saveloan", newLoan);

      if (response.status === 200 || response.status === 201) {
        setLoanData([newLoan, ...loanData]); // add the new loan at the beginning of the array
        resetForm(); // reset the form
        updateData(); // update the data
      } else {
        // handle error
      }
    } catch (error) {
      console.error("Error posting data: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" ">
      <div className=' w-[160vh]  '>
        <div className='-translate-y-[4vh] ml-12 flex '>
          <h1 className="text-xl font-semibold ml-6 ">Types Of Loan List</h1>
          <IoSettingsOutline className="h-5 w-5 ml-6 mt-2 "/>
        </div>
        <table className="w-[150vh] mt- ml-[9vh]">
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
              <tr key={i} className="h-12 ">
                <td className="">
                  <TextComponent
                    name={`loanType_${i}`}
                    value={loan.loanType}
                    textcss='ml-4 outline-none'
                    onChange={(e) => {
                      const newLoanData = [...loanData];
                      newLoanData[i].loanType = e.target.value;
                      setLoanData(newLoanData);
                    }}
                  />
                </td>
                {/* <td className="">
                  <TextComponent
                    name={`loanPolicyName_${i}`}
                    value={loan.loanPolicyName}
                    textcss='ml-[10vh] outline-none'
                    onChange={(e) => {
                      const newLoanData = [...loanData];
                      newLoanData[i].loanPolicyName = e.target.value;
                      setLoanData(newLoanData);
                    }}
                  />
                </td> */}
                <BsFiletypePdf className="ml-[15vh] h-6 w-6 mt-4"   />
                <td className="">
                  {/* <FaPen className="ml-[17vh]" />  */}
                  <CiEdit className="ml-[17vh] h-6 w-6"/>
                </td>
                <td className="">
                  <Switch
                     onChange={(checked) => {
                       const newLoanData = [...loanData];
                       newLoanData[i].switchSaving = checked;
                       setLoanData(newLoanData);
                     }}
                     checked={loan.switchSaving}
                     onColor="#6b6aef" // color when the switch is on
                    handleDiameter={0}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    className="ml-[15vh] outline-none" // class name for further CSS customization
                  />
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
        {/* {TextComponentData2.map((data, i) => (
          <td key={i} className="">
            <TextComponent
              name={data.name}
              value={loanPolicyName}
              onChange={(e) => setLoanPolicyName(e.target.value)}
              placeholder={data.placeholder}
              textcss={TextStyle[data.textcss]}
            />
          </td>
        ))} */}
         {FileComponentData.slice(0,1).map((data, i) => (
            <td key={i} className="">
              <FileComponent
                   name={`${data.name}_${i}`}
                   placeholder={data.placeholder}
                   textcss={TextStyle[data.textcss]}
                />
            </td>
          ))} 
        <td className=" ">
        <CiEdit className="ml-[17vh] h-6 w-6"/>
        </td>
        <td className="">
          <Switch
            onChange={(checked) => setSwitchSaving(checked)}
            checked={switchSaving}
            onColor="#6b6aef" // color when the switch is on
            handleDiameter={0} // handle size
            uncheckedIcon={false} // remove the unchecked icon
            checkedIcon={false} // remove the checked icon
            className="ml-[15vh]" // class name for further CSS customization
          />
        </td>
      </tr>
          </tbody>
        </table>
        {/* <button type="submit">Submit</button> */}
        <div className="ml-[150vh] mt-12 ">
        <ButtonConfig Config={ButtonSave} />
        </div>
      </div>
    </form>
  )
}

export default TypeOfLoan