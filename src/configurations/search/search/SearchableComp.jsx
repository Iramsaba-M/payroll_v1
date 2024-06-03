
import DynamicSearch from '../search/DynamicSearch';
import SearchInputConfig from './SearchInputConfig';
import PropTypes from 'prop-types';

const SearchableComp = ({ data, searchFunrec }) => {

  const recSearchData = (searchedData) => {
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

SearchableComp.propTypes = {
  data: PropTypes.array.isRequired, // Assuming data is an array, adjust the prop type accordingly
  searchFunrec: PropTypes.func.isRequired
};

export default SearchableComp;

