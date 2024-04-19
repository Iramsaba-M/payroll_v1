// Head.js
import React from 'react';
import HeadComponents from './HeadComponents';
import HeadConfi from './HeadConfi';

const Header = ({ HeadConfi, currentPath }) => {

  return (
    <HeadComponents props={HeadConfi} currentPath={currentPath} />
  );
};

export default Header;