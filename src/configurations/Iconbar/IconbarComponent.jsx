
import React from "react";
import { NavLink } from "react-router-dom";

import { useComponentMapping } from "../../context/ComponentMappingContext";
import LogoConfig from "../logo/LogoConfig";

const IconbarComponent = ({  config }) => {
  const componentMapping = useComponentMapping();
  const activeLink = "text-[#3e63dd] rounded-md bg-blue-light";
  const normalLink = "text-gray-300 hover:rounded-md";

  return (
    <div className="w-14 h-64 flex flex-col items-center justify-between  mt-1">

      <LogoConfig />
      <ul className=" mt-4 w-12 h-72 flex flex-col justify-between items-center">
        {config && config.links.map((links, index) => (

          <NavLink
            key={index}
            to={links.path}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >

            <li className=" cursor-pointer ">{links.icon}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default IconbarComponent;