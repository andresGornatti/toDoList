import React from "react";
import Title from "../Title/Title";
import Quote from "../Quote/Quote";
import Line from "../Line/Line";
import "./Contact.css";
import "./AnimationSection.css/AnimationSection.css"

const Contact = () => {
	return (
		<div id="contact" className="container">	
			<Title tag="h1" title="Concacto"/>
			<div className="contenido">
				<div className="mapa">
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d671749.9687776602!2d-64.05977611313268!3d-31.47091095682742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ac5aea685597399!2sNovacor%20-%20Consultora%20IT!5e0!3m2!1ses-419!2sar!4v1582061088077!5m2!1ses-419!2sar" frameborder="0" style={{"border":"0","height":"450px", "width":"100%"}} allowfullscreen></iframe>
				</div>
				<div className="contacto">
					<div>
						<h3>Oficina Central</h3>
						<span>Av. Hipolito Yrigoyen 123 Piso 9</span>
						<span>Ed. Yrigoyen Office</span>
						<span>Córdoba - Argentina</span>
					</div>
					<div>			
						<h3>Oficina Bs.As.</h3>
						<span>Av. Alicia Moreau de Justo 2030 Of. 120</span>
						<span>Puerto Madero</span>
						<span>Capital Federal - Argentina</span>
					</div>
					<div>
						<span>Tel. Cba.: 0351-4265353 / 4212918</span>
						<span>Tel.: Bs.As.: 011-43078080 / 43078400</span>
						<span>Mail: <a href="mailto:info@novacor.com.ar">info@novacor.com.ar</a></span>
					</div>
				</div>
			</div>
			<div className="curriculum">
				<a href="mailto:rrhh@novacor.com.ar" className="curriculum">Envianos tu currículum</a>
			</div>
			<Line />
			<Quote quote="Estoy convencido que nada de lo que hacemos es más importante que contratar y desarrollar personas. Y al final del día, apuestas por la gente, no por estrategias." author="Lawrence Bossidy"/>
		</div>
	);	
}

export default Contact;