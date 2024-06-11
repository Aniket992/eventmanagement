import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import EventCard from "../../Components/EventCard/EventCard";
import homebg from "../../Assets/home2.jpg";
import walk from "../../Assets/demo1.png";
import './Home.css';
import API_BASE_URL from "../../apiconfig";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/event/filter`);
        setEvents(response.data.events);
        console.log(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${homebg})` }}>
      <Navbar />
      <div className=" p-20 bg-#f5f5f5">
        <h1 className="text-4xl  font-extrabold  underline mb-14  font-avenger tracking-widest text-amber-400"
                style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}

        >Upcoming Tech Events</h1>

        {loading ? (
          <p>Loading events...</p>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-10">
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
             
          </>
        )}
        {/* <div className="robot bg-cover bg-center" style={{ backgroundImage: `url(${walk})` }}></div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
