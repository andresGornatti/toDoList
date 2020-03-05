import React from "react";

const LinkNavPage = (props) => {
	const setPage = props.setContentPage;
	
	return (
		<a onClick={setPage}>{props.name}</a>
	);
}

export default LinkNavPage;