import {
	AGREGAR_TAREA,
	ELIMINAR_TAREA,
	EDITAR_TAREA,
	LEER_TAREAS,
 	ACTUALIZAR_TAREA
} from "./constants";

let idTaskCounter = 0;
const initialStateManageTasks = {
	taskList: [

	]
}
export const manageTasksR = (state=initialStateManageTasks,action={}) => {
	if(action.type===AGREGAR_TAREA && action.payload!==''){
	//	const {description, _id, taskState, color, category} = action.payload
	
		let updateTaskList = //state.taskList.push({asd:"asd"});
							[...state.taskList, {...action.payload,leftButtonContent: 'icon-googleplay'
												  //leftButtonAction: 'activateTask', 
												  //buttonActionClose: true,
													, _id: idTaskCounter
												  // Al final las acciones no hace falta ponerlas como State, justamente son acciones y no estados.
												}							
				  			];
			idTaskCounter++;
		return Object.assign({}, state, {taskList:updateTaskList})


	} else {
		switch(action.type){
			case LEER_TAREAS: {
				let updateTaskList = [...state.taskList, ...action.payload]
				return {...state, taskList:updateTaskList}
			}
			case ELIMINAR_TAREA: {
				let updateTaskList = state.taskList.filter(task=>task._id!==action.idTask);
				return Object.assign({}, state, {taskList:updateTaskList}); 
			}
			case EDITAR_TAREA: {
				let updateTaskList = state.taskList.map(task=>{
					if(task._id===action.idTask){
						task.taskText = action.payload;
					}
					return task;
				});
				return Object.assign({}, state, {taskList:updateTaskList});
			}
			case ACTUALIZAR_TAREA: {
				let updateTaskList = state.taskList.map(task=>{
					if(task._id===action.idTask){
						task.taskState = action.taskState;
						//task.leftButtonContent= 'icon-ok-circled';
					}
					return task;	
				});
				return Object.assign({}, state, {taskList:updateTaskList});
			}
			default: return state;
		}	
	}
}

