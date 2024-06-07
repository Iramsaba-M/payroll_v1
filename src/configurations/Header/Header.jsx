// Head.jsx
import HeadComponents from './HeadComponents';
import PropTypes from 'prop-types';

const Header = ({ HeadConfi, currentPath }) => {

  return (
    <HeadComponents props={HeadConfi} currentPath={currentPath} />
  );
};

Header.propTypes = {
  HeadConfi: PropTypes.array.isRequired,
  currentPath: PropTypes.string.isRequired
};


export default Header;