import React, { useState, useEffect } from 'react';

const Game = () => {
    const [grid, setGrid] = useState([]);
    const [gameState, setGameState] = useState({
        wordToGuess: '',
        currentAttempt: 0,
        currentPosition: 0,
        currentGuess: ""
    });

    useEffect(() => {
        initializeGrid();
        initGameState();
    }, []);

    const initializeGrid = () => {
        const newGrid = [];
        for (let i = 0; i < 6; i++) {
            const row = [];
            for (let j = 0; j < 5; j++) {
                row.push('');
            }
            newGrid.push(row);
        }
        setGrid(newGrid);
    };

    const initGameState = async () => {
        const word = await getRandomWord();
        setGameState({ ...gameState, wordToGuess: word });
    };

    const getRandomWord = async () => {
        const response = await fetch('https://it3049c-hangman.fly.dev');
        const data = await response.json();
        return data.word;
    };

    const addLetterToCell = (row, col, letter) => {
        if (col >= 5) return; 
        const newGrid = [...grid];
        newGrid[row][col] = letter;
        setGrid(newGrid);
    };

    const isLetter = (key) => {
        return key.length === 1 && key.match(/[a-z]/i);
    };

    const isBackspace = (key) => {
        return key === "Backspace";
    };

    const isEnter = (key) => {
        return key === "Enter";
    };

    const handleKeyDown = (event) => {
        if (isLetter(event.key)) {
            addLetterToCell(gameState.currentAttempt, gameState.currentPosition, event.key);
            setGameState({ ...gameState, currentGuess: gameState.currentGuess + event.key, currentPosition: gameState.currentPosition + 1 });
        } else if (isBackspace(event.key)) {
            if (gameState.currentPosition > 0) {
                addLetterToCell(gameState.currentAttempt, gameState.currentPosition - 1, "");
                setGameState({ ...gameState, currentGuess: gameState.currentGuess.slice(0, -1), currentPosition: gameState.currentPosition - 1 });
            }
        } else if (isEnter(event.key)) {
            if (gameState.currentPosition < gameState.wordToGuess.length) {
                console.log("The word is not complete.");
            } else if (gameState.currentPosition === gameState.wordToGuess.length) {
                const result = checkWord(gameState.wordToGuess, gameState.currentGuess);
                console.log(result);
                if (result.every(status => status === "correct")) {
                    console.log("Congratulations! You've guessed the word correctly.");
                } else {
                    if (gameState.currentAttempt >= 6) {
                        console.log("Game over. You've reached the maximum number of attempts.");
                    } else {
                        console.log("The word guessed is not correct.");
                        setGameState({ ...gameState, currentAttempt: gameState.currentAttempt + 1, currentPosition: 0, currentGuess: "" });
                    }
                }
            }
        }
    };

    const checkWord = (word, guess) => {
        const result = [];
        for (let i = 0; i < word.length; i++) {
            if (guess[i] === word[i]) {
                result.push("correct");
            } else if (word.includes(guess[i])) {
                result.push("misplaced");
            } else {
                result.push("incorrect");
            }
        }
        return result;
    };

    return (
        <div id="game" onKeyDown={handleKeyDown} tabIndex={0}>
            <div id="wordle-grid">
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <div key={`${rowIndex}-${colIndex}`} className="letter" id={`cell-${rowIndex}-${colIndex}`}>
                                {cell}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Game;