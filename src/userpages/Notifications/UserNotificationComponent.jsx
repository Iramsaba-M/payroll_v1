// import { useState } from 'react'
// import React from 'react'
// import Card from '../../configurations/Card/Card'
// import { UserNotificationcontent } from './UserNotificationContent';

// const UserNotificationComponent = () => {

//   // const [notificationData, setTableData] = useState([]);

//   // const fetchTableData = async () => {
      
//   //     try {
//   //       const notificationData = await fetchData(mypayslip); // Fetch data based on payslips
//   //       setTableData(notificationData);
//   //     } catch (error) {
//   //       console.error('Error fetching table data:', error);
//   //     }
//   //   };
    
//   //   useEffect(() => {
//   //     fetchTableData(); // Fetch data on component mount or when payslips change
//   //   }, [mypayslip]); // Include payslips in the dependency array


//   return (
//     <div>
//       <Card Configs={UserNotificationcontent}  />
//     </div>
//   )
// }
// export default UserNotificationComponent

import React from 'react';
import Card from '../../configurations/Card/Card';
import { UserNotificationcontent } from './UserNotificationContent';
import usernotificationstyle1 from '../../configurations/Card/CardStyle';

const UserNotificationComponent = () => {
  return (
    <div className="flex flex-col space-y-4">
      {UserNotificationcontent.map((item, index) => (
        <div key={index} className={usernotificationstyle1}> {/* Use cardStyle here */}
          <Card Configs={[item]} />
        </div>
      ))}
    </div>
  );
};

export default UserNotificationComponent;
