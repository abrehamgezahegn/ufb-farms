import React from "react";
import {useStaticQuery,graphql} from "gatsby"
import Img from "gatsby-image/withIEPolyfill";
import styles from "./index.module.css";
import CardWithIconLeft from "../CardWithIconLeft/CardWithIconLeft"

const SupplySection = () => {
		const data = useStaticQuery(graphql`
		query {
		    fileName: file(relativePath: { eq: "fruits.jpg" }) {
		      childImageSharp {
		        fluid(maxWidth: 650, maxHeight: 420) {
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
				<h2>Assuring buyers of consistency in supply</h2>	
			</header>
			<div className={styles["inner"]}>
				<Img 
					fluid={imageData} 
					className={styles["image"]} 
					alt="ufb farming"
					objectFit="contain"
				/>
				<div className={styles["left"]}> 
					<CardWithIconLeft 
						iconFileName="Sale" 
						header="Competitive Pricing" 
						rowOne="Direct supply from farmers with no"
						rowTwo="intermediaries."
					/>
					<CardWithIconLeft 
						iconFileName="Clipboard-check" 
						header=" Quality Focus" 
						rowOne="Throughout the supply chain from" 
						rowTwo ="procurement to delivery, quality is assured."
					/>
					<CardWithIconLeft 
						iconFileName="Double-check" 
						header="Consistent Availability" 
						rowOne="365 days a year with value added services" 
						rowTwo = "such as quality assessment, sampling etc."
					/>
				</div>
			</div>
		</div>

		)
}


export default SupplySection;