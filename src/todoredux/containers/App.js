import React from "react";
import "./todo.css";
import Columna from "../components/Columna/Columna";
import AddTask from "../components/AddTask/AddTask";
import {connect} from "react-redux";
import {addTask, deleteTask, editTask, activateTask, completeTask, redoTask} from "../actions";

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
		addTask: (event) => {
			let task = event.target.parentNode.children[0].children[0].value; 
			dispatch(addTask(task));
			event.preventDefault();
		},
		deleteTask: (taskId) => {
			dispatch(deleteTask(taskId));
		},
		editTask: (task) => {
			//let idTask = task;
			dispatch(editTask(task.value))
		},
		activateTask: (taskId) => {
			dispatch(activateTask(taskId));
		},
		completeTask: (taskId) => {
			dispatch(completeTask(taskId));
		},
		redoTask: (taskId) => {
			dispatch(redoTask(taskId));
		},
	}
}


class App extends React.Component {
	// constructor(){
	// 	super();
	// }

	componentDidMount(){
		deleteTask();
	}

	render(){
		// Map State to Props 
		const {taskList,idTaskList
		//	taskText, taskState, leftButtonAction, leftButtonTaskContent, buttonActionClose
		} = this.props;
		// Map Dispatch (actions) to Props
		const {addTask, deleteTask, editTask, activateTask, completeTask, redoTask} = this.props;

		const tasksToDo = taskList.filter(task=>{
			return task.taskState==='listed';
		});
		const tasksDoing = taskList.filter(task=>{
			return task.taskState==='activated';
		});
		const tasksDone = taskList.filter(task=>{
			return task.taskState==='completed';
		});

		return (
		<div id="todo">
			<header>
				<AddTask addTask={addTask}/>
			</header>
			<main>
				<Columna columnType="tasksToDo" title="Tareas por hacer" tasks={tasksToDo} deleteTask={deleteTask} editTask={editTask} specialAction={activateTask} idTaskList={idTaskList}/>
				<Columna columnType="tasksDoing" title="Haciendo ahora" tasks={tasksDoing} deleteTask={deleteTask} editTask={editTask} specialAction={completeTask} idTaskList={idTaskList}/>
				<Columna columnType="tasksDone" title="Tareas realizadas" tasks={tasksDone} deleteTask={deleteTask} editTask={editTask} specialAction={redoTask} idTaskList={idTaskList}/>
			</main>
			<footer><span><a href="https://andresgornatti.github.io/andresGornatti/">@andresGornatti</a></span></footer>
		</div>
	 );
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;