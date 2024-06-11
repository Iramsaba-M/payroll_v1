
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

import { UserNotificationcontent } from './UserNotificationContent';
import { EndUser_notification } from '../../../api/EndPoints';
import { fetchData } from '../../../services/APIService';
import '../../../assets/Styles/CalendarStyle.css';
import ErrorScreen from '../../../errorhandling/ErrorScreen';
import '../../../assets/Styles/CalendarStyle.css';
import ErrorScreen from '../../../errorhandling/ErrorScreen';

const UserNotificationComponent = () => {
  const [notificationData, setNotificationData] = useState([]);
  const [errorCode, setErrorCode] = useState(null);
  const [notificationData, setNotificationData] = useState([]);
  const [errorCode, setErrorCode] = useState(null);

  useEffect(() => {
    const fetchNotificationData = async () => {
      try {
        const url = `${EndUser_notification}?employee_id=IK01`;
        const data = await fetchData(url);
        setNotificationData(data);
        console.log('Fetched Data:', data);
        // Display a success notification when data is fetched
        toast.success('Notification data fetched successfully!');
        console.log('Fetched Data:', data);
        // Display a success notification when data is fetched
        toast.success('Notification data fetched successfully!');
      } catch (error) {
        console.error('Error fetching data:', error);
        // Display an error notification if there's an error fetching data
        toast.error('Error fetching notification data!');
        setErrorCode(error.response ? error.response.status : 500);
        // Display an error notification if there's an error fetching data
        toast.error('Error fetching notification data!');
        setErrorCode(error.response ? error.response.status : 500);
      }
    };

    fetchNotificationData();
  }, []);
  if (errorCode) {
    return <ErrorScreen errorCode={errorCode} />;
  }

  return (
    <div className="flex flex-col">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {UserNotificationcontent.map((item, index) => {
        const { contentKey, heading, icon: Icon } = item;
        const cardData = notificationData[contentKey] || [];

        const { contentKey, heading, icon: Icon } = item;
        const cardData = notificationData[contentKey] || [];

        return (
          <div key={index} className="border rounded-lg ml-8 mt-8 p-4 mb-4 shadow-lg w-[150vh] max-h-28 overflow-y-auto no-scrollbar">
            <div className="flex items-center mb-2">
              {Icon && <Icon className="mr-2 text-blue-500" />} {/* Render the icon */}
              <h3 className="text-lg text-blue-500 font-semibold mb-0">{heading}</h3>
            </div>
            <div className="max-h-48 overflow-y-auto">
              <ul>
                {cardData.map((notification, idx) => (
                  <li key={idx} className="text-base p-2 mb-2 rounded-ms space-y-2">
                    {Object.values(notification).map((value, valIdx) => ( // Display only values
                      <p key={valIdx} className="mb-1">
                        {value}
                      </p>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          <div key={index} className="border rounded-lg ml-8 mt-8 p-4 mb-4 shadow-lg w-[150vh] max-h-28 overflow-y-auto no-scrollbar">
            <div className="flex items-center mb-2">
              {Icon && <Icon className="mr-2 text-blue-500" />} {/* Render the icon */}
              <h3 className="text-lg text-blue-500 font-semibold mb-0">{heading}</h3>
            </div>
            <div className="max-h-48 overflow-y-auto">
              <ul>
                {cardData.map((notification, idx) => (
                  <li key={idx} className="text-base p-2 mb-2 rounded-ms space-y-2">
                    {Object.values(notification).map((value, valIdx) => ( // Display only values
                      <p key={valIdx} className="mb-1">
                        {value}
                      </p>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserNotificationComponent;
