import React from 'react';
import Box from '@mui/material/Box';
import { Link, navigate } from 'gatsby';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
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
            color: 'black',
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
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '20px',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.10)',
            }}>
              <Box>
                <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
                  {/* <Avatar alt="Timothy Wong" src="../images/gatsby-astronaut.png"> </Avatar> */}
                  <StaticImage 
                    src='../images/strawberriesSquared.png' 
                    alt='Tim'
                    width={50}
                    height={50}
                    style={{borderRadius: '25%'}} 
                  />
                  <Box>
                    Timothy Wong
                  </Box>
                </Stack>
              </Box>

              <Box sx={{marginTop: '10px'}}>
                <p>Welcome to my blog where I discuss new learning experiences and exploration of new technologies.</p>
              </Box>
              <Box> 
                <Typography variant='p1'> Recent Articles </Typography>
                {blockData.slice(0, 3).map((node) => {
                  return (
                    <Box>
                      <Typography variant='p1' style={{ textDecoration: 'underline', padding: '10px', cursor: 'pointer'}} onClick={() => {navigate(node.node.frontmatter.slug)}}> {node.node.frontmatter.title} </Typography>
                    </Box>
                  )
                })}
              </Box>
            </Box>
        </Box>
    )
}

export default RightSidebar
