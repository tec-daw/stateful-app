import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const nombre = localStorage.getItem('miNombre');
  const getNombre = () => {
    try {
        if (nombre === null) {
        //Si al iniciar la página no hay algún valor guardado en el localStorage el valor por defecto sera Desconocido
            return ('Desconocido');
        } else {
            return JSON.parse(nombre);
        }
    } catch (err) {
        return ("");
    }
  };

  const [name, setName] = useState(getNombre());

  function handleChange(e){
    setName(e.target.value);
    //Esta siguiente linea es para hacer string el valor ingresado pero ya que input es tipo texto y no estamos manejando una base de datos la página web
    //no es susceptible a sqlInjection por lo que usar JSON.stringify no es necesario en este caso especifico
    //localStorage.setItem('miNombre', (e.target.value));
  }

  useEffect(() => {
    document.title = `Benvenut@ ${name}`;
    //Aun no tengo tan claro el uso de useEffect
    //Me gustaria tener retro y saber cual es la mejor manera de hacerlo, aqui no lo convierte a string lo cual puede ser un problema si trataramos con una base de datos real
  
    localStorage.setItem('miNombre', JSON.stringify(name));

  }, [name]);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="myname">Nombre: </label>
          <input type="text" id="name" placeholder="Escribe tu nombre" onChange={handleChange}/>
          <p>
            Hola {name}! :D
          </p>
          <h3>
            Puedes recargar la página cuando quieras <em>x</em>
          </h3>
        </form>
      </header>
    </div>
  );
}

export default App;
