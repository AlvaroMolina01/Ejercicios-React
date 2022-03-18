import { Link } from "react-router-dom";

//Gerenamos el componente de React 
function HelloWorld() {
  //Retornamos el contenido del componente 
  return ( <div>
    <h1> Hello, World!</h1>
    <Link to="/"> Volver </Link>
    </div>
  );
}

//Exportamos el componente para poder utilizarlo en el Index.js
export default HelloWorld;
