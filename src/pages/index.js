import * as React from "react";
import { Link } from "gatsby";
import { ThemeProvider, useTheme, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import Layout from "../components/layout";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import About from "../components/About";
import "./index.css";

// export const ThemeContext = React.createContext({
//   theme: 'light',
//   setTheme: () => {},
// })

const IndexPage = () => {
  // console.log('hello?')
  // const [theme, setTheme] = React.useState('light');

  // const value = React.useMemo(
  //   () => ({ theme, setTheme }),
  //   [theme]
  // );

  return (
    // <ThemeContext.Provider value={value}>
      <About />
    // </ThemeContext.Provider>
  )
 
}

export default IndexPage
