
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardConfig from '../Settings/cardcomponent/CardConfig';
import NotificationContent from './NotificationContent';
import { Outlet } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
const NotificationsComponent = () => {
  const [cardclick, setCardClick] = useState(false)
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route.to)

    setCardClick(true)
  };
  const handleBackClick = () => {
    navigate('/apps/notifications/');
    setCardClick(false);
  };


  const cardsPerRow = 3;
  const chunkedContent = chunkArray(NotificationContent, cardsPerRow);

  return (
    <div>
      {
        (!cardclick) &&
        chunkedContent.map((chunk, index) => (
          <div key={index} className='ml-8'>
            <CardConfig Config={chunk} handleCardClick={handleCardClick} />
          </div>
        ))}
      {cardclick && (
        <>
          <div className='mt-4'>
            <button onClick={handleBackClick}><IoMdArrowBack /></button>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
};

// Helper function to chunk the array into groups of three
const chunkArray = (array, size) => {
  return array.reduce((chunks, item, index) => {
    if (index % size === 0) {
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
};

export default NotificationsComponent;
