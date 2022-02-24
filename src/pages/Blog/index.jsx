import React from 'react';
import NavBar from '../../components/NavBar';
import Box from '@mui/material/Box';
import BlogBody from './BlogBody';

function Main() {
    return (
        <>
            <Box sx={{ 
                display: 'flex',
                height: '100%',
                width: '100%',
                minHeight: '100%',
                // backgroundColor: '#222020',
                backgroundColor: 'white',
                color: '#37D4B8',
            }}>
                <NavBar name='blog'/> 
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    p: 1,
                }}>
                    <BlogBody />
                </Box>
            </Box>
             
        </>
    )
}

export default Main
