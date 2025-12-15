/* eslint-disable jsx-a11y/heading-has-content */
import imagen from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {

  const[characters, setCharacters] = useState(null);

  const reqApi = async () => {
    // console.log("Clicking");
    const api = await fetch("https://rickandmortyapi.com/api/character")

    const characterApi = await api.json();

    // console.log(characterApi);
    
    setCharacters(characterApi.results);

    
  };

  // console.log(characters);
  
 
  return (
    <div className="App">
      <header className="App-header">
        
        <h1 className='title'>Rick & Morty</h1>

        {characters ? (
          <Characters characters = {characters} setCharacters={setCharacters}/>
        ) : ( 

          <>
            <img src={imagen} alt='Rick & Morty' className='img-home'></img>

            <button onClick={reqApi} className='btn-search'>Buscar personajes 

            </button>

          </>

        )}         

      </header>
    </div>
  );
}

export default App;
