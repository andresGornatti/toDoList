import React from "react";

const ButtonTask = ({buttonAction, content, taskId, className}) => {
	 let buttonClass = className;
	 if(className==='special-button'){buttonClass = `${content} ${className}`;}
	return(
		<button className={buttonClass} onClick={()=>buttonAction(taskId)}/>
	);
}

export default ButtonTask;