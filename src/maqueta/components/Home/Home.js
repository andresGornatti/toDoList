import React from "react";
import Title from "../Title/Title";
import Quote from "../Quote/Quote";
import Line from "../Line/Line";
import "./Home.css";
import "./AnimationSection/AnimationSection.css"

const Home = () => {
	return(
		<div id="home" className="container">
			<div id="brand-desc"><p>Consultora de Recursos Humanos Especializados en Areas Tecnológicas</p></div>
			<Line />
			<Title title="Bienvenido/a" tag="h1"/>
			<Line />
			<div className="contenido">
				<div className="img">
				<img src="http://www.novacor.com.ar/index_htm_files/669.jpg" />
				</div>
				<div>
					<h2>¿Por qué tercerizar servicios?</h2>
					<span>El outsourcing produce en las empresas los siguientes beneficios:</span>
					<ul>
						<li>- Ahorro de costos</li>
						<li>- Incremento de productividad</li>
						<li>- Transformación de costos fijos en variables</li>
						<li>- Flexibilización de las estructuras</li>
						<li>- Profesionalización de los servicios</li>
						<li>- Agilización de la gestión del cambio</li>
						<li>- Traspaso de riesgos</li>
					</ul>
				</div>
			</div>
			<Line />
			<Quote quote="Los logros de una organización son los resultados del esfuerzo combinado de cada invididuo." author="Vince Lombardi"/>
		</div>
	);
}

export default Home;