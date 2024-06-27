// Section.js
import React from 'react';

const Section = ({ title, description, titleStyle, descriptionStyle }) => {
  return (
    <div>
      <h2 className={titleStyle}>{title}</h2>
      <p className={descriptionStyle}>{description}</p>
    </div>
  );
};

export default Section;
