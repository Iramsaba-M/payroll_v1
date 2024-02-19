import React from 'react';
import CardConfig from './CardConfig';

const Card = ({ Configs, data }) => {
  return (
    <div>
      {/* Other components or content */}
      <CardConfig Config={Configs} data={data} />
      hello
    </div>
  );
};

export default Card;




