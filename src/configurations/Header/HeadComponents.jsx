// HeadComponents.js
import { Link, useLocation } from 'react-router-dom';
import HeaderStyles from './HeadStyles';
import ApplicationSearch from '../applicationsearch/ApplicationSearch';
import PropTypes from 'prop-types';

const HeadComponents = ({ config }) => {
  const location = useLocation();
  const currentPathSegments = location.pathname.split('/').filter(Boolean);


  return (
    <div className={`${HeaderStyles.HeaderBg} `}>

      <ul className="flex items-center">
        {currentPathSegments.map((segment, index) => (
          <li key={index} className={HeaderStyles.HeaderPath}>
            <Link to={`/${currentPathSegments.slice(0, index + 1).join('/')}`}>
              {segment}
            </Link>
            {index < currentPathSegments.length - 1 && ' > '}
          </li>
        ))}
      </ul>

      <ul className="flex items-center">
        {config &&
          config.map((element, index) => (
            <li key={index} className={HeaderStyles[element.css]}>
              {element.text}
            </li>
          ))}
      </ul>

      <div className="mb-3">
        <ApplicationSearch />
      </div>
    </div>
  );
};

HeadComponents.propTypes = {
  config: PropTypes.arrayOf(PropTypes.shape({
    css: PropTypes.string,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default HeadComponents;
