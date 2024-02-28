import React from 'react';
import CardStyles from './CardStyle';



const Card = ({ chart,card, title, content,icon,comp,heading,iconstyle,contentvalue,contentstyle }) => {
  return (
    <div className={`${CardStyles[card]} ${CardStyles.MarginBetweenCards}`}>
     {title && ( <h3 className={CardStyles.CardTitle}>{title}</h3>)}
     {heading && ( <h3>{heading}</h3>)}
     {content && (<p className={CardStyles.CardContent}>{content}</p>)}
     {comp && (
        <div className={`${CardStyles[chart]}`}>
           {typeof comp === 'function' ? comp() : comp}
        </div>
      )}
      {icon && (
        <div className={`${CardStyles[iconstyle]}`}>
          {icon}
        </div>
      )}  
      {contentvalue && ( <h3 className={`${CardStyles[contentstyle]}`} >{contentvalue}</h3>)}
    </div>
  );
};

const CardConfig = ({ Config, data,comp,contentvalue}) => {
  return (
    <div className="flex ">
      {Config.map((card, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % Config.length === 0 && <div className="w-full"></div>}
          <Card
            {...card}
            comp={comp ? comp : (card.comp?card.comp:null)}
            contentvalue={contentvalue ? contentvalue : ''}
            content={data && data.length > 0 ? data[0][card.contentKey] : ''}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardConfig;