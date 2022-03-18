import { Link } from "react-router-dom";

//Creamos una constante en la que indicamos que valor queremos que tenga el elemento
const element = <Welcome name="Sara" />;

//Creamos una función con la estructura del mensaje que queremos que devuelva
function Welcome(props) {  
    return <h1>Hello, {props.name}</h1>;
}

//Generamos el componente de react
function componente(){
    return ( <div>
        {element}
        <Link to="/"> Volver </Link>
        </div>
      );
}

export default componente;


