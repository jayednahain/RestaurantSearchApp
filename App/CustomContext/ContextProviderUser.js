import React, { useState } from "react";
import { UserContext } from "./ContextBuild";

// This is a React component that wraps other components.
const ContextProviderUser = ({children}) =>{

    const [user, setUser] = useState(null)

    return(<UserContext.Provider value ={{user, setUser}}>
        {children}
    </UserContext.Provider>);
}
export default ContextProviderUser