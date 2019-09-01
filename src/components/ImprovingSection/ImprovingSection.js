import React from "react";
import Img from "gatsby-image/withIEPolyfill";
import {useStaticQuery , graphql} from "gatsby";
import styles from "./index.module.css";
import CardWithIconLeft from "../CardWithIconLeft/CardWithIconLeft";

const ImprovingSection = () => {

	const data = useStaticQuery(graphql`
		query {
		    fileName: file(relativePath: { eq: "thedude.png" }) {
		      childImageSharp {
		        fluid(maxWidth: 500, maxHeight: 550) {
		          ...GatsbyImageSharpFluid
		        }
		      }
		    }
		}

	`)
	const imageData = data.fileName.childImageSharp.fluid
	return (

		<div className={styles["container"]}>
			<header>
				<h2>Improving farmers' crop selling experience </h2>	
			</header>
			<div className={styles["inner"]}>
				<div className={styles["left"]}> 
					<CardWithIconLeft 
						iconFileName="Tag" 
						header="Transparent Pricing" 
						rowOne="Building trust with quality driven competitive prices"
						rowTwo="factoring in all associated costs and expenses."
					/>
					<CardWithIconLeft 
						iconFileName="Wallet" 
						header="Simple Payment" 
						rowOne="Direct to bank account. On Time." 
						rowTwo="No installments."
					/>
					<CardWithIconLeft 
						iconFileName="Loader" 
						header="Hassle Free" 
						rowOne="Local logistics support with"
						rowTwo= "direct farm sourcing."
					/>
				</div>
					<Img 
						fluid={imageData} 
						alt="ufb farming" 
						className={styles["theDude"]} 
						objectFit="contain"
					/>
			</div>
		</div>

		)
}


export default ImprovingSection;