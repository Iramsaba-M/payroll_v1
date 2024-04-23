
import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import { SETTINGS_SIDEBAR_LINKS } from "../sidebarConfigs/MenuConfig";

const SettingsMenus = () => {
    const activeLink = "rounded-md text-white bg-blue-500 text-xs py-2 mx-2 ";

    const normalLink = "rounded-md w-48 text-left py-2 mx-2 hover:bg-gray-off text-xs ";
  return (
    <>
        <ul>
         <div className="appname text-gray-800 text-4xl font-mono font-bold px-5 mt-3 mb-3">
           iKamai
         </div>
          {SETTINGS_SIDEBAR_LINKS.default.submenus.map((items, index) => (
            <NavLink  key={index} to={items.path} className={({isActive}) => 
              isActive ? activeLink : normalLink
             }>
              <button className=" w-48 text-left p-2.5 mx-3 my-1"> <span className="flex">
                {items.icon && <span className="mr-5">{items.icon}</span>} 
                {items.label}
                </span>
              </button>
            </NavLink>
          ))}
        </ul>
          <Outlet />
    </>
  )
}

export default SettingsMenus