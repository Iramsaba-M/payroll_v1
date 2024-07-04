import { Outlet, useNavigate } from 'react-router-dom';
import { HolidayListcontent, Leavepolicycontent } from '../../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
import Box from '../../../components/AppSettingComponents/CTCTemplateSettingForm/Box';
import { IoMdArrowBack } from "react-icons/io";
import { useState } from 'react';


const LeaveSetting = () => {
  const navigate = useNavigate();
  const [cardclick, setCardClick] = useState(false)

  const handleClick = (path) => {
    navigate(path);
    console.log(path)
    setCardClick(true)
  };
  const handleBackClick = () => {
    navigate('/settings/LeaveSetting');
    setCardClick(false);
  };

  return (
    <div>


      {
        (!cardclick) &&
        <div>
          <div className='ml-36' onClick={() => handleClick(HolidayListcontent[0].path)}  >
            <Box Configs={HolidayListcontent} />
          </div>
          <div className='ml-36' onClick={() => handleClick(Leavepolicycontent[0].path)}  >
            <Box Configs={Leavepolicycontent} />
          </div>
        </div>}
      {cardclick && (
        <>
          <div className='-mt-6 '>
            <button onClick={handleBackClick}><IoMdArrowBack /></button>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default LeaveSetting;
