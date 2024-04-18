import React from 'react';
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <>
    <Link to="/IT3049C_Group4_Final/">Home</Link><br></br>
    <Link to="/IT3049C_Group4_Final/rps">Rock Paper Scissors</Link><br></br>
    <Link to="/IT3049C_Group4_Final/ttt">Tic Tac Toe</Link><br></br>
    <Link to="/IT3049C_Group4_Final/word">Wordle</Link><br></br>
    <Link to="/IT3049C_Group4_Final/spg">Sliding Puzzle Game</Link><br></br>
    <Link to="/IT3049C_Group4_Final/gg">Number Guessing Game</Link><br></br>
    
    </>
  );
};

export default Navigation;