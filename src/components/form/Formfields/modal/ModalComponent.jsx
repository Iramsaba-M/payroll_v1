
import React from 'react';
import ModalStyles from './ModalStyles';
import { RxCross1 } from "react-icons/rx";
const ModalComponent = ({ isOpen, onClose, config}) => {
  const closeModal = () => {
    onClose();
  };

  return (
    
    isOpen && (
      <div className=''>
      <div className={ModalStyles.MainDiv}>
        <div className={ModalStyles.ModalBody}>
          <div className={ModalStyles.Header}>
           
            {config.map((item, index) => (
              <h2 key={index} className={ModalStyles[item.css]}>
                {item.label} 
                {/* {item.icon && <span className={ModalStyles.icon}>{item.icon}</span>} */}
              </h2>
              
            ))}
            <button className={ModalStyles.CrossButton} onClick={closeModal}>
              <RxCross1  />
            </button>
          </div>
        </div>
      </div>
      </div>
    )
  );
};

export default ModalComponent;