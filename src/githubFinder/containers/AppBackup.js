import React from "react";
import "./App.css";
import Header from "../components/Header/Header";
import SearchInput from "../components/SearchInput/SearchInput";
import UserBox from "../components/UserBox/UserBox";
import User from "../components/User/User";
import UserSocial from "../components/UserSocial/UserSocial";
import UserRepos from "../components/UserRepos/UserRepos";

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			search: '',
			searchable: false,
			user: {
				// img: '', name: '', bio: '', url: '', location: '', created: '', followers: '',
				// following: '', repos: '', searchFollowers: '', searchFollowing: '', searchRepos: '',
			},
			reposData: [],
			resetSocial: false,
			displayUser: true
		}
	}

	setSearch = (event, subUser) => {
		if(event.type==='change'){
		this.setState({search:event.target.value, searchable:true})
		} else if(event.type==='click'){
		// Sección Followers/Following
		this.setState({search: subUser, searchable:true})	
			// setTimeout(()=>{
			// 	this.setState({reposData:[], resetSocial:true});
			// 	this.searchUsers(this.state.search);
			// },40);
				setTimeout(()=>this.confirmSearch(),100);
		}
		if(event.key==='Enter'){
				this.confirmSearch();
		} 
	}
	confirmSearch = () => {
	//if(event.key==='Enter'){
		// Clean old data that is not overwrited
		this.setState({reposData:[], resetSocial:true, displayUser:false});
		// Finally search
		this.searchUsers(this.state.search);
	//} 
	}
	searchUsers = (search) => {
		if(this.state.searchable===true){		
			fetch(`https://api.github.com/users/${search}`)
			.then(response=>response.json())
			.then(data=>this.setUser(data))
			.catch(err=>console.log("ERROR: ", err))
		}
	}

	setUser = (data) => {
		this.setState(Object.assign(this.state.user,{
				name: data.login,
				url: data.html_url,
				img: data.avatar_url,
				created: data.created_at,
				followers: data.followers,
				following: data.following,
				bio: data.bio,
				location: data.location,
				repos: data.public_repos,
				searchFollowers: data.followers_url,
				searchFollowing: data.following_url,
				searchRepos: data.repos_url
			})
		)
		this.setReset(false);
	}

	setReset = (value) => {
		this.setState({resetSocial:value, searchable:false, displayUser:true});
		this.setState({});
	} 

	setUserRepos = (data) => {
		if(Array.from(this.state.reposData).length===0){
			if(this.state.user.repos>0) {
				setTimeout(()=>console.log("INSIDE IFFF FUCNTION"),400);
				fetch(`${data}`)
				.then(response=>response.json())
				.then(data=>{
					let repos = data.map(repo=>{
						return {
							id:repo.id,
							url:repo.html_url,
							description: repo.description,
							forks: repo.forks,
							stars: repo.stargazers_count,
							name:repo.name,
							language: repo.language
						}
					})
					this.setState({reposData: repos});
				})
			} 
			else {
				this.setState({reposData:0})
			} 
		}
	} 		

	render(){
		return(
			<div id='container'>
			<Header>
			 <SearchInput setSearch={this.setSearch} confirmSearch={this.confirmSearch}/>
			</Header>
			<UserBox userDataLength={Object.keys(this.state.user).length} displayUser={this.state.displayUser}>
			 <User user={this.state.user}/>
			 <UserRepos 
			 search={this.state.user.searchRepos} 
			 reposData={this.state.reposData} 
			 setUserRepos={this.setUserRepos}/>
			 <UserSocial 
			 searchFollowing={this.state.user.searchFollowing} 
			 searchFollowers={this.state.user.searchFollowers}
			 followers={this.state.user.followers}
			 following={this.state.user.following}
			 setSearch={this.setSearch}
			 resetSocial={this.state.resetSocial}
			 />
			</UserBox>
			</div>
		)
	}


}

export default App;