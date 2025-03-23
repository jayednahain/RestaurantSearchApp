import React from "react";

//UserContext (The Context) → This is the actual context object that holds and shares data.
const UserContext = React.createContext();
const BlogContext = React.createContext();
const TodoContext = React.createContext();
const ThemeContext = React.createContext();


export {UserContext , BlogContext , TodoContext ,ThemeContext} ;