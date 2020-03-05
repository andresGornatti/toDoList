import React from "react";

import "./AnimationSection/AnimationSection.css";

const ContentPage = (props)=> {
	return (
		<div id="contentPage">
		<div className="container">
				{props.currentContentPage}
		</div>
		</div>
	);
}

export default ContentPage;