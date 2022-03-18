import { Link } from "react-router-dom";
import { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
      super(props);
      //Inicializamos vacío ya que queremos que el usuario ponga un nombre
      this.state = {value: ''};
  
      //Funciones que vamos a utilizar dentro de la Clase
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Función para que el contenido pueda cambiar al introducir diferentes valores
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
    //Función para guardar los datos introducidos en el formulario
    handleSubmit(event) {
      //Imprimos el valor con un alert 
      alert('El nombre es: ' + this.state.value);
      //Utilizamos el prevent default para pausar una acción, en este caso, el envio del formulario
      event.preventDefault();
    }
  
    //Devolvemos el nombre que ha introducido el usuario junto al handleSubmit para evitar el envio del formulario
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
//Generamos el componente
function ComponenteControlado(){
    return (
        <div>
            <NameForm />  
            <Link to="/"> Volver </Link>
        </div>)
}

export default ComponenteControlado;
