import { useState } from 'react';
import DynamicSidebar from './DynamicSidebar';
import ApplicationSearch from '../applicationsearch/ApplicationSearch';
import PropTypes from 'prop-types';

const Sidebar = ({ submenus }) => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <>
      <ApplicationSearch data={submenus} setSearchResults={setSearchResults} />
      <DynamicSidebar menuConfig={searchResults || submenus} />
    </>
  );
};

Sidebar.propTypes = {
  submenus: PropTypes.arrayOf(
    PropTypes.shape({
      // Define the structure of the objects in the submenus array
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      // Add more properties as needed
    })
  ).isRequired,
};

export default Sidebar;

