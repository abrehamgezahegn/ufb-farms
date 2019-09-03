import React from "react";
import styles from "./index.module.css";
import CardWithIconLeft from "../CardWithIconLeft/CardWithIconLeft"

const SupplySection = () => {

	return (

		<div className={styles["container"]}>
			<header>
				<h2>Assuring buyers of consistency in supply</h2>	
			</header>
			<div className={styles["inner"]}>
				<img className={styles["image"]}src={require("../../../static/Images/fruits.png")} alt="ufb farming"/>
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