import React, { useEffect, useRef } from "react";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import aboutbg from "../../Assets/aboutbg.jpg";
import jarvis from "../../Assets/jarvis.webp";
import about1 from "../../Assets/about1.jpg";
import about2 from "../../Assets/about2.jpg";
import about3 from "../../Assets/about3.jpg";
import about4 from "../../Assets/about4.jpg";

const About = () => {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const images = imageContainer.children;
    const totalImages = images.length;

    let currentIndex = 0;

    const cycleImages = () => {
      const nextIndex = (currentIndex + 1) % totalImages;

      // Remove the first image and append it to the end
      const firstImage = images[0];
      imageContainer.appendChild(firstImage);

      currentIndex = nextIndex;
    };

    const interval = setInterval(cycleImages, 2000); // Change the interval time as needed (2000ms = 2 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const handleClick = () => {
    window.open("https://iviewd.com/lpu2/", "_blank");
  };

  return (
    <>
      <div className="bg-cover bg-center bg-black">
        <Navbar />
        <div className="flex flex-col sm:flex-row">
          <div className="about-page-container  m-5 w-full sm:w-1/2 backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 relative overflow-hidden">
            <div className="about-content font-sans text-white p-4 sm:text-xl relative bg-cover bg-center bg-black">
              {/* style={{ backgroundImage: `url(${jarvis})` }} */}
              <div className="rotating-background"></div>
              <h1 className="text-center mb-2 font-sans font-extrabold text-black rounded-xl text-4xl bg-orange-400 p-1 relative">
                Lovely Professional University (LPU)
                <div className="rotating-background"></div>
              </h1>
              <p>
                Lovely Professional University (LPU) is a private university
                situated in Punjab, India. Established in 2005, LPU is known for
                its expansive campus, diverse academic programs, and vibrant
                student life. The university offers undergraduate, postgraduate,
                and doctoral programs across various disciplines including
                Engineering, Business, Design, Arts, Sciences, and more.
              </p>
              <p>
                LPU's campus is spread over 600+ acres and boasts world-class
                infrastructure, modern amenities, and state-of-the-art
                facilities. It has been recognized by various national and
                international bodies for its academic excellence and innovative
                approach to education.
              </p>
              <p>
                The university emphasizes holistic development through a blend
                of academic learning, practical exposure, research
                opportunities, and extracurricular activities. LPU is committed
                to nurturing global leaders and fostering a culture of
                innovation, entrepreneurship, and social responsibility.
              </p>
              <p>
                For more information about Lovely Professional University, visit
                their official website:
                <a
                  href="https://www.lpu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.lpu.in
                </a>
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 m-5">
            <div
              ref={imageContainerRef}
              className="flex flex-wrap w-fit justify-center gap-3 m-5"
            >
              <img src={about1} alt="image1" className="w-96" />
              <img src={about2} alt="image2" className="w-96" />
              <img src={about3} alt="image3" className="w-96" />
              <img src={about4} alt="image4" className="w-96" />
            </div>
            <div className="">
              <div className="col-md-4 flex justify-center p-5  ">
                <img
                  width="auto"
                  height="auto"
                  src="//www.lpu.in/images/360.gif"
                  alt="360"
                  className="self-center cursor-pointer"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
