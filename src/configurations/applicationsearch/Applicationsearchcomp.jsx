// ApplicationSearchComp.js
import React, { useState } from 'react';
import ApplicationSearchStyles from './ApplicationSearchStyles';
import { FaSearch } from 'react-icons/fa';
import routesConfig from '../../routing/RoutingConfig';

const ApplicationSearchComp = ({ config, searchFunrecd }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase(); // Convert search term to lowercase
    setSearchTerm(searchTerm);
  
    const filteredRoutes = routesConfig.filter(route => {
      const labelMatches = route.label && route.label.toLowerCase().includes(searchTerm);
      const childrenMatch = route.children && route.children.some(child =>
        child.label && child.label.toLowerCase().includes(searchTerm)
      );
  
      return labelMatches || childrenMatch;
    });
  
    console.log("Filtered Routes:", filteredRoutes);
    
    // Render elements related to the matched labels
    const matchedElements = [];
    filteredRoutes.forEach(route => {
      if (route.label && route.label.toLowerCase().includes(searchTerm)) {
        matchedElements.push(route.element);
      } else if (route.children) {
        const child = route.children.find(child =>
          child.label && child.label.toLowerCase().includes(searchTerm)
        );
        if (child) {
          matchedElements.push(child.element);
        }
      }
    });
  
    console.log("Matched Elements:", matchedElements);
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
            style={ApplicationSearchStyles.input}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicationSearchComp;
