import React from 'react';
import ModalStyles from './ModalStyles';
import { RxCross1 } from 'react-icons/rx';

const ModalComponent = ({ isOpen, onClose, config, employee_id }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-blue-100 opacity-60"></div>
          <div>
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
                  {/* Pass employee_id as a prop to the component */}
                  {React.cloneElement(item.component, { employee_id })}
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

