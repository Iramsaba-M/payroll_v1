
import { NavLink, Outlet } from "react-router-dom";
import { APP_SIDEBAR_LINKS } from "../sidebarConfigs/MenuConfig";
import { useUserRole } from "../../../context/UserRoleContext";

const AppMenus = () => {
  const { shownav, setshownav } = useUserRole();
  const activeLink = "rounded-2xl rounded-s-none text-blue-700 bg-blue-light text-xs py-2 mx-2 "; //#6872F2

  const normalLink = "rounded-md  w-48 text-left py-2 mx-2 hover:bg-gray-off text-xs ";
  return (
    <>
    
      <ul className="fixed   w-44" 
      // onMouseEnter={() => setshownav(true)}
      // onMouseLeave={() => setshownav(false)}
      >
         <div className="appname py-2 h-13 text-bold text-4xl  text-[#6366F1]  bg-white font-mono font-bold ml-5  mb-4  " onClick={() => setshownav(!shownav)}> {/*text-white  */}
          iKamai
        </div>
        { shownav ?(<div className="flex flex-col  mt-2" 
        
        >
          {APP_SIDEBAR_LINKS.default.submenus.map((items, index) => (
            <NavLink key={index} to={items.path}
              className={({ isActive }) => ` h-8 mb-3 my-1 ${isActive ? activeLink : normalLink}`}
            >
              <button className=" w-44 text-left px-5   "> <span className="flex">
                {items.icon && <span className="mr-5 mt-0.5">{items.icon}</span>}
                {items.label}
              </span>
              </button>
            </NavLink>
          ))}
        </div> ):''}
      </ul>
      <div className={`${shownav === true ? 'ml-60' : 'ml-20'}`} ><Outlet /></div> 
      {/* {`${shownav === true ? 'ml-60' : ''}`} */}
    </>
  )
}

export default AppMenus
