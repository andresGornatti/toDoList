// React
import React from "react"
import {TaskContext} from '../../containers/App'
// Custom
import ButtonTask from "../ButtonTask/ButtonTask"
import "./Task.css"
// D&D
import { useDrag } from 'react-dnd'
import ItemTypes from '../../utils/ItemTypes'

const Task = ({leftButtonContent, taskState, description, taskId}) => {

	const {deleteTask, editTask, updateTask} = React.useContext(TaskContext)

	const updateTo = () => {
		switch (taskState) {
			case 'pending':
			return updateTask(taskId,'doing')
			case 'doing':
			return updateTask(taskId,'finished')
			case 'finished':
			return updateTask(taskId,'doing')
			default: return false
		}
	}

	const [{isDragging}, drag] = useDrag({
		item: {taskId, type: ItemTypes.TASK},
		collect: monitor => ({
			isDragging: monitor.isDragging() ? true : false
		})
	})


		let opacity = isDragging ? .2 : 1
	return (

		<li className="task" ref={drag} style={{opacity}}>
		<ButtonTask 
		buttonAction={updateTo} 
		taskId={taskId}
		className="special-button"
		content={taskState}
		/>
		<span> 
		{description}
		 </span>
		<ButtonTask 
		buttonAction={deleteTask}
		taskId={taskId}
		className="close-button icon-trash"
		/>
		</li>



	)
}

export default Task;