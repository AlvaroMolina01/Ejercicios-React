import { Link } from "react-router-dom";

//Creamos una función que recoge los atributos de la constante user y devulvuelve el formato en el que queremos que se pinte
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  };
  
    //Declaramos la constante user con sus atributos
    const user = {
        firstName: 'Leo',
        lastName: 'Messi'
    };
    
    //Gerenamos el componente de React 
    function GetGreeting() {
        //Comprobamos si hay un usuario creado y utilizamos la función anterior para recoger los datos de ese usuario
        if (user) {
          return <h1>Hello, {formatName(user)}!</h1>;  
        //En caso contrario, como no hay usuario, pintaremos un mensage
        }
        return <h1>Hello, Stranger.</h1>;
      };

export default GetGreeting;
