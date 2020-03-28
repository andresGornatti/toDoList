import React from 'react';
import {logoutUserDB} from "../../requests";

const SessionNav = ({userLogged, setRoute, updateUserSession}) => {
	
	const logout = async () => {
		const loggedOut = await logoutUserDB() 
		console.log(loggedOut, 'loggedOut')
		if (!loggedOut) return false
		await updateUserSession('logout')
		setRoute('tasks')
	}

	return (
		<div>
			
			{  !userLogged ? ( 
				 	<ul>
				 	 <li onClick={()=>setRoute('signup')}><span>Regístrate</span></li>
				 	 <li onClick={()=>setRoute('login')}><span>Inicia sesión</span></li>
				 	</ul>
				) : (<ul><li onClick={logout}><span>Cerrar sesión</span></li></ul>) 
			}
		</div>
	)
}

export default SessionNav