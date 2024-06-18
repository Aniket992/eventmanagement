import React from 'react';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar bg-black">
      <div className="navbar-container">
      <a href="/" className="navbar-logo font-avenger">TechEvents</a>
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="/events" className="nav-links">Events</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-links">Contact</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
