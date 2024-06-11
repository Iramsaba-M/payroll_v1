import { useState, useEffect } from 'react';
import OptionsComponent from '../../form/Formfields/options/OptionsComponent';
import TextStyle from '../../form/Formfields/text/TextStyle';
import { OptionsComponentData1, ButtonContent, TableHeaders, TextComponentData1, TextComponentData2, TextComponentData3, TextComponentData4, TextComponentData5 } from './LeavepolicyContent'
import TextComponent from '../../form/Formfields/text/TextComponent';
import Switch from "react-switch"; // import the Switch component
import { LiaPeopleCarrySolid } from "react-icons/lia";
import ButtonConfig from '../../../configurations/Button/ButtonConfig';
import { fetchData, patchData, postData } from '../../../services/APIService';
import { admin_settings_Leave_Policy } from '../../../api/EndPoints';
import { MdOutlineEdit, MdCheck, MdCancel } from "react-icons/md";
import NumberComponent from "../../form/Formfields/number/numbercompoent"
import ErrorScreen from '../../../errorhandling/ErrorScreen';
import ErrorScreen from '../../../errorhandling/ErrorScreen';

const Leavepolicy = () => {
  const [formData, setFormData] = useState({
    policy_name: '',
    allowed_leaves: null,
    duration: '',
    paytype: ''
  });
  const [tableData, setTableData] = useState([]);
  const [carryforward, setCarryforward] = useState(false);
  const [encashment, setEncashment] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [editRowData, setEditRowData] = useState(null);
  const [prevname, setPrevname] = useState(null);
  const [errorCode, setErrorCode] = useState(null);

  const handleChange = (e, rowIndex = null) => {
    const { name, value } = e.target;
    if (rowIndex !== null) {
      setEditRowData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleEditClick = (rowIndex, row) => {
    setEditRowIndex(rowIndex);
    setPrevname(row)
    setEditRowData({ ...row });
  };

  const handleSwitchChange = (checked, rowIndex) => {
    console.log('checked', checked)
    if (rowIndex === editRowIndex) {
      setEditRowData(prev => ({ ...prev, forward: checked }));
    } else {
      const newData = [...tableData];
      newData[rowIndex].forward = checked;
      setTableData(newData);
    }
  };

  const handleEncashmentChange = (checked, rowIndex) => {
    if (rowIndex === editRowIndex) {
      setEditRowData(prev => ({ ...prev, encashment: checked }));
    } else {
      const newData = [...tableData];
      newData[rowIndex].encashment = checked;
      setTableData(newData);
    }
  };

  const handleCancel = () => {
    setEditRowIndex(null);
    setEditRowData(null);
  };

  const handleSave = async () => {

    const updateleavedata = {
      policy_name: editRowData.policy_name || '',
      allowed_leaves: editRowData.allowed_leaves || '',
      duration: editRowData.duration || '',
      paytype: editRowData.paytype || '',
      forward: editRowData.forward || false,
      encashment: editRowData.encashment || false
    }

    const url = `${admin_settings_Leave_Policy}/?policy_name=${prevname.policy_name}`;

    try {
      const response = await patchData(url, updateleavedata);
      console.log(response);
      fetchTableData();
    } catch (error) {
      console.error('Failed to update leave policy:', error);
    }

    handleCancel();
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.policy_name.trim()) {
      console.error('Error: leave name is required');
      alert('Error: leave name is required');
      return;
    }
    try {
      const leavedata = { ...formData, "forward": carryforward, "encashment": encashment }
      console.log('leavedata', leavedata)
      const response = await postData(admin_settings_Leave_Policy, leavedata);

      console.log(response)

      fetchTableData();

      setFormData({
        policy_name: '',
        allowed_leaves: null,
        duration: '',
        forward: '',
        encashment: '',
        paytype: ''
      });
    } catch (error) {
      console.error('Failed to post', error);
    }
  };

  const fetchTableData = async () => {


    try {

      const response = await fetchData(admin_settings_Leave_Policy);
      setTableData(response);

      console.log('response.get', response.data)
    } catch (error) {
      console.error('Error posting data:', error);
      setErrorCode(error.response ? error.response.status : 500); // Set error code based on response
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

  if (errorCode) {
    return <ErrorScreen errorCode={errorCode} />; // Render ErrorScreen if an error occurred
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='px-8 mt-8'>
        <div className='-translate-y-[8vh] flex '>
          <h1 className="text-xl ">Company Leave Policy</h1>
          <LiaPeopleCarrySolid className="h-7 w-7 ml-6 mt-  " />
        </div>
        <table className="w-[80vh]  ml-3">
          <thead className="bg-gray-100 text-gray-600 font-normal h-[8vh] ">
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
                      value={editRowIndex === rowIndex ? editRowData.name : row[data.name]}
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
                      value={editRowIndex === rowIndex ? editRowData.name : row[data.name]}
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
                      value={editRowIndex === rowIndex ? editRowData.name : row[data.name]}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                    />
                  </td>
                ))}
                {TextComponentData4.map((data, i) => (
                  <td key={i} className="">
                    <div className='text-center w-[20vh]'>
                      <Switch
                        onChange={(checked) => handleSwitchChange(checked, rowIndex)}
                        checked={editRowIndex === rowIndex ? editRowData.forward : row[data.name]}
                        onColor="#6b6aef" // color when the switch is ON                 
                        handleDiameter={20}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" // box shadow
                        height={25}
                        width={50}
                      />
                    </div>
                  </td>
                ))}
                {TextComponentData5.map((data, i) => (
                  <td key={i} className="">
                    <div className='text-center w-[20vh]'>
                      <Switch
                        onChange={(checked) => handleEncashmentChange(checked, rowIndex)}
                        checked={editRowIndex === rowIndex ? editRowData.encashment : row[data.name]}
                        onColor="#6b6aef" // color when the switch is oN               
                        handleDiameter={20}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        height={25}
                        width={50}
                      />
                    </div>
                  </td>
                ))}
                {OptionsComponentData1.map((data, i) => (
                  <td key={i} className="">
                    <OptionsComponent
                      name={data.name}
                      onChange={(e) => handleChange(e, rowIndex)}
                      value={editRowIndex === rowIndex ? editRowData.name : row[data.name]}
                      options={data.options}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                      icon={data.icon}
                    />
                  </td>
                ))}
                <td className="">
                  {editRowIndex === rowIndex ? (
                    <>
                      <MdCheck onClick={handleSave} className="cursor-pointer text-green-500 hover:text-green-700 mx-2" />
                      <MdCancel onClick={handleCancel} className="cursor-pointer text-red-500 hover:text-red-700 mx-2" />
                    </>
                  ) : (
                    <MdOutlineEdit onClick={() => handleEditClick(rowIndex, row)} className="cursor-pointer text-blue-500 hover:text-blue-700 ml-1 w-16" />
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
                  <NumberComponent
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
                  <div className='text-center w-[19vh]'>
                    <Switch
                      onChange={(checked) => setCarryforward(checked)}
                      checked={carryforward}
                      onColor="#6b6aef" // color when the switch is on
                      handleDiameter={20}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" // box shadow
                      height={25}
                      width={50}
                    /></div>
                </td>
              ))}

              {TextComponentData5.map((data, i) => (
                <td key={i} className=" ">
                  <div className='text-center w-[20vh]'>
                    <Switch
                      onChange={(checked) => setEncashment(checked)}
                      checked={encashment}
                      onColor="#6b6aef" // color when the switch is on
                      handleDiameter={20}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" // box shadow
                      height={25}
                      width={50}
                    />
                  </div>
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
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex justify-end mr-6 py-5'>
        <ButtonConfig Config={ButtonContent} />
      </div>
    </form>
  )
}

export default Leavepolicy;