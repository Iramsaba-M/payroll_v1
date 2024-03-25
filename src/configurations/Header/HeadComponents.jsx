
// HeadComponents.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderStyles from './HeadStyles';
import { useComponentMapping } from '../../context/ComponentMappingContext';
import ApplicationSearch from '../applicationsearch/ApplicationSearch';

const HeadComponents = ({ content, config }) => {
  const location = useLocation();
  const currentPathSegments = location.pathname.split('/').filter(Boolean);

  const componentMapping = useComponentMapping();

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

export default HeadComponents;
