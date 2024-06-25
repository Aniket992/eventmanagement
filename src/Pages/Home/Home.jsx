import React, { useContext } from "react";
import { EventsContext } from "../../../src/Components/EventsContext";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import EventCard from "../../Components/EventCard/EventCard";
import homebg from "../../Assets/particle1.jpg";
import home1bg from "../../Assets/particle2.jpg";

import './Home.css';

const Home = () => {
  const { events, loading } = useContext(EventsContext);

  return (
    <div className="bg-cover bg-center bg-fixed sm:bg-cover sm:bg-center sm:bg-fixed bg-gradient-to-r from-red-700 via-blue-600 to-green-600" 
    style={{ backgroundImage: `url(${homebg})` }}
    >
      <Navbar />
      <div className="p-10 bg-#f5f5f5">
       <div className="  text-center bg-center bg-fixed bg-cover text-white border-2 mb-40 flex justify-center items-center "
           style={{ backgroundImage: `url(${home1bg})`, minHeight: "calc(100vh - 150px)", 
          }}
       >
        <h1 className="text-4xl text-3d ">Welcome to LPU</h1>
        </div>


        <div className="flex justify-center text-center">
          <h1 className="text-4xl  font-extrabold underline mb-14 font-avenger tracking-widest text-amber-400"
            style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
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
