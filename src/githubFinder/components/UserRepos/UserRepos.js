import React from "react";
import Repo from "../Repo/Repo";

const UserRepos = ({reposData, search, setUserRepos}) => {	
	if(reposData.length===0){
	// SIN DATA: Click para obtenerla
		return (
			<div id="repobox">
			<div className="empty-repobox" onClick={()=>setUserRepos(search)}>
			<p><span>Click para obtener repositorios</span></p>
			</div>
			</div>
		)
	} else if(reposData===0){
	// DATA INEXISTENTE: "No hay data"
		return (
			<div id="repobox">
			<div className="empty-repobox">
			<p><span>Este usuario no tienen ningún repositorio</span></p>
			</div>
			</div>
		)
	} else {
	// CON DATA: Mostrarla
		return (
			<div id="repobox">
			 {reposData.map((repo,i)=><Repo repo={repo} key={i}/>)}
			</div>
		)
	}
}

export default UserRepos;