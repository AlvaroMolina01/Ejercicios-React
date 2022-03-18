import { Link } from "react-router-dom";

//Nos declaramos un array con un seria de números
const numbers = [1, 2, 3, 4, 5];
//A continuación, con la función map que apunta al array que hemos creado, recorreremos ese array e imprimiremos los números en una lista
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

//Gerenamos el componente de React donde devolveremos los números en una lista desordenada (ul)
function Lista(){
    return (
    <div>
        <ul>{listItems}</ul>,
        <Link to="/"> Volver </Link>
    </div>)
}

export default Lista;