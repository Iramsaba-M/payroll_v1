// import React from 'react';

// const ButtonConfig = ({ Config, buttonStyles }) => {
//   // Check if Config is an array before mapping over it
//   if (!Array.isArray(Config)) {
//     console.error("ButtonConfig: Config is not an array");
//     return null;
//   }

//   return (
//     <div style={{ display: 'flex' }}>
//       {Config.map((button, index) => (
//         <button
//           key={index}
//           onClick={button.onClick}
//           className={buttonStyles[button.style]} // Apply the style directly as a class
//         >
//           {button.label}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ButtonConfig;

import ButtonStyles from './ButtonStyles';
import PropTypes from 'prop-types';

const Button = ({ label, icon, style, type, onClick, buttonStyle, active }) => {
  return (
    <button className={`${ButtonStyles[style]} ${buttonStyle} ${active ? ButtonStyles.activeButton : ''}`} onClick={() => onClick(label, type)} >
      {icon && typeof icon === 'object' ? (
        <span className={`${ButtonStyles.iconStyle} mr-2`}>{icon}</span>
      ) : (
        icon && <span className={`${ButtonStyles.iconStyle} mr-2`}>{icon}</span>
      )}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  style: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  Editmode: PropTypes.bool,
  active: PropTypes.bool
};

const ButtonConfig = ({ Config, onClick, buttonStyle, activeButton }) => {
  return (
    <div className="flex">
      {Config.map((button, index) => (
        <Button key={index} {...button} onClick={onClick} buttonStyle={buttonStyle} active={activeButton === button.label} />
      ))}
    </div>
  );
};

ButtonConfig.propTypes = {
  Config: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    style: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  activeButton: PropTypes.string
};
export default ButtonConfig;
