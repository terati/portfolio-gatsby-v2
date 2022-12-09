import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { navigate } from 'gatsby';
import NavBar from "../components/NavBar";
import { StaticImage } from 'gatsby-plugin-image';
import RightSidebar from "./rightSidebar";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from "@mui/material";
import "@fontsource/open-sans";
import { themes } from "../themes/theme";
import { ThemeContext } from "../context/ThemeContext";
import { Helmet } from "react-helmet";
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const useStyles = makeStyles(theme => ({
  HoverFocus: {
    "&:hover, &.Mui-focusVisible": { 
      backgroundColor: '#37D4B8',
      cursor: 'pointer'
    },
  }
}));

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const classes = useStyles();
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  const { theme } = React.useContext(ThemeContext);
  let post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <>
      <Helmet>
        <title>Timothy</title>
      </Helmet>
      <Box sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                  width: '100%',
                  maxWidth: '100vw',
                  minHeight: '100%',
                  // backgroundColor: '#222020',
                  backgroundColor: themes[theme].background,
                  color: themes[theme].neutral_test,
              }}>
        <NavBar name='blog' text={"Blog"} /> 
        <Box sx={{
            display: 'flex',
            justifyContent: 'start',
            maxWidth: '800px',
            width: '100%',
            p: 0,
            paddingTop: '10px',
            backgroundColor: themes[theme].background,
            // m: 1,
        }}>
          <Box component="main" sx={{ 
            display: 'flex',
            // maxWidth: '900px', 
            // paddingTop: '10px',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '0',
            // justifyContent: "flex-start",
            // alignItems: "flex-start",

            fontFamily: 'Open Sans',
            // borderRight: '1px solid #E4E4E4',
          }}>
            <div className="blog-post-container">
              <div className="blog-post" style={{boxSizing: 'border-box', maxWidth: '100vw'}}>
                <Box>
                  <Link onClick={() => navigate('/Blog')} sx={{ cursor: 'pointer' }}> blog </Link> 
                  /
                  <Link sx={{ cursor: 'pointer' }}> {frontmatter.slug.split('/')[2]} </Link>
                </Box>
                <Stack
                  direction='row'
                  alignItems='flex-start'
                  gap={1}
                  spacing={2}
                  sx={{
                    maxWidth: '100%',
                    marginTop: '30px',
                  }}
                >
                  <ArrowBackIosNewIcon onClick={() => navigate('/Blog')}
                    className={classes.HoverFocus}
                    style={{ 
                      height: '30px', 
                      width: '30px', 
                      padding: '5px', 
                      borderRadius: '50%',
                      border: 'solid 1px',
                      borderColor: themes[theme].neutral_test,
                      marginTop: '10px'
                    }}
                  />
                  <Stack 
                    direction='column'
                    alignItems='flex-start'
                    gap={0}
                  >
                    <Typography variant="h3" >
                      {frontmatter.title}
                    </Typography>
                    <Typography variant='p'
                      sx={{ padding: 0, margin: 0 }}
                    >Written by: Timothy Wong
                    </Typography>
                    <Typography variant='p'
                      sx={{ padding: 0, margin: 0 }}  
                    >Updated: {frontmatter.date} </Typography>
                  </Stack>
                </Stack>
                
                {/* <Stack 
                  direction="row" 
                  spacing={2} 
                  justifyContent="flex-start" 
                  alignItems="center"
                >
                  <Avatar
                    sx={{ width: 35, height: 35, fontSize: '15px' }}
                  >TW</Avatar> */}
                {/* </Stack> */}
                <Img fluid={featuredImgFluid} style={{
                  margin: '20px 0',
                  borderRadius:'10px',
                }}/>
                <Box
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                  sx={{
                    maxWidth: '100vw',
                  }}
                />
              </div>
              <Box 
                // width='100%'
                sx={{
                  display: 'flex',
                  height: '100px',
                  width: '100%',
                  maxWidth: '100vw',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignItems: 'start',
                  fontSize: 'smaller',
                  backgroundColor: '#37D4B8',
                  color: 'white',
                  padding: '20px 10px',
                  fontFamily: 'Roboto',
                  fontSize: '1em',
                  borderRadius: '20px 20px 0 0',
                  marginTop: '100px',
                }}
              >
                  Copyright © 2022 Designed and Created by Timothy
              </Box>
            </div>
            
          </Box>  
          
          {/* <RightSidebar />    */}
        </Box>
        
      </Box>
      
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`