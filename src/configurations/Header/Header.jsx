// Head.js
import HeadComponents from './HeadComponents';

const Header = ({ HeadConfi, currentPath }) => {

  return (
    <HeadComponents props={HeadConfi} currentPath={currentPath} />
  );
};

export default Header;