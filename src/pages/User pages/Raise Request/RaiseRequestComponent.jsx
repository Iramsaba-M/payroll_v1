//clean code
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import CardConfig from '../../../pages/Admin pages/Settings/cardcomponent/CardConfig';
import  RaiseRequestContent from './RaiseRequestContent'; // 
import { Outlet } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
const RaiseRequestComponent = () => {

  const [cardclick, setCardClick] = useState(false)
  const navigate = useNavigate();
  

  const handleCardClick = (route) => {

    navigate(route.to)

    setCardClick(true)
  };
  const handleBackClick = () => {
    navigate('/apps/raiserequest');
    setCardClick(false);
  };


  const cardsPerRow = 3;
  const chunkedSettingContent = chunkArray(RaiseRequestContent, cardsPerRow);

  return (
    <div>
      {/* Setting */}
      {
        (!cardclick) &&
        chunkedSettingContent.map((chunk, index) => (
          <div key={index} className='ml-8'>
          <CardConfig  Config={chunk} handleCardClick={handleCardClick} />
          </div>
        ))}
      {cardclick && (
        <>
          <button onClick={handleBackClick} className='mt-4'><IoMdArrowBack /></button>
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

export default RaiseRequestComponent;
