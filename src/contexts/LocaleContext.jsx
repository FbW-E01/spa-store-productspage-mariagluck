import React, { useState, useContext } from 'react';


export const LocaleContext = React.createContext();

export function LocaleContextProvider({ children }) {
    const [locale, setLocale] = useState('EUR');

    return (
        <LocaleContext.Provider value={[ locale, setLocale ]}>
            {children}
        </LocaleContext.Provider>
    )
}

export const useLocaleContext = () => {
    return useContext(LocaleContext);
}


