import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from "../../Components/Footer/Footer";
import './Dashboard.css';
import API_BASE_URL from "../../apiconfig"; 

const Dashboard = ({ isAdminAuthenticated }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminAuthenticated) {
      navigate("/adminlogin"); // Redirect to login if not authenticated
    } else {
      fetchEvents(); // Fetch events if authenticated
    }
  }, [isAdminAuthenticated, navigate]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/event/filter`);
      setEvents(response.data.events);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };



  const handleEventClick = (eventId) => {
    // Navigate to event details page
  };

 

  return (
    <div className="bg-gray-500 text-white">
      <div className="dashboard-container p-10">
        <h1 className="text-3xl font-bold mb-5 text-center">Welcome Admin!</h1>
       
        {loading ? (
          <p>Loading events...</p>
        ) : (
          <div className="active-events grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="event-card bg-white p-5 rounded text-black shadow-md cursor-pointer"
                onClick={() => handleEventClick(event._id)}
              >
                <h2 className="text-2xl font-bold mb-2 ">{event.eventName}</h2>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
