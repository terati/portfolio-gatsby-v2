import React from 'react';
import Box from '@mui/material/Box';
import { Link, navigate } from 'gatsby';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from '../context/ThemeContext';
import { themes } from '../themes/theme';
import "./rightSidebar.css";

function RightSidebar() {
  const data = useStaticQuery(graphql`
    query SideQuery {
        allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  date
                  slug
                  title
                }
              }
            }
          }
    }
  `)
  const [blockData, setBlockData] = React.useState(data.allMarkdownRemark.edges);
  const { theme } = React.useContext(ThemeContext);

    return (
        <Box sx={{
            top: '100px',
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            maxWidth: '300px',
            height: '100%',
            marginTop: '100px',
            // padding: '20px',
            color: themes[theme].neutral_test,
            // backgroundColor: 'white',
            // display: 'none',
            // backgroundColor: '#3E3E3E',
          }}
            className="rightSidebar"
          >
            <Box sx={{ 
              position: 'fixed',
              fontFamily: 'Roboto',
              top: '100px',
              bottom: '20px',
              width: '300px',
              backgroundColor: themes[theme].foreground,
              padding: '20px',
              borderRadius: '20px',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.10)',
            }}>
              <Box sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
              }}>
              <Box>
                <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
                  {/* <Avatar alt="Timothy Wong" src="../images/gatsby-astronaut.png"> </Avatar> */}
                  <StaticImage 
                    src='../images/strawberriesSquared.png' 
                    alt='Tim'
                    width={50}
                    height={50}
                    style={{borderRadius: '50%'}} 
                  />
                  <Box>
                    <Typography variant="h5">
                      Timothy
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box sx={{marginTop: '10px'}}>
                <Typography variant="p"> 
                  Welcome to my little blog corner and project showcase. Nothing much to see. 
                </Typography>
              </Box>
              <Box> 
                {/* <Typography variant='p1'> Recent Articles </Typography>
                {blockData.slice(0, 3).map((node) => {
                  return (
                    <Box>
                      <Typography variant='p1' style={{ textDecoration: 'underline', padding: '10px', cursor: 'pointer'}} onClick={() => {navigate(node.node.frontmatter.slug)}}> {node.node.frontmatter.title} </Typography>
                    </Box>
                  )
                })} */}
              </Box>
              <Box sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                width: '100%',
                height: '80%',
                
              }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 30,
                    left: 60,
                    height: '100px',
                    width: '100px',
                    background: 'linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(0,255,149,1) 100%)',
                    transform: 'rotate(-45deg)',
                    borderRadius: '20px',
                  }} />
                  <Box sx={{
                    position: 'absolute',
                    top: 80,
                    left: 150,
                    height: '250px',
                    width: '250px',
                    background: 'linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(0,255,149,1) 100%)',
                    transform: 'rotate(-45deg)',
                    borderRadius: '20px',
                  }} />
                  <Box sx={{
                    position: 'absolute',
                    top: 300,
                    left: 30,
                    height: '160px',
                    width: '160px',
                    background: 'linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 26%, rgba(0,255,149,1) 100%)',
                    transform: 'rotate(-45deg)',
                    borderRadius: '20px',
                  }} />
                
              </Box>
              </Box>
            </Box>
        </Box>
    )
}

export default RightSidebar
