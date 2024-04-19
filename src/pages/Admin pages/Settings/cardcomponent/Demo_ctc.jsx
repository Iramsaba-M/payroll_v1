/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import TextComponent from '../../../../components/form/Formfields/text/TextComponent';
import TextStyle from '../../../../components/form/Formfields/text/TextStyle';
import OptionsComponent from '../../../../components/form/Formfields/options/OptionsComponent';
import { TextData, OptionData, TableHeaders ,TextComponentData,OptionsComponentData, TextComponentData1,SaveTemplate,nameData} from './Demo_ctc_data';
import ButtonConfig from '../../../../configurations/Button/ButtonConfig';
import ModalComponent from '../../../../components/form/Formfields/modal/ModalComponent';
import { ModalConfig2 } from '../../../../components/form/Formfields/modal/ModalConfig2';
import { postData } from '../../../../services/APIService';
import { ctctemplate } from '../../../../api/EndPoints';
const Demo_ctc = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    window.history.back();
  };
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [templateName, setTemplateName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOptionChange = (value) => {
    setSelectedOptions(prevOptions => [...prevOptions, { name: value, value }]);
  };
  const handleButtonClick = (type) => {
    if (type === "submit") {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

const gatherDataAndPost = async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const tableData = selectedOptions.map((option, index) => ({
    name: option.name,
    percentage_value: document.querySelector(`input[name="value_${index}"]`).value,
    of_compenent: document.querySelector(`select[name="component_${index}"]`).value,
    operator: document.querySelector(`select[name="conditionType_${index}"]`).value,
    true_value: document.querySelector(`input[name="typeValue_${index}"]`).value, 
    false_value: document.querySelector(`input[name="conditionValue_${index}"]`).value, 
  }));

  const dataToPost = {
    templateName,
    tableData,
  };

  try {
    const response = await postData(ctctemplate, dataToPost);
    // const response = await axios.post('http://localhost:3000/test', dataToPost);
    console.log(response.data);

    console.log(dataToPost);

    setSelectedOptions([]);
    setTemplateName('');
  } catch (error) {
    console.error(error);
  }
};

  return (
    // <form onSubmit={gatherDataAndPost} >
    <form onSubmit={(event) => gatherDataAndPost(event)}>
    <div className=" p-8 w-[160vh]">
      <div className="flex items mb-8">
        {/* <div className="cursor-pointer -translate-y-[7vh] -translate-x-4 " onClick={handleGoBack}>
          <IoIosArrowBack size={12} />
        </div> */}
        <div className='-translate-y-16'>
        <h1 className="text-xl ">Add CTC Template</h1>
        </div>
      </div>

      <div className='flex -mt-[13vh]'>
        <div className='ml-3 mt-4'>
          {TextData.map((field, index) => (
            <div key={index} className={`form-field ${field.fieldstyle}`}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "text" && (
                <TextComponent
                  name={field.name}
                  placeholder={field.placeholder}
                  textcss={TextStyle[field.textcss].input}
                  onChange={(e) => setTemplateName(e.target.value)} 
                />
              )}
            </div>
          ))}
        </div>

        <div className='mt-12 ml-[66vh] overflow-x-hidden'>
          {OptionData.map((field, index) => (
            <div key={index} className={`form-field ${field.fieldstyle}`}>
              <label className={TextStyle[field.textcss].label}>
                {field.label}
              </label>
              {field.type === "options" && (
                <OptionsComponent
                  name={field.name}
                  options={field.options}
                  onChange={(e) => handleOptionChange(e.target.value)}
                  textcss={TextStyle[field.textcss].input}
                  placeholder={field.placeholder}
                  icon={field.icon}
                  
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="table-container">
        
        <table className="w-[150vh] mt-5 ml-3  ">
          <thead className="bg-indigo-500 text-white">
            <tr>
              {TableHeaders.map((header, index) => (
                // /<th key={index} className={header.className}>
                <th key={index} className={TextStyle[header.className]}>
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
       <tbody>
  {selectedOptions.map((option, index) => (
    <tr key={index} className="border border-blue-600 h-10">
      <td className="border border-blue-600  text-center">{option.name}</td>
    

      {TextComponentData.slice(0,1).map((data, i) => (
        <td key={index} className="border border-blue-600">
          <TextComponent
            name={`${data.name}_${index}`}
            // name={`${nameData.valueName}_${index}`}
            placeholder={data.placeholder}
             textcss={TextStyle[data.textcss]}
          />
        </td>
      ))}

      {OptionsComponentData.slice(0,2).map((data,) => (
        <td key={index} className="border border-blue-600">
          <OptionsComponent
            name={`${data.name}_${index}`}
              // name={`${nameData.componentName}_${index}`}
            options={data.options}

            placeholder={data.placeholder}
            textcss={TextStyle[data.textcss]}
            icon={data.icon}
       
                
          />
        </td>
      ))}

{TextComponentData1.slice(0,2).map((data, i) => (
        <td key={index} className="border border-blue-600">
          <TextComponent
            name={`${data.name}_${index}`}
            // name={`${nameData.valueName}_${index}`}
            placeholder={data.placeholder}
            // textcss={data.textcss}
            textcss={TextStyle[data.textcss]}
          />
        </td>
      ))}
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
    

    <div className='ml-[137vh] mt-4'>
    <ButtonConfig Config={SaveTemplate}  onClick={() => handleButtonClick("submit")}  />
   
    </div>
    <ModalComponent
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                config={ModalConfig2}
              />
    </form>
  );
};

export default Demo_ctc;
