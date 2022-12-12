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
        <meta name="description" content="Personal website for Timothy W" />
        <meta property="og:site_name" content="About - Timothy W" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="Timothy Wong, blog, software" />
        <meta name="author" content="Timothy Wong" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
        {/* <ThemeContext.Provider value={value}> */}
      <About />
        {/* </ThemeContext.Provider> */}
    </>
  )
 
}

export default IndexPage
