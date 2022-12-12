import * as React from "react";
import { Link } from "gatsby";
import { ThemeProvider, useTheme, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import Layout from "../components/layout";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import About from "../components/About";
import { Helmet } from "react-helmet";
import "./index.css";

const IndexPage = () => {

  return (
    <>
      <Helmet>
        <title>Timothy</title>
      </Helmet>
        {/* <ThemeContext.Provider value={value}> */}
      <About />
        {/* </ThemeContext.Provider> */}
    </>
  )
 
}

export default IndexPage
