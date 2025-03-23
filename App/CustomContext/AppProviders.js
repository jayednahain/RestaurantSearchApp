import React from "react";
import { ContextProviderUser, ContextProviderBlog,  ContextProviderTheme } from "./ContextProvider";


const AppProviders = ({ children }) => {
    return (
        <ContextProviderTheme>
            <ContextProviderUser>
                <ContextProviderBlog>
                    {children}
                </ContextProviderBlog>
            </ContextProviderUser>
         </ContextProviderTheme>

    );
};


export default AppProviders;