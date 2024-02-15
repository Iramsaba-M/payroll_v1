// DynamicSearch.js
import React, { useState } from 'react';
import StyleSearch from './StyleSearch';
import { FaSearch } from 'react-icons/fa';

const DynamicSearch = ({ data, searchKey, config, searchFunrecd }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredData = data.filter(
      (item) =>
        item[searchKey] &&
        String(item[searchKey]?.First_name).toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(item[searchKey]?.Last_Name).toLowerCase().includes(searchTerm.toLowerCase())
    );
    searchFunrecd(filteredData);
  };

  const filteredData = data.filter(
    (item) =>
      item[searchKey] &&
      String(item[searchKey]?.First_name).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item[searchKey]?.Last_Name).toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            style={StyleSearch.input} // Apply input style
          />
        </div>
      </div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{/* Render meaningful content here */}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicSearch;