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
				<div className={styles["left"]}> 
					<CardWithIconLeft 
						iconFileName="Sale" 
						header="Competitive Pricing" 
						content="Direct supply from farmers with no intermediaries."
					/>
					<CardWithIconLeft 
						iconFileName="Clipboard-check" 
						header=" Quality Focus" 
						content="Throughout the supply chain from procurement to delivery, quality is assured."
					/>
					<CardWithIconLeft 
						iconFileName="Double-check" 
						header="Consistent Availability" 
						content="365 days a year with value added services such as quality assessment, sampling etc."
					/>
				</div>
				<img className={styles["image"]}src={require("../../../static/Images/fruits.png")} alt="ufb farming"/>
			</div>
		</div>

		)
}


export default SupplySection;