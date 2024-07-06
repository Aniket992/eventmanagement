import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
       <footer className="  text-white font-bold text-xl glowing-border box-shadow p-10 border-2px-gray bg-black bg-opacity-70  text-center  w-full bottom-0 max-h-fit ">
      <div className="flex flex-col items-center">
        <div className="footer-content flex flex-col sm:flex-row justify-around w-full h-fit  mb-10">
          <div className="footer-section about sm:w-1/3   mb-3">
            <h3 className='text-green-600 font-serif' >About Us</h3>
            <p>We organize and promote tech events across India to bring together technology enthusiasts, professionals, and innovators.</p>
          </div>
          <div className="mb-3   sm:w-1/3  ">
            <h3 className='mb-3 text-green-600 font-serif'>Quick Links</h3>
            <ul className='font-avenger tracking-widest leading-relaxed  '>
              <li><a  className=' ' href="/">Home</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href='/gallery'>Gallery</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div className="footer-section contact sm:w-1/3 mb-3 ">
            <h3 className='text-green-600 font-serif'>Contact Us</h3>
            <p>Email: info@techsprintindia.com</p>
            <p>Phone: +91 12345 67890</p>
          </div>
        </div>
        <div className=" border-t-2 border-black w-full">
          <p>&copy; 2024 TechSprint India. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
