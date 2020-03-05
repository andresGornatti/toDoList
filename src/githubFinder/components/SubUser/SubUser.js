import React from "react";
import "./SubUser.css";

const SubUser = ({user, setSearch}) => {
	const {name,img,url} = user;
	return (
	<div className="social-user">
	 <div className="picture">
				<img alt='' src={img}/>	
	 </div>
	 <div>
		<div className="main-info">
			<h2 onClick={(event)=>setSearch(event,name)}>{name}</h2>
			<p onClick={(event)=>setSearch(event,name)}>
			<svg height="32" className="octicon octicon-search" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fillRule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
			</p>
		</div>
		<div className="info">
			<a href={url} target="new">{url}</a>
		</div>
	 </div>
	</div>	
	)
}
				//<ul>
				//	<li>Followers: {followers}</li>
				//	<li>Following: {following}</li>
				//	<li>Repositories: {repos}</li>
				//</ul>

export default SubUser;