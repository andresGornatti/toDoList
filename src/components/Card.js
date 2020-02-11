import React from "react"; // Importante importar React para que el .js entienda JSX
//import "./Card.css";

const Card = (robot)=> {
		const {name, email, id} = robot;

	return (

		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}?200x200`} alt="imagen"/>	
			<div>
				<h2 className="name">{name}</h2>
				<p className="email">{email}</p>
			</div>
		</div>

		);

}

export default Card;