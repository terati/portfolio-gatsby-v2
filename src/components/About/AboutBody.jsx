import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Paper } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
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
            cols={3} //{matches ? 3 : 2}
            gap={0}
            variant="standard"
            >
              <ImageListItem key={'x1'}
                cols={1}
              >
                <StaticImage 
                  src="../../../static/cupcake.PNG"
                  placeholder="blurred"
                  alt="cupcake"
                  objectPosition="50% 50%"
                  objectCover="cover"
                  // width={500}
                  // height={500}
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x2'}
                cols={2}
              >
                <StaticImage 
                  src="../../../static/gentleman.PNG"
                  placeholder="blurred"
                  alt="gentleman"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  // width={1000}
                  // height={500}
                  // style={{
                  //   width: '1500px',
                  //   height: '500px'
                  // }}
                  objectPosition="50% 50%"
                />
              </ImageListItem>
              <ImageListItem key={'x16'}>
                <StaticImage 
                  src="../../../static/ramen2.PNG"
                  placeholder="blurred"
                  alt="ramen2"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              
              <ImageListItem key={'x4'}>
                <StaticImage 
                  src="../../../static/burger.PNG"
                  placeholder="blurred"
                  alt="burger"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x5'}>
                <StaticImage 
                  src="../../../static/cheesecake.PNG"
                  placeholder="blurred"
                  alt="cheesecake"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x14'}
                cols={2}
              >
                <StaticImage 
                  src="../../../static/old_gentleman.PNG"
                  placeholder="blurred"
                  alt="old_gentlman"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x6'}>
                <StaticImage 
                  src="../../../static/chinatown.PNG"
                  placeholder="blurred"
                  alt="chinatown"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x7'}>
                <StaticImage 
                  src="../../../static/glass.PNG"
                  placeholder="blurred"
                  alt="glass"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>



              <ImageListItem key={'x8'}>
                <StaticImage 
                  src="../../../static/hermione.PNG"
                  placeholder="blurred"
                  alt="hermione"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x9'}>
                <StaticImage 
                  src="../../../static/kitkat.PNG"
                  placeholder="blurred"
                  alt="kitkat"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x10'}>
                <StaticImage 
                  src="../../../static/netero.PNG"
                  placeholder="blurred"
                  alt="netero"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x12'}
                cols={2}
                rows={2}
              >
                <StaticImage 
                  src="../../../static/strawberries.PNG"
                  placeholder="blurred"
                  alt="strawberries"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x11'}>
                <StaticImage 
                  src="../../../static/newParrots.PNG"
                  placeholder="blurred"
                  alt="newParrots"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x13'}>
                <StaticImage 
                  src="../../../static/parrots0.PNG"
                  placeholder="blurred"
                  alt="parrots0"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x14'}>
                <StaticImage 
                  src="../../../static/ramen0.PNG"
                  placeholder="blurred"
                  alt="ramen0"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x18'}>
                <StaticImage 
                  src="../../../static/skyscraper_up.PNG"
                  placeholder="blurred"
                  alt="skyscraper_up"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              <ImageListItem key={'x3'}
                cols={2}
                rows={2}
              >
                <StaticImage 
                  src="../../../static/parrots1.PNG"
                  placeholder="blurred"
                  alt="parrots1"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>

              <ImageListItem key={'x15'}>
                <StaticImage 
                  src="../../../static/strawberry_tart.PNG"
                  placeholder="blurred"
                  alt="strawberry_tart"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>
              
              <ImageListItem key={'x17'}>
                <StaticImage 
                  src="../../../static/skyscraper_scraper.PNG"
                  placeholder="blurred"
                  alt="skyscraper_scraper"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </ImageListItem>


                  {/* {itemData.map((item) => {
                    return (
                      
                      <ImageListItem key={item.img}
                      >
                          <img
                              src={item.img}
                              alt={item.title}
                              loading="lazy"
                              style={{ borderRadius: '10px' }}
                          />
                      </ImageListItem>
                  )})} */}
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
