import React from "react";
import {useStaticQuery,graphql} from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import styles from "./index.module.css"
import HeaderContent from "../HeaderContent/HeaderContent";



const Header = () => 
  {
   const data = useStaticQuery(graphql`
		query {									
		    fileName: file(relativePath: { eq: "headerImage.png" }) {
		      childImageSharp {
		        fixed(width: 900, height: 600) {
		          ...GatsbyImageSharpFixed
		        }
		      }
		    }
		}

	`)

	const imageData = data.fileName.childImageSharp.fixed
    return (
       <div className={styles["container"]}>
	       <div className={styles["inner"]}>
	              <HeaderContent/>
	              <Img 
					fluid={imageData} 
					alt="ufb farming" 
					className={styles["image"]} 
				  />
				  <a target="_blank" href=" https://docs.google.com/forms/d/e/1FAIpQLSfxV2uRCTyCuoJ_flPjZGad0McmDhDwjbdWDFEQ1X9-IIbTeg/viewform?usp=sf_link">
					<button className={styles["button"]}>Contact Us</button>
				</a>
			</div>
        </div>
      )
  }

export default Header
