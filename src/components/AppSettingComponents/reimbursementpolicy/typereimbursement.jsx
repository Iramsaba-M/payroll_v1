
import axios from 'axios';
import { IoSettingsOutline } from "react-icons/io5";
import TextStyle from "../../../components/form/Formfields/text/TextStyle";
import TextComponent from "../../../components/form/Formfields/text/TextComponent";
import Switch from "react-switch";
import { useState, useEffect } from "react";

const TypeOfReimbursement = () => {
  const TableHeaders = [
    {
      name: 'Reimbursement Type',
      className: 'TableHeadersR',
    },
    {
      name: 'Enable/Disable',
      className: 'TableHeaders',
    },
  ];

  const [reimbursementData, setReimbursementData] = useState([]);
  const [newReimbursementType, setNewReimbursementType] = useState('');
  const [newReimbursementEnabled, setNewReimbursementEnabled] = useState(false);

  useEffect(() => {
    axios.get('http://192.168.0.151:5000/reimbursements/')
      .then(response => setReimbursementData(response.data))
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  const handleNewReimbursementSubmit = async (e) => {
    e.preventDefault();
    const newReimbursement = {
      reimbursement_type: newReimbursementType,
      enable: newReimbursementEnabled
    };
    try {
      const response = await axios.post('http://192.168.0.151:5000/reimbursements/', newReimbursement);
      if (response.status === 200 || response.status === 201) {
        console.log("New data posted successfully");
        setReimbursementData([...reimbursementData, newReimbursement]); // Optionally add to local state
        setNewReimbursementType(''); // Reset the input field
        setNewReimbursementEnabled(false); // Reset the switch
      } else {
        console.error("Failed to post new data");
      }
    } catch (error) {
      console.error("Error posting new data: ", error);
    }
  };

  return (
    <form onSubmit={handleNewReimbursementSubmit} className=" ">
      <div className=' w-[120vh]  '>
        <div className='-translate-y-[4vh] ml-12 flex '>
          <h1 className="text-xl font-semibold ml-6 ">Types Of Reimbursement</h1>
          <IoSettingsOutline className="h-5 w-5 ml-6 mt-2 " />
        </div>
        <table className="w-[140vh] mt- ml-[9vh]">
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
            {reimbursementData.map((item, index) => (
              <tr key={index} className="h-12 ">
                <td className="">
                  <TextComponent
                    name={`type_${index}`}
                    value={item.reimbursement_type}
                    textcss='ml-4'
                    onChange={(e) => {
                      const newData = [...reimbursementData];
                      newData[index].reimbursement_type = e.target.value;
                      setReimbursementData(newData);
                    }}
                  />
                </td>
                <td className="">
                  <Switch
                    onChange={(checked) => {
                      const newData = [...reimbursementData];
                      newData[index].enable = checked;
                      setReimbursementData(newData);
                    }}
                    checked={item.enable}
                    onColor="#60A5FA"
                    handleDiameter={20}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    className="ml-[15vh]"
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td className="h-12">
                <TextComponent
                  name='new_reimbursement_type'
                  value={newReimbursementType}
                  onChange={e => setNewReimbursementType(e.target.value)}
                  placeholder='Add new'
                  textcss={TextStyle['e']}
                />
              </td>
              <td>
                <Switch
                  onChange={setNewReimbursementEnabled}
                  checked={newReimbursementEnabled}
                  onColor="#60A5FA"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  className="ml-[15vh]"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="ml-[150vh] mt-12 ">
          <button type='submit' className="bg-blue-400 text-white py-2 px-4 -ml-[80px] rounded-lg">save</button>
        </div>
      </div>
    </form>
  );
}

export default TypeOfReimbursement;