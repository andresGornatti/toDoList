import {
	AGREGAR_TAREA,
	ELIMINAR_TAREA,
	EDITAR_TAREA,
	LEER_TAREAS,
 	ACTUALIZAR_TAREA,
 	SETEAR_RUTA,
	ACTUALIZAR_SESION
} from "./constants";

			//let idTaskCounter = 0;
const initialStateManageTasks = {
	taskList: [
	],
	route: 'tasks',
	userLogged: false,
	user: null
}
export const appReducer = (state=initialStateManageTasks,action={}) => {
	if(action.type===AGREGAR_TAREA && action.payload!==''){
	//	const {description, _id, taskState, color, category} = action.payload
	
		let updateTaskList = //state.taskList.push({asd:"asd"});
							[...state.taskList, {...action.payload,leftButtonContent: 'icon-googleplay'
												  //leftButtonAction: 'activateTask', 
												  //buttonActionClose: true,
													  //, _id: idTaskCounter
												  // Al final las acciones no hace falta ponerlas como State, justamente son acciones y no estados.
												}							
				  			];
			//idTaskCounter++;
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
						task.description = action.payload;
					}
					return task;
				});
				return Object.assign({}, state, {taskList:updateTaskList});
			}
			case ACTUALIZAR_TAREA: {
				let updateTaskList = state.taskList.map(task=>{
					if(task._id===action.idTask){
						const updates = Object.keys(action.taskUpdate)
						updates.forEach(upd=>task[upd]=action.taskUpdate[upd])
						//task.leftButtonContent= 'icon-ok-circled';
					}
					return task;	
				});
				return Object.assign({}, state, {taskList:updateTaskList});
			}
			case SETEAR_RUTA: {
				return {...state, route: action.payload}
			}
			case  ACTUALIZAR_SESION: {
				switch (action.sessionState){
					case 'login':
					case 'signup':
					return Object.assign({}, state, {userLogged: true, user: action.user, taskList:[]})
					//return Object.assign({}, state, {userLogged: true, user: action.user, taskList:[]})
					case 'logout':
					return Object.assign({}, state, {userLogged: false, user: null, taskList:[]})
					default: return state
				}
			}
			default: return state;
		}	
	}
}

