import React from 'react';
// import BodyContent from '../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
import { useNavigate } from 'react-router-dom';
import { BoxContent,BoxContent2 } from '../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
import Box from '../../components/AppSettingComponents/CTCTemplateSettingForm/Box'

const CTCTemplateSetting = () => {
  const navigate = useNavigate()
  return (
    <div className='ml-36'>
      <Box Configs={BoxContent} />
      <Box Configs={BoxContent2} /> 
      {/* CTC Template Setting */}
    </div>
  )
}

export default CTCTemplateSetting;





