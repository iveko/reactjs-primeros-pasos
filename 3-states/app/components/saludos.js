import React from 'react';
import ReactDOM from 'react-dom';

export const Saludo = (props) => (<div>Hola, {props.nombre}! Bienvenido</div>)

export const Despedida = (props) => (<div>Adios, {props.nombre}</div>)

export const SaludosTotales = (props) =>
	(
		<div>
			<Saludo {...props}/>
			<Despedida {...props}/>
		</div>
	)