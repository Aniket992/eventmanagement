// src/pages/AboutPage.jsx
import React from 'react';
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const About = () => {
    return (
        <>
        <Navbar/>
        <div className="about-page-container">
            <h1>About Lovely Professional University (LPU)</h1>
            <div className="about-content">
                <p>
                    Lovely Professional University (LPU) is a private university situated in Punjab, India.
                    Established in 2005, LPU is known for its expansive campus, diverse academic programs,
                    and vibrant student life. The university offers undergraduate, postgraduate, and doctoral
                    programs across various disciplines including Engineering, Business, Design, Arts, Sciences,
                    and more.
                </p>
                <p>
                    LPU's campus is spread over 600+ acres and boasts world-class infrastructure, modern amenities,
                    and state-of-the-art facilities. It has been recognized by various national and international
                    bodies for its academic excellence and innovative approach to education.
                </p>
                <p>
                    The university emphasizes holistic development through a blend of academic learning, practical
                    exposure, research opportunities, and extracurricular activities. LPU is committed to nurturing
                    global leaders and fostering a culture of innovation, entrepreneurship, and social responsibility.
                </p>
                <p>
                    For more information about Lovely Professional University, visit their official website:
                    <a href="https://www.lpu.in" target="_blank" rel="noopener noreferrer">www.lpu.in</a>
                </p>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default About;
