// React
import React from "react";
import "./todo.css";
// Components
import Header from "../components/Header/Header";
import UserForm from "../components/UserForm/UserForm";
import Columna from "../components/Columna/Columna";
import AddTask from "../components/AddTask/AddTask";
// Redux, actions to props, connecting to Database when actiones are triggered
import {connect} from "react-redux";
import {addTask, readTasks, deleteTask, editTask, updateTask, setRoute, updateUserSession, getUserLogged} from "../actions";
import {addTaskDB, readTasksDB, deleteTaskDB, updateTaskDB, getUserLoggedDB} from "../requests";
// D&D
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

// Check JWT
import validator from 'validator'
// Generate UUID for Tasks
import { v4 as uuidv4 } from 'uuid';



const validateSession = function(){
	const session = sessionStorage.getItem('session')
	let validToken
	if (session) { validToken = validator.isJWT(session) }
	const isUserValid = (session && validToken) ? true : false
	return isUserValid		
}

const mapStateToProps = state => {
		let settingId=null;
		if(state.taskList.length===0){settingId = state.taskList.map(task=>task.id)}
	return {
		taskList: state.taskList,
		idTaskList: settingId,
		route: state.route,
		userLogged: state.userLogged,
		user: state.user
		// taskText: state.taskText,
		// taskState: state.taskState,
		// leftButtonAction: state.leftButtonAction,
		// leftButtonTaskContent: state.leftButtonTaskContent,
		// buttonActionClose: state.buttonActionClose,
	}
} 

const mapDispatchToProps = (dispatch) => {
	const sessionValid = validateSession()
	return {
		addTask: async task => {
			if (sessionValid) {
				let reqBody = {"description": task}
				const taskSaved = await addTaskDB(reqBody)
				if(!taskSaved) return false
				dispatch(addTask(taskSaved))
			} else {
				let reqBody = {"description": task, "taskState": "pending", "_id": uuidv4()}
				dispatch(addTask(reqBody))	
			}
		},
		readTasks: async id => {
				const tasks = await	readTasksDB()
				dispatch(readTasks(tasks))
		},
		deleteTask: async taskId => {
			if (sessionValid) {
				// first dispatch for better UX
				dispatch(deleteTask(taskId))
				const deletedTask = await deleteTaskDB(taskId)
				if(!deletedTask) return false
			} else {
				dispatch(deleteTask(taskId))
			}
		},
		editTask: async (taskId, taskText) => {
			if (sessionValid) {
				// first dispatch for better UX
				const update = {description: taskText}
				dispatch(updateTask(taskId, update))
				const taskUpdated = await updateTaskDB(taskId, update)
				if(!taskUpdated) return false
			} else {
				dispatch(editTask(taskId, taskText))
			}
		},
		updateTask: async (taskId, update) => {
			if(sessionValid) {
				// first dispatch for better UX
				dispatch(updateTask(taskId, update))
				const taskUpdated = await updateTaskDB(taskId, update)
				if(!taskUpdated) return false
			} else {
				dispatch(updateTask(taskId, update))
			}
		},
		setRoute: async route => {
			dispatch(setRoute(route))
		},
		updateUserSession: async (sessionState, data) => {
			let userData
			if (data) {
			 let {user, token} = data
			 userData = {...user, token}
			} else {
			 userData = null 
			} 
			dispatch(updateUserSession(sessionState, userData))
		},
		getUserLogged: async () => {
			const tkn = sessionStorage.getItem("session")
			const user = await getUserLoggedDB(tkn)
			if (!user) return false
			const userData = {...user, tkn}
			dispatch(getUserLogged(userData))
		}
	}
}

export const TaskContext = React.createContext({
	updateTask: null,
	deleteTask: null,
	editTask: null,
	idTaskList: null
})

class App extends React.Component {

	componentDidMount(){
		const readUser = async () => {
			const sessionValid = validateSession()
			if(sessionValid){
				await this.props.getUserLogged()
				this.props.readTasks()
			}
		}
		readUser()
	}

	render(){

		// Map State to Props 
		const {taskList,idTaskList, userLogged, route
		//	taskText, taskState, leftButtonAction, leftButtonTaskContent, buttonActionClose
		} = this.props;
		// Map Dispatch (actions) to Props
		const {addTask, deleteTask, editTask, updateTask, setRoute, readTasks, updateUserSession} = this.props;

		const tasksPending = taskList.filter(task=>{
			return task.taskState==='pending'
		})
		const tasksDoing = taskList.filter(task=>{
			return task.taskState==='doing'
		})
		const tasksFinished = taskList.filter(task=>{
			return task.taskState==='finished'
		})

		let pageContent;
			switch(route){
				case 'tasks': pageContent = (
					<div>
					 <AddTask addTask={addTask}/>
					 <div id="tasks-container">
					 <TaskContext.Provider value={{updateTask, deleteTask, editTask, idTaskList}}>
					  <DndProvider backend={Backend}>		
					 	<Columna columnType="tasksPending" title="Tareas por hacer" tasks={tasksPending}/>
					 	<Columna columnType="tasksDoing" title="Haciendo ahora" tasks={tasksDoing}/>
					 	<Columna columnType="tasksFinished" title="Tareas realizadas" tasks={tasksFinished}/>
					  </DndProvider>
					 </TaskContext.Provider>
					 </div>
					</div>
				)
				break;
				case ('signup'): case ('login'): pageContent = 
					(<div id='form-container'>
					   <UserForm userLogged={userLogged} updateUserSession={updateUserSession}
					    setRoute={setRoute} route={route} readTasks={readTasks}/>
					 </div>)
				break;
				default: pageContent = (<h1> Page 404: Not found </h1>)
				break;
			}

		return (
		<div id="todo">
			<Header userLogged={userLogged} setRoute={setRoute} 
			 route={route} updateUserSession={updateUserSession}/>
			<main>
			 { pageContent }
			</main>
			<footer><span><a href="https://andresgornatti.github.io/andresGornatti/" target="new">@andresGornatti</a></span></footer>
		</div>
	 )
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
