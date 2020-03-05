import React from "react";
import loading from "../../loading.gif";

const UserBox = ({children, userDataLength, displayUser}) => {
	switch(displayUser){
		case true: 
			if(userDataLength===0){
				return (
					<main className="empty-userbox">
					<p style={{"margin":"0"}}>This is a Github User Finder, just enter a username :)</p>
					<a href="https://github.com/andresGornatti" target="new" style={{"padding":"12px 0", "display":"inline-block"}}>@andresGornatti</a> 
					</main>
				)
			} else {	
				return (
					<main>
					{children}
					</main>
				)
			}	
		case false: 
			//console.log(displayUser, "displayUserInsideFALSE");
			return (
				<main className="empty-userbox loading">
					<img alt='' src={loading} className="loading"/>
				</main>
			)
		case undefined: 
			return (
				<main className="empty-userbox unfound">
					<h3 style={{"textAlign":"center"}}>Sorry, this user doesn't exist :(</h3>
				</main>
			)
		default: ;
	}
}

export default UserBox;