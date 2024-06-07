import { createContext, useState, useContext } from 'react';
import ErrorScreen from '../errorhandling/ErrorScreen' // Adjust the import path as needed
import PropTypes from 'prop-types';

const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const value = {
    error,
    setError,
    clearError: () => setError(null),
  };

  ErrorProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <ErrorContext.Provider value={value}>
      {error ? <ErrorScreen errorCode={error} /> : children}
    </ErrorContext.Provider>
  );
};
