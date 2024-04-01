

import React from 'react';
import BoxConfig from './BoxConfig';


const Box = ({ Configs, data ,}) => {

   
  return (
    <div >
      {/* Other components or content */}
      <BoxConfig Config={Configs} data={data} />
    </div>
  );
};

export default Box;
