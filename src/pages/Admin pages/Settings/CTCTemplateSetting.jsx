
import { Outlet, useNavigate } from 'react-router-dom';
import { BoxContent, BoxContent2 } from '../../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
import Box from '../../../components/AppSettingComponents/CTCTemplateSettingForm/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchData } from '../../../services/APIService';
import { ctctemplatename } from '../../../api/EndPoints';
// import Card from '../../configurations/Card/Card';
const CTCTemplateSetting = () => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchDataFromEndpoint = async () => {
      try {
        const data = await fetchData(ctctemplatename);
        if (data[0].name) {
          setTemplates(data[0].name);
        }
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchDataFromEndpoint();
  }, []);


  const handleClick = () => {
    navigate('../Demo_ctc');
  };

  return (
    <div>
      <div className='ml-36' onClick={handleClick}  >
        <Box Configs={BoxContent} />
      </div>
 
     <div className='ml-[19vh]'>
  {templates.map((template, index) => {
    const Configs = [
      { 
        ...BoxContent2[0], 
        title: template 
      }
    ];
    return <Box key={index} Configs={Configs} />
  })}
</div>
      <Outlet/>
    </div>
  );
};

export default CTCTemplateSetting;