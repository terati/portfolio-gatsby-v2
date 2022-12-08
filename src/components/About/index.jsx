import React from 'react';
import NavBar from '../NavBar';
import Box from '@mui/material/Box';
import AboutBody from './AboutBody';
import { themes } from '../../themes/theme';
import { ThemeContext } from '../../context/ThemeContext';

function Main() {
    const { theme } = React.useContext(ThemeContext);
    return (
        <>
            <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                
                height: '100%',
                width: '100%',
                minHeight: '100%',
                backgroundColor: themes[theme].background,
                color: '#37D4B8',
            }}>
                <NavBar name='about' text={"About"}/> 
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    p: 1,
                    // m: 1,
                }}>
                    <AboutBody />
                </Box>
            </Box>
             
        </>
    )
}

export default Main
