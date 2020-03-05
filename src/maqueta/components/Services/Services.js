import React from "react";
import Title from "../Title/Title";
import Quote from "../Quote/Quote";
import Line from "../Line/Line";
import Service from "../Service/Service";
import "../AnimationSection/AnimationSection.css";
import "./Services.css";

const Services = () => {
	return (
		<div id="services" className="container">
			<Title title="Servicios" tag="h1"/>
			<div className="contenido">
			<p><span>
				Nuestro objetivo es proveer mano de obra calificada y especializada, para brindar soporte en sectores tales como: Informática – Telecomunicaciones – Ingeniería – Energía –  Arquitectura – etc.,  en distintas empresas del País. Así nuestros clientes tercerizan a través de nuestra Consultora, los servicios de diferentes áreas de su Compañía.
			</span></p>
			<p><span>
				La Consultora se encarga de realizar el proceso de selección del personal, bajos los perfiles requeridos; de la realización de Exámenes Psicotécnicos y Exámenes Preocupacionales de rigor, para asegurarnos de poder brindar a nuestros clientes, los Recursos Humanos que más se ajusten a sus necesidades
			</span></p>
			</div>

			<Service img="http://www.novacor.com.ar/index_htm_files/1217.jpg" title="Recursos IN-HOUSE" p1="Incorporación de Recursos Tercerizados dentro de diferentes áreas de la Compañia."/>
			<Service img="http://www.novacor.com.ar/index_htm_files/1218.jpg" title="Recursos OUT-HOUSE" p1="También conocido como OUTSOURCING, donde distintos servicios de la Compañia son prestados por recursos externos a la misma." p2="La consultora provee el espacio físico, los recursos humanos y las herramientas necesarias para la prestación del servicio."/>
			<Line />
			<Quote quote="Los Recursos Humanos no es algo que hacemos. Es lo que hace funcionar nuestro negocio." author="Steve Wynn"/>
		</div>
	);
}

export default Services;