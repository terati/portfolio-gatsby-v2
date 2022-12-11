import * as React from 'react';
import { useState, useEffect } from 'react';
// import useWindowDimensions from './../hooks/WindowDimensions';
import { navigate } from "gatsby"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

import { themes } from './../themes/theme';
import { ThemeContext } from '../context/ThemeContext';

const IconDefaultStyle = {
fontSize: 30,
margin: '15px 10px',
color: 'rgba(64,64,64,1)',
"&:hover": {
  color: '#37D4B8',
  cursor: 'pointer'
},
};

const SelectedIconDefaultStyle = {
fontSize: 30,
margin: '15px 10px',
color: '#350ced',
"&:hover": {
  color: '#37D4B8',
  cursor: 'pointer'
// color: "white"
},
}

const ThemeTogglerSwitch = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handler = () => {
    if (theme === 'light'){
      setTheme('dark');
      console.log('hit');
    } else {
      setTheme('light');
    }
}

return (
  <Button
    onClick={handler}
    style={{
      // backgroundColor: themes[theme].background,
      // borderRadius: '10px',
      borderRadius: 0,
      borderLeft: 'solid 1px grey',
      color: 'grey'
    }}
  >
    { theme=="light" && <LightModeIcon /> }
    { theme=="dark" && <NightlightIcon /> }
  </Button>
)
}

function NavBar( props ) {
  const {
    text = ""
  } = props;
  //   const { height, width } = useWindowDimensions();
  const height = 1400;
  // const width = 1400;
  const { hidden, setHidden } = useState(false);
  // const theme = useTheme();
  const { theme } = React.useContext(ThemeContext);
  // const colorMode = React.useContext(ColorModeContext);
  // useEffect(() => {
  //   console.log(width);
  // }, [hidden])
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  return (
  <>

  {/* <Box sx={{
  position: 'fixed',
  top: '0px',
  left: '0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  zIndex: '99',
  backgroundColor: 'black',
  color: 'white',
  margin: '0px',
  padding: '0px',
  overflow: 'hidden',
  }}
  >
  <Box sx={{
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: '10px, 20px',
  }}>
  <Typography variant='h5' onClick={() => {navigate("/")}} > Home </Typography>
  <Typography variant='h5' onClick={() => {navigate("/Portfolio")}} > Portfolio </Typography>
  <Typography variant='h5' onClick={() => {navigate("/About")}} > About </Typography>
  <Typography variant='h5' onClick={() => {navigate("/Blog")}}> Blog </Typography>
  <Typography variant='h5' onClick={() => {navigate("/Contact")}}> Contact </Typography>
  </Box>
  </Box>  */}


  <Box sx={{ 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
    padding: '10px',
    position: 'sticky',
    width: '100%',
    height: '70px',
    top: 0,
    left: 0,
    // backgroundColor: 'white',
    // backgroundColor: themes[theme].foreground, 
    backdropFilter: 'blur(20px)',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.10)',
    zIndex: 99,
  }}>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
    }}>
      <Box sx={{
      }}>
        <Typography variant="h5" sx={{ color: '#350ced' }}>
          { text }
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // bgcolor: 'background.default',
        borderRadius: '30px',
        paddingTop: '20px',
        paddingBottom: '20px',
        height: '100%',
        // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}>
        {/* <CottageOutlinedIcon style={{height: '20px'}} sx={props.name == 'home' ? SelectedIconDefaultStyle : IconDefaultStyle} onClick={() => {navigate("/")}} /> */}
        {/* <CodeIcon style={{height: '20px'}} sx={props.name == 'portfolio' ? SelectedIconDefaultStyle : IconDefaultStyle} onClick={() => {navigate("/")}} /> */}
        <Tooltip title="About" arrow>
          <PersonOutlineIcon style={{height: '20px'}} sx={props.name == 'about' ? SelectedIconDefaultStyle : IconDefaultStyle} onClick={() => {navigate("/")}} />
        </Tooltip>
        <Tooltip title="Blog" arrow>
          <BookOutlinedIcon style={{height: '20px'}} sx={props.name == 'blog' ? SelectedIconDefaultStyle : IconDefaultStyle} onClick={() => {navigate("/Blog")}} />
        </Tooltip>
        {/* <MailOutlineOutlinedIcon style={{height: '20px'}} sx={props.name == 'contact' ? SelectedIconDefaultStyle : IconDefaultStyle} onClick={() => {navigate("/Contact")}} /> */}
        <ThemeTogglerSwitch />
      </Box>

    </Box>
  </Box>
  {/* {width > 750 && <Box sx={{
  display: 'flex',
  top: 0,
  left: 0,
  width: '90px',
  }}></Box> } */}
  </>
  );
}

export default NavBar
