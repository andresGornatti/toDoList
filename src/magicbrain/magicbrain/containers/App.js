import React from "react";
import "./style.css";
import SessionDiv from "../components/SessionDiv/SessionDiv";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Logo from "../components/Logo/Logo";
import UserRank from "../components/UserRank/UserRank";
import ImgLink from "../components/ImgLink/ImgLink";
import ImgRecognized from "../components/ImgRecognized/ImgRecognized";
import Particles from 'react-particles-js';

const initialState = {
	searchImg : '',
			requestError : false,
			facesRecognized : {},
			imgUrl : '',
			route: 'signIn',
			isSignedIn: false,
			user: {
				name: "",
				pass: "",
				sign: "",
				id: "",
				posted: 0,
				email: ""
			}
		};

class App extends React.Component {
	constructor(){
		super();
		this.state = initialState;
	};
	
	onSearchImg = (input) => {
		this.setState({searchImg:input.value});
	};

	calculateFaceLocation = (data) => {
		//const theFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const theFace = data.outputs[0].data.regions;
		//console.log("DATA!!!", theFace)
		const img = document.getElementById("imgRecognized");
		const width = Number(img.width);
		const height = Number(img.height);
		const faces = theFace.map((face,i)=>{
		return {
			leftCol : (face.region_info.bounding_box.left_col * width),
			topRow : (face.region_info.bounding_box.top_row * height),
			rightCol : width - (face.region_info.bounding_box.right_col * width),
			bottomRow : height - (face.region_info.bounding_box.bottom_row * height) 
		}
		});
		return faces;
	} 

	setFaces = (data) => {
		this.setState({facesRecognized:data, requestError:false});
	}

	onSearchImgSubmit = (event) => {
		this.setState({imgUrl:this.state.searchImg});
		fetch('https://smart-brainapi.herokuapp.com/imageurl', {
			method: 'post',
					headers: {'Content-Type': 'application/json'},
				   	body: JSON.stringify({
				   	  imgUrl: this.state.searchImg
				   	})
		})
		.then(response => {console.log(response, "before json"); return response.json()})
		.then(response => {
			console.log(response, "after json()")
			if(response && response.status!==400){
				fetch('https://smart-brainapi.herokuapp.com/image', {
					method: 'put',
					headers: {'Content-Type': 'application/json'},
				   	body: JSON.stringify({
				   	  id: this.state.user.id,
				   	})
				})
				.then(response=>response.json())
				.then(update=> {
						this.setState(Object.assign(this.state.user, {posted:update}))
				})
		    	return this.setFaces(this.calculateFaceLocation(response));
			}
		     }).catch(err=>{
		     	let error = "Lo siento, hubo un error. Prueba de nuevo o intenta con otra url."
		      	this.setState({requestError:error});
		     }) 
	};

	setRoute = (route) => {
		route === 'home'
		? this.setState({isSignedIn:true})
		: this.setState(initialState)
		this.setState({route:route});
	}

	setUser = (data) => {
		this.setState({
			user: {
				name: data.name,
				pass: data.pass,
				sign: data.sign, 
				id: data.id,
				posted: data.count,
				email: data.email
			}
		});
	}


	render(){

	const {requestError, imgUrl, facesRecognized,isSignedIn, route} = this.state;
	const {setRoute, setUser, onSearchImg, onSearchImgSubmit} = this;

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
				<SessionDiv setRoute={setRoute} isSignedIn={isSignedIn}/>
				{ route==='home'
				 ?	<div>
						<Logo />
						<UserRank posted={this.state.user.posted} name={this.state.user.name}/>
						<ImgLink onSearchImg={onSearchImg} onSearchImgSubmit={onSearchImgSubmit} />
						<ImgRecognized faces={facesRecognized} error={requestError} imgUrl={imgUrl} facesRecognized={facesRecognized} />
					</div> 
				 :  route==='signIn'
				 ? <SignIn setRoute={setRoute} setUser={setUser} />
				 : <SignUp setRoute={setRoute} setUser={setUser} />
				}
			</div>	
		);
	}
}

export default App;