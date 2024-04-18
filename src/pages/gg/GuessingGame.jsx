import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function GuessingGame() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber(1, 100));
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false); // State to control confetti display

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleGuessChange(event) {
    setGuess(event.target.value);
  }

  function handleGuessSubmit(event) {
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
      setShowConfetti(true); // Activate confetti when the guess is correct
    }
  }

  function handleReset() {
    setTargetNumber(generateRandomNumber(1, 100));
    setGuess('');
    setFeedback('');
    setShowConfetti(false); // Reset confetti display
  }

  return (
    <div className="number-guessing-game">
      {showConfetti && <Confetti />} {/* Render confetti if showConfetti is true */}
      <h1>Number Guessing Game</h1>
      <p>Score: {score}</p>
      <form onSubmit={handleGuessSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleGuessChange}
          placeholder="Enter your guess"
        />
        <button type="submit">Guess</button>
      </form>
      {feedback && <p>{feedback}</p>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default GuessingGame;