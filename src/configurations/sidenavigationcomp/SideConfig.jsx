// SideNavigation.js
import React from 'react';
import SideNavigationStyles from './SideNavStyles';

const SideNavigationItem = ({ label, icon }) => {
  return (
    <div className={SideNavigationStyles.item}>
      {icon && <span className={`${SideNavigationStyles.icon} mr-2`}>{icon}</span>}
      {label}
    </div>
  );
};

const SideNavigation = ({ Config }) => {
  return (
    <div className={SideNavigationStyles.container}>
      {Config.map((item, index) => (
        <SideNavigationItem key={index} {...item} />
      ))}
    </div>
  );
};

export default SideNavigation;
