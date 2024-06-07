import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ApplicationSearchStyles from './ApplicationSearchStyles';
import routesConfig from '../../routing/RoutingConfig';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PropTypes from 'prop-types';

const ApplicationSearchComp = ({ config }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); // Get navigate function

  const searchRoutes = (routes, searchTerm, parentPath = '') => {
    return routes.reduce((matchedRoutes, route) => {
      const fullPath = parentPath + route.path;
      console.log("Checking route:", fullPath); // Log the current route path
      if (route.path && route.path.toLowerCase().includes(searchTerm)) {
        matchedRoutes.push({ ...route, path: fullPath });
      } else if (route.label && route.label.toLowerCase().includes(searchTerm)) {
        matchedRoutes.push({ ...route, path: fullPath });
      }
      if (route.children) {
        const matchingChildren = searchRoutes(route.children, searchTerm, fullPath + '/'); // Concatenate parent path with child path
        if (matchingChildren.length > 0) {
          matchedRoutes = matchedRoutes.concat(matchingChildren); // Concatenate children routes
        }
      }
      return matchedRoutes;
    }, []);
  };


  const handleSearch = (e) => {
    const searchedTerm = e.target.value.trim().toLowerCase();
    setSearchTerm(searchedTerm);

    // Search for matching routes recursively
    const matchedRoutes = searchRoutes(routesConfig, searchedTerm);

    // Update suggestions
    setSuggestions(matchedRoutes);
  };

  const handleSuggestionClick = (path, element) => {
    navigate(path);
    setSearchTerm('');
    setSuggestions([]);
    renderElement(element);
  };

  const renderSuggestions = (routes) => {
    return routes.map((route, index) => (
      <li key={index} onClick={() => handleSuggestionClick(route.path, route.element)}>
        {route.label}
        {route.children && renderSuggestions(route.children)}
      </li>
    ));
  };

  const renderElement = (element) => {

    console.log("Rendering element:", element);

  };

  return (
    <div className='relative'>
      <div className={`${ApplicationSearchStyles[config.style]} search-container`}>
        <div className="flex items-center">
          <FaSearch className="search-icon text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder={config.placeholder}
            className={ApplicationSearchStyles.input}
          />
        </div>
        {suggestions.length > 0 && (
          <ul className={ApplicationSearchStyles.suggestionList}>
            {renderSuggestions(suggestions)}
          </ul>
        )}
      </div>
    </div>
  );
};

ApplicationSearchComp.propTypes = {
  config: PropTypes.shape({
    style: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
  }).isRequired
};

export default ApplicationSearchComp;
