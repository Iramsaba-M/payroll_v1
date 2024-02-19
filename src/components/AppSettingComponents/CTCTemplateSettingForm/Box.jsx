// import React from 'react';
// import BoxConfig from './BoxConfig';
// import { AiFillHome } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';

// const Box = ({ Configs, data ,navigate}) => {

//     const handleClick = () => {
//         navigate(<AiFillHome />); // Replace with the path to the next component
//     };
//   return (
//     <div onClick={handleClick}>
//       {/* Other components or content */}
//       <BoxConfig Config={Configs} data={data} />
//     </div>
//   );
// };

// export default Box;


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
