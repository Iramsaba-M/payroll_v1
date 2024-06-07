import React from 'react';
import CardStyles from './CardStyle';
import PropTypes from 'prop-types';

const Card = ({ card, title, icon }) => {
  return (
    <DrawOutlineButton>
      <div className={`${CardStyles[card]} ${CardStyles.MarginBetweenCards}`}>
        <h3 className={CardStyles.CardTitle}>{title}</h3>
        {icon && (
          <div className='mt-6 '>
            {icon}
          </div>
        )}
      </div>
    </DrawOutlineButton>
  );
};

Card.propTypes = {
  card: PropTypes.string.isRequired, // Validate card prop as a string
  title: PropTypes.string.isRequired, // Validate title prop as a string
  icon: PropTypes.node, // Validate icon prop as a React node (optional)
};

const CardConfig = ({ Config, data, handleCardClick }) => {
  return (
    <div className="flex flex-none">
      {Config.map((card, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % Config.length === 0 && <div className="w-full "></div>}
          <div onClick={() => handleCardClick(card)} className='ml-8'>
            <Card
              {...card}
              content={data && data.length > 0 ? data[0][card.contentKey] : ''}
              icon={card.icon ? card.icon : null}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardConfig;

CardConfig.propTypes = {
  Config: PropTypes.array.isRequired, // Validate Config prop as an array
  data: PropTypes.array, // Validate data prop as an array (optional)
  handleCardClick: PropTypes.func.isRequired, // Validate handleCardClick prop as a function
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className="group relative font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </div>
  );
};

// PropTypes validation for DrawOutlineButton component
DrawOutlineButton.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop as a React node
};
