import React from 'react';
import NavBar from '../../components/NavBar';
import Box from '@mui/material/Box';
import PortfolioBody from './PortfolioBody';

function Main() {
    return (
        <>
            <Box sx={{ 
            display: 'flex',
            height: '100%',
            }}>
                <NavBar name='portfolio'/> 
                <PortfolioBody />
            </Box>
             
        </>
    )
}

export default Main
