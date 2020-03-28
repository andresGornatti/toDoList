import {
	AGREGAR_TAREA,
	ELIMINAR_TAREA,
	EDITAR_TAREA,
	LEER_TAREAS,
	ACTUALIZAR_TAREA,
	SETEAR_RUTA,
	ACTUALIZAR_SESION,
	LEER_USUARIO
} from "./constants";

export const readTasks = (tasks) => {
	return {
		type: LEER_TAREAS,
		payload: tasks		
	}
}

export const addTask = (task) => {
	return {
		type: AGREGAR_TAREA,
		payload: task
	}
}
export const deleteTask = (task) => {
	return {
		type: ELIMINAR_TAREA,
		idTask: task
	}
}
export const editTask = (idTask, newText) => {
	return {
		type: EDITAR_TAREA,
		idTask,
		payload: newText
	}
}
export const updateTask = (idTask, taskUpdate) => {
	return {
		type: ACTUALIZAR_TAREA,
		idTask,
		taskUpdate
	}
}
export const setRoute = (route) => {
	return {
		type: SETEAR_RUTA,
		payload: route 
	}
}
export const updateUserSession = (sessionState, user) => {
	return {
		type: ACTUALIZAR_SESION,
		sessionState,
		user
	}
}

export const getUserLogged = (user) => {
	return {
		type: LEER_USUARIO,
		user
	}
}