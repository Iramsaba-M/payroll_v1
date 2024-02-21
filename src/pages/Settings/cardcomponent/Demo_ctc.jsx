
// const Demo_ctc = () => {
//   return (
//     <div className="bg-red-200 h-80">
//     <h1>jjdjdj</h1>
//     </div>
//   );
// };

// export default Demo_ctc;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const Demo_ctc = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Go back one step in the URL history
    window.history.back();
  };

  return (
    <div className>
      <h1>IK CTC Template</h1>
      <div className="back-button" onClick={handleGoBack}>
        <IoIosArrowBack size={24} />
      </div>
    </div>
  );
};

export default Demo_ctc;
