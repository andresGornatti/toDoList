import {
	AGREGAR_TAREA,
	ELIMINAR_TAREA,
	EDITAR_TAREA,
	LEER_TAREAS,
	ACTUALIZAR_TAREA
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
export const editTask = (task, newText) => {
	return {
		type: EDITAR_TAREA,
		idTask: task,
		payload: newText
	}
}
export const updateTask = (idTask, taskState) => {
	return {
		type: ACTUALIZAR_TAREA,
		idTask,
		taskState
	}
}