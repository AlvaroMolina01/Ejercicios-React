import { Link } from "react-router-dom";

//Creamos una función que recoge los atributos de la constante user y devulvuelve el formato en el que queremos que se pinte
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  };
  
    //Declaramos la constante user con sus atributos
    const user = {
        firstName: 'Andrés',
        lastName: 'Iniesta'
    };
    
    //Creamos una constante en la cual añadimos la función anterior junto al texto que queremos que se imprima
    const element = (
        <div>
            <h1>
            Hello, {formatName(user)}!  
            </h1>
        </div>
    );

    //Gerenamos el componente de React 
    function FunctionJS() {
    //Retornamos el contenido del componente 
    return ( <div>
      {element}
      <Link to="/"> Volver </Link>
      </div>
    );
  }

export default FunctionJS;
