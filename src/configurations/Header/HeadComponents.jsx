// // HeadComponents.js
// import React from 'react';
// import HeaderStyles from './HeadStyles';
// import ApplicationSearch from '../applicationsearch/ApplicationSearch';
// import { useNavigate } from 'react-router-dom';

// const HeadComponents = ({ props, currentPath }) => {
//   const spacing = `space-x-${props.length}`;
//   // const displayPath = currentPath.replace(/\//g, '>');
//   const displayPath=currentPath.split(/\//g);
  
//   const navigate = useNavigate();
  
//   const pathClick = (index) => {
//     const clickedPath = displayPath.slice(0, index + 1).join('/');
//     // console.log('Clicked Path:', clickedPath);
//     navigate(clickedPath);
//   };

//   return (
//     <div className={`${HeaderStyles.HeaderBg} ${spacing}`}>
//       <ul className="flex items-center">
//         {/* <li onClick={pathClick} className={HeaderStyles.HeaderPath}>{displayPath}</li> */}
//         {displayPath.map((element, index) => (
//           <React.Fragment key={index}>
            
//             <li onClick={() => pathClick(index)} className={HeaderStyles.HeaderPath}>{element}</li>
//             {index < displayPath.length - 1 && <li> {'>'} </li>}
//           </React.Fragment>
//         ))}
//       </ul>

//       <ul className="flex items-center">
//         {props.map((element, index) => (  
//           <li key={index} className={HeaderStyles[element.css]}>
//             {element.text}
//           </li>
//         ))}
//       </ul>
//       <div className='mb-3'>
//       <ApplicationSearch />
//       </div>
      
//     </div>
//   );
// };

// export default HeadComponents;

// ==========================================================================


// HeadComponents.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderStyles from './HeadStyles';
import { useComponentMapping } from '../../context/ComponentMappingContext';

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
        {content &&
          content.map((smallComp, smallIndex) => (
            <div key={smallIndex} className={`  ${smallComp.style}  `}>
              {(() => {
                const Component = componentMapping[smallComp.componentKey];
                return <Component config={smallComp.config} />;
              })()}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeadComponents;
