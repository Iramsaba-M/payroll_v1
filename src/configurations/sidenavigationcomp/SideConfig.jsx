// SideNavigation.js
import SideNavigationStyles from './SideNavStyles';
import PropTypes from 'prop-types';

const SideNavigationItem = ({ label, icon }) => {
  return (
    <div className={SideNavigationStyles.item}>
      {icon && <span className={`${SideNavigationStyles.icon} mr-2`}>{icon}</span>}
      {label}
    </div>
  );
};

SideNavigationItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node, // Adjust as per the type of icon (e.g., string, element, etc.)
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

SideNavigation.propTypes = {
  Config: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node, // Adjust as per the type of icon (e.g., string, element, etc.)
    })
  ).isRequired,
};

export default SideNavigation;
