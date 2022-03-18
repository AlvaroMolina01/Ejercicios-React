import { Link } from "react-router-dom";

const numbers = [6 , 7 , 8 , 9 , 10];

//Creamos una función donde insertaremos el array de números que hemos creado y los recorreremos e imprimiremos en una lista con el map
function NumberList(props) {
    const numbers = props.numbers;
    //Recorremos el array y lo vamos imprimiendo un una lista
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    //Devolvemos la lista con todo el array impreso
    return (
      <ul>{listItems}</ul>
    );
  }
  
  //Generamos el componente
  function funcionLista(){
    return (
        <div>
            <NumberList numbers={numbers} />  
            <Link to="/"> Volver </Link>
        </div>)
}

export default funcionLista;
