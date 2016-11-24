import React from 'react';
import ReactDOM from 'react-dom';

//usar https://babeljs.io/repl  para ver la transpilación a javascript
class HelloWorld extends React.Component{
  render(){
    return <div>Hello world!</div>
  }
}

const HelloWorldF = function () {
	return <div>Hola, Soy una componente funcional</div>
}

ReactDOM.render(
  <HelloWorldF />,
  document.getElementById('container')
);