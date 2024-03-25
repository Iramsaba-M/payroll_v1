// ApplicationSearch.js
import React, { useState } from 'react';
import ApplicationSearchConfig from './ApplicationSearchConfig';
import ApplicationSearchStyles from './ApplicationSearchStyles';
import ApplicationSearchComp from './Applicationsearchcomp';

const ApplicationSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchedData) => {
    setSearchTerm(searchedData);
    // Additional actions after search, if needed
  }

  return (
    <ApplicationSearchComp
      config={ApplicationSearchConfig}
      handleSearch={handleSearch} // Pass handleSearch function
    />
  );
};

export default ApplicationSearch;
