
import React from "react";
import { useComponentMapping } from "../context/ComponentMappingContext";
import { Route } from "react-router-dom";
import { sections } from "./LayoutConfigFile";

const DynamicLayout = () => {

    const componentMapping = useComponentMapping();

    const renderRoutes = (routes, componentMapping) => {
        return routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} index={route.index}>
                {route.children && renderRoutes(route.children, componentMapping)}
            </Route>
        ));
    };
    return (
        <div className="">
            <div className="flex min-h-screen">
                {sections.section1 &&
                    sections.section1.map((section, index) => (
                        <div key={index} className={section.style}>
                            {(() => {
                                const Component = componentMapping[section.componentKey];
                                const config = section.config;
                                return <Component content={section.content} componentMapping={componentMapping} config={config} />;
                            })()}
                        </div>
                    ))}

                <div className="">
                    {sections.section2 &&
                        sections.section2.map((section, index) => (
                            <div key={index} className={section.style}>
                                {(() => {
                                    const Component = componentMapping[section.componentKey];
                                    if (!Component) {
                                        console.error(`Component with key "${section.componentKey}" not found.`);
                                        return null;
                                    }
                                    return <Component content={section.content} componentMapping={componentMapping} />;
                                })()}
                            </div>
                        ))}
                </div>
            </div>

        </div>
    );
};

export default DynamicLayout;
