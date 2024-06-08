
import React, { useState, useEffect } from 'react';
import { containerStyle, textContainerStyle, buttonContainerStyle, textStyle, buttonStyle, buttonTextStyle } from './Payrollnotifystyles';
import RunPayrollFinalizeComponent from '../../Run Payroll/RunPayrollFinalizeCompomnent';

const PayrollNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [showFinalizeComponent, setShowFinalizeComponent] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/payrollnotification')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setNotifications(data);
        } else {
          throw new Error('Unexpected data format');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (showFinalizeComponent) {
    return <RunPayrollFinalizeComponent />;
  }

  return (
    <div>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div key={notification.id} className={containerStyle}>
            <div className={textContainerStyle}>
              <div className={textStyle}>{notification.text}</div>
            </div>
            <div className={buttonContainerStyle}>
              <button className={buttonStyle} onClick={() => setShowFinalizeComponent(true)}>
                <span className={buttonTextStyle}>Roll Out</span>
              </button>
              <button className={buttonStyle} onClick={() => console.log("Hold")}>
                <span className={buttonTextStyle}>Hold</span>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No notifications available.</div>
      )}
    </div>
  );
};

export default PayrollNotification;
