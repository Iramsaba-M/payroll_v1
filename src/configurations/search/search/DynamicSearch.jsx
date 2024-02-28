// // DynamicSearch.js
// import React, { useState } from 'react';
// import StyleSearch from './StyleSearch';
// import { FaSearch } from 'react-icons/fa';

// const DynamicSearch = ({ data, searchKey, config, searchFunrecd }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     const filteredData = data.filter(
//       (item) =>
//         item[searchKey] &&
//         String(item[searchKey]?.first_name).toLowerCase().includes(searchTerm.toLowerCase()) ||
//         String(item[searchKey]?.last_name).toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     searchFunrecd(filteredData);
//   };

//   const filteredData = data.filter(
//     (item) =>
//       item[searchKey] &&
//       String(item[searchKey]?.first_name).toLowerCase().includes(searchTerm.toLowerCase()) ||
//       String(item[searchKey]?.last_name).toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='relative'>
//       <div className={`${StyleSearch[config.style]} search-container`}>
//         <div className="flex items-center">
//           <FaSearch className="search-icon" />
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder={config.placeholder}
//             style={StyleSearch.input} // Apply input style
//           />
//         </div>
//       </div>
//       <ul>
//         {filteredData.map((item) => (
//           <li key={item.id}>{/* Render meaningful content here */}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DynamicSearch;

// DynamicSearch.js
import React, { useState } from 'react';
import StyleSearch from './StyleSearch';
import { FaSearch } from 'react-icons/fa';

const DynamicSearch = ({ data, searchKey, config, searchFunrecd }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const searchTermValue = e.target.value.toLowerCase();
    setSearchTerm(searchTermValue);
    const filteredEmployeeData = data.filter(
      (item) =>
        (item.first_name.toLowerCase().includes(searchTermValue) ||
        item.middle_name.toLowerCase().includes(searchTermValue) ||
        item.last_name.toLowerCase().includes(searchTermValue))
    );
    console.log("Filtered data:", filteredEmployeeData); // Debugging: log filtered data
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
            style={StyleSearch.input} // Apply input style
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicSearch;
