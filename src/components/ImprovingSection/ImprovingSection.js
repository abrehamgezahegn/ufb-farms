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
						content="Building trust with quality driven competitive prices factoring in all associated costs and expenses."
					/>
					<CardWithIconLeft 
						iconFileName="Wallet" 
						header="Simple Payment" 
						content="Direct to bank account. On Time. No installments."
					/>
					<CardWithIconLeft 
						iconFileName="Loader" 
						header="Hassle Free" 
						content="Local logistics support with direct farm sourcing. "
					/>
				</div>
				<img src={require("../../../static/Images/thedude.png")} alt="ufb farming"/>
			</div>
		</div>

		)
}


export default ImprovingSection;