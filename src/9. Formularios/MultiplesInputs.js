import { Link } from "react-router-dom";
import { Component } from 'react';

class Reserva extends Component {
    constructor(props) {
      super(props);
      //Introducimos los valores por defecto de los inputs que vamos a utilizar
      this.state = {
        checked: true,
        invitados: 2
      };
      
      //Funciones que vamos a utilizar en la clase
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    //Función que nos permite modificar los valores de los inputs 
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      //Seleccionamos el input que vamos a modificar
      this.setState({
        //Con el name le decimos que input va a ser modificado
        [name]: value
      });
    }
  
    //Devolvemos los dos inputs con el handleInputChange para poder modificar ambos
    render() {
      return (
        <form>
          <label>
            Checked:
            <input
              name="checked"
              type="checkbox"
              //Le damos el valor que hemos puesto anteriormente en la clase
              checked={this.state.checked}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Invitados:
            <input
              name="invitados"
              type="number"
              //Le damos el valor que hemos puesto anteriormente en la clase
              value={this.state.invitados}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }
  
//Generamos el componente
function Inputs(){
    return (
        <div>
            <Reserva /> 
            <Link to="/"> Volver </Link>
        </div>)
}

export default Inputs;
