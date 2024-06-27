// // HeroSection.js

// import React from 'react';
// import HeroData from './Herodata';
// import HeroStyles from './Herostyles';
// import ButtonConfig from '../Button/ButtonConfig';
// import ButtonData from '../Button/ButtonData';
// import ButtonStyles from '../Button/ButtonStyles';

// const HeroSection = () => {
//   return (
//     <div className={HeroStyles.heroContainer}>
//       {HeroData.images.map((data, index) => (
//         <div key={index} className={HeroStyles.heroImageContainer}>
//           <img src={data.url} alt={`Hero ${index + 1}`} className={index === 0 ? HeroStyles.heroImage : (index === 1 ? HeroStyles.heroImage2 : HeroStyles.heroImage3)} />
//           {index === 0 && (
//             <div className={HeroStyles.heroImageOverlay}>
//               <h1 className={HeroStyles.heroTitle}>{data.title}</h1>
//               <p className={HeroStyles.heroDescription}>{data.description}</p>
//               {/* <ButtonConfig Config={ButtonData} buttonStyles={ButtonStyles} /> */}
//             </div>
//           )}
//           {/* Add similar logic for overlay content of image2 and image3 if needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeroSection;

// HeroSection.js

import React from 'react';
import HeroData from './Herodata';
import HeroStyles from './Herostyles';
import ButtonConfig from '../Button/ButtonConfig';
import ButtonData from '../Button/ButtonData';
import ButtonStyles from '../Button/ButtonStyles';
import { useAuth0 } from "@auth0/auth0-react";

const HeroSection = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={HeroStyles.heroContainer}>
      {HeroData.images.map((data, index) => (
        <div key={index} className={HeroStyles.twoColumnContainer}>
          {/* Left column for description */}
          {index === 0 && (
            <div className={HeroStyles.heroDescriptionContainer}>
              <div className={HeroStyles.heroImageOverlay}>
                <h1 className={HeroStyles.heroTitle}>{data.title}</h1>
                <p className={HeroStyles.heroDescription}>{data.description}</p>

              </div>
              <div className='mt-[300px] ml-[300px]'> <ButtonConfig Config={ButtonData} buttonStyles={ButtonStyles} onClick={() => loginWithRedirect()}/> </div> 
            </div>
          )}

          {/* Right column for image */}
          <div className={HeroStyles.heroImageContainer}>
            <img src={data.url} alt={`Hero ${index + 1}`} className={index === 0 ? HeroStyles.heroImage : (index === 1 ? HeroStyles.heroImage2 : HeroStyles.heroImage3)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;

