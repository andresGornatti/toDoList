import React from "react";
import "./AddTask.css";

const AddTask = ({addTask}) => {
	
	const handleAddTask = (e) => {
		let task;
		// Key Enter Event  
		if(e.keyCode===13) task = e.target.value 
		// Click Event
		if(e.type==='click') task = e.target.parentNode.children[0].children[0].value
		
		if (task) return addTask(task)
	}

	return(
		<div id="add-task-box">
		<div>
		<input type="text" id="text-task" placeholder="Agrega una tarea" 
		 	   autoFocus={true}  required onKeyUp={(e)=>handleAddTask(e)}/>
	     <span className="bar"></span>
	     {//<label>Task</label>
		//<button type="submit" id="add-task" onClick={(e)=>handleAddTask(e)}>Agregar</button>
	     }
		</div>
		</div>
	);

}

export default AddTask;
