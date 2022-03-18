import { Link } from "react-router-dom";

function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
//Generamos el componente de react
function Reloj() {
    return(
      <div>
      <Clock date={new Date()} />,
      <Link to="/"> Volver </Link>
      </div>
    );
}
  
//Con esta línea hacemos que el reloj se actualize cada segundo
setInterval(Clock, 1000);

export default Reloj;
  