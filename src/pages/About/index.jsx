import React from 'react';
import NavBar from '../../components/NavBar';
import Box from '@mui/material/Box';
import AboutBody from './AboutBody';

function Main() {
    return (
        <>
            <Box sx={{ 
                display: 'flex',
                height: '100%',
                width: '100%',
                minHeight: '100%',
                backgroundColor: '#222020',
                color: '#37D4B8',
            }}>
                <NavBar name='about'/> 
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
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
