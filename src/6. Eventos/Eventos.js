import { Link } from "react-router-dom";
import { Component } from 'react';
import ReactDOM from 'react-dom'

//Creamos una clase que extiende de Component
class Toggle extends Component {
    constructor(props) {
      super(props);
      //Definimos el estado principal del botón
      this.state = {isToggleOn: true};
  
      // Este enlace es necesario para hacer que `this` funcione en el callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    //Funcion que comprueba el estado del botón cuando haces Click
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    //Este render hará que cuando haga click en el botón compruebe el estado de este y lo cambie
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
//Generamos el componente de react
function Boton(){
    return (
        <div>
            <Toggle/><br></br>
            <br></br>
            <Link to="/"> Volver </Link>
        </div>
    )
}

export default Boton;