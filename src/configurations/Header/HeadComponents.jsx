// HeadComponents.js
import React from 'react';
import HeaderStyles from './HeadStyles';
import ApplicationSearch from '../applicationsearch/ApplicationSearch';
import { useNavigate } from 'react-router-dom';

const HeadComponents = ({ props, currentPath }) => {
  const spacing = `space-x-${props.length}`;
  // const displayPath = currentPath.replace(/\//g, '>');
  const displayPath=currentPath.split(/\//g);
  


  const navigate = useNavigate();
  
  const pathClick = (index) => {
    const clickedPath = displayPath.slice(0, index + 1).join('/');
    // console.log('Clicked Path:', clickedPath);
    navigate(clickedPath);
  };

  return (
    <div className={`${HeaderStyles.HeaderBg} ${spacing}`}>
      <ul className="flex items-center">
        {/* <li onClick={pathClick} className={HeaderStyles.HeaderPath}>{displayPath}</li> */}
        {displayPath.map((element, index) => (
          <React.Fragment key={index}>
            
            <li onClick={() => pathClick(index)} className={HeaderStyles.HeaderPath}>{element}</li>
            {index < displayPath.length - 1 && <li> {'>'} </li>}
          </React.Fragment>
        ))}
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
