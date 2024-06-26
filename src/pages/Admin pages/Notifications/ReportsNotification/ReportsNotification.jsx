import { useState, useEffect } from 'react';
import { containerStyle, textContainerStyle, buttonContainerStyle, textStyle, buttonStyle, buttonTextStyle } from './ReportsNotificationStyles';
import RunPayrollFinalizeComponent from '../../Run Payroll/RunPayrollFinalizeCompomnent';
import ReportsNotificationConfig from './ReportsNotificationConfig';
const ReportsNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [showFinalizeComponent] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/reportsnotification')
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
        notifications.map((notification, index) => (
          <div key={index} className={containerStyle}>
            <div className={textContainerStyle}>
              <div className={textStyle}>{notification.text}</div>
            </div>
            <div className={buttonContainerStyle}>
              {ReportsNotificationConfig.buttons.map((buttonConfig, btnIndex) => (
                <button
                  key={btnIndex}
                  className={buttonStyle}
                  onClick={buttonConfig.action}
                >
                  <span className={buttonTextStyle}>{buttonConfig.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div>No notifications available.</div>
      )}
    </div>
  );
};

export default ReportsNotification;
