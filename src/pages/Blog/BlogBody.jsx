import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CustomizedInput from './CustomizedInput';
import { useStaticQuery, graphql } from 'gatsby';
import { Image } from '@mui/icons-material';
import RightSidebar from '../../templates/rightSidebar';
import useWindowDimensions from '../../hooks/WindowDimensions';
import { makeStyles } from "@mui/styles";
import { Link, navigate } from 'gatsby';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  
  HoverFocus: {
    borderRadius: '20px',
    border: '10px solid white',
    transition: '.5s ease',
    "&:hover, &.Mui-focusVisible": 
    { 
      border: '10px solid #333333',
    },
  }
}));

function BlogBody() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allMarkdownRemark {
                edges {
                  node {
                    rawMarkdownBody
                    id
                    internal {
                      content
                    }
                    frontmatter {
                      date
                      slug
                      title
                      featuredImage {
                        absolutePath
                        childImageSharp {
                          gatsbyImageData(width: 400)
                        }
                      }
                    }
                  }
                }
              }
        }
    `)
    const classes = useStyles();
    const searchData = useSelector((state) => state.search);
    // console.log(data.allMarkdownRemark.edges);
    const [blockData, setBlockData] = React.useState(data.allMarkdownRemark.edges);
    const { height, width } = useWindowDimensions();
    const [showData, setShowData] = React.useState(blockData);

    React.useEffect(() => {
      let tmp = []
      blockData.forEach((node) => {
        if ( node.node.frontmatter.title.toLowerCase().includes(searchData.toLowerCase()) == true){
          tmp.push(node)
        }
      })
      setShowData(tmp);
      // let result = blockData.filter((node) => {
      //   node.node.frontmatter.title.toLowerCase().includes(searchData.toLowerCase())
      //   // console.log(node.node.frontmatter.title.toLowerCase());
      //   // console.log(node.node.frontmatter.title.toLowerCase().includes(searchData.toLowerCase()));
      // })
      // console.log(blockData);
    }, [searchData])

    return (
        <Box component="main" sx={{ 
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          minHeight: '100vh',
          p: 1,
        }}>
          <Box component="main" 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                // maxWidth: '1500px', 
                // backgroundColor:'#222020', 
                width: '1000px',
                // backgroundColor: 'red',
                paddingTop: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingBottom: '20px',
                justifyContent: "flex-start",
                alignItems: "flex-start",
            }}>
            <Box>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
                <CustomizedInput />
              </Stack>
            </Box>
            <Box sx={{ flexGrow: 1, width: '100%' }} 
              style={{ fontFamily: 'Roboto' }}
            >
              <Box 
                // container 
                // direction="row"
                // spacing={2} 
                // columns={16}
                // justifyContent="center"\
                sx={{
                  // backgroundColor: 'yellow',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  paddingRight: '50px',
                  borderRight: '1px solid #E4E4E4'
                }}
              >

                {showData.map((node, idx) => {
                  const image = getImage(node.node.frontmatter.featuredImage.childImageSharp)
                  let [year, month, day] = node.node.frontmatter.date.split('-')
                  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                  month = months[parseInt(month)]
                  return (
                    <Box key={idx} sx={{
                        marginBottom: '20px',
                        fontFamily: 'Roboto',
                      }}
                    >
                      <Card sx={{ 
                          display: 'flex',
                          flexDirection: 'row',
                          borderRadius: 0, 
                          maxHeight: '300px', 
                          backgroundColor: 'white', 
                          color: 'black', boxShadow: 8, 
                        }} 
                        onClick={() => navigate(node.node.frontmatter.slug)} 
                        style={{ 
                          
                        }}
                        className={classes.HoverFocus}
                      >
                        
                        <GatsbyImage image={image} alt='articleIm'/>

                        <CardContent sx={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          padding: '5px 50px', 
                          maxWidth: '500px',
                          justifyContent: 'center',
                        }}
                        >
                          <Typography variant="h5">
                            {node.node.frontmatter.title}
                          </Typography>
                          <Typography variant="p2" style={{color: '#494949', fontSize: '15px', paddingBottom: '10px'}}>
                            {month + ' ' + day + ', ' + year}
                          </Typography>
                          <Typography variant="body2" style={{ fontFamily: "Roboto"}}>
                            { node.node.internal.content.slice(0, 200) + '...' }
                          </Typography>
                        </CardContent>

                      </Card>
                    </Box>
                  )
                })
                }

              </Box>
            </Box>
          </Box>
          {/* <Box>
              Test Area
          </Box> */}
          {width > 1240 && <RightSidebar />}
        </Box>
    )
}

export default BlogBody

