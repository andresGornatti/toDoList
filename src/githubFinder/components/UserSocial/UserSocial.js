import React from "react";
import SubUser from "../SubUser/SubUser";
import "./UserSocial.css";

class UserSocial extends React.Component {
	// Props: searchFollowers, searchFollowing, followers, following, resetSocial

	constructor(props){
		super(props)
		this.state = {
			display: 'followers',
			followingUsers: [],
			followersUsers: [],
			displayUsers: [],
			displaying: true,
			reset: this.props.resetSocial
		}
	}

	setDisplay = (display) => {
		this.setState({display:display}, ()=>{
			switch(display){
				case 'followers' : 
				 if (this.props.followers===0){
					this.setState({displaying:false});
				} else {
					this.setState({displaying:true}, ()=>this.setUsers(display));
				}
				break;
				case 'following' :
				if (this.props.following===0){
					this.setState({displaying:false});
				} else {
					this.setState({displaying:true}, ()=>this.setUsers(display));
				} 
				break;
				default : 
				break;
			}
			this.setHighlightButton(display, "setDisplay")
		})
	}

	setUsers = (display) => {
		if (this.state.displaying){
			switch(display){
				case 'followers': 
						if (this.state.followersUsers.length===0){
						fetch(`${this.props.searchFollowers}`)
							.then(response=>response.json())
							//.then(data=>setState{followersUsers:data})
							.then(data=>
							{
								let users = data.map(user=>{
									return {
										name: user.login,
										url: user.html_url,
										urlApi: user.url,
										img: user.avatar_url,
										followers: user.followers,
										following: user.following,
										repos: user.public_repos
									}
								})
									this.setState({followersUsers:users}, ()=>this.setUsersDisplay(users))
							})
							.catch(error=>console.log("Error ",error))
						} else {
							this.setUsersDisplay(this.state.followersUsers)
						}
				break;
						//setTimeout(()=>this.setState({displaying:true, displayUsers:this.state.followersUsers}),400);
						//return setTimeout(()=>this.setUsersDisplay(this.state.followersUsers),525)
				case 'following': 
						if (this.state.followingUsers.length===0){
						const link = this.props.searchFollowing.replace("{/other_user}","");
							fetch(link)
							.then(response=>response.json())
							.then(data=>
							{
								let users = data.map(user=>{
									return {
										name: user.login,
										url: user.html_url,
										urlApi: user.url,
										img: user.avatar_url,
										followers: user.followers,
										following: user.following,
										//repos: user.public_repos
									}
								})
								this.setState({followingUsers:users}, ()=>this.setUsersDisplay(users))
							}
							)
							.catch(err=>console.log("Error ",err))
					} else {
							this.setUsersDisplay(this.state.followingUsers)
					}
					break;
						//return setTimeout(()=>this.setState({displaying:true, displayUsers:this.state.followingUsers}),525);
						//setTimeout(()=>this.setUsersDisplay(this.state.followingUsers),400)
				default:;
			}
		}
	}

	setUsersDisplay = (display) => {
		this.setState({displayUsers:display});
	}

	setHighlightButton = (display, arrId='setDisplay') => {
		let buttons = document.querySelectorAll("#"+arrId+" li");
			buttons.forEach(button=> {
				button===document.getElementById(display) 
				? button.classList.add("highlighted")
				: button.classList.remove("highlighted")
			})
	}

	componentDidMount(){
		this.setHighlightButton(this.state.display);
	}

	static getDerivedStateFromProps(props, state){
		if(props.resetSocial===true){
			return state = {
				display: 'followers',
				followingUsers: [],
				followersUsers: [],
				displayUsers: [],
				reset: false
			}
		}
	}

	render(){
		//console.log(this.props.resetSocial,"SOCIAL STATE: ", this.state, "following", this.props.following, "followers", this.props.followers, "displaying", this.state.displaying);

		const {display, displayUsers} = this.state; 
		const nav = <nav>
						<ul id="setDisplay">
							<li id="followers"><span onClick={()=>this.setDisplay('followers')}>Followers</span></li>
							<li id="following"><span onClick={()=>this.setDisplay('following')}>Following</span></li>
						</ul>
					</nav>;

			if(displayUsers.length===0 && this.state.displaying===true){	   
				return (
					<div id="socialbox">
					 {nav}
					 <div id="usersdisplay" className='empty-socialbox' onClick={()=>this.setDisplay(display)} style={{"cursor":"pointer"}}>
					 	<p><span>Search for users</span></p>
					 </div>
					</div>
				)
			} else {				
				if(this.state.displaying) {	
					return (
						<div id="socialbox">
						 {nav}
						 <div id="usersdisplay">
						  {displayUsers.map((dataUser,i)=><SubUser key={i} user={dataUser} setSearch={this.props.setSearch}/>)}
						 </div>
						</div>
					)   	
				} else {
					return (
			  			<div id="socialbox">
						 {nav}
						  <div id="usersdisplay" className='empty-socialbox'>
							<p><span>No users found :(</span></p>
						 </div>
						</div>
			  		)
				}
			}
		}
		//}
}

export default UserSocial;