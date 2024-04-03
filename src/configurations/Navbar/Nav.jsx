
import React from 'react';
import NavComponent from './NavComponent';

const Nav = ({ configs, handleNavClick, activeItem }) => {
  return (
    <div>
      <NavComponent config={configs} handleNavClick={handleNavClick} activeItem={activeItem} />
    </div>
  );
};

export default Nav;
