import React from 'react';
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <>
    <Link to="/gamehub-noahwardega/">Home</Link><br></br>
    <Link to="/gamehub-noahwardega/rps">Rock Paper Scissors</Link><br></br>
    <Link to="/gamehub-noahwardega/ttt">Tic Tac Toe</Link><br></br>
    </>
  );
};

export default Navigation;