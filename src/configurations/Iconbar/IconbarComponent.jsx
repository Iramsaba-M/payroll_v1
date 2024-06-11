
// import { NavLink } from "react-router-dom";
// import LogoConfig from "../logo/LogoConfig";
// import PropTypes from 'prop-types';

// const IconbarComponent = ({ config }) => {
//   const activeLink = "text-[#3e63dd] rounded-md bg-blue-light";
//   const normalLink = "text-gray-300 hover:rounded-md";

//   return (
//     <div className="w-14 h-64 flex flex-col items-center justify-between  mt-1">

//       <LogoConfig />
//       <ul className=" mt-4 w-12 h-72 flex flex-col justify-between items-center">
//         {config && config.links.map((links, index) => (

//           <NavLink
//             key={index}
//             to={links.path}
//             className={({ isActive }) => (isActive ? activeLink : normalLink)}
//           >

//             <li className=" cursor-pointer ">{links.icon}</li>
//           </NavLink>
//         ))}
       
//       </ul>

//     </div>
//   );
// };

// IconbarComponent.propTypes = {
//   config: PropTypes.shape({
//     links: PropTypes.arrayOf(
//       PropTypes.shape({
//         path: PropTypes.string.isRequired,
//         icon: PropTypes.element.isRequired
//       })
//     ).isRequired
//   }).isRequired
// };

// export default IconbarComponent;

import { NavLink } from "react-router-dom";
import LogoConfig from "../logo/LogoConfig";
import PropTypes from 'prop-types';

const IconbarComponent = ({ config }) => {
  const activeLink = "text-[#3e63dd] rounded-md bg-blue-light";
  const normalLink = "text-gray-300 hover:rounded-md";

  return (
    <div className="w-14 h-64 flex flex-col items-center justify-between  mt-1">
      <LogoConfig />
      <ul className="mt-4 w-12 h-[200vh] flex flex-col justify-between items-center ">
        {config && config.links.map((links, index) => (
          <NavLink
            key={index}
            to={links.path}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <li className="cursor-pointer ">{links.icon}</li>
          </NavLink>
        ))}
      </ul>

      <ul className="absolute bottom-2 w-12  flex flex-col justify-between items-center">
        {config && config.footerIcon.map((footerIcon, index) => (
          <NavLink
            key={index}
            to={footerIcon.path}
            className={normalLink} 
          >
            <li className="cursor-pointer ">{footerIcon.icon}</li>
          </NavLink>
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
        path: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired
      })
    ).isRequired
  }).isRequired
};

export default IconbarComponent;
