import React, { useContext } from "react";
import { EventsContext } from "../../../src/Components/EventsContext";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import EventCard from "../../Components/EventCard/EventCard";
import homebg from "../../Assets/particle1.jpg";
import home1bg from "../../Assets/home.gif";
import gate_left from "../../Assets/gate_left.jpg";
import gate_right from "../../Assets/gate_right.jpg";
import leftgate from "../../Assets/leftgif.gif";
import "./Home.css";

const Home = () => {
  const { events, loading } = useContext(EventsContext);

  const handleClick = () => {
    window.open("https://iviewd.com/lpu2/", "_blank");
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed sm:bg-cover sm:bg-center sm:bg-fixed bg-gradient-to-r from-red-700 via-blue-600 to-green-600"
      style={{ backgroundImage: `url(${homebg})` }}
    >
      <Navbar />
      <div className="p-10 flex flex-col justify-center items-center bg-#f5f5f5">
        <div
          className=" w-full  text-center bg-center bg-fixed bg-cover text-white border-2 mb-40 flex sm:flex-row gate-container"
          style={{
            backgroundImage: `url(${home1bg})`,
            minHeight: "calc(100vh - 120px)",
          }}
        >
          <div className="w-full font-avenger font-bold  tracking-widest text-2xl flex flex-col  items-center justify-center  p-10  ">
            <div className=" w-fit p-5 border-2 border-black rounded-lg bg-opacity-70 text-yellow-300">
              <p>Welcome</p>
              <p>To</p>
              <h1>TechSprint</h1>
              <p>Lovely Professional University</p>
            </div>
            <div className="col-md-4 flex justify-end items-end p-5  ">
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
          <div className="gate-left w-1/2 bg-relative bg-black overflow-hidden flex  flex-col items-end  ">
            <h1 className="text-lime-300 bg-slate-700 w-fit text-4xl font-avenger rounded-l mt-1 flex  justify-end items-end p-2 pt-3 mb-1 ">
              Tech
            </h1>
            <div className="bg-gray-300  w-full h-full flex flex-col items-center justify-center p-5 bg-no-repeat bg-cover "
            style={{ backgroundImage: `url(${leftgate})` }}
>
            <h1 className="text-6xl font-bold mb-3"> TECHSPRINT</h1>
              <p className="bg-blue-500 p-1 text-3xl text-bold mb-3">Linking School’s Innovation & Creativity</p>
              <p>NOW ACCEPTING</p>
              <p className="text-5xl my-3">ONLINE REGISTRATION</p>
            </div>
          </div>
          <div className="gate-right w-1/2 bg-relative bg-black  ">
            <h1 className="text-yellow-400 bg-slate-700 w-fit text-4xl font-avenger rounded-r flex mt-1 py-2 pr-3">
              Sprint
            </h1>
            <iframe
              className="w-full h-full p-5 "
              src="https://www.youtube.com/embed/bs44FXaLeyE?autoplay=1&mute=1&loop=1&playlist=bs44FXaLeyE"
              title="Welcome to LPU | Best Placements | Top-notch Infrastructure | Think BIG"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center text-center">
          <h1
            className="text-4xl  font-extrabold underline mb-14 font-avenger tracking-widest text-amber-400"
            style={{
              textShadow:
                "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
            }}
          >
            Upcoming Tech Events
          </h1>
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
      <Footer />
    </div>
  );
};

export default Home;
