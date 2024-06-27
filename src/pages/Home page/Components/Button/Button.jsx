import React from 'react';
import ButtonConfig from './ButtonConfig';
import ButtonStyles from './ButtonStyles';
import ButtonData from './ButtonData';

const Button = () => {
  console.log("Button.js - Configs:", ButtonData); // Add this line for debugging

  return (
    <div>
      {/* Pass ButtonData to ButtonConfig */}
      <ButtonConfig Config={ButtonData} buttonStyles={ButtonStyles} />
    </div>
  );
};

export default Button;
