import React from 'react';
import NavBar from '../../components/NavBar';
import Box from '@mui/material/Box';
import BlogBody from './BlogBody';
import { themes } from '../../themes/theme';
import { ThemeContext } from '../../context/ThemeContext';

function Main() {
    const { theme } = React.useContext(ThemeContext);

    return (
        <>
            <Box sx={{ 
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                minHeight: '100%',
                // backgroundColor: '#222020',
                // backgroundColor: themes[theme].foreground,
                color: '#37D4B8',
            }}>
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    backgroundColor: themes[theme].background,
                }}>
                </Box>
                <NavBar name='blog' text={"Blog"}/> 
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    p: 0,
                }}>
                    <BlogBody />
                </Box>
            </Box>
             
        </>
    )
}

export default Main
