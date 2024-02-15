import React from 'react';
import CardStyles from './CardStyle';

const Card = ({ card, title, content }) => {
  return (
    <div className={`${CardStyles[card]} ${CardStyles.MarginBetweenCards}`}>
      <h3 className={CardStyles.CardTitle}>{title}</h3>
      <p className={CardStyles.CardContent}>{content}</p>
    </div>
  );
};

const CardConfig = ({ Config, data }) => {
  return (
    <div className="flex flex-none">
      {Config.map((card, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % Config.length === 0 && <div className="w-full"></div>}
          <Card
            {...card}
            content={data && data.length > 0 ? data[0][card.contentKey] : ''}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardConfig;
