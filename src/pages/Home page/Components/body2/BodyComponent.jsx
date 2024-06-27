// BodyComponent.js

import React from 'react';
import { BodyStyle, BodyStyle2 } from './BodyStyle'; // Import both BodyStyle and BodyStyle2
import Section from './Section'; // Assuming Section component is in the same directory

const BodyComponent = ({ image, mainHeading, sections, config }) => {
  const bodyStyle = config === 'config1' ? BodyStyle : BodyStyle2; // Select appropriate body style
  const titleStyles = config === 'config1' ? BodyStyle.titleStyles : BodyStyle2.titleStyles; // Select appropriate title styles
  const descriptionStyles = config === 'config1' ? BodyStyle.descriptionStyles : BodyStyle2.descriptionStyles; // Select appropriate description styles

  return (
    <div className={bodyStyle.bodyContainer}>
      <img src={image} alt="Image" className={bodyStyle.image} />
      <div className={bodyStyle.content}>
        <h1 className={bodyStyle.mainHeadingStyle}>{mainHeading}</h1>
        {sections.map((item, index) => (
          <Section
            key={index}
            title={item.title}
            description={item.description}
            titleStyle={titleStyles[`section${index + 1}`]} // Dynamically select title style
            descriptionStyle={descriptionStyles[`section${index + 1}`]} // Dynamically select description style
          />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
