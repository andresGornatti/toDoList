import React from "react";
import ButtonTask from "../ButtonTask/ButtonTask";
import "./Task.css";

const Task = ({leftButtonAction, leftButtonContent, deleteTask, specialAction, taskState, taskText, editTask, taskId}) => {
	// props: leftButtonAction, buttonActionClose NO, ¿Porqué? ...
	// Son acciones, no hace falta que vengan del State (MapStateToProps), sino de las acciones (MapDispatchToProps) 
	// leftButtonTaskContent, taskState, taskText SI 
	return (
		<li className="task">
		<ButtonTask 
		buttonAction={specialAction} 
		taskId={taskId}
		className="special-button"
		content={leftButtonContent}
		/>
		<span> 
		ASD
		{taskText}
		 </span>
		<ButtonTask 
		buttonAction={deleteTask}
		taskId={taskId}
		className="close-button icon-trash"
		/>
		</li>
	);
}

export default Task;