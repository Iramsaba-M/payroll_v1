// HeaderComponent.js
import React from 'react';
import HeaderStyle from './Headerstyle';
import Button from '../Button/Button';
import ButtonData from '../Button/ButtonData';
import ButtonConfig from '../Button/ButtonConfig';
import ButtonStyles from '../Button/ButtonStyles';

import { useAuth0 } from "@auth0/auth0-react";

const HeaderComponent = ({ items }) => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <header>
      <div className={HeaderStyle.headerContainer}>
        <h2 className={HeaderStyle.infokalash}>INFOKALASH</h2>
        <ul className={HeaderStyle.navigation}>
          {items.map((item, index) => (
            <li key={index} className={HeaderStyle[item.css]}>
              {item.label}
            </li>
          ))}
        </ul>
        {/* Render the Button component here */}
        <ButtonConfig Config={ButtonData} buttonStyles={ButtonStyles} onClick={() => loginWithRedirect()}/>
        {/* <Button onClick={() => loginWithRedirect()} Configs={login}  /> */}
      </div>
    </header>
  );
};

export default HeaderComponent;