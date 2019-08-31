import React from "react";

const Icon = ({iconFileName}) => (
	<img src={require(`../../../static/Icons/${iconFileName}.svg`)} alt={iconFileName}/>
)

export default Icon;