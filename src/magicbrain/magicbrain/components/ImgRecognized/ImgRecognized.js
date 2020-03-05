import React from "react";
//import FaceRecognized from "../FaceRecognized/FaceRecognized";
import "./ImgRecognized.css"

const ImgRecognized = ({imgUrl,faces, error}) => {

			// Demasiada lógica innecesaria en el Componente. Con un map que renderice se soluciona el problema y es mucho más limpio :)
				// let faceSquare = '';
				// if (Object.keys(faces).length>1){
				// 	console.log("INSIDE IF: ",faces);
				// 	let faceSquare = faces.map(face=>{
				// 		console.log(face);
				// 		return (
				// 		<div className="bounding-box" style={{"bottom":face.bottomRow, "top":face.topRow,"left":face.leftCol,"right":face.rightCol}}></div>
				// 	)
				// 	});
				// } else if (Object.keys(faces).length===1){
				// 	let faceSquare = <div className="bounding-box"
				// 					 style={{"bottom":faces.bottomRow, "top":faces.topRow,"left":faces.leftCol,"right":faces.rightCol}}>
				// 					 </div>;
				// } else {
				// 	let faceSquare = <div></div>;
				// }


		 //<div className="bounding-box" style={{"bottom":faces.bottomRow, "top":faces.topRow,"left":faces.leftCol,"right":faces.rightCol}}></div>
		return (
			<div className="center ma" style={{"position":"relative"}}>
			 <div className="absolute mt2 tc pa3">
			 <img id="imgRecognized" alt="" src={imgUrl} width="500px" height="auto"/>
			 {
			 	Array.from(faces).map((face, i)=>{
				return (
					<div className="bounding-box"
					style={{"bottom":face.bottomRow,
					"top":face.topRow,
					"left":face.leftCol,
					"right":face.rightCol}}
					key={i}
					>
					</div>
				)
				})
			 }
			 <div className="center ma">{error}</div>
			 </div>
			</div>	
		);
}

export default ImgRecognized;