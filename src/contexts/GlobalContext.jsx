import React, {createContext, useContext} from 'react';

const GlobalContext = createContext(null);

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export const GlobalProvider = ({children, value}) => {
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;