
import NavComponent from './NavComponent';
import PropTypes from 'prop-types';

const Nav = ({ configs, handleNavClick, activeItem }) => {
  return (
    <div>
      <NavComponent config={configs} handleNavClick={handleNavClick} activeItem={activeItem} />
    </div>
  );
};

Nav.propTypes = {
  configs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,        // Assuming id is a string and required
    name: PropTypes.string.isRequired,      // Assuming name is a string and required
    navcss: PropTypes.string,               // Optional navcss string
  })).isRequired,
  handleNavClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
};

export default Nav;
