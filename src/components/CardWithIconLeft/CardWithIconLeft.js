import React from "react";
import Icon from "../Icon/Icon"
import styles from "./index.module.css";


const CardWithIconLeft = ({iconFileName = "" , header="",content="" }) => {

	return (

		<div className={styles["container"]}>
			<Icon iconFileName={iconFileName}/>
			<div className={styles["right"]}>
				<h3>{header}</h3>
				<p>{content}</p>
			</div>
		</div>

		)
}


export default CardWithIconLeft;