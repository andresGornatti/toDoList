import React from "react";
import Task from "../Task/Task";
import "./Columna.css";

const Columna = ({columnType, tasks, title, deleteTask, editTask, specialAction, idTaskList}) => {
	// props: columnType, tasks, title. || for tasks: deleteTask, editTask, specialAction, idTaskList
	return (
		<div className="columna">
		<h2>{title}</h2>
		<ul>
		{
			tasks.map((task)=>{
				return (
					<Task 
					deleteTask={deleteTask} 
					editTask={editTask}
					specialAction={specialAction} 
					leftButtonContent={task.leftButtonContent} 
					taskState={task.taskState}
					taskText={task.taskText}
					taskId={task.id}
					/>
					);
			})
		}
		</ul>
		</div>
	);
}

export default Columna;