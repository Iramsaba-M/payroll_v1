// import Card from "../../../../configurations/Card/Card";
// import CardConfig from "../../../../configurations/Card/CardConfig";
// import { insuranceContent, internContent, pfContent } from "./PaymentsReminderConfig";


// const PaymentsReminder = () => {

//   return (
//     <div>

//       Payments Reminder  hfh
//       {/* <Card /> */}
//       <CardConfig Config={internContent}  />
//       <CardConfig Config={insuranceContent}  />
//       <CardConfig Config={pfContent}  />
//     </div>
//   )
// }

// export default PaymentsReminder;

// import { useState, useEffect } from 'react';
// import { containerStyle, textContainerStyle, buttonContainerStyle, textStyle, buttonStyle, buttonTextStyle } from './PaymentReminderStyles';
// import RunPayrollFinalizeComponent from '../../Run Payroll/RunPayrollFinalizeCompomnent';

// const PaymentsReminder = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/paymentRemainder')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (Array.isArray(data)) {
//           setNotifications(data);
//         } else {
//           throw new Error('Unexpected data format');
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);



//   return (
//     <div>
//       {notifications.length > 0 ? (
//         notifications.map((notification,index) => (
//           <div key={index} className={containerStyle}>
//             <div className={textContainerStyle}>
//               <div className={textStyle}>{notification.text}</div>
//             </div>
//             <div className={buttonContainerStyle}>
//               <button className={buttonStyle} >
//                 <span className={buttonTextStyle}>Roll Out</span>
//               </button>
//               <button className={buttonStyle} onClick={() => console.log("Hold")}>
//                 <span className={buttonTextStyle}>Hold</span>
//               </button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <div>No notifications available.</div>
//       )}
//     </div>
//   );
// };

// export default PaymentsReminder;



// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { paymentStyles } from './PaymentReminderStyles';
// import { PaymentConfig } from './PaymentsReminderConfig';

