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
import comp1 from "../../Assets/comp1.jpg";
import comp2 from "../../Assets/comp2.jpg";
import comp3 from "../../Assets/comp3.jpg";
import lpulogo from "../../Assets/lpulogo.png";
import trophy from "../../Assets/trophy.avif";
import "./Home.css";
import YouTubePlayer from "../../Components/YouTubePlayer";
import welcomeimg from "../../Assets/welcome-img.jpeg";
import RevolvingPhotos from "../../Components/RevolvingPhotos/RevolvingPhotos";
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
      className=" w-full h-full flex flex-col bg-center  bg-black bg-fixed bg-cover text-white"
      // style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* <div className="  font-avengerd text-9xl fixed w-full h-screen text-blue-500  flex justify-center items-center">
      <h1 className="hero-img">      TechSprint 2024
      </h1>


    </div> */}
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-col h-screen bg-gray-700 rounded-xl m-3 mt-0 shadow ">
          <div className="">
            <Navbar />
          </div>
          <div className="  h-screen  flex  ">
            <div className="  w-1/2 bg-black   rounded-xl  flex justify-center ">
              <div className="    justify-evenly text-center rounded-xl   flex flex-col   items-center bg-transparent ">
                <div className="    flex flex-col items-center  mt-5  justify-center    w-full">
                  {/* <img
                      className="w-32 rounded-full bg-white "
                      src={lpulogo}
                      alt=""
                    /> */}
                  <p className="font-serif font-extrabold   text-8xl"> TECHSPRINT</p>

                  <div className="">
                    <div className="h-fit flex">
                      <img
                        className="flex fly-animation h-44"
                        src={ironman}
                        alt="Iron Man Left"
                      />
                      <p className="text-9xl   font-extrabold ">2</p>
                      <div className="flex justify-evenly zoom">
                        <img
                          className="h-28 mt-5 rotate hover:transform-none"
                          src={circleForRotation}
                          alt=""
                        />
                      </div>
                      <p className="text-9xl   font-extrabold">24</p>
                      <img
                        className="flex h-44 fly-animation"
                        src={ironmanr}
                        alt="Iron Man Right"
                      />
                    </div>
                  </div>
                  <h1 className="text-2xl w-max  p-3 bg-white text-black  tracking-widest  rounded-xl font-bold">
                  LINKING SCHOOL'S INNOVATION & CREATIVITY
                </h1>
                </div>

               
                <div className="text-2xl font-bold ">
                  <p className="  ">
                    NOW ACCEPTING
                  </p>
                  <p>ONLINE REGISTRATION</p>

                </div>
                <div>
                  <p className="text-2xl text-yellow-300 font-semibold">Ready to Innovate? Your Tech Journey Starts Here!</p>
                  <button className="text-4xl font-semibold text-center  p-2 rounded-xl hover:scale-x-105 text-blue-600 shadow mt-5  border px-5
                    tracking-widest font-avenger " onClick={eventSection}> get started</button>

                  <p></p>
                </div>

                <div className=" h-fit    p-2">
                  <div className=" bottom-row w-full h-fit mt-5 flex-wrap flex  text-sm tracking-widest text-white "></div>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-black  flex   ">
              <div className="   rounded-xl w-full  flex justify-center  items-center ">

                <div className="rounded-xl hero-img bg-teal-700 w-fit p-2">
                  
                  <YouTubePlayer />
                </div>
              
              </div>
            </div>
          </div>
          <div className=" flex text-2xl bg-gray-400 text-black rounded-b-xl  text-center justify-evenly gap-5 p-5  w-full  ">
            <div>
              <p className="text-yellow-900 font-bold text-2xl">DATE</p>
              <p className=" rounded-xl font-bold  ">18th-19th OCTOBER 2024</p>
            </div>
            <div>
              <p className="text-yellow-900 font-bold text-2xl">
                EVENT COMPRISES OF
              </p>
              <p className=" rounded-xl font-bold">
                TECHNICAL AND NON-TECHNICAL COMPETITION
              </p>
            </div>
            <div>
              <p className="text-yellow-900 font-bold text-2xl">VENUE</p>
              <p className=" rounded-xl font-bold">LOVELY PROFESSIONAL UNIVERSITY</p>
            </div>
          </div>
        </div>

        <div className="border m-3 flex   h-screen shadow rounded-xl ">
          <div className="flex flex-col w-1/2 justify-evenly items-center ">
            <p className="text-9xl font-avenger ">Welcome</p>
            <p className="font-avenger text-6xl text-yellow-500 underline">
              Tech Avengers
            </p>
            <p className="tracking-wider   text-green-400 font-semibold p-5 m-5 text-center text-xl  welcome-text   ">
            TECHSPRINT IS AN UPCOMING TECHNICAL CARNIVAL AIMED AT ENRICHING
