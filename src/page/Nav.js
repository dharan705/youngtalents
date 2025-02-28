import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = ({ menuOpen, toggleMenu }) => {
  return (
    <>
      <header>
        <h1>Young Talents</h1>
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
      </header>

      {menuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/register" onClick={toggleMenu}>Register</Link></li>
            <li><Link to="/event" onClick={toggleMenu}>Event</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;  