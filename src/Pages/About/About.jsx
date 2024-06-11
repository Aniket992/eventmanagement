import React from 'react';
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import aboutbg from "../../Assets/aboutbg.jpg";
import jarvis from "../../Assets/jarvis.webp";


const About = () => {
    return (
        <>
            <div className="bg-cover bg-center h-screen " style={{ backgroundImage: `url(${aboutbg})` }}>
                <Navbar />
                <div className="about-page-container max-w-5xl mx-auto my-1 mb-5 p-3 rounded-xl border backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 relative overflow-hidden">
                    
                    <div className="about-content  font-sans  text-white bg-blend-burn rounded-xl  p-4 text-2xl relative bg-cover bg-center bg-black ">
                    {/* style={{ backgroundImage: `url(${jarvis})` }} */}
                        <div className="rotating-background"></div>
                        <h1 className='text-center mb-2 font-sans font-extrabold text-black rounded-xl text-4xl bg-orange-400 p-1 relative'>
                        Lovely Professional University (LPU)
                        <div className="rotating-background"></div>   
                        </h1>
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
                <Footer />
            </div>
        </>
    );
};

export default About;
