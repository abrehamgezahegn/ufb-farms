import React from "react";
import {useStaticQuery,graphql} from "gatsby";
import sytles from "./index.module.css";

const HeaderContent = () => {

	const headerContent = useStaticQuery(graphql`
		query {
			contentfulHeader {
				headerOne
				headerTwo
			}
		}
	`)

	const {headerOne,headerTwo} = headerContent.contentfulHeader;    

	return (
		<div className={sytles["container"]}>
			<div className={sytles["inner"]}>
				<img className={sytles["logo"]} src={require('../../../static/Icons/logo.svg')} alt="ufb farms"/>
				<div className={sytles["contentOne"]}>
					<h1>{headerOne}</h1>
				</div>
				<div className={sytles["contentTwo"]}> 
					<h4>{headerTwo}</h4>
				</div>
				<a target="_blank" href=" https://docs.google.com/forms/d/e/1FAIpQLSfxV2uRCTyCuoJ_flPjZGad0McmDhDwjbdWDFEQ1X9-IIbTeg/viewform?usp=sf_link">
					<button>Contact Us</button>
				</a>
			</div>
		</div>	
	)
} 

export default HeaderContent;