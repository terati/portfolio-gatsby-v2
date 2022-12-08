import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Paper } from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext';
import { themes } from '../../themes/theme';
import "./About.css";
// import '../../../static/'

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
  {
    text: 'AWS',
  },
]

function AboutBody() {
  const { theme } = React.useContext(ThemeContext);
  const matches = useMediaQuery('(min-width:1000px)');
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
              <div
                // style={styles.paperContainer}
                sx={{
                  display: 'flex',
                  
                }}>
                <Typography variant='h1' 
                  className="about"
                  sx={{
                    backgroundImage: `url(${"/rainbow_haze.jpg"})`,
                    WebkitBackgroundClip: "text !important",
                    backgroundClip: "text !important",
                    color: 'transparent',
                    backgroundRepeat: 'repeat-x',
                    // color: themes[theme].neutral_test 
                  }}>
                  Timothy Wong
                </Typography>
              </div>
            
              <Typography paragraph>
                {
                  chip.map((entry) => {
                    return (
                      <Chip variant="outlined" label={entry.text} sx={{ 
                        color: themes[theme].neutral_test,
                        margin: '5px',
                        fontSize: '1.1em',
                        padding: '2px 5px',
                        borderColor: themes[theme].neutral_test
                      }}/>
                    )
                  })
                }
              </Typography>

              <Typography variant='h6' sx={{ 
                color: themes[theme].neutral_test
              }}>
                I am a self-taught coder for the most part. I have a Bachelors of Science in Electrical Engineering from the University of Illinois at Urbana Champaign.
              </Typography>

              <Typography variant='h6' sx={{ 
                color: themes[theme].neutral_test 
              }}>
                This is my blog of interesting stuff and projects. I like to learn and experiment with new ideas.
              </Typography>

            </Box>
            <ImageList sx={{ 
              width: '100%',
              maxWidth: '1300px',
              height: '100%',
              padding: 0, 
              margin: 0,
            }} 
            cols={matches ? 3 : 2}
            gap={10}
            variant="standard"
            // rowHeight={164}
            >
                  {itemData.map((item) => {
                    return (
                      
                      <ImageListItem key={item.img}
                      >
                          <img
                              src={item.img}
                              // srcSet={item.img}
                              // width={100}
                              // height={100}
                              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                              alt={item.title}
                              loading="lazy"
                              style={{ borderRadius: '10px' }}
                          />
                      </ImageListItem>
                  )})}
              </ImageList>
        </Box>
    </Box>
  )
}

const itemData = [
  {
    img: '/cupcake.PNG',
    title: 'Cupcake',
  },
  {
    img: '/gentleman.PNG',
    title: 'Gentleman',
  },
  {
    img: '/parrots1.PNG',
    title: 'Color Penciled Parrots'
  },
  {
    img: '/burger.PNG',
    title: 'Burger',
  },
  {
    img: '/cheescake.PNG',
    title: 'Cheesecake',
  },
  {
    img: '/chinatown.PNG',
    title: 'Chinatown',
  },
  {
    img: '/glass.PNG',
    title: 'Glass',
  },
  {
    img: '/hermione.PNG',
    title: 'Hermione',
  },
  {
    img: '/kitkat.PNG',
    title: 'Kitkat',
  },
  {
    img: '/netero.PNG',
    title: 'Netero',
  },
  {
    img: '/newParrots.PNG',
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
    img: '/ramen0.PNG',
    title: 'Fire Ramen Half Done'
  },
  {
    img: '/ramen2.PNG',
    title: 'Fire Ramen Copleted'
  },
  {
    img: '/skyscraper_scraper.PNG',
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
