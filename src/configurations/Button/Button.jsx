// Button.js
import React from 'react';
import ButtonConfig from './ButtonConfig';

const Button = ({ Configs, onClick }) => {
  return (
    <div>
      {/* Pass onClick function to ButtonConfig */}
      <ButtonConfig Config={Configs} onClick={onClick} />
    </div>
  );
};

export default Button;
