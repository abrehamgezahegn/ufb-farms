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
				  <button className={styles["button"]}>CONTACT US</button>
			</div>
        </div>
      )
  }

export default Header
