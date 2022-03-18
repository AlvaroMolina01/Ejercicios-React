import { Link } from "react-router-dom";

function Tick() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <Link to="/"> Volver </Link>
      </div>
      
    );
    }
  
setInterval(Tick, 1000);

export default Tick;