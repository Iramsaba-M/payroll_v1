
// import { Routes, Route } from "react-router-dom";
// import { useButtonState } from "../context/ButtonStateContext";
// import routesConfig from "./RoutingConfig"; // Import your routing configuration

// const RoutesComponent = () => {
//   const { isAdmin, isPersonal } = useButtonState();

//   // Determine which routes to render based on isAdmin and isPersonal states
//   const filteredRoutes = isAdmin
//     ? routesConfig.find((config) => config.label === "Admin Data").children
//     : isPersonal
//       ? routesConfig.find((config) => config.label === "Person Data").children
//       : []; // Default to empty array if neither isAdmin nor isPersonal

//   const renderRoutes = (routes) => {
//     return routes.map((route, index) => (
//       <Route key={index} path={route.path} element={route.element} index={route.index}>
//         {route.children && renderRoutes(route.children)}
//       </Route>
//     ));
//   };

//   return (
//     <div className="flex w-60 border-r border-gray-200">

//       <Routes>{renderRoutes(filteredRoutes)}</Routes>
//     </div>
//   );
// };

// export default RoutesComponent;

import { Routes, Route } from "react-router-dom";
import { useButtonState } from "../context/ButtonStateContext";
import routesConfig from "./RoutingConfig"; // Import your routing configuration
import PropTypes from 'prop-types';
import { useUserRole } from '../context/UserRoleContext';

const RoutesComponent = () => {
  const { isAdmin } = useButtonState();
  const { role ,shownav ,setshownav } = useUserRole();


  const filteredRoutes = role === "admin"
    ?
    isAdmin ? routesConfig.find((config) => config.label === "Admin Data").children
      : routesConfig.find((config) => config.label === "Person Data").children

    : role === "employee"
      ? routesConfig.find((config) => config.label === "Person Data").children
      : [];

  const renderRoutes = (routes) => {
    return routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} index={route.index}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  return (
    <div className= {`flex  min-h-screen bg-white ${shownav === true ? 'w-44' : 'w-6'}`} >
      <Routes>{renderRoutes(filteredRoutes)}</Routes>
    </div>
  );
};

RoutesComponent.propTypes = {
  role: PropTypes.oneOf(['admin', 'employee']).isRequired, // Define role prop type
};


export default RoutesComponent;
