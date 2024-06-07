
import { NavLink } from 'react-router-dom';
import Style from './Style';
import PropTypes from 'prop-types';

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

DynamicSidebar.propTypes = {
  menuConfig: PropTypes.array.isRequired // Assuming menuConfig is an array of objects
};

export default DynamicSidebar