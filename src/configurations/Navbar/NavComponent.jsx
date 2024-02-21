// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import NavStyle from './NavStyle';

// const NavComponent = ({ config, handleNavClick, activeItem }) => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-menu flex list-none">
//         {config.map(item => (
//           <li
//             key={item.id}
//             className={`${NavStyle[item.navcss]} ${item.name === activeItem ? NavStyle.activeStyle : ''}`}
//           >
//             <button onClick={() => handleNavClick(item.name)}>{item.name}</button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavComponent;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavStyle from './NavStyle';

const NavComponent = ({ config, handleNavClick }) => {
  // const [activeItem, setActiveItem] = useState(null);
  const [activeItem, setActiveItem] = useState(config[0].name); // Use first element's name

  const handleTabClick = (item) => {
    setActiveItem(item);
    handleNavClick(item);
  };

  

  return (
    <nav className="navbar">
      <ul className="nav-menu flex list-none">
        {config.map((item) => (
          <li
            key={item.id}
            className={`${NavStyle[item.navcss]} ${item.name === activeItem ? NavStyle.activeStyle : ''}`}
          >
            <button
              onClick={() => handleTabClick(item.name)}
              className={item.name === activeItem ? NavStyle.selectedTab : ''}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavComponent;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import NavStyle from './NavStyle';

// const NavComponent = ({ config, handleNavClick }) => {
//   const [activeItem, setActiveItem] = useState(config[0].name);

//   useEffect(() => {
//     // Notify the parent component about the default active item
//     handleNavClick(activeItem);
//   }, [activeItem, handleNavClick]);

//   const handleTabClick = (item) => {
//     setActiveItem(item);
//     handleNavClick(item);
//   };

//   return (
//     <nav className="navbar">
//       <ul className="nav-menu flex list-none">
//         {config.map((item) => (
//           <li
//             key={item.id}
//             className={`${NavStyle[item.navcss]} ${item.name === activeItem ? NavStyle.activeStyle : ''}`}
//           >
//             <button
//               onClick={() => handleTabClick(item.name)}
//               className={item.name === activeItem ? NavStyle.selectedTab : ''}
//             >
//               {item.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavComponent;
