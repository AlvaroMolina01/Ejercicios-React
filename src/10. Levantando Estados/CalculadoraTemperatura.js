import { Link } from "react-router-dom";
import { Component } from 'react';

//Función en la cual imprimiremos un mensaje dependiendo de una condición, en este caso, la temperatura
function Hervir(props) {
    //Condición que se debe cumplir
    if (props.celsius >= 100) {
      return <p>El agua hervirá.</p>;
    }
    //Else, cuando la condición anterior no se cumple
    return <p>El agua no hervirá.</p>;
  }
  
  class Calculator extends Component {
    constructor(props) {
      super(props);
      //Funcion que se va a utilizar en la clase
      this.handleChange = this.handleChange.bind(this);
      //Valor inicial de la variable temperatura
      this.state = {temperatura: ''};
    }
  
    //Función para introducir el valor de la temperatura y poder cambiarlo
    handleChange(e) {
      this.setState({temperatura: e.target.value});
    }
  
    
    render() {
      //Guardamos el valor de la temperatura que hemos introducido
      const temperatura = this.state.temperatura;
      return (
        <fieldset>
          <legend>Introduce la temperatura:</legend>
          <input
            value={temperatura}
            //Introducimo el hanldeChange para que pueda ir cambiando el valor de la temperatura y se recargue automáticamente
            onChange={this.handleChange} />
          <Hervir
            //Convertimos la temperatura obtenida a Float y la guardamos en una variable
            celsius={parseFloat(temperatura)} />
        </fieldset>
      );
    }
  }
  
//Generamos el componente
function Calculadora(){
    return (
        <div>
            <Calculator /> 
            <Link to="/"> Volver </Link>
        </div>)
}

export default Calculadora;

  