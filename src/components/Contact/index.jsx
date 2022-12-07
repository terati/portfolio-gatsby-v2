import React from 'react';
import NavBar from '../NavBar';
import Box from '@mui/material/Box';
import ContactBody from './ContactBody';

function Main() {
    return (
        <>
            <Box sx={{ 
                display: 'flex',
                height: '100%',
            }}>
                <NavBar name='contact'/> 
                <ContactBody />
            </Box>
             
        </>
    )
}

export default Main
