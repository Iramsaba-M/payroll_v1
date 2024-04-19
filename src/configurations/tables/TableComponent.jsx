import React from 'react';
import DynamicTable from './DynamicTable';

function TableComponent({ config, data }) {
  return (
    <div >

      <DynamicTable config={config} data={data} />
    </div>
  );
}

export default TableComponent; 