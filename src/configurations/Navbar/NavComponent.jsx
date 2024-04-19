import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavStyle from './NavStyle';

const NavComponent = ({ config, handleNavClick, activeItem }) => {
  const [activeItems, setActiveItem] = useState(config[0].name);

  const handleTabClick = (item) => {
    setActiveItem(item);
    handleNavClick(item);

  };
  return (
    <nav className="navbar">
      <ul className="nav-menu flex list-none">
        {config.map((item) => (
          <li
            key={item.id}
            className={`${NavStyle[item.navcss]} ${item.name === activeItem ? NavStyle.activeStyle : ''}`}
          >
            <button
              onClick={() => handleTabClick(item.name)}
              className={item.name === activeItem ? NavStyle.selectedTab : ''}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavComponent;
