// import React from 'react';
// // import BodyContent from '../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
// import { useNavigate } from 'react-router-dom';
// import { BoxContent,BoxContent2 } from '../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
// import Box from '../../components/AppSettingComponents/CTCTemplateSettingForm/Box'

// const CTCTemplateSetting = () => {
//   const navigate = useNavigate()
//   return (
//     <div className='ml-36'>
//       <Box Configs={BoxContent} />
//       <Box Configs={BoxContent2} /> 
//       {/* CTC Template Setting */}
//     </div>
//   )
// }

// export default CTCTemplateSetting;





import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { BoxContent, BoxContent2 } from '../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
import Box from '../../components/AppSettingComponents/CTCTemplateSettingForm/Box';


const CTCTemplateSetting = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the 'demo-ctc' component
    navigate('Demo_ctc');
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
// import React, { useState } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';
// import { BoxContent, BoxContent2 } from '../../components/AppSettingComponents/CTCTemplateSettingForm/BoxContent';
// import Box from '../../components/AppSettingComponents/CTCTemplateSettingForm/Box';

// const CTCTemplateSetting = () => {
//   const navigate = useNavigate();
//   const [isNavigating, setIsNavigating] = useState(false);

//   const handleClick = () => {
//     // Set a flag indicating that navigation is in progress
//     setIsNavigating(true);

//     // Redirect to the 'demo-ctc' component
//     navigate('Demo_ctc');
//   };

//   const handleNavigationComplete = () => {
//     // Reset the flag when navigation is complete
//     setIsNavigating(false);
//   };

//   return (
//     <div className='ml-36' onClick={handleClick}>
//       {!isNavigating && (
//         <>
//           <Box Configs={BoxContent} />
//           <Box Configs={BoxContent2} />
//         </>
//       )}
//       {/* CTC Template Setting */}
//       <Outlet onNavigate={handleNavigationComplete} />
//     </div>
//   );
// };

// export default CTCTemplateSetting;
