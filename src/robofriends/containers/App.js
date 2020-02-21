import React, { Component } from "react";
import {connect} from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
//import {robots} from "../components/robots";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import {setBuscarRobot, requestRobots} from "../action";


const mapStateToProps = state => {
	return {searchField: 
	//	state.searchField				// Esto es si tuviésemos un sólo reducer
	state.buscarRobots.searchField,     //  Esto es si tuviésemos muchos reducers
	robots: state.requestRobots.robots,
	isPending: state.requestRobots.isPending,
	error: state.requestRobots.error 
	}; // return as an object
} 
const mapDispatchToProps = dispatch => {  // Se utiliza el Dispatch para enviar Acciones al Reducer 
	return {
		onSearchChange: (event) => dispatch(setBuscarRobot(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}; 
}


class App extends Component {
	// constructor(){
	// 	super();	
	// 	this.state = {
	// 		robots: [],
	// 		//	searchField: ""  Declarado en Redux
	// }
	//}

	componentDidMount() {
		this.props.onRequestRobots();
		// Sin Redux
		// fetch("https://jsonplaceholder.typicode.com/users")
		// 	.then(response=>response.json())
		// 	.then(users=>this.setState({robots:users}));
	}

	// Ahora declarado como Propiedad gracias a Redux   (setBuscarRobot en reducers.js)
	// onSearchChange = (e) => {
	// 	this.setState({ searchField: e.target.value });
	// }

	render(){
		//const { robots, searchField } = this.state;
		const {searchField, onSearchChange, robots, isPending} = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		//if(robots.length===0){   Sin Redux
		  if(isPending){	
			return <h1>Loading...</h1>
		} else {
		return (
	
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={//this.onSearchChange
					onSearchChange
				}/>
				<Scroll>
				<ErrorBoundry>
				<CardList robots={filteredRobots}/>
				</ErrorBoundry>
				</Scroll>
			</div>
	
			);
		}
	
	}

}

export default connect(mapStateToProps,mapDispatchToProps)(App);