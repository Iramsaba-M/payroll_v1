/* eslint-disable react/prop-types */
import React from 'react';
import CardStyles from './CardStyle';

const Card = ({ chart, card, title, content, icon, comp, heading, iconstyle, heading2, heading3, contentStyle,contentvalue, contentvalue2, className, classNametext, contentstyle, contentstyle2 }) => {
  return (
    <div className={`${CardStyles[card]} ${CardStyles.MarginBetweenCards} ${className}`}>
      {title && (<h3 className={CardStyles.CardTitle}>{title}</h3>)}

      {heading && (<h3 className=''>{heading}</h3>)}
      <div className={` ${classNametext}`}>{heading2 && (<h3 className='ml-16 font-bold'>{heading2}</h3>)}</div>
      {heading3 && (<h3 className='ml-4 font-bold'>{heading3}</h3>)}
      {content && <p style={contentStyle}>{content}</p>}
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
      {contentvalue2 && (<h3 className={`${CardStyles[contentstyle2]}`}>₹ {contentvalue2}</h3>)}
      {contentvalue && (<h3 className={`${CardStyles[contentstyle]}`}>{contentvalue}</h3>)}
    </div>
  );
};

const CardConfig = ({ Config, data, comp, contentvalue, contentvalue2 }) => {
  return (
    <div className="flex ">
      {Config.map((card, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % Config.length === 0 && <div className="w-full"></div>}
          <Card
            {...card}
            comp={comp ? comp : (card.comp ? card.comp : null)}
            contentvalue={contentvalue ? contentvalue : null}
            contentvalue2={contentvalue2 ? contentvalue2 : null}
            content={data && data.length > 0 ? data[0][card.contentKey] : ''}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardConfig;
