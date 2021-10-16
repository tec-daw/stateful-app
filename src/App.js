import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const nombre = localStorage.getItem('miNombre');

  const [name, setName] = useState(nombre);

  function handleChange(e){
    setName(e.target.value);
    localStorage.setItem('miNombre', JSON.stringify(e.target.value));
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="myname">Nombre: </label>
          <input type="text" id="name" placeholder="Escribe tu nombre" onChange={handleChange}/>
          <p>
            {name}
          </p>
          <h3>
            Puedes recargar la página cuando quieras
          </h3>
        </form>
      </header>
    </div>
  );
}

export default App;
