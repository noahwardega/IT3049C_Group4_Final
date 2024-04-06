import React from 'react';
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/gamehub-noahwardega/">Home</Link>
        </li>
        <li>
            <Link to="/gamehub-noahwardega/rps">Rock Paper Scissors</Link>
        </li>
        <li>
            <Link to="/gamehub-noahwardega/ttt">Tic Tac Toe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;