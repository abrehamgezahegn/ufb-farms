import React from "react";
import {useStaticQuery,graphql} from "gatsby";
import styles from "./index.module.css";
import CardWithIconTop from "../CardWithIconTop/CardWithIconTop"
import Icon from "../Icon/Icon";

const ModelSection = () => {

	const data = useStaticQuery(graphql`
		query{
			 allContentfulFirstSection{
			    nodes{
			      title
			      description		     
		  		}
  			}
		} 
	`)

	const items = data.allContentfulFirstSection.nodes;

	return (

		<div className={styles["container"]}>
			<header>
				<h1> Our Model</h1>	
			</header>
			<div className={styles["cardContainer"]}>
					<CardWithIconTop 
						iconFileName="Money" 
						header={items[0].title} 
						content={items[0].description}
					/>
					<div className={styles["iconContainer"]}> 
						<Icon iconFileName="Angle-double-right"/> 
					</div>
					<CardWithIconTop 
						iconFileName="Book-open"
						header={items[1].title} 
						content={items[1].description}
					/>
					<div className={styles["iconContainer"]}> 
						<Icon iconFileName="Angle-double-right"/>
					 </div>
					<CardWithIconTop 
						iconFileName="Sending"
						header={items[2].title} 
						content={items[2].description}
					/>
			</div>
		</div>


		)
}


export default ModelSection;