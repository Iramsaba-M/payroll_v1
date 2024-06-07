// SideNav.js
import SideNavigation from './SideConfig'
import PropTypes from 'prop-types';

const Sidebar = ({ Configs }) => {
  return (
    <div>
      <SideNavigation Config={Configs} />
    </div>
  );
};

Sidebar.propTypes = {
  Configs: PropTypes.array.isRequired // Assuming Configs is an array, adjust the prop type accordingly
};
export default Sidebar;
