 import React from "react"
 import PropTypes from "prop-types"
 import { StaticQuery, graphql } from "gatsby"
 import { Helmet } from "react-helmet"
 import NavBar from "./NavBar"
 
 import "./layout.css"
 
 const Layout = ({ children }) => (
   <StaticQuery
     query={graphql`
       query SiteTitleQuery {
         site {
           siteMetadata {
             title
           }
         }
       }
     `}
     render={data => (
       <>
        <Helmet>
          <title>Timothy</title>
        </Helmet>
         {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
         <NavBar />
         <div
           style={{
             margin: `0 auto`,
             maxWidth: 960,
             padding: `0px 1.0875rem 1.45rem`,
             paddingTop: 0,
           }}
         >
           <main>{children}</main>
           <footer>
             © {new Date().getFullYear()}. Designed and created by Timothy Wong
             {` `}
             
           </footer>
         </div>
       </>
     )}
   />
 )
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout