// SideNav.js
import React from 'react';
import SideNavigation from './SideConfig'
import SideNavigationData from './SideData'

const Sidebar = ({Configs}) => {
  return (
    <div>
      {/* Other components or content */}
      <SideNavigation Config={Configs} />
    </div>
  );
};

export default Sidebar;
