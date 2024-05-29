import { createContext, useContext } from 'react';

const ComponentMappingContext = createContext();


export const useComponentMapping = () => {
    const context = useContext(ComponentMappingContext);
    if (!context) {
        throw new Error('useComponentMapping must be used within a ComponentMappingProvider');
    }
    return context;
};


export const ComponentMappingProvider = ({ children, value }) => {
    return (
        <ComponentMappingContext.Provider value={value}>
            {children}
        </ComponentMappingContext.Provider>
    );
};
