
import { NavLink, Outlet } from "react-router-dom";
import { TEAM_SIDEBAR_LINKS } from "../sidebarConfigs/MenuConfig";

const TeamMeanus = () => {
  const activeLink = "rounded-md text-white bg-blue-500 text-xs py-2 mx-2 ";

  const normalLink = "rounded-md w-48 text-left py-2 mx-2 hover:bg-gray-off text-xs ";
  return (
    <>
      <ul className="fixed border-r h-screen  w-60">
        <div className="appname text-bold text-4xl font-mono font-bold px-6 mt-3 mb-3  ">
          iKamai
        </div>
        <div className="flex flex-col  ">
          {TEAM_SIDEBAR_LINKS.default.submenus.map((items, index) => (
            <NavLink key={index} to={items.path}
              className={({ isActive }) => ` h-8 mb-2 my-1 ${isActive ? activeLink : normalLink}`}
            >
              <button className=" w-48 text-left px-7   "> <span className="flex">
                {items.icon && <span className="mr-5 mt-0.5">{items.icon}</span>}
                {items.label}
              </span>
              </button>
            </NavLink>
          ))}
        </div>
      </ul>
      <div className=" ml-[230px]"><Outlet /></div>
    </>
  )
}

export default TeamMeanus