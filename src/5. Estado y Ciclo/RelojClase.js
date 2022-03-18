import { Link } from "react-router-dom";
//Este import nos permite trabajar con las clases
import { Component } from 'react';

class Clock extends Component {
    constructor(props) {
      super(props);
      //Le damos un valor inicial
      this.state = {date: new Date()};
    }
  
    //Con esta función hacemos que el reloj se vaya actualizando cada segundo sin tener que refrescar la página
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    
    //Esta función lo que hace es detener el bucle cronometrado que se ha iniciado en la función anterior con el setInterval
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    //Devolvemos el reloj con un mensaje
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

//Generamos el componente de react
function RelojClase() {
    return(
      <div>
      <Clock/>
      <Link to="/"> Volver </Link>
      </div>
    );
}
  
export default RelojClase;
  