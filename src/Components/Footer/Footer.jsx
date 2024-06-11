import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
       <footer className="  text-white p-10 border-2px-gray bg-black bg-opacity-50  text-center  w-full bottom-0 max-h-fit ">
      <div className="flex flex-col items-center">
        <div className="footer-content flex flex-row justify-around w-full  mb-10">
          <div className="footer-section about">
            <h3 >About Us</h3>
            <p>We organize and promote tech events across India to bring together technology enthusiasts, professionals, and innovators.</p>
          </div>
          <div className="footer-section flex-1 ">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: info@techeventsindia.com</p>
            <p>Phone: +91 12345 67890</p>
          </div>
        </div>
        <div className="footer-bottom p-">
          <p>&copy; 2024 Tech Events India. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
