import React from 'react';
import CardStyles from './CardStyle';
import { Link, NavLink } from 'react-router-dom';

const Card = ({ card, title, content,icon   }) => {
  return (
    
    <div  className={`${CardStyles[card]} ${CardStyles.MarginBetweenCards}`}>
      
      <h3  className={CardStyles.CardTitle}>{title}</h3>
      {/* <p className={CardStyles.CardContent}>{content}</p> */}
      {icon && (
        <div className='mt-6 '>
          {icon}
        </div>
      )}
     
    </div>
    
  );
};


const CardConfig = ({ Config, data ,handleCardClick }) => {
  return (
    <div className="flex flex-none">
      {Config.map((card, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % Config.length === 0 && <div className="w-full "></div>}
          
          <div onClick={() => handleCardClick(card)}  className='ml-8'>
          <Card
            {...card}
            content={data && data.length > 0 ? data[0][card.contentKey] : ''}
            // icon={card.icon ? card.icon : null} 
            
          /> 
          </div>
          {/* </NavLink> */}
        </React.Fragment>
      ))}
      
    </div>
  );
};

export default CardConfig;