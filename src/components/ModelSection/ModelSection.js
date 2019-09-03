import React from "react";
import styles from "./index.module.css";
import CardWithIconTop from "../CardWithIconTop/CardWithIconTop"
import Icon from "../Icon/Icon";

const ModelSection = () => {

	return (

		<div className={styles["container"]}>
			<header>
				<h1> Our Model</h1>	
			</header>
			<div className={styles["cardContainer"]}>
					<CardWithIconTop 
						iconFileName="Money" 
						header="Financing." 
						content="Farmers receive high-quality solar pumps, seeds and fertilizer on credit, and we offer a flexible repayment system that allows them to pay back their loans in any amount throughout the loan term."
					/>
					<div className={styles["iconContainer"]}> 
						<Icon iconFileName="Angle-double-right"/> 
					</div>
					<CardWithIconTop 
						iconFileName="Book-open"
						header="Traning."
						content="Farmers receive training throughout the season on modern agricultural techniques."
					/>
					<div className={styles["iconContainer"]}> 
						<Icon iconFileName="Angle-double-right"/>
					 </div>
					<CardWithIconTop 
						iconFileName="Sending"
						header="Distribution."
						content="We deliver produce directly to vendors shops."
					/>
			</div>
		</div>


		)
}


export default ModelSection;