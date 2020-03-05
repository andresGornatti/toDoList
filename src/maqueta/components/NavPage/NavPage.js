import React from "react";
import LinkNavPage from "../LinkNavPage/LinkNavPage";

const NavPage = (props) => {

	return (
		<div id="navPage">
		<nav>
			<ul>
				<li><LinkNavPage name="Inicio" setContentPage={props.setContentPage}/></li>
				<li><LinkNavPage name="Acerca de" setContentPage={props.setContentPage}/></li>
				<li><LinkNavPage name="Servicios" setContentPage={props.setContentPage}/></li>
				<li><LinkNavPage name="Contacto" setContentPage={props.setContentPage}/></li>
			</ul>	
		</nav>
		</div>
	);
}

export default NavPage;