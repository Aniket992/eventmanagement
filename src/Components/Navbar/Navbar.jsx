import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../Assets/techSprint.png";
import lpulogo from "../../Assets/logo-lpu.svg";
import naaclogo from "../../Assets/naac-logo.svg"
import "./Navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="navbar bg-white h-24 pt-2 flex  w-fit sm:w-full justify-center   items-center text-amber-300 font-bold
     "
    >
      {/* bg-gradient-to-r from-red-700 via-blue-600 to-green-600  text-white */}

      <div className="  flex justify-between     h-fit w-full  pr-5">
        {/* <div className="blocks sm:hidden " onClick={handleMenuToggle}>
          <i className="fas fa-bars text-2xl"></i>
        </div> */}
        <div className="flex   w-1/2  justify-between  items-center gap-3 p-1  ">

        <img className=" w-fit h-28  mr-12  " src={lpulogo} alt="" />
        <img className=" w-fit h-16   " src={naaclogo} alt="" />

        <img className="w-fit  h-20 " src={logo} alt="" />

        </div>
        <div className="flex  justify-center  items-center">

        </div>
        
        <div className="flex  text-black ">

        <ul className="flex  sm:items-center gap-6  items-center justify-center  mr-5  text-xl   ">
          <li className="nav-item w-20">
            <a href="/" className="nav-links px-3 py-2     rounded   ">
              Home
            </a>
          </li>
          <li className="nav-item w-20">
            <a href="/events" className="nav-links px-3 py-2     rounded    ">
              Events
            </a>
          </li>
          <li className="nav-item w-20">
            <a href="/gallery" className="nav-links px-3 py-2    rounded   ">
              Gallery
            </a>
          </li>

          <li className="nav-item w-20">
            <a href="/about" className="nav-links px-3 py-2      rounded   ">
              About
            </a>
          </li>
          <li className="nav-item w-20 mr-3">
            <a href="/contact" className="nav-links px-3 py-2   rounded   ">
              Contacts
            </a>
          </li>
        </ul>
        </div>

      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-50 h-full transform ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out bg-gradient-to-r from-red-700 via-blue-600 to-green-600 sm:hidden`}
      >
        <div className="flex justify-between  items-center p-5">
          <a href="/" className="font-avenger text-2xl ">
            TechEvents
          </a>
          <div onClick={handleMenuToggle}>
            <i className="fas fa-times text-2xl"></i>
          </div>
        </div>
        <div className="flex  justify-center h-full">
          <ul className="flex   gap-6 font-avenger font-extrabold items-center text-xl tracking-wider">
            <li className="nav-item ">
              <a
                href="/"
                className="nav-links  px-3 py-2"
                onClick={handleMenuToggle}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/events"
                className="nav-links px-3 py-2"
                onClick={handleMenuToggle}
              >
                Events
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about"
                className="nav-links px-3 py-2"
                onClick={handleMenuToggle}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/contact"
                className="nav-links px-3 py-2"
                onClick={handleMenuToggle}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
