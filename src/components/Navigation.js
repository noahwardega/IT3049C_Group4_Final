import React from 'react';
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/rps">Rock Paper Scissors</Link>
        </li>
        <li>
            <Link to="/ttt">Tic Tac Toe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;