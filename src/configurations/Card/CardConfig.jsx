import React, { useState } from 'react';
import CardStyles from './CardStyle';
import PropTypes from 'prop-types';

const Card = ({ chart, card, title, content, icon, comp, heading, iconstyle, heading2, heading3, contentStyle, name,
  contentvalue, contentvalue2, className, classNametext, contentstyle, contentstyle2, headstyle, multivalue, multiclone, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick(name, heading);
  };
  return (
    <div className={`${CardStyles[card]} ${CardStyles.MarginBetweenCards} ${className} ${isClicked && 'border-2 border-blue-400'}`} onClick={onClick && handleClick}>
      {title && (<h3 className={CardStyles.CardTitle}>{title}</h3>)}

      {heading && (<h3 className={`${CardStyles[headstyle]}`}>{heading}</h3>)}
      <div className={` ${classNametext}`}>{heading2 && (<h3 className='ml-16 font-bold'>{heading2}</h3>)}</div>
      {heading3 && (<h3 className='ml-8 font-bold'>{heading3}</h3>)}
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
      {contentvalue && (<h3 className={`${CardStyles[contentstyle]}`}>{Number(contentvalue).toLocaleString('en-IN')}</h3>)}
      {multivalue &&
        multivalue.map((field, index) => (
          <div key={index} className={`${CardStyles[field.multiheadingstyle]}`}>
            {field.heading && <h3 className='text-gray-600'>{field.heading}</h3>}
            {multiclone &&
              Object.entries(multiclone).map(([key, value], cloneIndex) => {
                if (field.name === key) {
                  return <p className={`${CardStyles[field.multivaluestyle]}`} key={cloneIndex}>{Number(value).toLocaleString('en-IN')}</p>;
                }
                return null;
              })}
          </div>
        ))}

    </div>
  );
};

Card.propTypes = {
  chart: PropTypes.string,
  card: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.node,
  comp: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  heading: PropTypes.string,
  iconstyle: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  contentStyle: PropTypes.object,
  name: PropTypes.string,
  contentvalue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  contentvalue2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  classNametext: PropTypes.string,
  contentstyle: PropTypes.string,
  contentstyle2: PropTypes.string,
  headstyle: PropTypes.string,
  multivalue: PropTypes.arrayOf(PropTypes.object),
  multiclone: PropTypes.object,
  onClick: PropTypes.func,
};

const CardConfig = ({ Config, data, comp, contentvalue, contentvalue2, multiclone, onClick }) => {
  return (
    <div className="flex  ">
      {Config.map((card, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % Config.length === 0 && <div className="w-full"></div>}
          <Card
            {...card}
            onClick={onClick}
            comp={comp ? comp : (card.comp ? card.comp : null)}
            contentvalue={contentvalue ? contentvalue : null}
            contentvalue2={contentvalue2 ? contentvalue2 : null}
            multiclone={multiclone ? multiclone : 0}
            content={data && data.length > 0 ? data[0][card.contentKey] : ''}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

CardConfig.propTypes = {
  Config: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.array.isRequired,
  comp: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  contentvalue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  contentvalue2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multiclone: PropTypes.object,
  onClick: PropTypes.func,
};

export default CardConfig;
