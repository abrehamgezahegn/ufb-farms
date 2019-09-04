import React from "react";
import {useFirstSection} from "../../hooks/contentHooks";
import styles from "./index.module.css";
import CardWithIconTop from "../CardWithIconTop/CardWithIconTop"
import Icon from "../Icon/Icon";

const ModelSection = () => {

	const data = useFirstSection();

	return (
		<div className={styles["container"]}>
			<header>
				<h1>{data.headerText}</h1>	
			</header>
			<div className={styles["cardContainer"]}>
					<CardWithIconTop 
						iconFileName="Money" 
						header={data.firstSectionItems[0].title} 
						content={data.firstSectionItems[0].description}
					/>
					<div className={styles["iconContainer"]}> 
						<Icon iconFileName="Angle-double-right"/> 
					</div>
					<CardWithIconTop 
						iconFileName="Book-open"
						header={data.firstSectionItems[1].title} 
						content={data.firstSectionItems[1].description}
					/>
					<div className={styles["iconContainer"]}> 
						<Icon iconFileName="Angle-double-right"/>
					 </div>
					<CardWithIconTop 
						iconFileName="Sending"
						header={data.firstSectionItems[2].title} 
						content={data.firstSectionItems[2].description}
					/>
			</div>
		</div>


		)
}


export default ModelSection;