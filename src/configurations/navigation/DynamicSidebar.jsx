import React from 'react'
import { NavLink } from 'react-router-dom';
import Style from './Style';

const DynamicSidebar = ({ menuConfig }) => {
  return (
    <div className='mx-4 my-6'>

      <nav>
        <ul>
          {menuConfig.map((submenu, index) => (
            <li key={index} >
              <NavLink to={submenu.path} className={Style[submenu.cssClass]}>
                {submenu.label}
              </NavLink>
            </li>
          ))}
        </ul>

      </nav>
    </div>


  );
}

export default DynamicSidebar