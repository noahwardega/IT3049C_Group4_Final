import React from 'react';
import DarkModeToggle from '../../pages/word/DarkModeToggle'
import Game from '../../pages/word/Game'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Wordle</h1>
        <DarkModeToggle />
      </header>
      <Game />
    </div>
  );
}

export default App;