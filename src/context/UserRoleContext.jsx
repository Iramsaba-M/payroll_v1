import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserRoleContext = createContext();

// Create a provider component
export const UserRoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [shownav,setshownav] = useState(true);

  return (
    <UserRoleContext.Provider value={{ role, setRole , shownav,setshownav}}>
      {children}
    </UserRoleContext.Provider>
  );
};

// Create a custom hook for using the context
export const useUserRole = () => useContext(UserRoleContext);
