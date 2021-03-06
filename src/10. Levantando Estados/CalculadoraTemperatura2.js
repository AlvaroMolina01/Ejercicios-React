import { Link } from "react-router-dom";
import { Component } from 'react';

//Constante con los tipos de temperatura que tenemos
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

//Función para convertir fhrenheits a Celsius
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

//Función para convertir Celsius a fhrenheits
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
  
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
  
function Hervir(props) {
    if (props.celsius >= 100) {
      return <p>El agua hervirá</p>;
    }
    return <p>El agua no hervirá.</p>;
}
  
  class TemperatureInput extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }
  
  class Calculator extends Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          <Hervir
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }
  
function Calculadora2(){
    return (
        <div>
            <Calculator /> 
            <Link to="/"> Volver </Link>
        </div>
    )
}

export default Calculadora2;

  