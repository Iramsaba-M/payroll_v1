
import React from "react";
import BoxStyles from "./BoxStyle";
import PropTypes from 'prop-types';

const Box = ({ card, title, content, icon, icon2 }) => {
  return (
    <div className={`${BoxStyles[card]} ${BoxStyles.MarginBetweenCards}`}>
      <h3 className={BoxStyles.CardTitle}>
        {title}{" "}
        {<div className="w-4 -translate-y-6 translate-x-[90vh]">{icon} </div>}{" "}
        <div className="w-4 -translate-y-11 translate-x-[24vh] ">{icon2}</div>{" "}
      </h3>

      <p className={BoxStyles.CardContent}>{content}</p>
    </div>
  );
};

Box.propTypes = {
  card: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  icon2: PropTypes.node.isRequired,
};

const BoxConfig = ({ Config, data }) => {
  return (
    <div className="flex flex-none">
      {Config.map((card, index) => (
        <React.Fragment key={index}>
          {index > 0 && index % Config.length === 0 && (
            <div className="w-full"></div>
          )}
          <Box
            {...card}
            content={data && data.length > 0 ? data[0][card.contentKey] : ""}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

BoxConfig.propTypes = {
  Config: PropTypes.arrayOf(PropTypes.shape({
    card: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    contentKey: PropTypes.string.isRequired, // Assuming contentKey is the key for data object
    icon: PropTypes.node.isRequired,
    icon2: PropTypes.node.isRequired,
  })).isRequired,
  data: PropTypes.array.isRequired,
};


export default BoxConfig;