THE CURIOSITY, CREATIVITY, AND SCIENTIFIC ATTITUDE AMONG STUDENTS
FROM CLASS 6 TO 12. IT IS AN EXCELLENT PLATFORM FOR YOUNG MINDS TO
EXPLORE THE EXCITING WORLD OF TECHNOLOGY, ENGAGE IN HANDS-ON
TECHNICAL EVENTS, AND SHOWCASE THEIR SKILLS IN THIS AMAZING
COMPETITIONS. THE EVENT WILL INSPIRE STUDENTS TO THINK OUTSIDE THE
BOX, DEVELOP PROBLEM-SOLVING ABILITIES, AND EMBRACE THE DIGITAL
FUTURE. GET READY TO BE IGNITED WITH KNOWLEDGE AND FUN!

            </p>
          </div>
            <div className="flex flex-wrap gap-3 w-1/2 items-center justify-evenly   "> 
          <RevolvingPhotos />

          </div>
          {/* <div className="flex flex-wrap gap-3 w-1/2 items-center justify-evenly   ">
            <img className="rounded-xl h-fit hero-img   " src={comp1} alt="" />
            <img className="rounded-xl h-fit hero-img " src={comp2} alt="" />
            <img className="rounded-xl h-fit hero-img " src={comp3} alt="" />
            <img className="rounded-xl h-fit hero-img " src={comp1} alt="" />
            <img className="rounded-xl h-fit hero-img " src={comp2} alt="" />
            <img className="rounded-xl h-fit hero-img " src={comp3} alt="" />
          </div> */}
        </div>
        
        <div
          id="eventSection"
          className="mb-20 min-h-screen border rounded-xl shadow p-5 m-3"
        >
          <div>
            <h1 className="text-9xl font-avenger text-center p-5">Events</h1>
          </div>
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
        <div className="h-screen border m-3 rounded-xl shadow">
          <div className=" flex justify-center items-center h-full">
            <div className="w-1/2  h-full p-5  flex flex-col items-center justify-evenly">
              <h1 className="text-9xl font-avenger text-center">
                Competitions
              </h1>
              <div className="schedule text-3xl  text-green-400 border-2 flex justify-center items-center w-fit">
  <div className=" font-avenger w-1/2 border tracking-widest h-full">
    <p className="text-3xl font-avenger text-center border p-3 text-yellow-500">day 1</p>
    <div className="p-3 flex flex-col gap-5">
      <div className="flex items-center">
        <p className="text-center flex-grow">robotics olympiad</p>
      </div>
      <div className="flex items-center">
        <p className="text-center flex-grow">water rocket challenge</p>
      </div>
     
      <div className="flex items-center">
        <p className="text-center flex-grow">tech-quiz</p>
      </div>
      <div className="flex items-center">
        <p className="text-center flex-grow">science-fair</p>
      </div>
      <div className="flex ">
        <p className="text-center flex-grow">regard before you discard - best out of waste</p>
      </div>
    </div>
  </div>
  <div className=" font-avenger tracking-widest w-1/2 h-full">
    <p className="text-3xl font-avenger border text-center p-3 text-yellow-500">day 2</p>
    <div className="p-3 flex flex-col gap-5">
      <div className="flex items-center">
        <p className="text-center flex-grow">bridge building</p>
      </div>
      <div className="flex items-center">
        <p className="text-center flex-grow">rc-xtreme</p>
      </div>
      <div className="flex items-center">
        <p className="text-center flex-grow">science-a-thon</p>
      </div>
     
      <div className="flex items-center">
        <p className="text-center flex-grow">speed X</p>
      </div>
      <div className="flex ">
        <p className="text-center flex-grow">design-x: a curative fashion show to promote sustainability</p>
      </div>
    </div>
  </div>
</div>


            </div>
            <div className="w-1/2  flex items-center justify-center     h-full">
              <img className="rounded-xl trophy w-3/4   shadow" src={trophy} alt="" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
