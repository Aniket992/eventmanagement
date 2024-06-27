import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar h-14 flex justify-center border-b-2 items-center bg-gradient-to-r from-red-700 via-blue-600 to-green-600  text-white ">
      <div className="navbar-container flex justify-between h-fit w-full max-w-6xl px-5">
        <a href="/" className="self-center font-avenger text-2xl  ">TechSprint</a>
        <div className="blocks sm:hidden" onClick={handleMenuToggle}>
          <i className="fas fa-bars text-2xl"></i>
        </div>
        <ul className="hidden sm:flex sm:items-center text-xl ">
          <li className="nav-item">
            <a href="/" className="nav-links px-3 py-2">Home</a>
          </li>
          <li className="nav-item">
            <a href="/events" className="nav-links px-3 py-2">Events</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links px-3 py-2">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-links px-3 py-2">Contact</a>
          </li>
        </ul>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-50 h-full transform ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        } transition-transform duration-300 ease-in-out bg-gradient-to-r from-red-700 via-blue-600 to-green-600 sm:hidden`}
      >
        <div className="flex justify-between items-center p-5">
          <a href="/" className="font-avenger text-2xl text-white">TechEvents</a>
          <div onClick={handleMenuToggle}>
            <i className="fas fa-times text-2xl text-white"></i>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <ul className="flex flex-col text-yellow-400 gap-6 font-avenger font-extrabold items-center text-2xl tracking-wider">
            <li className="nav-item">
              <a href="/" className="nav-links px-3 py-2" onClick={handleMenuToggle}>Home</a>
            </li>
            <li className="nav-item">
              <a href="/events" className="nav-links px-3 py-2" onClick={handleMenuToggle}>Events</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-links px-3 py-2" onClick={handleMenuToggle}>About</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-links px-3 py-2" onClick={handleMenuToggle}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
