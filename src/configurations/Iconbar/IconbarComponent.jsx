import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { useAuth0 } from "@auth0/auth0-react";
import { useButtonState } from '../../context/ButtonStateContext';
import LogoConfig from "../../configurations/logo/LogoConfig";
import DASHBOARD_ICONBAR_LINKS from "./IconConfig";
import IconStyle from './IconbarStyle';
import { useUserRole } from '../../context/UserRoleContext';



const IconbarComponent = () => {
  const activeLink = "text-[#3e63dd] rounded-2xl  bg-blue-light mb-4";
  const normalLink = "text-gray-300 hover:rounded-md mb-4";
  const { logout } = useAuth0();
  const { isAdmin, isPersonal } = useButtonState();
  const { role ,shownav,setshownav } = useUserRole();

  // Determine which links to render based on isAdmin and isPersonal states
  let links;
  if (role === 'employee') {
    links = DASHBOARD_ICONBAR_LINKS.enduserlinks;
  } else if (isAdmin) {
    links = DASHBOARD_ICONBAR_LINKS.adminlinks;
  } else {
    links = DASHBOARD_ICONBAR_LINKS.enduserlinks;
  }
  
  const footerLinks = DASHBOARD_ICONBAR_LINKS.footerIcon;
  return (
    <div className="w-14  h-64 flex flex-col items-center justify-between mt-1 "  
    // onMouseEnter={() => setshownav(true)}
    // onMouseLeave={() => setshownav(false)}
    >
      <div className='w-16 bg-white -mt-1 mb-1' onClick={() => setshownav(!shownav)}>  
      {/* #292a64  #4547a8 #6366F1*/}
        <LogoConfig />
      </div>
      
      <ul className="mt-4 ml-4 w-12 h-[200vh] flex flex-col justify-between items-center">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <li className="cursor-pointer">{link.icon}</li>
          </NavLink>
        ))}
      </ul>

      <ul className="absolute bottom-2 w-12 flex flex-col justify-between items-center">
        {footerLinks.map((footerLink, index) => (
          footerLink.key === 'logout' ? (
            <button
              key={index}
              onClick={() => logout({ returnTo: window.location.origin })}
              className={normalLink}
            >
              <li className="cursor-pointer">{footerLink.icon}</li>
            </button>
          ) : (
            <NavLink
              key={index}
              to={footerLink.path}
              className={normalLink}
            >
              <li className="cursor-pointer">{footerLink.icon}</li>
            </NavLink>
          )
        ))}
      </ul>
    </div>
  );
};

IconbarComponent.propTypes = {
  config: PropTypes.shape({
    links: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired
      })
    ).isRequired,
    footerIcon: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        icon: PropTypes.element.isRequired
      })
    )
  })
};

export default IconbarComponent;



// import { NavLink } from "react-router-dom";
// import LogoConfig from "../logo/LogoConfig";
// import PropTypes from 'prop-types';
// import { useAuth0 } from "@auth0/auth0-react";
// import DASHBOARD_ICONBAR_LINKS from './IconConfig'; // Adjust the path as needed
// import IconStyle from './IconbarStyle';

// const IconbarComponent = ({ role }) => {
//   const activeLink = "text-[#3e63dd] rounded-md bg-blue-light mb-4";
//   const normalLink = "text-gray-300 hover:rounded-md mb-4";
//   const { logout } = useAuth0();

//   const links = role === 'admin' ? DASHBOARD_ICONBAR_LINKS.links : DASHBOARD_ICONBAR_LINKS.employeelinks;
//   const footerIcons = DASHBOARD_ICONBAR_LINKS.footerIcon;

//   return (
//     <div className="w-14 h-64 flex flex-col items-center justify-between mt-1">
//       <LogoConfig />
//       <ul className="mt-4 w-12 h-[200vh] flex flex-col justify-between items-center">
//         {links && links.map((link, index) => (
//           <NavLink
//             key={index}
//             to={link.path}
//             className={({ isActive }) => (isActive ? activeLink : normalLink)}
//           >
//             <li className="cursor-pointer">{link.icon}</li>
//           </NavLink>
//         ))}
//       </ul>

//       <ul className="absolute bottom-2 w-12 flex flex-col justify-between items-center">
//         {footerIcons && footerIcons.map((footerIcon, index) => (
//           footerIcon.key === 'logout' ? (
//             <button
//               key={index}
//               onClick={() => logout({ returnTo: window.location.origin })}
//               className={normalLink}
//             >
//               <li className="cursor-pointer">{footerIcon.icon}</li>
//             </button>
//           ) : (
//             <NavLink
//               key={index}
//               to={footerIcon.path}
//               className={normalLink}
//             >
//               <li className="cursor-pointer">{footerIcon.icon}</li>
//             </NavLink>
//           )
//         ))}
//       </ul>
//     </div>
//   );
// };

// IconbarComponent.propTypes = {
//   role: PropTypes.string.isRequired,
// };

// export default IconbarComponent;
