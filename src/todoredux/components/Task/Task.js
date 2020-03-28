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

	// LeftButton Update TaskState 
	const updateTo = () => {
		switch (taskState) {
			case 'pending':
			return updateTask(taskId,{taskState:'doing'})
			case 'doing':
			return updateTask(taskId,{taskState:'finished'})
			case 'finished':
			return updateTask(taskId,{taskState:'doing'})
			default: return false
		}
	}

	// Draggable Element
	const [{isDragging}, drag] = useDrag({
		item: {taskId, type: ItemTypes.TASK},
		collect: monitor => ({
			isDragging: monitor.isDragging() ? true : false
		})
	})

	const handleEdit = function(e){
		const task = e.target
		
		// When focus out DON'T save
		let handleFocusOut = (e, oldTask) => () => {
			task.textContent = oldTask
		} 

		// Enable Edit
		if(e.type==='dblclick'){
			task.setAttribute('contentEditable','true')
			task.focus()
			let oldTask = e.target.textContent
			e.persist()
			task.addEventListener('blur', handleFocusOut(e,oldTask))
		}

		// When press Enter Save Edit
		if(e.keyCode===13){
			const taskText = task.textContent
			e.preventDefault()
			task.removeAttribute('contentEditable')
			task.removeEventListener('blur', handleFocusOut)
			editTask(taskId, taskText)
		}
	}

	let opacity = isDragging ? .2 : 1
	
	return (
		<li className="task" ref={drag} style={{opacity}}>
		<ButtonTask 
		 buttonAction={updateTo} 
		 taskId={taskId}
		 className="special-button"
		 content={taskState}
		/>
		<span contentEditable={false} onDoubleClick={(e)=>handleEdit(e)} onKeyDown={(e)=>handleEdit(e)} style={{'cursor':'text'}}> 
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