// CardComponent.js
import React from 'react';
import CardStyle from './CardStyle';

const CardComponent = ({ cards }) => {
  const mainHeading = (
    <div className="text-center  mb-4">
      {/* <div className='text-3xl font-semibold mt-4'>
        Key features of <span className="text-blue-500">Ikamai</span></div>
      <div>We have lots of rich features that help to gain your productivity</div> */}
      <div className='text-3xl font-semibold mt-4'>
        Highlighted Features of <span className="text-blue-500">Ikamai</span></div>
      <div>Explore our extensive features designed to boost your productivity</div>
    </div>
  );

  return (
    <div className="flex flex-col   mt-6 border-black items-center">
      {/* Main heading and description */}
      {mainHeading}

      {/* Cards */}
      <div className={`flex flex-wrap justify-center  ${CardStyle.cardContainer}`}>
        {cards.map((card, index) => (
          <div key={index} className={CardStyle.card}>
            <div className={CardStyle.icon}>{card.icon}</ div>
            <p className={CardStyle.label}>{card.label}</p>
            <p className={CardStyle.description}>{card.description}</p>
          </div>
        ))}
      </div>
      {/* <br className=''/> */}
    </div>
  );
};

export default CardComponent;
