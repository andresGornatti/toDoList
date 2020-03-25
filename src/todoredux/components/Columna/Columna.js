// React
import React from "react";
import {TaskContext} from '../../containers/App'
// Custom
import Task from "../Task/Task";
import "./Columna.css";
// D&D
import { useDrop } from 'react-dnd'
import ItemTypes from '../../utils/ItemTypes'


const Columna = ({columnType, tasks, title}) => {
	// props: columnType, tasks, title. || for tasks: idTaskList

	const {updateTask, idTaskList} = React.useContext(TaskContext)

	const actionForDroppedTask = (taskId) => {
		switch(columnType){
			case 'tasksPending':
			return updateTask(taskId,'pending')
			case 'tasksDoing':
			return updateTask(taskId,'doing')
			case 'tasksFinished':
			return updateTask(taskId,'finished')
			default: return false
		}
	}

	const [{isOver}, drop] = useDrop({
		accept:ItemTypes.TASK,
		drop: (item, monitor) => actionForDroppedTask(item.taskId),
		collect: monitor => ({
			isOver: monitor.isOver ? true : false
		})
	})

	return (
		<div className="columna" ref={drop}>
		<h2>{title}</h2>
		<ul>
		{
			tasks.map((task)=>{
				return (
					<Task
					taskState={task.taskState}
					description={task.description}
					taskId={task._id}
					key={task._id}
					/>
				)
			})
		}
		</ul>
		</div>
	)
}

export default Columna;