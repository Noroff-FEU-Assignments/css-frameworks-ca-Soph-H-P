import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';

import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
