import { useContext } from 'react'

import { ThemeContext, UserContext } from "../ContextBuild";



const useTheme = () => useContext(ThemeContext);
const useUserAuth = () => useContext(UserContext);

export { useTheme, useUserAuth };