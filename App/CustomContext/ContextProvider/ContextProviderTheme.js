import React, { useState } from "react";
import { ThemeContext } from "../ContextBuild";
import { LightTheme , DarkTheme } from "../../AppTheme";

const ContextProviderTheme = ({ children }) => {
    const [theme, setTheme] = useState(LightTheme); 
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === LightTheme ? DarkTheme : LightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export default ContextProviderTheme;