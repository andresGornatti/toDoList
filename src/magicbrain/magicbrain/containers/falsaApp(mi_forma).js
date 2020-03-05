import React from "react";
import "./style.css";
import SessionDiv from "../components/SessionDiv/SessionDiv";
import Logo from "../components/Logo/Logo";
import UserRank from "../components/UserRank/UserRank";
import ImgLink from "../components/ImgLink/ImgLink";
import ImgRecognized from "../components/ImgRecognized/ImgRecognized";
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({ apiKey: '2d9e4a338b93439692f6acbde59aeddd' });

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			searchImg : '',
			requestError : false,
			facesRecognized : [],
			imgUrl : ''
		}
	};
	
	onSearchImg = (input) => {
		this.setState({searchImg:input.value});
	};

	onSearchImgSubmit = (event) => {
		let imgInput = event.target.parentNode.children[0];
		this.onSearchImg(imgInput);

		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.searchImg).then(
		    function(response) {
			let imgUrl = response["outputs"][0]["input"]["data"]["image"].url;
			let facesRecognized = response["outputs"][0]["data"]["regions"];
			this.setState({requestError:false, imgUrl:imgUrl, facesRecognized: facesRecognized});
		     },
		    function(err) {
		      	let error = "Lo siento, hubo un error. Prueba de nuevo o intenta con otra url."
		      	this.setState({requestError:error});
		    }
		  );
	};

	render(){

	const {requestError, imgUrl, facesRecognized, searchImg} = this.state;
 	console.log("IMG url en RENDER APP: ", imgUrl);


	const particleSettings = {
         particles: {
            number: {
            	value: 90, 
            	density: {
            		enable: true, 
            		value_area: 800
            	}
            }
         }
     };


		return (
			<div id="magicbrain" className="container">
				<Particles params={particleSettings} className="particles" />
				<SessionDiv />
				<Logo />
				<UserRank />
				<ImgLink onSearchImg={this.onSearchImg} onSearchImgSubmit={this.onSearchImgSubmit} />
				<ImgRecognized error={requestError} imgUrl={imgUrl} facesRecognized={facesRecognized} />
			</div>	
		);
	}
}

export default App;