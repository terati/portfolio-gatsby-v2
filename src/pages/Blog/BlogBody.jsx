import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CustomizedInput from './CustomizedInput';
import { useStaticQuery, graphql } from 'gatsby';
import { Image } from '@mui/icons-material';
import RightSidebar from '../../templates/rightSidebar';
// import useWindowDimensions from '../../hooks/WindowDimensions';
import { makeStyles } from "@mui/styles";
import { Link, navigate } from 'gatsby';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../context/ThemeContext';
import { themes } from '../../themes/theme';
import { styled } from '@mui/material/styles';
import './../index.css';

const useStyles = makeStyles(stl => {
  const { theme } = React.useContext(ThemeContext);
  return ({
  
  HoverFocus: {
    // borderRadius: '20px',
    // border: '10px solid black',
    borderWidth: '10px',
    borderStyle: 'solid',
    
    transition: '.5s ease',
    cursor: 'pointer',
    "&:hover, &.Mui-focusVisible": 
    { 
      border: '10px solid #333333',
    },
  }
  })
});

function BlogBody() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
                      tags
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
    const [tags, setTags] = React.useState([]);

    // const { height, width } = useWindowDimensions();
    const height = 1400;
    const width = 1400;
    const [showData, setShowData] = React.useState(blockData);
    const { theme } = React.useContext(ThemeContext);

    React.useEffect(() => {
      let set = new Set();
      let tmptags;
      blockData.forEach((node) => {
        tmptags = node.node.frontmatter.tags; 
        if (tmptags && tmptags.length>0) {
          for (let i=0; i<tmptags.length; ++i) {
            set.add(tmptags[i]);
          }
        }
      })
      let arr = Array.from(set).sort();
      let tmparr = [];
      for (let i=0; i<arr.length; ++i) {
        tmparr.push([arr[i], false]);
      }
      setTags(tmparr);
    }, [])

    React.useEffect(() => {
      let tmp = [];
      let tagFlag = false;
      for (let i=0; i<tags.length; ++i) tagFlag = tagFlag || tags[i][1];
      if (!tagFlag) {
        blockData.forEach((node) => {
          if ( node.node.frontmatter.title.toLowerCase().includes(searchData.toLowerCase()) == true){
            tmp.push(node);
          }
        })
      } else {
        let set = new Set();
        for (let i=0; i<tags.length; ++i) {
          if (tags[i][1]) set.add(tags[i][0]);
        }
        blockData.forEach((node) => {
          if ( node.node.frontmatter.title.toLowerCase().includes(searchData.toLowerCase()) == true) {
            if (!node.node.frontmatter.tags) return;
            for (let i=0; i<node.node.frontmatter.tags.length; ++i) {
              if (set.has(node.node.frontmatter.tags[i])) {
                tmp.push(node);
                break;
              } 
            }
            
          }
        })
      }
      setShowData(tmp);
      // let result = blockData.filter((node) => {
      //   node.node.frontmatter.title.toLowerCase().includes(searchData.toLowerCase())
      //   // console.log(node.node.frontmatter.title.toLowerCase());
      //   // console.log(node.node.frontmatter.title.toLowerCase().includes(searchData.toLowerCase()));
      // })
      // console.log(blockData);
    }, [searchData, tags])

    const handleToggleTag = (idx) => {
      let newTags = [...tags];
      newTags[idx][1] = !newTags[idx][1];
      setTags(newTags);
    }

    return (
        <Box component="main" sx={{ 
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            minHeight: '100vh',
            p: 1,
          }}
          style={{backgroundColor: themes[theme].background}}
        >
          <Box component="main" 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                // maxWidth: '1500px', 
                width: '1000px',
                paddingTop: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingBottom: '20px',
                justifyContent: "flex-start",
                alignItems: "flex-start",
            }}>
            <Box sx={{
              width: '100%',
            }}>
              <Stack direction="row" alignItems="center" justifyContent="flex-start"
                sx={{
                  // height: '30px',
                  width: '100%',
                }}
              >
                <CustomizedInput />

              </Stack>
            </Box>
            <Stack direction="row"
              sx={{
                padding: '5px 10px'
              }}
            >
              { tags && tags.map((value, idx) => {
                return (
                  <Chip
                    id = {idx}
                    variant={value[1] ? "filled" : "outlined"}
                    label={value[0]}
                    color="secondary"
                    sx={{ 
                      paddingRight: '5px', 
                      margin: '2px 5px',
                      boxShadow: 3,
                    }}
                    onClick={() => handleToggleTag(idx)}
                  /> 
                )
                }) 
              }
            </Stack>
           
            <Box sx={{ flexGrow: 1, width: '100%' }} 
              style={{ fontFamily: 'Roboto-G' }}
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
                  // paddingRight: '50px',
                  // borderRight: '1px solid #E4E4E4'
                }}
              >

                {showData.map((node, idx) => {
                  const image = getImage(node.node.frontmatter.featuredImage.childImageSharp)
                  let [year, month, day] = node.node.frontmatter.date.split('-')
                  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                  month = months[parseInt(month)-1]
                  return (
                    <Box key={idx} sx={{
                        marginBottom: '20px',
                        fontFamily: 'Roboto-G',
                      }}
                    >
                      <Card sx={{ 
                          display: 'flex',
                          flexDirection: { xs: 'column', md:'row', },
                          borderRadius: '20px', 
                          maxHeight: { xs: '500px', md:'300px' }, 
                          backgroundColor: themes[theme].foreground,
                          borderColor: themes[theme].foreground,
                          color: themes[theme].neutral_test, 
                          boxShadow: 8, 
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
                          <Typography variant="h5" style={{ fontFamily: "Roboto-G"}}
                            sx={{
                              color: themes[theme].neutral_test,
                            }}
                          >
                            {node.node.frontmatter.title}
                          </Typography>
                          <Typography variant="p2" style={{color: themes[theme].selection_test, fontSize: '15px', paddingBottom: '10px'}}>
                            {month + ' ' + day + ', ' + year}
                          </Typography>
                          <Typography variant="body2" style={{ fontFamily: "Roboto-G"}}>
                            { node.node.internal.content.slice(0, 200) + '...' }
                          </Typography>
                          <Stack direction="row">
                            { node.node.frontmatter.tags &&
                              node.node.frontmatter.tags.map((value, idx) => {
                                return (
                                  <Chip
                                    id={"inner_chip_"+idx}
                                    variant={"outlined"}
                                    label={value}
                                    sx={{ 
                                      padding:'2px', 
                                      margin:'2px 5px',
                                      color: themes[theme].selection_test
                                    }}
                                  
                                  />
                                )
                              })
                            }
                          </Stack>
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

