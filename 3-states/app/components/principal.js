import React from 'react';
import ReactDOM from 'react-dom';
import {Saludo,Despedida, SaludosTotales} from './saludos'

export default class ComponentePrincipal extends React.Component{
  constructor(props){
    super(props);
    this.state = {nombres: nombres};
  } 

  render1(){
    return <div>
    <SaludosTotales nombre="Juan"/>
    {//<Despedida nombre = "Juan"/>
}
    </div>
  }

  render(){
  	return (
  		<div>
  		{this.state.nombres.map((persona) => 
  			<SaludosTotales nombre={persona.nombre} key={persona.id}/>)
  		}
  	</div>)
  }
}

const nombres = [
{id:1, nombre : "Juan", apellido : "Pérez"},
{id:2, nombre : "Pedro", apellido : "González" }]