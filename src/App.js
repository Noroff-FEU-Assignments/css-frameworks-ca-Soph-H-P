import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar expand="lg">
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/dashboard" className="nav-link">
                Dashboard
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        <ul>
            <li>
                <NavLink exact to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/news">News</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>

        
       
        <Routes>
          <Route exact path="/" element={<Home/>}>
            
          </Route>
          <Route path="/news" element={<News/>}>
          </Route>
          <Route path="/contact" element={<Contact/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
