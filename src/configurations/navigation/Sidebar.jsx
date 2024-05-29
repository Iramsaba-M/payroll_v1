import { useState } from 'react';
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

