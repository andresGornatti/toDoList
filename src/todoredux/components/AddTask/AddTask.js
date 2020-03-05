import React from "react";
import "./AddTask.css";

const AddTask = ({addTask}) => {
						//onClick={props.addTask}
	return(
		<div id="add-task-box">
		<div>
		<input type="text" id="text-task" autoFocus={true} placeholder="Agrega una tarea" required/>
	     <span className="bar"></span>
	     {//<label>Task</label>
	     }
		</div>
		<button type="submit" id="add-task" onClick={addTask}>Agregar</button>
		</div>
	);

}

export default AddTask;
