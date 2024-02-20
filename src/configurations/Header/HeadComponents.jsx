// HeadComponents.js
import React from 'react';
import HeaderStyles from './HeadStyles';
import ApplicationSearch from '../applicationsearch/ApplicationSearch';

const HeadComponents = ({ props, currentPath }) => {
  const spacing = `space-x-${props.length}`;
  const displayPath = currentPath.replace(/\//g, '>');

  return (
    <div className={`${HeaderStyles.HeaderBg} ${spacing}`}>
      <ul className="flex items-center">
        <li className={HeaderStyles.HeaderPath}>{displayPath}</li>
      </ul>

      <ul className="flex items-center">
        {props.map((element, index) => (
          <li key={index} className={HeaderStyles[element.css]}>
            {element.text}
          </li>
        ))}
      </ul>
      <div className='mb-3'>
      <ApplicationSearch />
      </div>
      
    </div>
  );
};

export default HeadComponents;
