import React, { useContext } from "react";
import { EventsContext } from "../../../src/Components/EventsContext";

import "./Events.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
// import eventbg from "../../Assets/eventbg.jpeg"
import EventCard from "../../Components/EventCard/EventCard";
const Events = () => {
  const { events, loading } = useContext(EventsContext);

  return (
    <>
    <div className="bg-cover bg-center bg-black  min-h-screen " 
    // style={{backgroundImage: `url(${eventbg})`}}
    >

    <Navbar/>
    <div className="pt-7 pb-7  w-full h-full">
      <div className=" ">
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
    </div>
    <Footer/>

    </div>

    </>
  );
};

export default Events;
