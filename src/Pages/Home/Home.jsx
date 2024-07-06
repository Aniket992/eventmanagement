import React, { useContext } from "react";
import { EventsContext } from "../../../src/Components/EventsContext";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import EventCard from "../../Components/EventCard/EventCard";
import ironman from "../../Assets/ironman.png";
import ironmanr from "../../Assets/ironmanr.png";
import fire from "../../Assets/fire.jpg";
import downArrow from "../../Assets/arrow-down.png";
import circleForRotation from "../../Assets/circleForRotation.png";
import logo from "../../Assets/techSprint.png";

import "./Home.css";

const Home = () => {
  const { events, loading } = useContext(EventsContext);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };
  const eventSection = () => {
    const eventSection = document.getElementById("eventSection");
    eventSection.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <div
      className="w-full h-full flex flex-col bg-center bg-black bg-fixed bg-cover text-white"
      style={{ backgroundImage: `url(${fire})` }}
    >
      <div className="flex flex-col h-full   ">
        <Navbar />

        <div className="flex flex-col min-h-screen h-full justify-evenly items-center   ">
          <div className=" hidden  sm:flex justify-evenly    zoom  ">
            <img
              className="h-40   rotate  hover:transform-none"
              src={circleForRotation}
              alt=""
            />
          </div>
          <div className={`   w-full  sm:flex justify-center text-center  gap-6`}>
            <div className=" flex justify-center">

            <img
            className="sm:hidden max-h-44 w-2/3"
              src={logo}
            
              alt=""
            />
                        </div>

            <img
              className="hidden sm:flex fly-animation h-56"
              src={ironman}
              alt="Iron Man Left"
            />
            <h1 className=" zoom  h-fit  font-avengerd p-2 leading-relaxed  rounded-xl text-yellow-400 text-6xl">
              From Vision to Reality: The Avengers Way
            </h1>
            <img
              className=" hidden sm:flex h-56 fly-animation"
              src={ironmanr}
              alt="Iron Man Right"
            />
          </div>
        
          <div className="hidden justify-center items-end sm:flex">
            <div className="arrow-container " onClick={scrollToNextSection}>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <img className="w-20 h-20" src={downArrow} alt="Down Arrow" />
            </div>
          </div>
        </div>

        <div
          id="next-section"
          className="text-center min-h-screen p-10 flex flex-col gap-6 justify-center items-center "
        >
          <h1 className="font-avengerd tracking-widest text-6xl p-5 font-extrabold text-orange-500">
            TechSprint
          </h1>
          <h1 className="text-6xl p-3 font-avenger tracking-widest  text-yellow-400 font-bold">
            Linking School’s Innovation & Creativity
          </h1>
          <p className="text-blue-500 font-bold text-xl">NOW ACCEPTING</p>
          <p className="sm:text-6xl text-3xl text-green-500 font-bold font-serif">
            ONLINE REGISTRATION
          </p>
          <button
            className="tracking-widest neon bg-orange-400 text-black font-extrabold text-2xl px-5 py-2 rounded-2xl hover:scale-x-105 font-avengerd border-4 border-violet-700"
            onClick={eventSection}
          >
            Events
          </button>
          <div className="text-center flex justify-center  w-full   ">
            <p className="w-full  glowing-border font-avenger tracking-widest text-yellow-300 bg-black bg-opacity-60 p-5  text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              magni facere corrupti ut nam cum odio suscipit explicabo
              cupiditate voluptate. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vero fuga omnis minima esse, atque debitis
              doloribus ratione magni veniam quisquam quas. Impedit sed
              praesentium, commodi enim ea minima maiores consequatur suscipit
              animi quas quasi odio sequi voluptates totam nulla aut maxime est
              incidunt laboriosam minus corrupti ab. Illo, eveniet porro?
            </p>
          </div>
        </div>

        <div id="eventSection" className="mb-20 ">
          {loading ? (
            <p>Loading events...</p>
          ) : (
            <div className="flex flex-wrap justify-center gap-10">
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
