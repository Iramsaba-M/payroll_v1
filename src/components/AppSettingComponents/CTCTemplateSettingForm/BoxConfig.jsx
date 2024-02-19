// import React from 'react';
// import BoxStyles from './BoxStyle';

// const Box = ({ card, title, content,icon }) => {
//   return (
//     <div className={`${BoxStyles[card]} ${BoxStyles.MarginBetweenCards}`}>
//       <h3 className={BoxStyles.CardTitle}>{title} {<div className='w-4 -translate-y-6 translate-x-[30vh]'>{icon}</div>} </h3>
//             {/* <div className='bg-red-200 w-4 '>{icon}</div> */}
//       <p className={BoxStyles.CardContent}>{content}</p>
//     </div>

//   );
// };

// const BoxConfig = ({ Config, data }) => {
//   return (
//     <div className="flex flex-none">
//       {Config.map((card, index) => (
//         <React.Fragment key={index}>
//           {index > 0 && index % Config.length === 0 && <div className="w-full"></div>}
//           <Box
//             {...card}
//             content={data && data.length > 0 ? data[0][card.contentKey] : ''}
//           />
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default BoxConfig;

import React from "react";
import BoxStyles from "./BoxStyle";

const Box = ({ card, title, content, icon, icon2 }) => {
  return (
    <div className={`${BoxStyles[card]} ${BoxStyles.MarginBetweenCards}`}>
      <h3 className={BoxStyles.CardTitle}>
        {title}{" "}
        {<div className="w-4 -translate-y-6 translate-x-[90vh]">{icon} </div>}{" "}
        <div className="w-4 -translate-y-11 translate-x-[24vh] ">{icon2}</div>{" "}
      </h3>

      <p className={BoxStyles.CardContent}>{content}</p>
    </div>
  );
};

const BoxConfig = ({ Config, data }) => {
  return (
    <div className="flex flex-none">
      {Config.map((card, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % Config.length === 0 && (
            <div className="w-full"></div>
          )}
          <Box
            {...card}
            content={data && data.length > 0 ? data[0][card.contentKey] : ""}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoxConfig;
