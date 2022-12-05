import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, navigate } from 'gatsby';
import NavBar from "../components/NavBar";
import { StaticImage } from 'gatsby-plugin-image';
import RightSidebar from "./rightSidebar";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import "@fontsource/open-sans";

const useStyles = makeStyles(theme => ({
  HoverFocus: {
    "&:hover, &.Mui-focusVisible": { backgroundColor: '#E7E7E7' },
  }
}));

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const classes = useStyles();
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  let post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <>
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
                  backgroundColor: 'white',
                  color: 'black',
              }}>
        <NavBar name='blog'/> 
        <Box sx={{
            display: 'flex',
            justifyContent: 'start',
            maxWidth: '800px',
            width: '100%',
            p: 0,
            paddingTop: '10px',
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
              <div className="blog-post" style={{boxSizing: 'border-box'}}>
                <Stack
                  direction='row'
                  alignItems='center'
                  gap={1}
                  spacing={2}
                  sx={{
                    maxWidth: '100%',
                  }}
                >
                  <ArrowBackIosNewIcon onClick={() => navigate('/Blog')}
                    className={classes.HoverFocus}
                    style={{ height: '50px', width: '50px', padding: '10px', borderRadius: '50%' }}
                  />
                  <Stack 
                    direction='column'
                    alignItems='flex-start'
                    gap={1}
                  >
                    <Typography variant="h4" >
                      {frontmatter.title}
                    </Typography>
                    <Typography variant='p'>By: Timothy Wong | Published {frontmatter.date}</Typography>
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
                <Img fluid={featuredImgFluid} />
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