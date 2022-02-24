import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Canvas from './Canvas';

function MainBody() {
    const sizeRef = useRef();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const getSize = () => {
        const newWidth = sizeRef.current.clientWidth;
        setWidth(newWidth);

        const newHeight = sizeRef.current.clientHeight;
        setHeight(newHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", getSize)
        getSize();
    }, [])

    return (
        <Box component="main" 
            ref={sizeRef}
            sx={{ 
                flexGrow: 1, 
                display: 'flex',
                flexDirection: 'column',
                margin: '0px',
                marginLeft: '70px',
                minHeight: '100vh',
                backgroundColor: '#222020',
                color: '#37D4B8',
                boxSizing: 'border-box',
                justifyContent: 'center',
                alignItems: 'center',
                // border: '10px solid white',
            }}
        >
            {/* <Canvas dwidth={width} dheight={height} style={{ position: 'absolute', display: 'flex', }} /> */}
            {/* <h1 style={{color:'#37D4B8', fontSize:'100px', fontFamily:'Roboto, Exo, Arial,', marginLeft:'5%'}}> Hello! </h1>
            <h1 style={{color:'#37D4B8', fontSize:'100px', fontFamily:'Roboto, Exo, Arial,', marginLeft:'5%'}}> I'm Timothy </h1> */}
            <div style={{ width: '100%',  height: '100px', backgroundColor: 'red', position: 'absolute', top: '0px', left: '0px' }}> 

            </div>
        </Box>
    )
}

export default MainBody
