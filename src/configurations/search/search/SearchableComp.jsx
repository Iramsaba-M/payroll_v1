
import { useState } from 'react';
import DynamicSearch from '../search/DynamicSearch';
import SearchInputConfig from './SearchInputConfig';

const SearchableComp = ({ data, searchFunrec }) => {
  // const [searchData, setSearchData] = useState([]);

  const recSearchData = (searchedData) => {
    // setSearchData(searchedData);
    searchFunrec(searchedData);
  };

  return (
    <div>
      {SearchInputConfig.map((config, index) => (
        <DynamicSearch
          key={index}
          data={data}
          searchKey="employee_name"
          config={config}
          searchFunrecd={recSearchData}
        />
      ))}
    </div>
  );
};

export default SearchableComp;

