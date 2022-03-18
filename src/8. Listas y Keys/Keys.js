import { Link } from "react-router-dom";

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

//Creamos la función donde separaremos en dos constantes los datos que hemos declarado en la constate anterior
function Blog(props) {
    //En la primera constante imprimeremos una lista desordenada con el título a través del id
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    //En la segunda constate imprimiremos el título y el contenido de los posts a través del id
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    //Imprimimos el contenido de las dos varientes que hemos creado anteiormente
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
//Generamos el componente
function Keys(){
return (
    <div>
        <Blog posts={posts} />  
        <Link to="/"> Volver </Link>
    </div>)
}

export default Keys;