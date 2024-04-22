
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Switch from 'react-switch';
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEdit, MdCheck, MdCancel } from "react-icons/md";
import TextComponent from '../../form/DocumentsForm/TextComponent';
import TextStyle from '../../form/Formfields/text/TextStyle';
import OptionsComponent from '../../form/Formfields/options/OptionsComponent';
import { RiArrowDownSFill } from "react-icons/ri";
import { Reimbrusement_settings_get, Reimbrusement_settings_patch, Reimbrusement_settings_post } from '../../../api/EndPoints';
import { fetchData, patchData, postData } from '../../../services/APIService';

const TableHeaders = [
  { name: 'Policy Name', className: 'TableHeaders1' },
  { name: 'Maximum Amount', className: 'TableHeaders' },
  { name: 'Minimum Amount', className: 'TableHeaders' },
  { name: 'Enable', className: 'TableHeaders' },
  { name: 'Edit', className: 'TableHeaders' },
];

const ReimbursementPolicy = () => {
  const [tableData, setTableData] = useState([]);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [editRowData, setEditRowData] = useState(null);
  const [formData, setFormData] = useState({ reimbursement_type: '', maximum_amount: '', minimum_amount: '', period: '', enable: false });
  const [prevname, setPrevname] = useState(null);


  useEffect(() => { fetchTableData(); }, []);

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
  //   // Build query string from editRowData
  //   const params = {
  //     reimbursement_type: editRowData.reimbursement_type || '',
  //     period: editRowData.period || '',
  //     minimum_amount: editRowData.minimum_amount || '',
  //     maximum_amount: editRowData.maximum_amount || '',
  //     enable: editRowData.enable || false
  //   }

  //   // Send PATCH request with query parameters
  //   const url = `http://192.168.0.112:8000/reimbursements/?reimbursement_type=${prevname.reimbursement_type}`;
  //   // const url = `http://localhost:3000/savepolicyrem/?${params}`;
  //   try {
  //     const response = await axios.patch(url, params);
  //     console.log(response.data.message); // Log success message from server
  //     fetchTableData();
  //   } catch (error) {
  //     console.error('Failed to update reimbursement policy:', error);
  //   }

  //   handleCancel(); // Reset edit state
  // };

  const handleSave = async () => {
    const params = {
      reimbursement_type: editRowData.reimbursement_type || '',
      period: editRowData.period || '',
      minimum_amount: editRowData.minimum_amount || '',
      maximum_amount: editRowData.maximum_amount || '',
      enable: editRowData.enable || false
    }

    // Construct the endpoint path with the reimbursement type parameter appended correctly
    const endpoint = `${Reimbrusement_settings_patch}?reimbursement_type=${encodeURIComponent(params.reimbursement_type)}`;

    try {
      // Assuming patchData is a function in your service API that handles the PATCH request
      const response = await patchData(endpoint, params); // Using the service API function
      console.log(response.message); // Log success message from server
      fetchTableData();
    } catch (error) {
      console.error('Failed to update reimbursement policy:', error);
    }

    handleCancel(); // Reset edit state
};


  const handleChange = (e, rowIndex = null) => {
    const { name, value } = e.target;
    if (rowIndex !== null) {
      setEditRowData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSwitchChange = (checked, rowIndex) => {
    if (rowIndex === editRowIndex) {
      setEditRowData(prev => ({ ...prev, enable: checked }));
    } else {
      const newData = [...tableData];
      newData[rowIndex].enable = checked;
      setTableData(newData);
    }
  };

  const fetchTableData = async () => {
    // const response = await axios.get('http://localhost:3000/savepolicyrem');
    const response = await fetchData(Reimbrusement_settings_get);
    // const response = await axios.get('http://192.168.0.136:5000/reimbursements/');

    // const fetchedData = response.data.map(item => ({ ...item, enable: item.enable || false }));
    // setTableData(response.data);
    setTableData(response);
  };

  const handleAddPolicy = async () => {
    if (formData.reimbursement_type && formData.maximum_amount && formData.minimum_amount && formData.period) {
      // await axios.post('http://localhost:3000/savepolicyrem', formData);
      // await axios.post('http://192.168.0.112:8000/reimbursements/', formData);
      await postData(Reimbrusement_settings_post, formData); 
      
      fetchTableData();
      setFormData({ reimbursement_type: '', maximum_amount: '', minimum_amount: '', period: '', enable: false });
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className='p-8 w-[130vh]'>
        <div className='-translate-y-[8vh] flex'>
          <h1 className="text-xl font-semibold">Reimbursement Policy</h1>
          <IoSettingsOutline className="h-5 w-5 ml-6 mt-2" />
        </div>

        <OptionsComponent
          name="period"
          label="Claiming period :"
          options={[
            { name: "Within 1 months of expense made", value: "1 months" },
            { name: "Within 3 months of expense made", value: "3 months" },
            { name: "Within 6 months of expense made", value: "6 months" }
          ]}
          onChange={handleChange}
          textcss={TextStyle['Remoption'].input}
          placeholder="Select period"
          icon={<RiArrowDownSFill className="text-gray-400 -mt-6 ml-44 -translate-x-16" />}
        />
        <div className="max-h-[60vh]  w-[150vh] overflow-y-auto ">
        <table className="w-[140vh] mt-2  ">
          <thead className="bg-gray-100 text-gray-600 font-normal h-[8vh]">
            <tr>
              {TableHeaders.map((header, index) => (
                <th key={index} className={TextStyle[header.className]}>{header.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className={`h-12 ${editRowIndex === rowIndex ? 'bg-blue-100' : ''}`}>
                <td className={TextStyle['aa']}>{editRowIndex === rowIndex ? <input type="text" name="reimbursement_type" value={editRowData.reimbursement_type} onChange={(e) => handleChange(e, rowIndex)} /> : row.reimbursement_type}</td>
                <td className={TextStyle['cc']}>{editRowIndex === rowIndex ? <input type="number" name="maximum_amount" value={editRowData.maximum_amount} onChange={(e) => handleChange(e, rowIndex)} /> : row.maximum_amount}</td>
                <td className={TextStyle['cc']}>{editRowIndex === rowIndex ? <input type="number" name="minimum_amount" value={editRowData.minimum_amount} onChange={(e) => handleChange(e, rowIndex)} /> : row.minimum_amount}</td>
                <td>
                  <Switch
                    onChange={(checked) => handleSwitchChange(checked, rowIndex)}
                    checked={editRowIndex === rowIndex ? editRowData.enable : row.enable}
                    handleDiameter={28}
                    offColor="#BBB"
                    onColor="#3DCB29"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    className='ml-12'
                  />
                </td>
                <td>
                  {editRowIndex === rowIndex ? (
                    <>
                      <MdCheck className="cursor-pointer ml-16" onClick={handleSave} />
                      <MdCancel className="cursor-pointer ml-16" onClick={handleCancel} />
                    </>
                  ) : (
                    <MdOutlineEdit className="cursor-pointer ml-16" onClick={() => handleEditClick(rowIndex, row)} />
                  )}
                </td>
              </tr>
            ))}
            {/* Add policy row */}
            <tr>
              <td><TextComponent name="reimbursement_type" onChange={handleChange} value={formData.reimbursement_type} placeholder="Enter policy name" textcss={TextStyle['aa']} /></td>
              <td><TextComponent name="maximum_amount" onChange={handleChange} value={formData.maximum_amount} placeholder="Enter max amount" textcss={TextStyle['cc']} /></td>
              <td><TextComponent name="minimum_amount" onChange={handleChange} value={formData.minimum_amount} placeholder="Enter min amount" textcss={TextStyle['cc']} /></td>
              <td> <Switch
  onChange={(checked) => setFormData({ ...formData, enable: checked })}
  checked={formData.enable}
  handleDiameter={28}
  offColor="#BBB"
  onColor="#3DCB29"
  uncheckedIcon={false}
  checkedIcon={true}
  className='ml-12'
/>

              </td>
              <td><button type="button" onClick={handleAddPolicy} className="bg-blue-500 text-white rounded px-4 py-1 ml-12">Add</button></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </form>
  );
};

export default ReimbursementPolicy;
