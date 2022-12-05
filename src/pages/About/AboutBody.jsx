import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import './../../images/strawberries.PNG'
// import './../../../src/images/strawberries.PNG'

const chip = [
  {
    text: 'ReactJS'
  },
  {
    text: 'TypeScript',
  },
  {
    text: 'Javascript',
  },
  {
    text: 'NodeJS',
  },
  {
    text: 'Electron',
  },
  {
    text: 'Java',
  },
  {
    text: 'Spring Boot',
  },
  {
    text: 'PostgresSQL',
  },
  {
    text: 'SQL',
  },
  {
    text: 'Python',
  },
  {
    text: 'CSS/SCSS',
  },
]

function AboutBody() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            p: 1,
            // m: 1,
        }}>
            <Box component="main" sx={{ 
                display: 'flex',
                flexDirection: 'column',
                // flexGrow: 1, 
                // maxWidth: '900px', 
                minHeight: '100vh',
                backgroundColor:'#222020', 
                paddingTop: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingBottom: '20px',
                // borderRadius: '20px',
                justifyContent: "flex-start",
                alignItems: 'center',
            }}>
                {/* <DrawerHeader /> */}
                <Box sx={{
                  maxWidth: '900px',
                  padding: '20px 0',
                }}>
                  <Typography paragraph sx={{ color: 'white' }}>
                      <Typography variant='h3'>
                        Timothy Wong
                      </Typography>
                  </Typography>
                  
                  <Typography paragraph>
                    {
                      chip.map((entry) => {
                        return (
                          <Chip variant="outlined" label={entry.text} sx={{ 
                            color: 'white', 
                            margin: '5px',
                            fontSize: '1.1em',
                            padding: '2px 5px',
                          }}/>
                        )
                      })
                    }
                  </Typography>

                  <Typography variant='h6' sx={{ color: "white" }}>
                    I am a self-taught coder for the most part. I do have a Bachelors of Science in Electrical Engineering from the University of Illinois at Urbana Champaign.
                  </Typography>

                  <Typography variant='h6' sx={{ color: "white" }}>
                    Welcome to my blog of interesting stuff and projects. Creatively curious.
                  </Typography>

                </Box>
                <ImageList sx={{ 
                  width: '100%',
                  maxWidth: '1000px',
                  height: '100%',
                  // height: 450, 
                  padding: 0, 
                  margin: 0,
                  
                }} 
                cols={3}
                gap={10}
                variant="masonry"
                // rowHeight={164}
                >
                      {itemData.map((item) => (
                          <ImageListItem key={item.img}
                          >
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


    {
      img: '/strawberries.PNG',
      title: 'Strawberries'
    },
    {
      img: '/parrots0.PNG',
      title: 'Waterpainted Parrots'
    },
    {
      img: '/parrots1.PNG',
      title: 'Color Penciled Parrots'
    },
    {
      img: '/ramen0.PNG',
      title: 'Fire Ramen Half Done'
    },
    {
      img: '/ramen2.PNG',
      title: 'Fire Ramen Copleted'
    },
    {
      img: '/skyscraper_scaper.PNG',
      title: 'Skyscraper'
    },
    {
      img: '/skyscraper_up.PNG',
      title: 'Looking Up To Skyscrapers'
    },
    {
      img: '/old_gentleman.PNG',
      title: 'Old Gentleman'
    },
    {
      img: '/strawberry_tart.PNG',
      title: 'Strawberry Tart'
    }
  ];



export default AboutBody


// {
//     img: '',
//     title: '',
// },