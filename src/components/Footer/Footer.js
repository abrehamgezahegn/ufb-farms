import React from "react";
import styles from "./index.module.css";


const Footer = () =>(
	 <footer className={styles["footer"]}> 
	 	<div className={styles["inner"]}> 
	 		<p> © 2019 UFB Farms </p>  
	 		<a target="_blank" href=" https://docs.google.com/forms/d/e/1FAIpQLSfxV2uRCTyCuoJ_flPjZGad0McmDhDwjbdWDFEQ1X9-IIbTeg/viewform?usp=sf_link">
	 			<p>Contact Us</p>
	 		</a>
	 	</div>
	 </footer>
)


export default Footer;