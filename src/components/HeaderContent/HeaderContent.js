import React from "react";
import sytles from "./index.module.css";

const HeaderContent = () => (
	<div className={sytles["container"]}>
		<div className={sytles["inner"]}>
			<header>UFB Farms</header>
			<div className={sytles["contentOne"]}>
				<h1>UFB links farmers and vendors </h1>
				<h1> to fair, trusted markets</h1>
			</div>
			<div className={sytles["contentTwo"]}> 
				<h4>We source quality produce from Ethiopian farmers </h4>
				<h4>and deliver to vendors in urban areas</h4>
			</div>
			<button>CONTACT US</button>
		</div>
	</div>	
)

export default HeaderContent;