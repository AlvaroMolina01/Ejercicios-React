import { Link } from "react-router-dom";

const name = 'Alvaro Molina';
//Declaramos una constante que tengo la estructura que queremos que retorne el componente
const element = <h1>Hello, {name}!</h1>;

//Gerenamos el componente de React 
function HolaJSX() {
    //Retornamos el contenido del componente 
    return ( <div>
      {element}
      <Link to="/"> Volver </Link>
      </div>
    );
  }
  
  //Exportamos el componente para poder utilizarlo en el Index.js
  export default HolaJSX;