import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RPSGame from './pages/rps/App';
import Board from './pages/ttt/board';
import './index.css';
import App from './pages/rps/App'

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <App/> */}
    {/* <p>Hello</p> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/rps" element={<RPSGame/>} />
        <Route path="/ttt" element={<Board/>} />
        {/* more routes */}
      </Routes>
    </BrowserRouter>
  </div>
)
