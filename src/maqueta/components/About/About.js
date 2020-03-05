import React from "react";
import Title from "../Title/Title";
import Quote from "../Quote/Quote";
import Line from "../Line/Line";
import "./About.css";
import "../AnimationSection/AnimationSection.css"

const About = () => {
	return (
		<div id="about" className="container">		
			<Quote quote="Una máquina puede hacer el trabajo de cincuenta hombres normales. Ninguna máquina puede hacer el trabajo de un  hombre extraordinario."
			author="Elbert Hubbard"/>
			<Line />
			<div className="contenido">
				<div>
					<Title title="Acerca de nosotros" tag="h1"/>
					<p>
						<span>
						Novacor Consultora IT, nace en el año 2003, en la Ciudad de Córdoba  - 
						República Argentina; como Service Oficial de Hewlett Packard brindando soporte técnico a 
						las empresas más importantes del país.
						</span>
					</p>
					<p>
						<span>
							Al mismo tiempo se fue desarrollando el área de Consultoria y Outsourcing, 
							lo cual se convirtio en el core de la empresa hasta la actualidad.
						</span>
					</p>
				</div>
				<div className="img">
				<img src="http://www.novacor.com.ar/index_htm_files/759.jpg" />
				</div>
			</div>
			<Line />
			<div id="photos">
				<img src="http://www.novacor.com.ar/index_htm_files/766.jpg"/>
				<img src="http://www.novacor.com.ar/index_htm_files/767.jpg"/>
			</div>
		</div>

	);
}

export default About;