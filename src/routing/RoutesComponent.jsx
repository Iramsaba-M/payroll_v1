import React from "react";
import { Routes, Route } from "react-router-dom";

const RoutesComponent = ({ config }) => {
    const renderRoutes = (routes) => {
        return routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} index={route.index}>
                {route.children && renderRoutes(route.children)}
            </Route>
        ));
    };

    return (
        <div className="flex w-60 border-r border-gray-200">
            <Routes>{renderRoutes(config)}</Routes>
        </div>
    );
};

export default RoutesComponent;