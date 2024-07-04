// Layout.js

import React from 'react';
import HeaderComponent from '../Components/header1/HeaderComponent';
import HeaderConfig from '../Components/header1/HeaderConfig';
import HeroData from '../Components/body/Herodata';
import HeroSection from '../Components/body/Hero';
import Hero from '../Components/body/Hero';
import CardComponent from '../Components/card/CardComponent';
import {CardConfig} from '../Components/card/CardConfig';
import BodyComponent from '../Components/body2/BodyComponent';
import BodyConfig from '../Components/body2/BodyConfig'; // Import the default export from BodyConfig.js
import { BodyStyle, BodyStyle2 } from '../Components/body2/BodyStyle'; // Import both body styles
import CardComponent3 from '../Components/card3/CardComponent';
import { CardConfig3 } from '../Components/card3/CardConfig';

function Layout() {
  return (
    <div className='w-fit'>
      <HeaderComponent items={HeaderConfig} />
      <Hero heroData={HeroData} />
      <CardComponent cards={CardConfig} />
      <BodyComponent
        image={BodyConfig.config1.image}
        mainHeading={BodyConfig.config1.mainHeading}
        sections={BodyConfig.config1.sections}
        config="config1" // Specify the configuration for this BodyComponent
      />
      <BodyComponent
        image={BodyConfig.config2.image}
        mainHeading={BodyConfig.config2.mainHeading}
        sections={BodyConfig.config2.sections}
        config="config2" // Specify the configuration for this BodyComponent
      />
      <CardComponent3 cards={CardConfig3} />
      


    </div>
  );
}

export default Layout;
