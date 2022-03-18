import { Link } from "react-router-dom";
import { Component } from 'react';

class Sabores extends Component {
    constructor(props) {
      super(props);
      //Introducimos un valor por defecte del Select
      this.state = {value: 'Coco'};
      
      //Funciones que utilizaremos en la clase
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
      
    //Función para que el contenido pueda cambiar al introducir diferentes valores
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
    //Función para guardar los datos introducidos en el formulario
    handleSubmit(event) {
      //Imprimos el valor seleccionado con un alert 
      alert('Tu sabor favorito es: ' + this.state.value);
      //Utilizamos el prevent default para pausar una acción, en este caso, el envio del formulario
      event.preventDefault();
    }
  
    //Devolvemos el select con todos los sabores para que escoja el usuario 
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Escoge tu sabor favorito:  
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Fresa">Fresa</option>
              <option value="Lima">Lima</option>
              <option value="Coco">Coco</option>
              <option value="Mango">Mango</option>
            </select>
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
//Generamos el componente
function Select(){
    return (
        <div>
            <Sabores /> 
            <Link to="/"> Volver </Link>
        </div>)
}

export default Select;
