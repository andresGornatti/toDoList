// React
import React from "react";
import "./todo.css";
// Components
import Columna from "../components/Columna/Columna";
import AddTask from "../components/AddTask/AddTask";
// Redux, actions to props, connecting to Database when actiones are triggered
import {connect} from "react-redux";
import {addTask, readTasks, deleteTask, editTask, updateTask} from "../actions";
import {addTaskDB, readTasksDB, deleteTaskDB, updateTaskDB} from "../requests";
// D&D
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export const TaskContext = React.createContext({
	updateTask: null,
	deleteTask: null,
	editTask: null,
	idTaskList: null
})

const mapStateToProps = state => {
		let settingId=null;
		if(state.taskList.length===0){settingId = state.taskList.map(task=>task.id)}
	return {
		taskList: state.taskList,
		idTaskList: settingId
		// taskText: state.taskText,
		// taskState: state.taskState,
		// leftButtonAction: state.leftButtonAction,
		// leftButtonTaskContent: state.leftButtonTaskContent,
		// buttonActionClose: state.buttonActionClose,
	}
} 

const mapDispatchToProps = dispatch => {
	return {
		addTask: async (task) => {
			// let reqBody = {"description": task}
			// const taskSaved = await addTaskDB(reqBody)
			// if(!taskSaved) return false
			// dispatch(addTask(taskSaved))
				let reqBody = {"description": task, "taskState": 'pending'}
				dispatch(addTask(reqBody))	
		},
		readTasks: async (id) => {
			// const tasks = await	readTasksDB()
			// if(!tasks) return false
			// dispatch(readTasks(tasks))
		},
		deleteTask: async (taskId) => {
			// const deletedTask = await deleteTaskDB(taskId)
			// if(!deletedTask) return false
			// dispatch(deleteTask(deletedTask))
				dispatch(deleteTask(taskId))
		},
		editTask: (task) => {
			//let idTask = task;
			dispatch(editTask(task.value))
		},
		updateTask: async (taskId, taskState) => {
			dispatch(updateTask(taskId, taskState))
		}
	}
}

class App extends React.Component {
	componentDidMount(){
		deleteTask()
		this.props.readTasks()
	}

	render(){

		// Map State to Props 
		const {taskList,idTaskList
		//	taskText, taskState, leftButtonAction, leftButtonTaskContent, buttonActionClose
		} = this.props;
		// Map Dispatch (actions) to Props
		const {addTask, deleteTask, editTask, updateTask} = this.props;

		const tasksPending = taskList.filter(task=>{
			return task.taskState==='pending';
		});
		const tasksDoing = taskList.filter(task=>{
			return task.taskState==='doing';
		});
		const tasksFinished = taskList.filter(task=>{
			return task.taskState==='finished';
		});
		return (
		<div id="todo">
			<header>
				<AddTask addTask={addTask}/>
			</header>
			<main>
			<TaskContext.Provider value={{updateTask, deleteTask, editTask, idTaskList}}>
			<DndProvider backend={Backend}>		
				<Columna columnType="tasksPending" title="Tareas por hacer" tasks={tasksPending}/>
				<Columna columnType="tasksDoing" title="Haciendo ahora" tasks={tasksDoing}/>
				<Columna columnType="tasksFinished" title="Tareas realizadas" tasks={tasksFinished}/>
			</DndProvider>
			</TaskContext.Provider>
			</main>
			<footer><span><a href="https://andresgornatti.github.io/andresGornatti/">@andresGornatti</a></span></footer>
		</div>
	 );
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;