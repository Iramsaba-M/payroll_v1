
// import React, { useState, useEffect } from 'react';
// import ModalStyles from './ModalStyles';
// import { RxCross1 } from 'react-icons/rx';
// import axios from 'axios';

// const ModalComponent = ({ isOpen, onClose, config }) => {
 
//   const closeModal = () => {
//     onClose();
//   };

//   return (
//     isOpen && (
//       <div className="">
//         {config.map((item, index) => (
//           <div key={index} className={`${ModalStyles[item.MainDiv]}`}>
//             <div className={`${ModalStyles[item.ModalBody]}`}>
//               <div className={`${ModalStyles[item.Header]}`}>
//                 {item.labels && item.labels.map((label, labelIndex) => (
//                   <div key={labelIndex} className={ModalStyles[label.css]}>
//                     {label.text}
//                   </div>
//                 ))}
//                 <button className={`${ModalStyles[item.buttonStyle]}`} onClick={closeModal}>
//                   {item.icon}
//                 </button>
//               </div>
//               {item.component}
//             </div>
//           </div>
//         ))}
//       </div>
//     )
//   );
// };

// export default ModalComponent;

import React, { useState, useEffect } from 'react';
import ModalStyles from './ModalStyles';
import { RxCross1 } from 'react-icons/rx';
import axios from 'axios';

const ModalComponent = ({ isOpen, onClose, config }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-blue-100 opacity-60"></div>
          <div className="">
            {config.map((item, index) => (
              <div key={index} className={`${ModalStyles[item.MainDiv]}`}>
                <div className={`${ModalStyles[item.ModalBody]}`}>
                  <div className={`${ModalStyles[item.Header]}`}>
                    {item.labels && item.labels.map((label, labelIndex) => (
                      <div key={labelIndex} className={ModalStyles[label.css]}>
                        {label.text}
                      </div>
                    ))}
                    <button className={`${ModalStyles[item.buttonStyle]}`} onClick={closeModal}>
                      {item.icon}
                    </button>
                  </div>
                  {item.component}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;