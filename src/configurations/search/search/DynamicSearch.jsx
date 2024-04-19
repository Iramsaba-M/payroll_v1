import React, { useState } from 'react';
import StyleSearch from './StyleSearch';
import { FaSearch } from 'react-icons/fa';

const DynamicSearch = ({ data, searchKey, config, searchFunrecd }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const searchTermValue = e.target.value.toLowerCase();
    setSearchTerm(searchTermValue);
    const filteredEmployeeData = data.filter((item) => {
      const firstName = item.first_name ? item.first_name.toLowerCase() : '';
      const middleName = item.middle_name ? item.middle_name.toLowerCase() : '';
      const lastName = item.last_name ? item.last_name.toLowerCase() : '';
      return (
        firstName.includes(searchTermValue) ||
        middleName.includes(searchTermValue) ||
        lastName.includes(searchTermValue)
      );
    });
    console.log("Filtered data:", filteredEmployeeData);
    searchFunrecd(filteredEmployeeData);
  };

  return (
    <div className='relative'>
      <div className={`${StyleSearch[config.style]} search-container`}>
        <div className="flex items-center">
          <FaSearch className="search-icon" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder={config.placeholder}
            style={StyleSearch.input} 
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicSearch;
