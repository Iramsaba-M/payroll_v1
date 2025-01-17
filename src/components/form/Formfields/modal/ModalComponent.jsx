// import React from 'react';
// import ModalStyles from './ModalStyles';
// import PropTypes from 'prop-types';


// const ModalComponent = ({ isOpen, onClose, config, employee_id }) => {
//   const closeModal = () => {
//     onClose();
//   };
//   ModalComponent.propTypes = {
//     config: PropTypes.array.isRequired,
//     isOpen: PropTypes.bool,
//     onClose: PropTypes.bool,
//     employee_id: PropTypes.str
//   };
//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="absolute inset-0 bg-blue-100 opacity-60"></div>
//           <div>
//             {config.map((item, index) => (
//               <div key={index} className={`${ModalStyles[item.MainDiv]}`}>
//                 <div className={`${ModalStyles[item.ModalBody]}`}>
//                   <div className={`${ModalStyles[item.Header]}`}>
//                     {item.labels && item.labels.map((label, labelIndex) => (
//                       <div key={labelIndex} className={ModalStyles[label.css]}>
//                         {label.text}
//                       </div>
//                     ))}
//                     <button className={`${ModalStyles[item.buttonStyle]}`} onClick={closeModal}>
//                       {item.icon}
//                     </button>
//                   </div>
//                   {/* Pass employee_id as a prop to the component */}
//                   {employee_id && React.cloneElement(item.component, { employee_id })}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ModalComponent;

import React from 'react';
import ModalStyles from './ModalStyles';
import PropTypes from 'prop-types';

const ModalComponent = ({ isOpen, onClose, config, employee_id, handlerangecal ,component}) => {
  const closeModal = () => {
    onClose();
  };

  ModalComponent.propTypes = {
    config: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    employee_id: PropTypes.string  // Assuming employee_id is a string
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-60"></div>
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
                  {/* Check if item.component exists before rendering */}
                  {/* {item.component && (
                    // Conditional rendering based on employee_id
                    employee_id ? (
                      React.cloneElement(item.component, { employee_id })
                    ) : (
                      React.cloneElement(item.component, { employee_id: '' })  // Pass an empty string if employee_id is falsy
                    )
                  )} */}
                  {item.component && (
                    React.cloneElement(
                      item.component,
                      {
                        handlerangecal: handlerangecal ? handlerangecal : '',
                        employee_id: employee_id ? employee_id : ''
                      }
                    )
                  )}
                  {component && (
                    <div className={`${ModalStyles[item.componentstyle]}`}>
                    {component}
                    </div>
                  )

                  }
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
