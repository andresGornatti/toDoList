import React from "react";
import "./User.css";

const User = ({user}) => {

	const {name,bio,img,url,repos,followers,following, location} = user;
	
	const locationSpan = (location===undefined
	|| location===null) ? ''
	: <span className="location">
		<svg className="octicon location" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
		{location}
	  </span>;

	const bioSpan = (bio===undefined
	|| bio===null) ? ''
	: <span className="bio">
		{bio}
	  </span>;

	// if (name===undefined && url===undefined){
	// 	return (
	// 		<div id="user" className="unfound">
	// 		<h3 style={{"textAlign":"center"}}>Sorry, this user doesn't exist :(</h3>
	// 		</div>
	// 	)
	// } else {	
		return (
			<div id="user">
				<div className="picture">
					<img alt='' src={img}/>	
				</div>
				<div>
					<div className="main-info">
					<h2>{name}</h2>
					{bioSpan}
					<a href={url}>{
						// ÍCONO
						url
					}</a>
					</div>
					<div className="info">
					{locationSpan}	
						<ul>
							<li>Repositories: <span className="count">{repos}</span></li>
							<li>Followers: <span className="count">{followers}</span></li>
							<li>Following: <span className="count">{following}</span></li>
						</ul>
					</div>
				</div>
			</div>
		)
	//}
}

export default User;