import React from "react";
import sytles from "./index.module.css";

const HeaderContent = ({companyName,headerOne,headerTwo}) => {


	return (
		<div className={sytles["container"]}>
			<div className={sytles["inner"]}>
				<header>{companyName}</header>
				<div className={sytles["contentOne"]}>
					<h1>{headerOne}</h1>
				</div>
				<div className={sytles["contentTwo"]}> 
					<h4>{headerTwo}</h4>
				</div>
				<button>CONTACT US</button>
			</div>
		</div>	
	)
} 

export default HeaderContent;