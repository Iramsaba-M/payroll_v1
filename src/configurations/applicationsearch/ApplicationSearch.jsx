// ApplicationSearch.js
import { useState } from 'react';
import ApplicationSearchConfig from './ApplicationSearchConfig';
import ApplicationSearchStyles from './ApplicationSearchStyles';
import ApplicationSearchComp from './Applicationsearchcomp';

const ApplicationSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchedData) => {
    setSearchTerm(searchedData);
  }

  return (
    <ApplicationSearchComp
      config={ApplicationSearchConfig}
      handleSearch={handleSearch}
    />
  );
};

export default ApplicationSearch;
