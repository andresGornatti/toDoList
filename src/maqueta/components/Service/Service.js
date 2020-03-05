import React from "react";
import "./Service.css";

const Service = (props) => {
	let p2="";
	if(props.p2!==undefined){
		p2=<p><span>{props.p2}</span></p>;
	
	}
	return (
		<div className="service">
		<img src={props.img} />
		<div>
			<h2>{props.title}</h2>
			<p><span>{props.p1}</span></p>
			{p2}
		</div>
		</div>
	); 
}

export default Service;