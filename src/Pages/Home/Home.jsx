import React, { useContext } from "react";
import { EventsContext } from "../../../src/Components/EventsContext";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import EventCard from "../../Components/EventCard/EventCard";
import ironman from "../../Assets/ironman.png";
import ironmanr from "../../Assets/ironmanr.png";
import downArrow from "../../Assets/arrow-down.png";
import circleForRotation from "../../Assets/circleForRotation.png";
import herobg from "../../Assets/herobg.jpg";
import r1 from "../../Assets/comp1.jpg";
import r2 from "../../Assets/comp2.jpg";
import r3 from "../../Assets/comp3.jpg";
import lpulogo from "../../Assets/lpulogo.jpg";
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
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col h-screen hero">
          <div className="zoom">
          <Navbar />

          </div>
          <div className="w-full h-full flex flex-col justify-between">
            <div className="hero-container flex flex-col md:flex-row">
              <div className="hero-left overflow-hidden  p-2">
                <div className=" h-full text-center w-full rounded-xl hero sm:p-10 flex flex-col gap-6 justify-center items-center bg-black bg-opacity-75">
                  <img className="max-h-44 w-1/3" src={lpulogo} alt="" />
                  <h1 className="text-4xl p-3 font-avenger tracking-widest bg-blue-500 text-white rounded-xl font-bold">
                    Linking School’s Innovation & Creativity
                  </h1>
                  <p className="text-blue-500 font-bold text-xl">NOW ACCEPTING</p>
                  <p className="text-3xl text-indigo-500 font-bold font-serif">
                    ONLINE REGISTRATION
                  </p>
                  <button
                    className="tracking-widest event-button bg-blue-400 text-black font-extrabold text-2xl px-5 py-2 w-64 rounded-2xl hover:scale-x-105 font-avenger border-4 border-blue-700"
                    onClick={eventSection}
                  >
                    Events
                  </button>
                </div>
              </div>
              <div className="hero-right p-2">
                <div className="overflow-hidden hero bg-black bg-opacity-90 rounded-xl w-full h-full flex flex-col justify-evenly items-center tracking-widest">
                  <div className="text-center text-blue-500 bg-black p-2 rounded-xl">
                    <p className="font-avenger font-bold text-3xl tracking-widest">Innovation Studio</p>
                    <p className="font-avenger">Present's</p>
                  </div>
                  <div>
                    <p className="font-avengerd text-blue-500 text-9xl">techSprint</p>
                    <div className="h-fit flex">
                      <img className="flex fly-animation h-44" src={ironman} alt="Iron Man Left" />
                      <p className="text-9xl text-blue-500 font-extrabold pr-">2</p>
                      <div className="flex justify-evenly zoom">
                        <img className="h-28 mt-5 rotate hover:transform-none" src={circleForRotation} alt="" />
                      </div>
                      <p className="text-9xl text-blue-500 font-extrabold">24</p>
                      <img className="flex h-44 fly-animation" src={ironmanr} alt="Iron Man Right" />
                    </div>
                  </div>
                  <div className="flex gap-2 w-full justify-evenly">
                    <img className="hero-img w-40 h-32 rounded-xl" src={r1} alt="" />
                    <img className="hero-img w-40 h-32 rounded-xl" src={r2} alt="" />
                    <img className="hero-img w-40 h-32 rounded-xl" src={r3} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-32 zoom border-y-4 mb-2 border-blue-700 mx-8 flex items-center text-center bg-black bg-opacity-75 p-2">
              <div className="w-full h-fit flex font-avenger text-2xl tracking-widest text-white justify-between">
                <div>
                  <p className="text-blue-300 text-3xl">Date</p>
                  <p className="bg-gray-900 p-2 rounded-xl">18th-19th September 2024</p>
                </div>
                <div>
                  <p className="text-blue-300 text-3xl">Venue</p>
                  <p className="bg-gray-900 p-2 rounded-xl">Lovely Professional University</p>
                </div>
                <div>
                  <p className="text-blue-300 text-3xl">Event Comprises Of</p>
                  <p className="bg-gray-900 p-2 rounded-xl">Technical And Non-Technical Competition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="eventSection" className="mb-20">
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
