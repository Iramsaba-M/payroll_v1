import { useState, useEffect } from 'react';
import React from 'react';
import Card from '../../../configurations/Card/Card';
import CardConfig from '../../../configurations/Card/CardConfig';
import { UserNotificationcontent } from './UserNotificationContent';
import { EndUser_notification } from '../../../api/EndPoints';
import { fetchData } from '../../../services/APIService';
import usernotificationstyle1 from '../../../configurations/Card/CardStyle';

const UserNotificationComponent = () => {
  const [notificationData, setNotificationData] = useState({});

  useEffect(() => {
    const fetchNotificationData = async () => {
      try {
        // Construct the URL with the query parameter employee_id=IK01
        const url = `${EndUser_notification}?employee_id=IK01`;
        const data = await fetchData(url);
        setNotificationData(data);
        console.log('Fetched Data:', data); // Log fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNotificationData();
  }, []);

  return (
    <div className="flex flex-col">
      {UserNotificationcontent.map((item, index) => {
        const { contentKey } = item;
        const cardData = notificationData[contentKey] || []; // Get data for the contentKey
        console.log(`Content Key: ${contentKey}, Data:`, cardData); // Log card data
        return (
          <div key={index} className={usernotificationstyle1}>
            <CardConfig key={index} Config={[{ ...item, data: cardData }]} />
          </div>
        );
      })}
    </div>
  );
};

export default UserNotificationComponent;



// import React from 'react';
// import Card from '../../../configurations/Card/Card';
// import { UserNotificationcontent } from './UserNotificationContent';
// import usernotificationstyle1 from '../../../configurations/Card/CardStyle';

// const UserNotificationComponent = () => {
//   return (
//     <div className="flex flex-col">
//       {UserNotificationcontent.map((item, index) => (
//         <div key={index} className={usernotificationstyle1}>
//           <Card Configs={[item]} cardTitleStyle="text-xs font-bold mb-2" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserNotificationComponent;

// import React, { useState, useEffect } from 'react';
// import Card from '../../../configurations/Card/Card';
// import usernotificationstyle1 from '../../../configurations/Card/CardStyle';
// import { fetchData } from '../../../services/APIService';
// import { EndUser_notification } from '../../../api/EndPoints';

// const UserNotificationComponent = () => {
//   const [notificationData, setNotificationData] = useState([]);

//   useEffect(() => {
//     const fetchnotificationData = async () => {
//       try {
//         const data = await fetchData(EndUser_notification); // Assuming fetchDataFromApi is your API fetching function
//         setNotificationData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchnotificationData();
//   }, []); // Empty dependency array ensures it runs only once on component mount

//   return (
//     <div className="flex flex-col">
//       {notificationData.map((item, index) => (
//         <div key={index} className={usernotificationstyle1}>
//           <Card Configs={[item]} cardTitleStyle="text-xs font-bold mb-2" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserNotificationComponent;
