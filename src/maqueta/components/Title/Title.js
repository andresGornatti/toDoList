import React from "react";

const Title = (props) => {
	const title = React.createElement(props.tag,{style:{"font-size": "2.75em", "color":"#351A8D", "font-family":"", "text-align":"center"}}, props.title); 
	return title;
}

export default Title;