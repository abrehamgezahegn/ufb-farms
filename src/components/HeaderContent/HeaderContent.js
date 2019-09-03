import React from "react";
import {useStaticQuery,graphql} from "gatsby";
import sytles from "./index.module.css";

const HeaderContent = () => {

	const headerContent = useStaticQuery(graphql`
		query {
			contentfulHeader {
				companyName
				headerOne
				headerTwo
			}
		}
	`)

	const {companyName,headerOne,headerTwo} = headerContent.contentfulHeader;    

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