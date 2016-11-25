import React from 'react';
import ReactDOM from 'react-dom';
import {Saludo,Despedida} from './saludos'

export default class ComponentePrincipal extends React.Component{
  render(){
    return <div>
    <Saludo />
    <Despedida />
    </div>
  }
}

const HelloWorldF =  () =>
	(<div>Hola, Soy una componente funcional</div>)