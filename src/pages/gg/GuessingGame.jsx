import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './styles.css';

function GuessingGame() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber(1, 100));
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false); 
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleTextChange(event) {
    setGuess(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const parsedGuess = parseInt(guess, 10);
    if (isNaN(parsedGuess)) {
      setFeedback('Please enter a valid number.');
    } else if (parsedGuess < targetNumber) {
      setFeedback('Too low! Try a higher number.');
    } else if (parsedGuess > targetNumber) {
      setFeedback('Too high! Try a lower number.');
    } else {
      setFeedback(`Congratulations! ${targetNumber} is correct!`);
      setScore(score + 1);
      setShowConfetti(true); 
    }
  }

  function handleGameReset() {
    setTargetNumber(generateRandomNumber(1, 100));
    setGuess('');
    setFeedback('');
    setShowConfetti(false); 
  }

  return (
    <div className="number-guessing-game">
      {showConfetti && <Confetti />} 
      <h1>Number Guessing Game</h1>
      <p>Score: {score}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleTextChange}
          placeholder="Type your guess here..."
        />
        <button type="submit">Guess</button>
      </form>
      {feedback && <p>{feedback}</p>}
      <button onClick={handleGameReset}>Reset Game</button>
    </div>
  );
}

export default GuessingGame;