
import React from 'react';
import NavComponent from './NavComponent';

const Nav = ({ configs, handleNavClick }) => {
  return (
    <div>
      <NavComponent config={configs} handleNavClick={handleNavClick} />
    </div>
  );
};

export default Nav;
