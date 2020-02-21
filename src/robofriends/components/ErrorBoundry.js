import React from "react";

class ErrorBoundry extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			error: false
		}
	}

	componentDidCatch(){
		this.setState({error:true});
	}

	render(){
		if (this.state.error) { return <h1>Lo siento, un error ha ocurrido.</h1>; }
		return this.props.children;
	}

}

export default ErrorBoundry;