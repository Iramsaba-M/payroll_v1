import { createContext, useState, useContext } from 'react';
import ErrorScreen from '../errorhandling/ErrorScreen' // Adjust the import path as needed

const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const value = {
    error,
    setError,
    clearError: () => setError(null),
  };

  return (
    <ErrorContext.Provider value={value}>
      {error ? <ErrorScreen errorCode={error} /> : children}
    </ErrorContext.Provider>
  );
};
