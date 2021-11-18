import React from 'react';
import './sass/style.scss';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';

import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Navigation>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
};

export default App;
