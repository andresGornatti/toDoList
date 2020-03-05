import React from "react";
import NavPage from "../NavPage/NavPage";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = (props) => {
	return (
		<div id="header">
		<header className="container">
		  <Logo />
		  <NavPage setContentPage={props.setContentPage} highlightedNavLink={props.highlightedNavLink}/>
		</header>
		</div>
	);
}

export default Header;