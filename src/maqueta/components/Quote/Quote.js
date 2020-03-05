import React from "react";
import "./Quote.css";

const Quote = (props) => {
	return (
		<div className="quote">
		<blockquote>
			<p className="quote"><span>&quot;{props.quote}&quot;</span></p>
			<p className="author"><small>{props.author}</small></p>
		</blockquote>
		</div>
	);
}

export default Quote;