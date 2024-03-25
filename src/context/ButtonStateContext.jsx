import React, { createContext, useState, useContext } from "react";

const ButtonStateContext = createContext();

export const useButtonState = () => useContext(ButtonStateContext);

export const ButtonStateProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isPersonal, setIsPersonal] = useState(false);

  const handleAdminClick = () => {
    setIsAdmin(true);
    setIsPersonal(false);
  };

  const handlePersonalClick = () => {
    setIsAdmin(false);
    setIsPersonal(true);
  };

  return (
    <ButtonStateContext.Provider
      value={{
        isAdmin,
        isPersonal,
        handleAdminClick,
        handlePersonalClick
      }}
    >
      {children}
    </ButtonStateContext.Provider>
  );
};
