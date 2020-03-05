import {
	AGREGAR_TAREA,
	ELIMINAR_TAREA,
	EDITAR_TAREA,
	ACTIVAR_TAREA,
	COMPLETAR_TAREA,
	REHACER_TAREA,
} from "./constants";

export const addTask = (textTask) => {
	return {
		type: AGREGAR_TAREA,
		payload: textTask
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
export const activateTask = (task) => {
	return {
		type: ACTIVAR_TAREA,
		idTask: task
	}
}
export const completeTask = (task) => {
	return {
		type: COMPLETAR_TAREA,
		idTask: task
	}
}
export const redoTask = (task) => {
	return {
		type: REHACER_TAREA,
		idTask: task
	}
}