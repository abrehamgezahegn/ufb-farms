import React from "react";
import Icon from "../Icon/Icon"
import styles from "./index.module.css";


const CardWithIconLeft = ({iconFileName = "" , header="",rowOne="",rowTwo="" }) => {

	return (

		<div className={styles["container"]}>
			<div className={styles["iconContainer"]}> 
				<Icon iconFileName={iconFileName}/> 
			</div>
			<div className={styles["right"]}>
				<span className={styles["header"]}> 
					<h3>{header}</h3> 
					<span className={styles["tinyIcon"]}>
						<Icon iconFileName={iconFileName}/>
					</span> 
				</span>
				<p className={styles["desktopParagraph"]}>{rowOne}</p>
				<p className={styles["desktopParagraph"]}>{rowTwo}</p>
				<p className={styles["mobileParagraph"]}>{rowOne}{rowTwo}</p>
			</div>
		</div>

		)
}


export default CardWithIconLeft;