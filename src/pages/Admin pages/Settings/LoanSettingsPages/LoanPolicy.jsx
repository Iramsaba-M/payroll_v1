
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoSettingsOutline } from "react-icons/io5";
import OptionsComponent from "../../../../components/form/Formfields/options/OptionsComponent"
import TextStyle from "../../../../components/form/Formfields/text/TextStyle";
import { ButtonSave, OptionsComponentData1, OptionsComponentData2, TableHeaders, TextComponentData1, TextComponentData2, TextComponentData3, TextComponentData4 } from './LoanPolicyData'
import TextComponent from "../../../../components/form/Formfields/text/TextComponent";
import ButtonConfig from '../../../../configurations/Button/ButtonConfig';

const LoanPolicy = () => {
  const [formData, setFormData] = useState({
    policyname: '',
    maxamt: '',
    noofinstallments: '',
    roi: '',
    applyeligibility: '',
    documentneeded: ''
  });
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/savepolicy', formData);
    fetchTableData();
    // Reset form data
    setFormData({
      policyname: '',
      maxamt: '',
      noofinstallments: '',
      roi: '',
      applyeligibility: '',
      documentneeded: ''
    });
  };

  const fetchTableData = async () => {
    const response = await axios.get('http://localhost:3000/savepolicy');
    setTableData(response.data);
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <form onSubmit={handleSubmit} className=''>
     <div className='p-8 w-[150vh] '>
        <div className='-translate-y-[8.5vh] flex '>
          <h1 className="text-xl font-semibold ">Types Of Loan List</h1>
          <IoSettingsOutline className="h-5 w-5 ml-6 mt-2 " />
        </div>
        <table className="w-[155vh] -mt-8  overflow-x-0 overflow-y-0">
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
                      onChange={handleChange}
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
                {TextComponentData4.map((data, i) => (
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
      </div>
      {/* <button type="submit">Submit</button> */}
      <div className="ml-[150vh] mb-2 ">
          {" "}
          <ButtonConfig Config={ButtonSave} />
        </div>
    </form>
  )
}

export default LoanPolicy;