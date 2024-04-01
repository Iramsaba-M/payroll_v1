
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { BoxContent, BoxContent2 } from '../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
import Box from '../../components/AppSettingComponents/CTCTemplateSettingForm/Box';


const CTCTemplateSetting = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the 'demo-ctc' component
    // navigate('../Demo_ctc');
    navigate('../Demo_ctc');
  };

  return (
    <div>
    <div className='ml-36' onClick={handleClick}  >
      <Box Configs={BoxContent} />

      </div>
      <div className='ml-36'>
      <Box Configs={BoxContent2} />
      {/* CTC Template Setting */}
      </div>
   
    <Outlet/>
    </div>
  );
};

export default CTCTemplateSetting;