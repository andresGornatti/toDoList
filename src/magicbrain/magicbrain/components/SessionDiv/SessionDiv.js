import React from "react";

const SessionDiv = ({setRoute, isSignedIn}) => {
			
	if(isSignedIn){
		return(
			<nav style={{"display":"flex", "justifyContent":"flex-end"}}>
				<p className="f3 link underline dim pa3 pointer black" onClick={()=>setRoute('signIn')}>Cerrar Sesión</p>
			</nav>
		);
	} else {
		return (
		<nav style={{"display":"flex", "justifyContent":"flex-end"}}>
			<p className="f3 link underline dim pa3 pointer black" onClick={()=>setRoute('signIn')}>Iniciar Sesión</p>
			<p className="f3 link underline dim pa3 pointer black" onClick={()=>setRoute('signUp')}>Registrarse</p>
		</nav>
		);
	}
		
}

export default SessionDiv;