import React from "react";
import { DASHBOARD_ICONBAR_LINKS } from "./IconConfig";
import { NavLink } from "react-router-dom";
import LogoConfig from '../logo/LogoConfig';

const IconbarComponent = () => {
  
  const activeLink = "text-[#3e63dd] rounded-md bg-[#E6EDFE]";
  const normalLink = "text-gray-300 hover:bg-gray-100 hover:rounded-md";

  return (
  
    <div className="w-14 h-64 flex flex-col items-center justify-between  mt-1 ">
      <LogoConfig />
      <ul className=" mt-4 w-12 h-72 flex flex-col justify-between items-center   ">
      {DASHBOARD_ICONBAR_LINKS.links.map((links) => (

        
          <NavLink
            to={links.path}
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          ><li className=" cursor-pointer  "> {links.icon}</li>
          </NavLink>
       
      ))}
      
      </ul>
    </div>
  );
};

export default IconbarComponent;