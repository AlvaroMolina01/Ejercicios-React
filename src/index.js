import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


//Importamos los componentes que vamos a utilizar
import App from './App';
import HelloWorld from './1. HelloWorld/HelloWorld';
import HolaJSX from './2. JSX/HolaJSX';
import FunctionJS from './2. JSX/FuncionJS';
import GetGreeting from './2. JSX/ExpresionesJSX';
import Tick from './3. Renderizado elementos/RenderizarElemento';
import Componente from './4. Componentes y Propiedades/RenderizarComponente';
import Composicion from './4. Componentes y Propiedades/ComposicionComponente';
import Reloj from './5. Estado y Ciclo/Reloj';
import RelojClase from './5. Estado y Ciclo/RelojClase';
import Boton from './6. Eventos/Eventos';
import Log from './7. Renderizado Condicional/RenderizadoCondicional';
import Lista from './8. Listas y Keys/Lista';
import FuncionLista from './8. Listas y Keys/FuncionLista';
import Keys from './8. Listas y Keys/Keys'; 
import ComponenteControlado from './9. Formularios/ComponentesControlados';
import Select from './9. Formularios/Select';
import Inputs from './9. Formularios/MultiplesInputs';
import Calculadora from './10. Levantando Estados/CalculadoraTemperatura';
import Calculadora2 from './10. Levantando Estados/CalculadoraTemperatura2';
import Dialogo from './11. Composicion vs Herencia/HerenciaFuncion';
import SignUp from './11. Composicion vs Herencia/HerenciaClase';
/////////////////////////////////////////////////

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="HelloWorld" element={<HelloWorld />} />
      <Route path="HolaJSX" element={<HolaJSX />} />
      <Route path="FuncionJS" element={<FunctionJS />} />
      <Route path="ExpresionesJSX" element={<GetGreeting />} />
      <Route path="RenderizarElemento" element={<Tick />} />
      <Route path="RenderizarComponente" element={<Componente />} />
      <Route path="ComposicionComponente" element={<Composicion />} />
      <Route path="Reloj" element={<Reloj />} />
      <Route path="RelojClase" element={<RelojClase />} />
      <Route path="Eventos" element={<Boton />} />
      <Route path="RenderizadoCondicional" element={<Log />} />
      <Route path="Lista" element={<Lista />} />
      <Route path="FuncionLista" element={<FuncionLista />} />
      <Route path="Keys" element={<Keys />} />
      <Route path="ComponentesControlados" element={<ComponenteControlado />} />
      <Route path="Select" element={<Select />} />
      <Route path="MultiplesInputs" element={<Inputs />} />
      <Route path="CalculadoraTemperatura" element={<Calculadora />} />
      <Route path="CalculadoraTemperatura2" element={<Calculadora2 />} />
      <Route path="HerenciaFuncion" element={<Dialogo />} />
      <Route path="HerenciaClase" element={<SignUp />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


