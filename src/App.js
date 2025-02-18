import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Robot from './Robot';
import Sponsors from './Sponsors';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/robot" element={<Robot />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </Router>
  );
}

export default App;
