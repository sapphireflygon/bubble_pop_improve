import './App.css';
import React, { useState } from 'react';
import Game from './containers/Game';

function App() {

  const [ready, setReady] = useState(false);
  const [score, setScore] = useState(0);


  const toggleReady = () => {
    setReady(!ready);
  }

  return (
    <div className="App">
      <h1 className='banana'>Bubble Pop</h1>
      {ready ? (
        <span>
          <h2 className='score'>Score: {score}</h2>
          <button className='reset-btn' onClick={toggleReady}>Reset</button>
        </span>
      ) : (
        null 
      )}
      <Game ready={ready} toggleReady={toggleReady} setScore={setScore} />
    </div>
  );
}

export default App;
