export const addTaskDB = async (task) => {
	try {
		const request = {
			method: 'POST',
			headers: {
	    		'Content-Type': 'application/json'
	  		},
			body: JSON.stringify(task)
		}
		let response = await fetch('http://127.0.0.1:3001/tasks', request)
	 	return await response.json()
	} catch (e) { return e }
}

export const readTasksDB = async (id) => {
	try {
		const tasks = await fetch('http://127.0.0.1:3001/tasks')
		return await tasks.json()
	} catch (e) { return e }
}

export const deleteTaskDB = async (_id) => {
	try {
		const request = {
			// mode: 'no-cors',
			method: 'delete',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({_id})
		}
		const response = await fetch(`http://127.0.0.1:3001/tasks/${_id}`, request)
		const deletedTask = await response.json()
		//if(!deletedTask) return false
		return deletedTask
	} catch (e) { return e }
}

export const updateTaskDB = async (id, update) => {
	try {
		const request = {
			method: 'put',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(update)
		}
		const response = await fetch(`http://127.0.0.1:3001/tasks/${id}`, request)
		const updatedTask = await response.json()
		if(!updatedTask) return false
		return updatedTask
	} catch (e) { return e }
}