import React from 'react'
import './Header.css'
import SessionNav from '../SessionNav/SessionNav'
//import ButtonHeader from '../ButtonHeader/ButtonHeader'

const Header = ({userLogged, setRoute, route, updateUserSession}) => {
	const inUserForm = route.match(/(login|signup)/) ? true : false
	return (
		<header className={`header ${route}`}>
		{
		//<button id="btn-side-bar" className="close-button icon-trash"/>
		} 
		 <div onClick={()=>setRoute('tasks')} id="logo">JustDoIt</div>
		 { !inUserForm ? <SessionNav userLogged={userLogged} setRoute={setRoute}
		 				 updateUserSession={updateUserSession}/> : false }
		</header>
	)
}

export default Header