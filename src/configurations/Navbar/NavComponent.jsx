import NavStyle from './NavStyle';
import PropTypes from 'prop-types';

const NavComponent = ({ config, handleNavClick, activeItem }) => {

  const handleTabClick = (item) => {
    handleNavClick(item);
  };

  return (
    <nav className="navbar">
      <ul className="nav-menu flex list-none">
        {config.map((item) => (
          <li
            key={item.id}
            className={`${NavStyle[item.navcss]} ${item.name === activeItem ? NavStyle.activeStyle : ''}`}
          >
            <button
              onClick={() => handleTabClick(item.name)}
              className={item.name === activeItem ? NavStyle.selectedTab : ''}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavComponent.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      navcss: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleNavClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
};

export default NavComponent;
