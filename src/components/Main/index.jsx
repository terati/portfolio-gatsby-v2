import NavBar from '../NavBar';
import Box from '@mui/material/Box';
import MainBody from './MainBody';
import * as React from 'react';

function Main() {
    return (
        <>
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
              overflow: 'hidden'
            }}>
                <NavBar name='home' text='Timothy '/> 
                {/* <Box
                  sx={{
                    backgroundColor: 'red',
                    width: '100%',
                    height: 'calc(100vh - 70px)',
                    overflow: 'hidden'
                  }}
                >
                     <MainBody /> 
                </Box> */}
                
            </Box>
             
        </>
    )
}

export default Main
