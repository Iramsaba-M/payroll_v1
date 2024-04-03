// Button.js
import React from 'react';
import ButtonConfig from './ButtonConfig';

const Button = ({ Configs, onClick }) => {
  return (
    <div>
      <ButtonConfig Config={Configs} onClick={onClick} />
    </div>
  );
};

export default Button;
