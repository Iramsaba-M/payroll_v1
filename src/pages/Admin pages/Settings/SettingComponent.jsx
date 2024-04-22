/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import CardConfig from './cardcomponent/CardConfig';
import SettingContent from './SettingContent';
import { Outlet } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
const SettingComponent = () => {
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
    navigate('/apps/settings/');
    setCardClick(false);
  };


  const cardsPerRow = 3;
  const chunkedSettingContent = chunkArray(SettingContent, cardsPerRow);

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

export default SettingComponent;
