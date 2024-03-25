import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import CardConfig from '../../pages/Settings/cardcomponent/CardConfig';
import  RaiseRequestContent from './RaiseRequestContent'; // 
import { Outlet } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
const RaiseRequestComponent = () => {
  // const [selectedCard, setSelectedCard] = useState(null);
  const [cardclick, setCardClick] = useState(false)
  const navigate = useNavigate();
  // const [currentPath, setcurrentPath] = useState(window.location.pathname);

  const handleCardClick = (route) => {
    // const currentPath = window.location.pathname;
    // const newPath =  `/apps/Settings${route.to}`;
    // console.log(`Navigating to ${cardclick}`);
    // setSelectedCard(route.title);
    navigate(route.to)

    setCardClick(true)
  };
  const handleBackClick = () => {
    navigate('/apps/loans');
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
          <div className='ml-8'>
          <CardConfig key={index} Config={chunk} handleCardClick={handleCardClick} />
          </div>
        ))}
      {cardclick && (
        <>
          <button onClick={handleBackClick}><IoMdArrowBack /></button>
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
