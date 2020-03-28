const svUrl = 'https://gornatti-justdoit-api.herokuapp.com' 
export const addTaskDB = async task => {
	const token = localStorage.getItem('session')
	try {
		const request = {
			method: 'POST',
			headers: {'Content-Type':'application/json',
					  'Authorization':`Bearer ${token}`},
			body: JSON.stringify(task)
		}
		let response = await fetch(`${svUrl}/tasks`, request)
	 	return await response.json()
	} catch (e) { return false }
}

export const readTasksDB = async () => {
	//const {_id} = user
	const token = localStorage.getItem('session')
	try {
		const request = {
			method: 'GET',
			headers: {'Content-Type':'application/json',
					  'Authorization':`Bearer ${token}`}
			//body: JSON.stringify(_id)
		}
		const tasks = await fetch(`${svUrl}/tasks`, request)
		return await tasks.json()
	} catch (e) { return false }
}

export const deleteTaskDB = async _id => {
	const token = localStorage.getItem('session')
	try {
		const request = {
			// mode: 'no-cors',
			method: 'delete',
			headers: {'Content-Type':'application/json',
					  'Authorization':`Bearer ${token}`},
			body: JSON.stringify({_id})
		}
		const response = await fetch(`${svUrl}/tasks/${_id}`, request)
		const deletedTask = await response.json()
		//if(!deletedTask) return false
		return deletedTask
	} catch (e) { return false }
}

export const updateTaskDB = async (id, update) => {
	const token = localStorage.getItem('session')
	try {
		const request = {
			method: 'PATCH',
			headers: {'Content-Type':'application/json',
					  'Authorization':`Bearer ${token}`},
			body: JSON.stringify(update)
		}
		const response = await fetch(`${svUrl}/tasks/${id}`, request)
		const updatedTask = await response.json()
		if(!updatedTask) return false
		return updatedTask
	} catch (e) { return false }
}

export const createUserDB = async dataUser => {
	//const {email, name, password} = user
	try {
		const request = {
			method: 'POST',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(dataUser)
		}
		const response = await fetch(`${svUrl}/users`, request)
		const newUser = await response.json()
		if (!response.ok) throw new Error()
		localStorage.setItem('session', newUser.token)
		const user = newUser.user
		const tkn =  newUser.token 
		return {...user, tkn}
	} catch (e) { return false }
}

export const loginUserDB = async (user) => {
	//const {email, password} = user
	try {
		const request = {
			method: 'POST',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(user)				
		}
		const response = await fetch(`${svUrl}/users/login`, request)
		const userLogged = await response.json()
		if (!response.ok) throw new Error()
		localStorage.setItem('session', userLogged.token)
		return userLogged
	} catch (e) { return false } 
}

export const logoutUserDB = async user => {
	const token = localStorage.getItem('session')
	try {
		const request = {
			method: 'POST',
			headers: {'Content-Type':'application/json',
					  'Authorization':`Bearer ${token}`}				
		}
		const logout = await fetch(`${svUrl}/users/logout`, request)
		if (!logout) throw new Error()
		localStorage.removeItem('session')
		return true
	} catch (e) { return false } 
}

// try {

// 	} catch (e) { return e }