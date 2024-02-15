import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavStyle from './NavStyle';

const NavComponent = ({ config, handleNavClick, activeItem }) => {
  return (
    <nav className="navbar">
      <ul className="nav-menu flex list-none">
        {config.map(item => (
          <li
            key={item.id}
            className={`${NavStyle[item.navcss]} ${item.name === activeItem ? NavStyle.activeStyle : ''}`}
          >
            <button onClick={() => handleNavClick(item.name)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavComponent;

