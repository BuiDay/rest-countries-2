import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState ('lightTheme');
    
    const toggleTheme = ()=>{
        setTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme');
    }

    const valueTheme = {theme, toggleTheme}

    return (
        <div>
            <ThemeContext.Provider value={valueTheme}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

