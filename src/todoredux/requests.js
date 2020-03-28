export const addTaskDB = async task => {
	const token = localStorage.getItem('session')
	try {
		const request = {
			method: 'POST',
			headers: {'Content-Type':'application/json',
					  'Authorization':`Bearer ${token}`},
			body: JSON.stringify(task)
		}
		let response = await fetch('http://127.0.0.1:3001/tasks', request)
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
		const tasks = await fetch('http://127.0.0.1:3001/tasks', request)
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
		const response = await fetch(`http://127.0.0.1:3001/tasks/${_id}`, request)
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
		const response = await fetch(`http://127.0.0.1:3001/tasks/${id}`, request)
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
		const response = await fetch('http://127.0.0.1:3001/users', request)
		console.log(request, response, request.body)
		const newUser = await response.json()
		console.log(newUser)
		if (!newUser) throw new Error()
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
		const response = await fetch('http://localhost:3001/users/login', request)
		const userLogged = await response.json()
		if (!response.ok) throw new Error()
		console.log('userLogged', userLogged, response)
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
		const logout = await fetch('http://127.0.0.1:3001/users/logout', request)
		if (!logout) throw new Error()
		localStorage.removeItem('session')
		return true
	} catch (e) { return false } 
}

// try {

// 	} catch (e) { return e }