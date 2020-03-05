import React from "react";

const Banner = (props) => {
	return (
		<div id="banner">
		<div className="container">
		<img scr={props.bannerSrc} style={{"height":"300px", "width": "100%"}} />
		</div>
		</div>
	);
}

export default Banner;