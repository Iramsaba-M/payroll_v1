// /* eslint-disable react/prop-types */
// import React from 'react';
// import CardStyles from './CardStyle';
// // import { Link, NavLink } from 'react-router-dom';

// const Card = ({ card, title, content,icon   }) => {
//   return (
    
//     <DrawOutlineButton >
//     <div  className={`${CardStyles[card]} ${CardStyles.MarginBetweenCards}`}>
      
//       <h3  className={CardStyles.CardTitle}>{title}</h3>
    
//       {icon && (
//         <div className='mt-6 '>
//           {icon}
//         </div>
//       )}
     
//     </div>
//     </DrawOutlineButton> 
    
//   );
// };


// const CardConfig = ({ Config, data ,handleCardClick }) => {
//   return (
//     <div className="flex flex-none">
//       {Config.map((card, index) => (
//         <React.Fragment key={index}>
//           {index > 0 && index % Config.length === 0 && <div className="w-full "></div>}
          
//           <div onClick={() => handleCardClick(card)}  className='ml-8'>
//           <Card
//             {...card}
//             content={data && data.length > 0 ? data[0][card.contentKey] : ''}
//             icon={card.icon ? card.icon : null} 
            
//           /> 
//           </div>
//           {/* </NavLink> */}
//         </React.Fragment>
//       ))}
      
//     </div>
//   );
// };

// export default CardConfig;

// const DrawOutlineButton = ({ children, ...rest }) => {
//   return (
//     <div
//       {...rest}
//       className="group relative  font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
//     >
//       <span>{children}</span>

//       {/* TOP */}
//       <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

//       {/* RIGHT */}
//       <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

//       {/* BOTTOM */}
//       <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

//       {/* LEFT */}
//       <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
//     </div>
//   );
// };
/* eslint-disable react/prop-types */
import React from 'react';
import CardStyles from './CardStyle';

const Card = ({ card, title, content, icon }) => {
  return (
    <DrawOutlineButton>
      <div className={`${CardStyles[card]} ${CardStyles.MarginBetweenCards}`}>
        <h3 className={CardStyles.CardTitle}>{title}</h3>
        {icon && (
          <div className='mt-6 '>
            {icon}
          </div>
        )}
      </div>
    </DrawOutlineButton>
  );
};

const CardConfig = ({ Config, data, handleCardClick }) => {
  return (
    <div className="flex flex-none">
      {Config.map((card, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % Config.length === 0 && <div className="w-full "></div>}
          <div onClick={() => handleCardClick(card)} className='ml-8'>
            <Card
              {...card}
              content={data && data.length > 0 ? data[0][card.contentKey] : ''}
              icon={card.icon ? card.icon : null}
            />
          </div>
          {/* <NavLink> Commented out for now */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardConfig;

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className="group relative font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </div>
  );
};
