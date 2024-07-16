import React, { useEffect, useState } from "react";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import aboutbg from "../../Assets/blueMultiverse.jpg";
import comp1 from "../../Assets/comp1.jpg";
import flaming from "../../Assets/flaming-circle.gif";
import URL from "../../apiconfig";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState("TechSprint");
  const [description, setDescription] = useState(
    "TechSprint is an upcoming technical carnival aimed at enriching the curiosity, creativity, and scientific attitude among students from Class 6 to 12. It is an excellent platform for young minds to explore the exciting world of technology, engage in hands-on technical events, and showcase their skills in this amazing competitions. The event will inspire students to think outside the box, develop problem-solving abilities, and embrace the digital future. Get ready to be ignited with knowledge and fun!"
  );
  const [apiFailed, setApiFailed] = useState(false);

  useEffect(() => {
    const fetchAboutUsData = async () => {
      try {
        const response = await fetch(`${URL}/api/aboutUs`);
        if (response.ok) {
          const data = await response.json();
          setPhotos(data.photos || []);
          setTitle(data.title || "TechSprint");
          setDescription(
            data.description ||
              "TechSprint is an upcoming technical carnival aimed at enriching the curiosity, creativity, and scientific attitude among students from Class 6 to 12. It is an excellent platform for young minds to explore the exciting world of technology, engage in hands-on technical events, and showcase their skills in this amazing competitions. The event will inspire students to think outside the box, develop problem-solving abilities, and embrace the digital future. Get ready to be ignited with knowledge and fun!"
          );
        } else {
          console.error("Failed to fetch about us data:", response.statusText);
          setApiFailed(true);
        }
      } catch (error) {
        console.error("Error fetching about us data:", error.message);
        setApiFailed(true);
      }
    };

    fetchAboutUsData();
  }, []);

  const staticPhotos = [comp1, comp1, comp1, comp1, comp1];

  const getBackgroundImage = (photoId) => {
    try {
      return `${URL}/api/file/view/${photoId}`;
    } catch (error) {
      console.error("Error getting photo URL:", error.message);
      return comp1;
    }
  };

  return (
    <>

      <div
        className="w-full h-full min-h-screen bg-center  bg-fixed bg-cover bg-black"
        // style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <div className="w-full h-screen flex flex-col justify-center items-center bg-black bg-opacity-35">

          <Navbar />
          <div className="w-full zoom p-7 flex flex-wrap justify-evenly">
            {(apiFailed ? staticPhotos : photos).map((photoSrc, index) => (
              <div
                key={index}
                className="min-h-56 bg-center bg-cover hover:rounded-xl hover:h-64 hover:w-64 rounded-full w-56"
                style={{
                  backgroundImage: `url(${apiFailed ? photoSrc : getBackgroundImage(photoSrc)})`,
                }}
              >
                <img
                  className="rotate-animation rounded-full hover:opacity-0 hover:h-64 hover:w-64 hover:transform-none w-56 opacity-65"
                  src={flaming}
                  alt="flaming circle"
                />
              </div>
            ))}
          </div>
          <div className="w-full h-fit text-center justify-center flex">
            <p className="rounded-xl bg-black p-3 mb-3 bg-opacity-40 font-avenger text-yellow-500 text-3xl gap-3">
              {title} <p>shadow matters</p>
            </p>
          </div>
          <div className="zoom w-full h-1/2 flex justify-center items-center">
            <p className="about-text-container text-black border-green-500 border rounded-lg bg-green-600 p-5 hover:bg-opacity-100 bg-opacity-50 text-2xl h-fit text-justify leading-relaxed font-avenger tracking-widest w-3/4">
              {description}
            </p>
          </div>


          </div>
          <Footer/>

      </div>

    </>
  );
};

export default About;
