import './App.css';
import React from 'react';
import Informacion from './informacion.js';
  const request = require('request-promise');

const buscanumero = require("./libraryCurrency.js");
var numero ="";

class App extends React.Component{
  
constructor(props){
super(props);
this.state= {
  country_name: "",
  country_code: "",
  number: "",
  valid: "",
  line_type: "",
  numero:"Ingrese su numero",

}
this.apinumero = this.apinumero.bind(this);
}

traducnumero = function (numero) {
if(numero!=" "){
  console.log("El Pais es "+numero.country_name + " \nEl codigo es "+numero.country_code);
  this.setState({
  country_code: numero.country_code,
  country_name: numero.country_name,
  number : numero.number,
  line_type : numero.line_type,
  
  });

}else{
  <p>ese numero no existe, asegurese de poner el prefij</p>
}

}


apinumero(){
  buscanumero(this.state.numero)
  .then((number) => {
    this.traducnumero(number);
  }).catch((err) => {
    
    <p>ese numero no existe, asegurese de poner el prefij</p>
  });
} 



render() {
  let informacion;
    informacion =  <Informacion traductor={this.state.traductor} country_name={this.state.country_name} country_code={this.state.country_code} number={this.state.number} line_type={this.state.line_type}/> 
    console.log(this.state.traductor);

return (
    <div className="App"> 
    <header className="App-header">
        <h2 className="">
          Api Detector de paises
        </h2>
        <br></br>
    </header>
    <main className="container">
    <br></br>
      <h3 className="white"> Indique su numero para revisar los datos del numero</h3>
      <br></br>
      
      <label className="white">Inserte Numero prefijo:</label>  
      <input type="text" name="numero"  value={this.state.numero} onChange={event => this.setState({numero:event.target.value})}/>
      <button onClick={this.apinumero}  className="btn btn-primary m-1">Consultar</button>
      
      <div>
      <br></br>
      
        {informacion} 
      </div>
    </main>
  </div>
  
 );
}

}
export default App; 
