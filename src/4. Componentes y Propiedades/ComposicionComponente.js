import { Link } from "react-router-dom";

//Creamos un función
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  //Gerenamos el componente de React 
  function Composicion() {
    return (
      <div>
        <Welcome name="Alvaro" />
        <Welcome name="Molina" />
        <Welcome name="Ruescas" />

        <Link to="/"> Volver </Link>

      </div>
    );
  }

export default Composicion;
  
