import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function AboutBody() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            p: 1,
            // m: 1,
        }}>
            <Box component="main" sx={{ 
                display: 'flex',
                // flexGrow: 1, 
                maxWidth: '700px', 
                minHeight: '100vh',
                backgroundColor:'#222020', 
                paddingTop: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingBottom: '20px',
                // borderRadius: '20px',
                justifyContent: "flex-start",
                alignItems: "flex-start",
            }}>
                {/* <DrawerHeader /> */}
                <Box sx={{
                    
                }}>
                <Typography paragraph sx={{ color: 'white' }}>
                    <h1>Timothy Wong</h1>
                </Typography>
                
                <Typography paragraph>
                    <Chip variant="outlined" label="Chicago, Illinois" sx={{ color: 'white', marginRight: '5px' }}/>
                    <Chip variant="outlined" label="ReactJS" sx={{ color: 'white', marginRight: '5px' }}/>
                    <Chip variant="outlined" label="Typescript" sx={{ color: 'white', marginRight: '5px' }}/>
                    <Chip variant="outlined" label="NodeJS" sx={{ color: 'white', marginRight: '5px' }}/>
                </Typography>

                <Typography paragraph sx={{ color: "white" }}>
                    I graduated with a Bachelors of Science in Electrical Engineering from the University of Illinois at Urbana Champaign in 2021.
                </Typography>

                <Typography sx={{ color: "white" }}>
                    Creatively curious.
                </Typography>

                <ImageList sx={{ width: '100%', height: 450, padding: 0, margin: 0 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={item.img}
                                srcSet={item.img}
                                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                
                <button> Press me! </button>

                </Box>
            </Box>
        </Box>
    )
}

const itemData = [
    {
      img: 'https://portfolioims.s3.amazonaws.com/burger0.PNG',
      title: 'Burger',
    },
    {
      img: 'https://portfolioims.s3.amazonaws.com/cheescake.PNG',
      title: 'Cheesecake',
    },
    {
      img: 'https://portfolioims.s3.amazonaws.com/chinatown.PNG',
      title: 'Chinatown',
    },
    {
      img: 'https://portfolioims.s3.amazonaws.com/cupcake.PNG',
      title: 'Cupcake',
    },
    {
      img: 'https://portfolioims.s3.amazonaws.com/gentleman.PNG',
      title: 'Gentleman',
    },
    {
      img: 'https://portfolioims.s3.amazonaws.com/glass.PNG',
      title: 'Glass',
    },
    {
      img: 'https://portfolioims.s3.amazonaws.com/hermione1.PNG',
      title: 'Hermione',
    },
    {
      img: 'https://portfolioims.s3.amazonaws.com/kitkat.PNG',
      title: 'Kitkat',
    },
    {
      img: 'https://portfolioims.s3.amazonaws.com/netero.PNG',
      title: 'Netero',
    },
    {
      img: 'https://portfolioims.s3.amazonaws.com/newParrots0.PNG',
      title: 'NewParrots',
    },
  ];

export default AboutBody


// {
//     img: '',
//     title: '',
// },