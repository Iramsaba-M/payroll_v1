import React, { useState } from 'react';
import DynamicSearch from '../search/DynamicSearch';


const SearchableComp = ({ SearchConfig, data, searchFunrec }) => {
  const [searchData, setSearchData] = useState([]);

  const recSearchData = (searchedData) => {
    setSearchData(searchedData);
    searchFunrec(searchedData);
  };

  return (
    <div>
      <DynamicSearch
        data={data}
        searchKey="employee_name"
        config={SearchConfig}
        searchFunrecd={recSearchData}
      />
    </div>
  );
};
export default SearchableComp;
