import React from 'react';
import DynamicTable2 from './DynamicTable2';

function TableComponent({config, data}) {
  return (
    <div >
      
      <DynamicTable2 config= {config} data={data} />
    </div>
  );
}

export default TableComponent; 