// const PaymentsReminder = () => {
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/paymentRemainder')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setPayments(response.data);
//         } else {
//           throw new Error('Unexpected data format');
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const isToday = (date) => {
//     const today = new Date();
//     const compareDate = new Date(date);
//     return (
//       today.getDate() === compareDate.getDate() &&
//       today.getMonth() === compareDate.getMonth() &&
//       today.getFullYear() === compareDate.getFullYear()
//     );
//   };

//   return (
//     <div className={paymentStyles.wrapperStyle}>
//       {payments.length > 0 ? (
//         payments.map((payment, index) => {
//           const [heading, text] = Object.entries(payment)[0];
//           let displayText = text;
//           let dynamicStyle = paymentStyles.textStyle;

//           if (isToday(payment.due_date)) {
//             displayText = 'Today is the due date!';
//             dynamicStyle = `${paymentStyles.textStyle} text-semibold text-red-600`;
//           } else if (isToday(payment.payment_date)) {
//             displayText = 'Today is the payment date!';
//             dynamicStyle = `${paymentStyles.textStyle} text-semibold text-orange-500`;
//           }

//           return (
//             <div key={index} className={paymentStyles.containerStyle}>
//               <div className={paymentStyles.textContainerStyle}>
//                 <h2 className="text-xl">{heading}</h2>
//                 <div className={dynamicStyle}>
//                   {displayText}
//                 </div>
//               </div>
//               <div className={paymentStyles.buttonContainerStyle}>
//                 {PaymentConfig.buttons.map((buttonConfig, btnIndex) => (
//                   <button
//                     key={btnIndex}
//                     className={paymentStyles[buttonConfig.buttonClass]}
//                     onClick={buttonConfig.action}
//                   >
//                     <span className={paymentStyles.buttonTextStyle}>{buttonConfig.label}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <div>No notifications available.</div>
//       )}
//     </div>
//   );
// };

// export default PaymentsReminder;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { paymentStyles } from './PaymentReminderStyles';
// import { PaymentConfig } from './PaymentsReminderConfig';

// const PaymentsReminder = () => {
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/paymentRemainder')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setPayments(response.data);
//         } else {
//           throw new Error('Unexpected data format');
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const isToday = (date) => {
//     const today = new Date();
//     const compareDate = new Date(date);
//     return (
//       today.getDate() === compareDate.getDate() &&
//       today.getMonth() === compareDate.getMonth() &&
//       today.getFullYear() === compareDate.getFullYear()
//     );
//   };

//   const isPastDue = (payDate) => {
//     const today = new Date();
//     const compareDate = new Date(payDate);
//     return compareDate < today;
//   };

//   return (
//     <div className={paymentStyles.wrapperStyle}>
//       {payments.length > 0 ? (
//         payments.map((payment, index) => {
//           const [heading, text] = Object.entries(payment)[0];
//           let displayText = text;
//           let dynamicStyle = paymentStyles.textStyle;

//           if (isToday(payment.due_date)) {
//             displayText = 'Today is the due date!';
//             dynamicStyle = `${paymentStyles.textStyle} text-semibold text-red-600`;
//           } else if (isToday(payment.payment_date)) {
//             displayText = 'Today is the payment date!';
//             dynamicStyle = `${paymentStyles.textStyle} text-semibold text-orange-500`;
//           }

//           return (
//             <div key={index} className={paymentStyles.containerStyle}>
//               <div className={paymentStyles.textContainerStyle}>
//                 <h2 className="text-xl">{heading}</h2>
//                 <div className={dynamicStyle}>
//                   {displayText}
//                 </div>
//               </div>
//               <div className={paymentStyles.buttonContainerStyle}>
//                 {PaymentConfig.buttons.map((buttonConfig, btnIndex) => {
//                   if (buttonConfig.label === "Remind me later" && isPastDue(payment.due_date)) {
//                     return null; // Skip rendering this button
//                   }
//                   return (
//                     <button
//                       key={btnIndex}
//                       className={paymentStyles[buttonConfig.buttonClass]}
//                       onClick={buttonConfig.action}
//                     >
//                       <span className={paymentStyles.buttonTextStyle}>{buttonConfig.label}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <div>No notifications available.</div>
//       )}
//     </div>
//   );
// };

// export default PaymentsReminder;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { paymentStyles } from './PaymentReminderStyles';
// import { PaymentConfig } from './PaymentsReminderConfig';

// const PaymentsReminder = () => {
//   const [payments, setPayments] = useState([]);
//   const [hoveredButton, setHoveredButton] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:3000/paymentRemainder')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setPayments(response.data);
//         } else {
//           throw new Error('Unexpected data format');
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const isToday = (date) => {
//     const today = new Date();
//     const compareDate = new Date(date);
//     return (
//       today.getDate() === compareDate.getDate() &&
//       today.getMonth() === compareDate.getMonth() &&
//       today.getFullYear() === compareDate.getFullYear()
//     );
//   };

//   const isPastDue = (dueDate) => {
//     const today = new Date();
//     const compareDate = new Date(dueDate);
//     return compareDate < today;
//   };

//   return (
//     <div className={paymentStyles.wrapperStyle}>
//       {payments.length > 0 ? (
//         payments.map((payment, index) => {
//           const [heading, text] = Object.entries(payment)[0];
//           let displayText = text;
//           let dynamicStyle = paymentStyles.textStyle;

//           if (isToday(payment.due_date)) {
//             displayText = 'Today is the due date!';
//             dynamicStyle = `${paymentStyles.textStyle} text-semibold text-red-600`;
//           } else if (isToday(payment.payment_date)) {
//             displayText = 'Today is the payment date!';
//             dynamicStyle = `${paymentStyles.textStyle} text-semibold text-orange-500`;
//           }

//           return (
//             <div key={index} className={paymentStyles.containerStyle}>
//               <div className={paymentStyles.textContainerStyle}>
//                 <h2 className="text-xl">{heading}</h2>
//                 <div className={dynamicStyle}>
//                   {displayText}
//                 </div>
//               </div>
//               <div className={paymentStyles.buttonContainerStyle}>
//                 {PaymentConfig.buttons.map((buttonConfig, btnIndex) => {
//                   if (buttonConfig.label === "Remind me later" && isPastDue(payment.due_date)) {
//                     return null; // Skip rendering this button
//                   }
//                   return (
//                     <div
//                       key={btnIndex}
//                       onMouseEnter={() => setHoveredButton(`${index}-${btnIndex}`)}
//                       onMouseLeave={() => setHoveredButton(null)}
//                       className="relative"
//                     >
//                       <button
//                         className={paymentStyles[buttonConfig.buttonClass]}
//                         onClick={buttonConfig.action}
//                       >
//                         <span className={paymentStyles.buttonTextStyle}>{buttonConfig.label}</span>
//                       </button>
//                       {buttonConfig.label === "Remind me later" && hoveredButton === `${index}-${btnIndex}` && (
//                         <div className={paymentStyles.optionsContainer}>
//                           {buttonConfig.options.map((option, optionIndex) => (
//                             <button
//                               key={optionIndex}
//                               className={paymentStyles.optionButton}
//                               onClick={option.action}
//                             >
//                               {option.label}
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <div>No notifications available.</div>
//       )}
//     </div>
//   );
// };

// export default PaymentsReminder;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { paymentStyles } from './PaymentReminderStyles';
import { PaymentConfig } from './PaymentsReminderConfig';

const PaymentsReminder = () => {
  const [payments, setPayments] = useState([]);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/paymentRemainder')
      .then(response => {
        if (Array.isArray(response.data)) {
          setPayments(response.data);
        } else {
          throw new Error('Unexpected data format');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const isToday = (date) => {
    const today = new Date();
    const compareDate = new Date(date);
    return (
      today.getDate() === compareDate.getDate() &&
      today.getMonth() === compareDate.getMonth() &&
      today.getFullYear() === compareDate.getFullYear()
    );
  };

  const isPastDue = (dueDate) => {
    const today = new Date();
    const compareDate = new Date(dueDate);
    return compareDate < today;
  };

  const daysBetween = (date1, date2) => {
    const diffTime = Math.abs(new Date(date2) - new Date(date1));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className={paymentStyles.wrapperStyle}>
      {payments.length > 0 ? (
        payments.map((payment, index) => {
          const [heading, text] = Object.entries(payment)[0];
          let displayText = text;
          let dynamicStyle = paymentStyles.textStyle;

          if (isToday(payment.due_date)) {
            displayText = 'Today is the due date!';
            dynamicStyle = `${paymentStyles.textStyle} text-semibold text-red-600`;
          } else if (isToday(payment.payment_date)) {
            displayText = 'Today is the payment date!';
            dynamicStyle = `${paymentStyles.textStyle} text-semibold text-orange-500`;
          }

          return (
            <div key={index} className={paymentStyles.containerStyle}>
              <div className={paymentStyles.textContainerStyle}>
                <h2 className="text-xl">{heading}</h2>
                <div className={dynamicStyle}>
                  {displayText}
                </div>
              </div>
              <div className={paymentStyles.buttonContainerStyle}>
                {PaymentConfig.buttons.map((buttonConfig, btnIndex) => {
                  if (buttonConfig.label === "Remind me later" && isPastDue(payment.due_date)) {
                    return null; // Skip rendering this button
                  }
                  return (
                    <div
                      key={btnIndex}
                      onMouseEnter={() => setHoveredButton(`${index}-${btnIndex}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                      className="relative"
                    >
                      <button
                        className={paymentStyles[buttonConfig.buttonClass]}
                        onClick={buttonConfig.action}
                      >
                        {buttonConfig.label}
                      </button>
                      {buttonConfig.label === "Remind me later" && hoveredButton === `${index}-${btnIndex}` && (
                        <div className={paymentStyles.optionsContainer}>
                          {buttonConfig.options.map((option, optionIndex) => {
                            if (
                              (option.label === "Remind me after 2 days" && daysBetween(new Date(), payment.due_date) < 2) ||
                              (option.label === "Remind me Tomorrow" && daysBetween(new Date(), payment.due_date) < 1)
                            ) {
                              return null; 
                            }
                            return (
                              <button
                                key={optionIndex}
                                className={paymentStyles.optionButton}
                                onClick={option.action}
                              >
                                {option.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <div>No notifications available.</div>
      )}
    </div>
  );
};

export default PaymentsReminder;
