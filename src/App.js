import './App.css';
import React from 'react';
import Informacion from './informacion.js';


const buscaNumero = require("./libraryCurrency.js");


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country_name: "",
      country_code: "",
      number: "",
      line_type: "",
      numero: "",
      numero_placeholder: "Ingrese su número"
    }

    this.btnConsultar = this.btnConsultar.bind(this);
  }

 
  btnConsultar() {
    this.setState({ err_description: "" });
    if (this.state.numero.length > 0) {
      buscaNumero(this.state.numero)
        .then((res) => {
          if (res.success == false) {
            this.setState({ err_description: res.error.info });
          }
          else if (res.valid == false) {
            this.setState({ err_description: "El número ingresado es inválido." });
          }
          else {
            this.traducirNumero(res);
          }
        }).catch((err) => {
          this.setState({ err_description: "Ha ocurrido un error inesperado, intente más tarde." });
        });
    }
    else {
      this.setState({ err_description: "El número no puede estar vacío." });
    }
  }
  handleNumero = function (val) {
    let regex = /[+][0-9]*/;
    if (regex.test(val) || val.length == 0) {
      this.setState({ numero: val });
    }
  }

  traducirNumero = function (numero) {
    if (numero != "") {
      console.log("El país es " + numero.country_name + " \nEl código es " + numero.country_code);
      this.setState({
        country_code: numero.country_code,
        country_name: numero.country_name,
        number: numero.number,
        line_type: numero.line_type
      });

    } else {
      this.setState({ err_description: "El número no existe, asegurese de poner el prefijo." });
    }
  }


  render() {
    let informacion;
    informacion = <Informacion traductor={this.state.traductor} country_name={this.state.country_name} country_code={this.state.country_code} number={this.state.number} line_type={this.state.line_type} />
    console.log(this.state.traductor);

    return (
      <div className="App">
        <header className="App-header">
          <h2 className="">Api Detector de países</h2>
          <br />
        </header>
        <main className="container">
          <h3 className="white">Indique su número para revisar los datos del numero</h3>
          <label className="white">Inserte un número con el prefijo:</label>
          <input type="text" name="numero" value={this.state.numero} placeholder={this.state.numero_placeholder} onChange={e => this.handleNumero(e.target.value)} />
          <button onClick={this.btnConsultar} className="btn btn-primary m-1">Consultar</button>
          <p id="err">{this.state.err_description}</p>
          <div id="info">
            {informacion}
          </div>
        </main>
      </div>

    );
  }

}
export default App; 
