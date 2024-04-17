import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RPSGame from './pages/rps/App';
import Board from './pages/ttt/board';
import Spg from './pages/spg/Spg';
import './index.css';


const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <App/> */}
    {/* <p>Hello</p> */}
    <BrowserRouter>
      <Routes>
        <Route path="/IT3049C_Group4_Final/" element={<HomePage/>} />
        <Route path="/IT3049C_Group4_Final/rps" element={<RPSGame/>} />
        <Route path="/IT3049C_Group4_Final/ttt" element={<Board/>} />
        <Route path="/IT3049C_Group4_Final/spg" element={<Spg/>} />
        {/* more routes */}
      </Routes>
    </BrowserRouter>
  </div>
)
