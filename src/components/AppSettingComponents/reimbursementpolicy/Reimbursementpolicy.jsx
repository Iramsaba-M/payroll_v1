

import Switch from 'react-switch';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoSettingsOutline } from "react-icons/io5";
import OptionsComponent from '../../form/Formfields/options/OptionsComponent';
import TextStyle from '../../form/Formfields/text/TextStyle';
import { RiArrowDownSFill } from "react-icons/ri";
import TextComponent from '../../form/DocumentsForm/TextComponent';
// import { RiArrowDownSFill } from "react-icons/ri";
const TableHeaders = [
  {
    name: 'Policy Name',
    className: 'TableHeaders1',

  },
  {
    name: 'Maximum Amount',
    className: 'TableHeaders',
  },
  {
    name: 'Minimum Amount',
    className: 'TableHeaders',
  },
  {
    name: 'Enable',
    className: 'TableHeaders',
  },


];


const TextComponentData1 = [

  {
    name: 'reimbursement_type',
    placeholder: 'policy name',
    textcss: 'aa',
  },


];


const TextComponentData2 = [

  {
    name: 'maximum_amount',
    placeholder: '',
    textcss: 'cc',
  },


];
const TextComponentData3 = [

  {
    name: 'minimum_amount',
    placeholder: '',
    textcss: 'cc',
  },


];

const TextComponentData4 = [

  {
    name: 'enable',
    textcss: 'aa',
  },


];


const OptionData = [
  {
    "name": "period",
    "label": " Claiming period :",
    "type": "options",
    "options": [
      { "name": "Within 1 month of expense made", "value": "Within 1 month of expense made" },
      { "name": "Within 2 month of expense made", "value": "Within 2 month of expense made" },
      { "name": "Within 3 month of expense made", "value": "Within 3 month of expense made" },
      { "name": "Within 4 month of expense made", "value": "Within 4 month of expense made" },
      { "name": "Within 5 month of expense made", "value": "Within 5 month of expense made" },
      { "name": "Within 6 month of expense made", "value": "Within 6 month of expense made" },
    ],
    "placeholder": "Select Components ",
    "textcss": "Remoption",
    "icon": <RiArrowDownSFill className="text-gray-400 -mt-3  -translate-x-16" />,
  },
];
const ReimbrusementPolicy = () => {
  const [formData, setFormData] = useState({
    reimbursement_type: '',
    maximum_amount: '',
    minimum_amount: '',
    period: '',
  });
  const [tableData, setTableData] = useState([]);

  const handleSwitchChange = (checked, rowIndex) => {
    const newData = [...tableData];
    newData[rowIndex].enable = checked; // Update the enable state at the correct row index
    setTableData(newData);
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }));
};


  const handleOptionChange = (value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      period: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Only formData is sent, not the entire tableData
    await axios.post('http://localhost:3000/savepolicyrem', formData);
    // await axios.post( 'http://192.168.0.134:5000/reimbursements/', formData);
    fetchTableData(); // Optionally fetch table data if needed to see updates
    setFormData({
      reimbursement_type: '',
      maximum_amount: '',
      minimum_amount: '',
      period: '',
      enable: '', // Assuming enable should also be reset
    });
};

  const fetchTableData = async () => {
    // const response = await axios.get('http://192.168.0.162:5000/reimbursements/');
    const response = await axios.get(' http://localhost:3000/savepolicyrem');
    const fetchedData = response.data.map(item => ({
      ...item,
      enable: item.enable || false // Default to false if undefined
    }));
    setTableData(fetchedData);
  };

  useEffect(() => {
    fetchTableData();
  }, []);



  return (

    <form onSubmit={handleSubmit}>
      <div className='p-8 w-[130vh]'>
        <div className='-translate-y-[8.5vh] flex '>
          <h1 className="text-xl font-semibold ">Reimbursement policy</h1>
          <IoSettingsOutline className="h-5 w-5 ml-6 mt-2 " />
        </div>

        <div className='-mt-12 overflow-x-hidden w-56'>
          {OptionData.map((field, index) => (
            <div key={index} className={`form-field ${field.fieldstyle}`}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  options={field.options}
                  onChange={(e) => handleOptionChange(e.target.value)} // Assuming OptionsComponent can handle this prop
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                />
              )}
            </div>
          ))}
        </div>

        <table className="w-[140vh] -mt-4 ">
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
             <tr key={rowIndex} className='h-12 border border-b-1'>
             {TextComponentData1.map((data, i) => (
               <td key={i} className="">
                 <TextComponent
                   name={data.name}
                   onChange={(handleChange)}
                   value={row[data.name]}
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
                      value={row[data.name]}
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
                      value={row[data.name]}
                      placeholder={data.placeholder}
                      textcss={TextStyle[data.textcss]}
                    />
                  </td>
                 ))}
                <td>
                  <Switch
                    onChange={(checked) => handleSwitchChange(checked, rowIndex)}
                    checked={row.enable} // Use the `enable` value from the current row data
                    handleDiameter={20}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    className='ml-24'
                  />
                </td>
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

              <td>

                <Switch
                  onChange={handleSwitchChange}
                  checked={formData.enable || false} // Reflect formData's 'enable' status
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  className='ml-24'
                />


              </td>
            </tr>

          </tbody>
        </table>
      </div>
      {/* <button type="submit">Submit</button> */}
      <div className="ml-[140vh] mb-2 ">
        {" "}
        {/* <ButtonConfig Config={ButtonSave} /> */}
        <button type='submit' className="bg-blue-400 text-white py-2  px-4 -ml-[26px] rounded-lg">Save</button>
      </div>
    </form>
  )
}

export default ReimbrusementPolicy;