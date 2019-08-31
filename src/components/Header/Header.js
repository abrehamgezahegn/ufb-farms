import React from "react";
import BackgroundImage from 'gatsby-background-image';
import {StaticQuery,graphql} from "gatsby";
import styles from "./index.module.css"
import HeaderContent from "../HeaderContent/HeaderContent";



const Header = () => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "header-background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
     	console.log(data)
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
        <div className={styles["container"]}>
           <BackgroundImage 
                 Tag="section"
                 className={styles["imageBackground"]}
                 fluid={imageData}
                 backgroundColor={`#040e18`}
            >
              <HeaderContent />
            </BackgroundImage> 
          </div>
       )
     }
     }
    />
)

export default Header
