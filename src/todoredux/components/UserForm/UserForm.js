import React from 'react'
import './UserForm.css'
import validator from 'validator'
import {createUserDB, loginUserDB} from "../../requests";

class UserForm extends React.Component {
		constructor(props){
			super(props)
			this.state = {
				email: '',
				name: '',
				password: ''
			}
		}
	render(){
		const {userLogged, setRoute, route, updateUserSession, readTasks} = this.props

		const login = async (e) => {
			if(userLogged) return false
			e.preventDefault()
			const {email, password} = this.state
			if (!validator.isEmail(email)) return false
			if (validator.isEmpty(password) || !validator.isAlphanumeric(password)) return false
			const user = {email, password}
			const loginUser = await loginUserDB(user)
			if (!loginUser) return false
			await updateUserSession('login', loginUser)
			await readTasks()
			console.log(loginUser, "lasd")
			setRoute('tasks')
		}
		const signup = async e => {
			if(userLogged) return false
			e.preventDefault()
			const {email, password, name} = this.state
			if (!validator.isEmail(email)) return false
			if (validator.isEmpty(password) || !validator.isAlphanumeric(password)) return false
			if (validator.isEmpty(name) || !validator.isAlphanumeric(name)) return false
			const user = {name, email, password}
			const newUser = await createUserDB(user)
			if (!newUser) return false
			console.log("USEERRR ", user, "NEW USER ", newUser)
			await updateUserSession('signup', newUser)
			setRoute('tasks')
		}
		const handleInputValue = e => {
			const input = e.target.getAttribute('name')
			const value = e.target.value
			this.setState({[input]: value})
		}
		
		if (route==='login') {
			return (
				<form method='POST' action='/'>
			  	 <h2>Logueate</h2>
				   <div className="input-container">
				    <input onChange={e=>handleInputValue(e)} type="text" name="email" required/>
				    <span className="bar"></span>
				   <label className='input-label' htmlFor='input'>E-mail</label>
				   </div>
				   <div className="input-container">
				    <input onChange={e=>handleInputValue(e)} type="password" name="password" required/> 
				    <span className="bar"></span>
				    <label className='input-label' htmlFor='input'>Contraseña</label>
				   </div>
			     <div className="button-container">
			      <button type="submit" onClick={e=>login(e)}>Entrar</button>
			      <button type="button" onClick={()=>setRoute('signup')}>Registrarse</button>
			     </div>
				</form>
			)
		} 
		else if (route==='signup') {
			return (
				<form method='POST' action='/'>
			  	 <h2>Registrate</h2>
			  	   <div className="input-container">
				    <input onChange={e=>handleInputValue(e)} type="text" name="name" required/>
				    <span className="bar"></span>
				   <label className='input-label' htmlFor='input'>Nombre</label>
				   </div>
				   <div className="input-container">
				    <input onChange={e=>handleInputValue(e)} type="text" name="email" required/>
				    <span className="bar"></span>
				   <label className='input-label' htmlFor='input'>E-mail</label>
				   </div>
				   <div className="input-container">
				    <input onChange={e=>handleInputValue(e)} type="password" name="password" required/> 
				    <span className="bar"></span>
				    <label className='input-label' htmlFor='input'>Contraseña</label>
				   </div>
			     <div className="button-container">
			      <button type="submit" onClick={e=>signup(e)}>Registrar</button>
			      <button type="button" onClick={()=>setRoute('login')}>Loguearse</button>
			     </div>
				</form>
			)
		}
	}
}

export default UserForm