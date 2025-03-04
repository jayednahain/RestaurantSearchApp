import React from "react";
import ContextProviderUser from "./ContextProviderUser";
import ContextProviderBlog from "./ContextProviderBlog";


const AppProviders = ({ children }) => {
    return (
        <ContextProviderUser>
            <ContextProviderBlog>
                {children}
            </ContextProviderBlog>
        </ContextProviderUser>
    );
};


export default AppProviders;