
import { Outlet, useNavigate } from 'react-router-dom';
import { BoxContent, BoxContent2 } from '../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
import Box from '../../components/AppSettingComponents/CTCTemplateSettingForm/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../configurations/Card/Card';
const CTCTemplateSetting = () => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/tempname')
      .then(response => {
        if (response.data[0].name) {
          setTemplates(response.data[0].name);
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
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