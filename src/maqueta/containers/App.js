import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import ContentPage from "../components/ContentPage/ContentPage";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			bannerSrc: "",
			currentContentPage: <Home />,
			highlightedNavLink: "Inicio"
		}
	};

	componentDidMount(){
		this.setState({"bannerSrc": "http://www.novacor.com.ar/index_htm_files/54.jpg"});
		
		let navLinks = document.querySelectorAll("#header nav ul li a");
		const highlightLink = (link=navLinks[0], listLinks=navLinks) => {
			listLinks.forEach(link=>{
				if(link.classList.contains("highlight")){
					link.classList.remove("highlight");
				}
			});
			link.classList.add("highlight");
		}
		navLinks.forEach(link=>link.addEventListener("click",(e)=>highlightLink(e.target,navLinks)));
		highlightLink();

		let section = document.querySelector("#contentPage .container > div");
		section.classList.add("home");
	}

		showSection = () => {	
		let section = document.querySelector("#contentPage .container > div");

			if(section.classList.contains("home")){
				section.classList.remove("home");
			}
			if(section.classList.contains("animate")){
				section.classList.remove("animate");
			}
			section.classList.add("animate");
		}


	setContentPage = e => {
		let section = document.querySelector("#contentPage .container > div");
// || this.setState.currentContentPage==<Home />
		switch (e.target.textContent) {
			case "Inicio": return (
				(section.classList.contains("animate") || section.classList.contains("home")) ? false : section.classList.add("out"),
				setTimeout(()=>this.setState({"currentContentPage":<Home />}),50), setTimeout(()=>this.showSection(),90)
			);														
			case "Acerca de": return (
				(section.classList.contains("animate")) ? false : section.classList.add("out"),
				setTimeout(()=>this.setState({"currentContentPage":<About />}),50), setTimeout(()=>this.showSection(),90)
			);
			case "Servicios": return (
				(section.classList.contains("animate")) ? false : section.classList.add("out"),
				setTimeout(()=>this.setState({"currentContentPage":<Services />}),50), setTimeout(()=>this.showSection(),90)
			);
			case "Contacto": return (
				(section.classList.contains("animate")) ? false : section.classList.add("out"),
				setTimeout(()=>this.setState({"currentContentPage":<Contact />}),50), setTimeout(()=>this.showSection(),90)
			);
			default: return (this.setState({"currentContentPage":<Home />}));
		}
	}

	render(){
		return(
		<div>
			<Header setContentPage={this.setContentPage} highlightedNavLink={this.state.highlightedNavLink}/>
			<Banner bannerSrc={this.state.bannerSrc}/>
			<ContentPage currentContentPage={this.state.currentContentPage}/>
			<Footer />
		</div>
		);
	}
}

export default App;
