import React from "react";
import "./ImgLink.css";

const ImgLink = (props) => {
		return (
			<div>
			<div className="center">
			<div className="form center pa4 br3 shadow-5">
			<input type="text" className="w-70 f4 pa2 center" placeholder="Ingresá una URL de una imagen" 
			onChange={(event)=>props.onSearchImg(event.target)}
			/>
			<button className="wa-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={(event)=>props.onSearchImgSubmit(event)}>Detect</button>	
			</div>
			</div>
			</div>
		);
}

export default ImgLink;