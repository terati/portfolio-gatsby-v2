import NavBar from '../../components/NavBar';
import Box from '@mui/material/Box';
import MainBody from './MainBody';
import * as React from 'react';

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
