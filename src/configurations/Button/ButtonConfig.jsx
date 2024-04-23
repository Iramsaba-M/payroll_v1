
// // components/ButtonConfig.js
// import React from 'react';
// import ButtonStyles from './ButtonStyles';

// const Button = ({ label, icon, style, onClick, buttonStyle }) => {
//   return (
//     <button className={`${ButtonStyles[style]} ${buttonStyle}`} onClick={() => onClick(label)}>
//       {icon && typeof icon === 'object' ? (
//         <span className={`${ButtonStyles.iconStyle} mr-2`}>{icon}</span>
//       ) : (
//         icon && <span className={`${ButtonStyles.iconStyle} mr-2`}>{icon}</span>
//       )}
//       {label}
//     </button>
//   );
// };

// const ButtonConfig = ({ Config, onClick, buttonStyle }) => {
//   return (
//     <div className="flex">
//       {Config.map((button, index) => (
//         <Button key={index} {...button} onClick={onClick} buttonStyle={buttonStyle} />
//       ))}
//     </div>
//   );
// };

// export default ButtonConfig;
/* eslint-disable react/prop-types */
import React from 'react';
import ButtonStyles from './ButtonStyles';

const Button = ({ label, icon, style, type, onClick, buttonStyle, Editmode }) => {
  return (
    <button className={`${ButtonStyles[style]} ${buttonStyle}`} onClick={() => onClick(label, type)} editmode={Editmode}>
      {icon && typeof icon === 'object' ? (
        <span className={`${ButtonStyles.iconStyle} mr-2`}>{icon}</span>
      ) : (
        icon && <span className={`${ButtonStyles.iconStyle} mr-2`}>{icon}</span>
      )}
      {label}
    </button>
  );
};

const ButtonConfig = ({ Config, onClick, buttonStyle }) => {
  return (
    <div className="flex">
      {Config.map((button, index) => (
        <Button key={index} {...button} onClick={onClick} buttonStyle={buttonStyle} />
      ))}
    </div>
  );
};

export default ButtonConfig;
