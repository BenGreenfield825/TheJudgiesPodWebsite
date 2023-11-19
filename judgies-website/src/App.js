import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';
import SoundBoard from './pages/SoundBoard/SoundBoard.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SoundBoard" element={<SoundBoard />} />
      </Routes>
    </Router>
  );
};

export default App;