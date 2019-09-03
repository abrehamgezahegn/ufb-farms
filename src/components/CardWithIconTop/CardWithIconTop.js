import React from "react";
import Icon from "../Icon/Icon"
import styles from "./index.module.css";


const CardWithIconTop = ({iconFileName = "" , header="",content="" }) => {

	return (

		<div className={styles["container"]}>
			<Icon iconFileName={iconFileName}/>
			<h2>{header}</h2>
			<p>{content}</p>
		</div>

		)
}


export default CardWithIconTop;