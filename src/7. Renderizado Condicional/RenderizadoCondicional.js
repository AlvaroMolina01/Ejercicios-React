import { Link } from "react-router-dom";
import { Component } from 'react';

class LoginControl extends Component {
    constructor(props) {
      super(props);
      //Funciones que vamos a utilizar dentro de la Clase
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);

      //Ponemos el estado inicial en false
      this.state = {isLoggedIn: false};
    }
    
    //Función para que cuando haga click el estado cambie a true y por lo tanto inicia sesión
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    //Función para que cuando haga click vuelva al estado inicial de false y cierre sesión
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      //Le damos la condición de que si esta en un estado, al pulsar cambie al otro estado con la funciones creadas anteriormente
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  
  //Preparemos el mensaje que aparecerá cuando el usuario inicie sesión
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  //Preparemos el mensaje que aparecerá cuando el usuario haga log out
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  //Función para que identifique en que estado esta el botón y imprimir un mensaje dependiendo del estado
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  //Decimos que cuando el estado del botón este en false(no este logueado), que el contenido del botón sea Login 
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }

  //Decimos que cuando el estado del botón este en true(este logueado), que el contenido del botón sea Logout 
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
  
//Generamos el componente de react
function Log(){
    return (
        <div>
          <LoginControl/>
          <Link to="/"> Volver </Link>
  
        </div>
      );
}

export default Log;
