import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserRoleContext = createContext();

// Create a provider component
export const UserRoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

// Create a custom hook for using the context
export const useUserRole = () => useContext(UserRoleContext);
