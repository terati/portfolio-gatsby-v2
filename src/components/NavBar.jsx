import * as React from 'react';
import { useState, useEffect } from 'react';
import useWindowDimensions from './../hooks/WindowDimensions';
import { navigate } from "gatsby"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';

// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const IconDefaultStyle = {
    fontSize: 30,
    margin: '15px 10px',
    color: 'rgba(64,64,64,1)',
    "&:hover": {
        color: "white"
    },
};

const SelectedIconDefaultStyle = {
  fontSize: 30,
  margin: '15px 10px',
  color: 'white',
  "&:hover": {
      color: "white"
  },
}

function NavBar( props ) {
  const { height, width } = useWindowDimensions();
  const { hidden, setHidden } = useState(false);

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
          {/* <CssBaseline /> */}
            {width < 1050 && 
            <Box sx={{
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
            </Box> 
            }

          {width >= 1050 && <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              height: '100%', 
              // backgroundColor: 'rgba(10,10,10,1)',
              padding: '10px',
              position: 'absolute',
              width: '70px',
              top: 0,
              left: 0,
              // right: 0,
          }}>
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'fixed',
                  alignItems: 'center',
                  height: '100%',
                  width: '70px',
                  top: 0,
                  left: 0,
                  backgroundColor: 'rgba(10,10,10,1)',
              }}>
                  <CottageOutlinedIcon style={{height: '30px'}} sx={props.name == 'home' ? SelectedIconDefaultStyle : IconDefaultStyle} onClick={() => {navigate("/")}} />
                  <CodeIcon sx={props.name == 'portfolio' ? SelectedIconDefaultStyle : IconDefaultStyle} onClick={() => {navigate("/Portfolio")}} />
                  <PersonOutlineIcon sx={props.name == 'about' ? SelectedIconDefaultStyle : IconDefaultStyle} onClick={() => {navigate("/About")}} />
                  <BookOutlinedIcon sx={props.name == 'blog' ? SelectedIconDefaultStyle : IconDefaultStyle} onClick={() => {navigate("/Blog")}} />
                  <MailOutlineOutlinedIcon sx={props.name == 'contact' ? SelectedIconDefaultStyle : IconDefaultStyle} onClick={() => {navigate("/Contact")}} />
                  {/* <p>{width}</p> */}
              </Box>
          </Box>}
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
