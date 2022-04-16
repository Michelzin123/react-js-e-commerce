import React, { useState }from 'react';
import './App.css';
import games from './games.json';
import Games from './components/Games.js';

const App = () => {

  const [message, setMessage] = useState('Bem vindo!');

  return(
    <>
      <div className="container">
        <Games games={games}/>
      </div>
    </>
  )
}

export default App;