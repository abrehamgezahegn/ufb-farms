import React from "react";
import styles from "./index.module.css";
import CardWithIconLeft from "../CardWithIconLeft/CardWithIconLeft"

const ImprovingSection = () => {

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
				<img 
					className={styles["theDude"]} 
					src={require("../../../static/Images/thedude.png")} alt="ufb farming"
				/>
			</div>
		</div>

		)
}


export default ImprovingSection;