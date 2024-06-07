
import { Outlet, useNavigate } from 'react-router-dom';
import { Reimbursementpolicy, Multilevel } from '../../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
import Box from '../../../components/AppSettingComponents/CTCTemplateSettingForm/Box';
import { IoMdArrowBack } from "react-icons/io";
import { useState } from 'react';

function ReimbursementSetting() {
  const navigate = useNavigate();
  const [cardclick, setCardClick] = useState(false)

  const handleClick = (path) => {
    navigate(path);
    console.log(path)
    setCardClick(true)
  };
  const handleBackClick = () => {
    navigate('/apps/settings/ReimbursementSetting');
    setCardClick(false);
  };

  return (
    <div>


      {
        (!cardclick) &&
        <div>

          <div className='ml-36' onClick={() => handleClick(Reimbursementpolicy[0].path)}  >
            <Box Configs={Reimbursementpolicy} />
          </div>
          <div className='ml-36' onClick={() => handleClick(Multilevel[0].path)}  >
            <Box Configs={Multilevel} />
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
}

export default ReimbursementSetting;
