
import { useState, useEffect } from 'react';
import axios from 'axios';
import TextStyle from '../../form/Formfields/text/TextStyle';
import { ButtonContent, TableHeaders, TextComponentData1, TextComponentData2, TextComponentData3, TextComponentData4 } from './HolidaypolicyContent'
import TextComponent from '../../form/Formfields/text/TextComponent';
import Switch from "react-switch"; 
import ButtonConfig from '../../../configurations/Button/ButtonConfig';
import { BiEditAlt } from "react-icons/bi";
import { PiAirplaneTilt } from "react-icons/pi";
import { MdOutlineEdit, MdCheck, MdCancel } from "react-icons/md";
import { fetchData, patchData, postData } from '../../../services/APIService';
import { admin_Leave_and_Holiday_post, admin_settings_Holiday_list } from '../../../api/EndPoints';

const Holidaypolicy = () => {
  const [formData, setFormData] = useState({
    holiday_name: '',
    date: '',
    enable:''
  });
  const [tableData, setTableData] = useState([]);
  const [enable, setHolidaystate] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [editRowData, setEditRowData] = useState(null);
  const [prevname, setPrevname] = useState(null);

  
  //////////////////////////////////////////////////
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
  console.log('prevname',prevname,'edit',editRowData)

  const handleSwitchChange = (checked, rowIndex) => {
    console.log('checked', checked)
    if (rowIndex === editRowIndex) {
      setEditRowData(prev => ({ ...prev, enable: checked }));
    } else {
      const newData = [...tableData];
      newData[rowIndex].enable = checked;
      setTableData(newData);
    }
  };


  const handleCancel = () => {
    setEditRowIndex(null);
    setEditRowData(null);
  };

  const handleSave = async () => {

    const updatedholidaydata = {
      holiday_name: editRowData.holiday_name || '',
      date: editRowData.date || '',
      enable: editRowData.enable || false,
    }
    console.log('patch',updatedholidaydata)

    // Send PATCH request with query parameters
    // const url = `http://192.168.0.112:5000/settings/holiday/?holiday_name=${prevname.holiday_name}`;
    // const url = `admin_leavepolicy/?policy_name=${updatedholidaydata.policy_name}`;
    const url = `${admin_settings_Holiday_list}/?holiday_name=${prevname.holiday_name}`;
    try {
      // const response = await axios.patch(url, updatedholidaydata);
      // console.log(response.data.message); // Log success message from server

      const response = await patchData(url,updatedholidaydata);
      console.log(response.message)
      fetchTableData();
    } catch (error) {
      console.error('Failed to update holiday policy:', error);
    }

    handleCancel(); 
  };

  ////////////////////////////////////

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (!formData.holiday_name.trim()) {
      console.error('Error: Holiday name is required');
      alert('Error: Holiday name is required');
      return; 
  }
    
    try {
      const holidaydata = { ...formData, "enable": enable }
    // await axios.post('http://localhost:3000/admin_holiday', holidaydata);
    // const response = await axios.post('http://192.168.0.112:5002/settings/holiday/',holidaydata);

    const response = await postData(admin_settings_Holiday_list, holidaydata);
    fetchTableData();
    
    setFormData({
      holiday_name: '',
      date: '',
      enable: ''
    });
    } catch (error) {
      console.error('Failed to post', error);
    }
    
  };

  const fetchTableData = async () => {
    // const response = await axios.get('http://192.168.0.112:5002/settings/holiday/');

    // const response = await axios.get('http://localhost:3000/admin_holiday');
    // setTableData(response.data);

    const response = await fetchData(admin_settings_Holiday_list);
    setTableData(response);
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className='px-8 mt-8'>
        <div className='-translate-y-[8vh] flex '>
          <h1 className="text-xl ">Holiday List</h1>
          <PiAirplaneTilt className="h-6 w-6 ml-6 mt-1  " />
        </div>
        <table className="w-[150vh]  ml-3">
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

                  <td key={i} className="" >
                    
                    {editRowIndex === rowIndex ? (
                    <>
                      <MdCheck onClick={handleSave} className="cursor-pointer text-green-500 hover:text-green-700 ml-[18vh] mx-2" />
                      <MdCancel onClick={handleCancel} className="cursor-pointer text-red-500 hover:text-red-700 ml-[18vh] mx-2" />
                    </>
                  ) : (
                    <BiEditAlt onClick={() => handleEditClick(rowIndex, row)} className="cursor-pointer text-gray-600 text-xl hover:text-blue-700 ml-[14vh] w-16" />
                  )}
                  </td>

                ))}

                {TextComponentData4.map((data, i) => (
                  <td key={i} className="">
                    <div className='text-center w-[30vh] translate-x-12'>
                    <Switch
                        onChange={(checked) => handleSwitchChange(checked, rowIndex)}
                        checked={editRowIndex === rowIndex ? editRowData.enable : row[data.name]}
                        onColor="#6b6aef"                  
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


              </tr>
            ))}

            <tr className=' h-12 border border-b-1'>
              <td className="">
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
              </td>

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
              
              <td></td>

              {TextComponentData4.map((data, i) => (
                <td key={i} className="">
                  <div className='text-center w-[30vh] translate-x-12'>


                    <Switch
                      onChange={(checked) => setHolidaystate(checked)}
                      checked={enable}
                      onColor="#6b6aef" // color when the switch is on                 
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




export default Holidaypolicy;

