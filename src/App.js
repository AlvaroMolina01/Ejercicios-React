import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div id="Documentacion">
      <h1> Documentación React</h1>
      <p>1. HelloWorld</p>
      <li>
          <ul> <Link to="/HelloWorld"> 1.1. HelloWorld </Link> <br></br></ul>
      </li>
      <p>2. Presentando JSX</p>
      <li>
          <ul> <Link to="/HolaJSX"> 2.1. Base JSX </Link></ul>
          <ul> <Link to="/FuncionJS"> 2.2. Funcion JS </Link></ul>
          <ul> <Link to="/ExpresionesJSX"> 2.2. Expresiones JSX </Link></ul>
      </li>
      <p>3. Renderizado Elementos</p>
        <li>
            <ul> <Link to="/RenderizarElemento"> 3.1. Rendrizado de Elementos </Link></ul>
        </li>
        <p>4. Componentes y Propiedades</p>
        <li>
            <ul> <Link to="/RenderizarComponente"> 4.1. Rendrizado de Componentes </Link></ul>
            <ul> <Link to="/ComposicionComponente"> 4.2. Composicion de Componentes </Link></ul>
        </li>
        <p>5. Estado y Ciclo de Vida</p>
        <li>
            <ul> <Link to="/Reloj"> 5.1. Reloj</Link></ul>
            <ul> <Link to="/RelojClase"> 5.1. Reloj con Clases</Link></ul>
        </li>
        <p>6. Eventos</p>
        <li>
            <ul> <Link to="/Eventos"> 6.1. Botón</Link></ul>
        </li>
        <p>7. Renderizado Condicional</p>
        <li>
            <ul> <Link to="/RenderizadoCondicional"> 7.1. Renderizado Condicional</Link></ul>
        </li>
        <p>8. Listas y Keys</p>
        <li>
            <ul> <Link to="/Lista"> 8.1. Listas</Link></ul>
            <ul> <Link to="/FuncionLista"> 8.2. Elemento Lista</Link></ul>
            <ul> <Link to="/Keys"> 8.3. Keys</Link></ul>
        </li>
        <p>9. Formularios</p>
        <li>
            <ul> <Link to="/ComponentesControlados"> 9.1. Componentes Controlados</Link></ul>
            <ul> <Link to="/Select"> 9.2. Elemento Select</Link></ul>
            <ul> <Link to="/MultiplesInputs"> 9.3. Múltiples Inputs</Link></ul>
        </li>
        <p>10. Levantando Estados</p>
        <li>
            <ul> <Link to="/CalculadoraTemperatura"> 10.1. Calculadora de Temperatura</Link></ul>
            <ul> <Link to="/CalculadoraTemperatura2"> 10.2. Calculadora con 2 Entradas</Link></ul>
        </li>
        <p>11. Composicion vs Herencia</p>
        <li>
            <ul> <Link to="/HerenciaFuncion"> 11.1. Composición con Función</Link></ul>
            <ul> <Link to="/HerenciaClase"> 11.2. Composición con Clases</Link></ul>
        </li>
    </div>
  );
}

export default App;
