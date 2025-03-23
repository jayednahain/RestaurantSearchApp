import React, { useState } from "react";
import { ThemeContext } from "../ContextBuild";

const ContextProviderTheme = ({ children }) => {
    const [theme, setTheme] = useState("light"); // Default theme is "light"

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export default ContextProviderTheme;