import React from "react"
import { Link } from "gatsby"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

import Layout from "../components/layout"
import NavBar from "../components/NavBar"
import Main from "./Main"
import "./index.css"

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>
)

export default IndexPage
