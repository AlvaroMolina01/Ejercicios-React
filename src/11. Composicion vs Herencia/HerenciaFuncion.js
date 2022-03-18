import { Link } from "react-router-dom";

//En esta función crearemos un div y dentro meteremos el contenido que heredará la función Dialog
function Border(props) {
    return (
      <div className={'Border Border-' + props.color}>
        {props.children}
      </div>
    );
}

//En esta función es donde especificamos la estructura de la clase padre(Border)
function Dialog(props) {
    return (
      <Border color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </Border>
    );
}

//En esta función de daremos valor a los atributos de Dialog
function WelcomeDialog() {
    return (
      <Dialog
        title="Bienvenido"
        message="Gracias por visitar nuestra página!" />
    );
}

//Generamos el componente de react
function Dialogo(){
    return (
        <div>
            <WelcomeDialog /> 
            <Link to="/"> Volver </Link>
        </div>
    )
}

export default Dialogo;