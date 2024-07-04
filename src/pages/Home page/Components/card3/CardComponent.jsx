// CardComponent.js
import React from 'react';
import CardStyle3 from './CardStyle';

const CardComponent3 = ({ cards }) => {


  return (
    <div className="flex flex-col items-center">
     

      {/* Cards */}
      <div className={`flex flex-wrap justify-items-stretch mt-[38rem] bg-gray-800 text-white  ${CardStyle3.cardContainer}`}>
        {cards.map((card, index) => (
          <div key={index} className={CardStyle3.card}>
            {card.icon}
            <p className={CardStyle3.label}>{card.label}</p>
            <p className={CardStyle3.description}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent3;
