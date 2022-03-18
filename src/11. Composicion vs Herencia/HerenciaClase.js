import { Link } from "react-router-dom";
import { Component } from 'react';

//En esta función crearemos un div y dentro meteremos el contenido que heredará la función Dialog
function Border(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
}
  
//En esta función es donde especificamos la estructura de la clase padre(Border)
function Dialog(props) {
    return (
      <Border color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </Border>
    );
}
  
//Creamos la clase que heredará de las anteriores funciones
class SignUpDialog extends Component {
    constructor(props) {
      super(props);
      //Funciones que vamos a utilizar
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      //Valor inicial de la variable
      this.state = {login: ''};
    }
  
    //Función para cambiar el valor de la variable y evitar refresco
    handleChange(e) {
        this.setState({login: e.target.value});
    }
    
    //Función para imprimir el mensaje con el contenido de la variable
    handleSignUp() {
        alert(`Bienvenido, ${this.state.login}!`);
    }

    render() {
      return (
        <Dialog title="Curso de React"
                message="Introduce tu nombre por favor">
          <input value={this.state.login}
                onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            Registrarme!
          </button>
        </Dialog>
      );
    }
}
  
function SignUp(){
    return (
        <div>
            <SignUpDialog/> 
            <Link to="/"> Volver </Link>
        </div>
    )
}

export default SignUp;