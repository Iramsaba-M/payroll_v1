
import { Routes, Route } from "react-router-dom";
import { useButtonState } from "../context/ButtonStateContext";
import routesConfig from "./RoutingConfig"; // Import your routing configuration

const RoutesComponent = () => {
  const { isAdmin, isPersonal } = useButtonState();

  // Determine which routes to render based on isAdmin and isPersonal states
  const filteredRoutes = isAdmin
    ? routesConfig.find((config) => config.label === "Admin Data").children
    : isPersonal
      ? routesConfig.find((config) => config.label === "Person Data").children
      : []; // Default to empty array if neither isAdmin nor isPersonal

  const renderRoutes = (routes) => {
    return routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} index={route.index}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  return (
    <div className="flex w-60 border-r border-gray-200">

      <Routes>{renderRoutes(filteredRoutes)}</Routes>
    </div>
  );
};

export default RoutesComponent;


