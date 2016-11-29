import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import 'react-widgets/lib/less/react-widgets.less';
import DropdownList from 'react-widgets/lib/DropdownList';
import {Saludo,Despedida, SaludosTotales} from './saludos'




export default class ComponentePrincipal extends React.Component{
  constructor(props){
    super(props);
    this.state = {nombres: nombres};
  } 

  componentWillMount(){
    console.log('Before mount...');  
  }

  componentDidMount(){
    console.log('After mount...')
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
​     <DropdownList data = {this.state.nombres} textField = 'nombre'
          onChange={value => this.setState({personaSeleccionada : value})} />
  		{/*this.state.nombres.map((persona) => 
  			<SaludosTotales vato = {persona} key={persona.id}/>)
  		*/}
      <SaludosTotales vato = {this.state.personaSeleccionada}/>
  	</div>)
  }
}

const nombres = [
{id:1, nombre : "Juan", apellido : "Pérez"},
{id:2, nombre : "Pedro", apellido : "González" }]