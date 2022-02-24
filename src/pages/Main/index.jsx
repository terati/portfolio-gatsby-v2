import React from 'react';
import NavBar from '../../components/NavBar';
import Box from '@mui/material/Box';
import MainBody from './MainBody';

function Main() {
    return (
        <>
            <Box sx={{ 
            display: 'flex',
            height: '100%',
            }}>
                <NavBar name='home'/> 
                <MainBody />
            </Box>
             
        </>
    )
}

export default Main
