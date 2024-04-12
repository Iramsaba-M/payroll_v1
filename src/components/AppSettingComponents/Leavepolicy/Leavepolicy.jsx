// import React from 'react';

// const Leavepolicy =() =>{
//   return (
//     <div>
//       leave Policy
//     </div>
//   );
// }

// export default Leavepolicy;


import { useState, useEffect } from 'react';
import  axios from 'axios';
import { IoSettingsOutline } from "react-icons/io5";
import OptionsComponent from '../../form/Formfields/options/OptionsComponent';
import TextStyle from '../../form/Formfields/text/TextStyle';
import { OptionsComponentData1, ButtonContent, TableHeaders, TextComponentData1, TextComponentData2, TextComponentData3, TextComponentData4,TextComponentData5 } from './LeavepolicyContent'
import TextComponent from '../../form/Formfields/text/TextComponent';
import Switch from "react-switch"; // import the Switch component
import { LiaPeopleCarrySolid } from "react-icons/lia";
import Button from '../../../configurations/Button/Button';
import ButtonConfig from '../../../configurations/Button/ButtonConfig';
import { fetchData, postData } from '../../../services/APIService';
import { admin_Leave_and_Holiday_get, admin_Leave_and_Holiday_post } from '../../../api/EndPoints';

const Leavepolicy = () => {
  const [formData, setFormData] = useState({
    policy_name: '',
    allowed_leaves: '',
    duration: '',
    paytype: ''
  });
  const [tableData, setTableData] = useState([]);
  const [carryforward, setCarryforward] = useState(false);
  const [encashment, setEncashment] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const leavedata={"policy":{...formData,"forward":carryforward,"encashment":encashment}}
    console.log('leavedata',leavedata)
    const response = await postData(admin_Leave_and_Holiday_post, leavedata);

    // const response = await axios.post('http://192.168.0.134:5001/settings/holidays',leavedata);
  //  const response= await axios.post('http://localhost:3000/admin_leavepolicy', leavedata);
    console.log(response)

    fetchTableData();
    // Reset form data
    setFormData({
      policy_name: '',
      allowed_leaves: '',
      duration: '',
      forward:'',
      encashment:'',
      paytype: ''
    });
  };

  const fetchTableData = async () => {
   

    try {
      const response = await axios.get('http://192.168.0.134:5001/settings/policies');
      // const response = await axios.get('http://localhost:3000/admin_leavepolicy');
      // const response = await fetchData(admin_Leave_and_Holiday_get);
      console.log('response.get',response.data)
      setTableData(response.data);
  } catch (error) {
      console.error("Failed to fetch data: ", error);
      if (axios.isAxiosError(error)) {
          // You can handle Axios specific errors here
          console.error("Axios error: ", error.message);
      } else {
          console.error("Unexpected error: ", error);
      }
  }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

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
                   <div className='text-center w-[20vh]'>
                <Switch
                  onChange={(checked) => setCarryforward(checked)}
                  checked={row[data.name]}
                  onColor="#6b6aef" // color when the switch is                  
                  handleDiameter={20} // handle size
                  uncheckedIcon={false} // remove the unchecked icon
                  checkedIcon={false} // remove the checked icon
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" // box shadow
                  height={25} // height of the switch
                  width={50} // width of the switch
                  className="" // class name for further CSS customization
                />
                  </div>
                  </td>
                ))}
                {TextComponentData5.map((data, i) => (
                  <td key={i} className="">
                    <div className='text-center w-[20vh]'>
                    <Switch
                  onChange={(checked) => setEncashment(checked)}
                  checked={row[data.name]}
                  onColor="#6b6aef" // color when the switch is on
                 
                  handleDiameter={20} // handle size
                  uncheckedIcon={false} // remove the unchecked icon
                  checkedIcon={false} // remove the checked icon
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" // box shadow
                  height={25} // height of the switch
                  width={50} // width of the switch
                  className="" // class name for further CSS customization
                /></div>
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
      <div className='text-center w-[19vh]'>
      <Switch
                  onChange={(checked) => setCarryforward(checked)}
                  checked={carryforward}
                  onColor="#6b6aef" // color when the switch is on
                  handleDiameter={20} // handle size
                  uncheckedIcon={false} // remove the unchecked icon
                  checkedIcon={false} // remove the checked icon
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" // box shadow
                  height={25} // height of the switch
                  width={50} // width of the switch
                  className="" // class name for further CSS customization
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
                  handleDiameter={20} // handle size
                  uncheckedIcon={false} // remove the unchecked icon
                  checkedIcon={false} // remove the checked icon
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" // box shadow
                  height={25} // height of the switch
                  width={50} // width of the switch
                  className="" // class name for further CSS customization
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
