// import React from 'react'
// import DynamicSidebar from './DynamicSidebar'

// const Sidebar = ({menuConfigs}) => {
  
//   return (
//     <>
//     <DynamicSidebar menuConfig={menuConfigs} />

    
//     </>
//   )
// }


// export default Sidebar



// import { Router } from 'react-router-dom';


//  const Sidebar = () => {
//   return (
//     <div>
//         {/* <Router> */}
//         <DynamicSidebar />
//         {/* </Router> */}
//     </div>
//   )
// }

// export default Sidebar;

// Sidebar.js
import React, { useState } from 'react';
import DynamicSidebar from './DynamicSidebar';
import ApplicationSearch from '../applicationsearch/ApplicationSearch';

const Sidebar = ({ submenus }) => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <>
      <ApplicationSearch data={submenus} setSearchResults={setSearchResults} />
      <DynamicSidebar menuConfig={searchResults || submenus} />
    </>
  );
};

export default Sidebar;

