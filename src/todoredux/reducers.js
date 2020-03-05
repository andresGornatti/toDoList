import {
	AGREGAR_TAREA,
	ELIMINAR_TAREA,
	EDITAR_TAREA,
	ACTIVAR_TAREA,
	COMPLETAR_TAREA,
	REHACER_TAREA,
} from "./constants";

let idTaskCounter = 0;
const initialStateManageTasks = {
	taskList: [
	//{id:idTaskCounter}
	]
}
export const manageTasksR = (state=initialStateManageTasks,action={}) => {
	if(action.type===AGREGAR_TAREA && action.payload!==''){
		let updateTaskList = //state.taskList.push({asd:"asd"});
							[...state.taskList, {
												  taskText:action.payload, 
												  taskState:'listed', 
												  leftButtonContent: 'icon-googleplay', 
												  id: idTaskCounter,
												  //leftButtonAction: 'activateTask', 
												  //buttonActionClose: true,
												  // Al final las acciones no hace falta ponerlas como State, justamente son acciones y no estados.
												}							
				  			];
		idTaskCounter++;
		return Object.assign({}, state, {taskList:updateTaskList})
	} else {
		switch(action.type){
			case ELIMINAR_TAREA: {
				let updateTaskList = state.taskList.filter(task=>task.id!==action.idTask);
				return Object.assign({}, state, {taskList:updateTaskList}); 
			}
			case EDITAR_TAREA: {
				let updateTaskList = state.taskList.map(task=>{
					if(task.id===action.idTask){
						task.taskText = action.payload;
					}
					return task;
				});
				return Object.assign({}, state, {taskList:updateTaskList});
			}
			case ACTIVAR_TAREA: {
				let updateTaskList = state.taskList.map(task=>{
					if(task.id===action.idTask){
						task.taskState = 'activated';
						task.leftButtonContent= 'icon-ok-circled';
					}
					return task;	
				});
				return Object.assign({}, state, {taskList:updateTaskList});
			}
			case COMPLETAR_TAREA: {
				let updateTaskList = state.taskList.map(task=>{
					if(task.id===action.idTask){
						task.taskState = 'completed';
						task.leftButtonContent= 'icon-recycle';
					}
					return task;	
				});
				return Object.assign({}, state, {taskList:updateTaskList});
			}
			case REHACER_TAREA: {
				let updateTaskList = state.taskList.map(task=>{
					if(task.id===action.idTask){
						task.taskState = 'activated';
						task.leftButtonContent= 'icon-ok-circled';
					}
					return task;	
				});
				return Object.assign({}, state, {taskList:updateTaskList});
			}
			default: return state;
		}	
	}
}


			// const initialStateTask = {
			// 	taskText: '',
			// 	taskState: '',
			// 	leftButtonAction: false,
			// 	leftButtonTaskContent: '',
			// 	buttonActionClose: false,
			// 	deleteTask: false,
			// 	id: 0,
			// }

			// export const manageTaskR = (state=initialStateTask, action={}) => {
			// 	switch(action.type){
			// 		//case AGREGAR_TAREA:
			// 		//return Object.assign({}, state, {taskText:action.payload, taskState:'listed', leftButtonAction: 'activateTask', leftButtonTaskContent: 'ACTIVAR', buttonActionClose: true});
			// 		case ELIMINAR_TAREA:
			// 		return Object.assign({}, state, {deleteTask:true});  
			// 		// return Object.assign({}, state, {taskState:action.payload});
			// 		//-------------//
			// 		// Otra opción: Object.assign({}, state, {taskState:action.payload});
			// 		// y el payload una función ejecutada automaticamente para eliminar task. O combinar las 2!
			// 		// Mi duda es si acá debo ejecutar la acción o sólo poner el nombre del estado, y luego en App.js hago un swtich según el estado ejecutar cierta acción
			// 		//------------//
			// 		case EDITAR_TAREA:
			// 		return Object.assign({}, state, {taskText:action.payload});
			// 		case ACTIVAR_TAREA:
			// 		return Object.assign({}, state, {taskState:'activated', leftButtonAction: 'completeTask', leftButtonTaskContent: 'COMPLETAR'});
			// 		// return Object.assign({}, state, {taskState:action.payload});
			// 		// ----- //
			// 		// Atención, al ACTIVAR TAREA me faltaría la opción para volver la Tarea a la Lista de Tareas por hacer,
			// 		// como en Tareas completadas que pueden volver a Tareas Haciendo en el momento
			// 		// ----- //
			// 		case COMPLETAR_TAREA:
			// 		return Object.assign({}, state, {taskState:'completed', leftButtonAction: 'deleteTask', leftButtonTaskContent: 'ELIMINAR'});
			// 		// return Object.assign({}, state, {taskState:action.payload});
			// 		case REHACER_TAREA:
			// 		return Object.assign({}, state, {taskState:'activated', leftButtonAction: 'completeTask', leftButtonTaskContent: 'COMPLETAR'});
			// 		// return Object.assign({}, state, {taskState:action.payload});
			// 		default: return state;
			// 	}
			// 	return state;
			// }