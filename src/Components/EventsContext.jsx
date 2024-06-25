import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../apiconfig';

const EventsContext = createContext();

const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${URL}/api/event/filter`);
        const eventsData = response.data.events;
        setEvents(eventsData);
        localStorage.setItem('events', JSON.stringify(eventsData));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
      setLoading(false);
    } else {
      fetchEvents();
    }
  }, []);

  return (
    <EventsContext.Provider value={{ events, loading }}>
      {children}
    </EventsContext.Provider>
  );
};

export { EventsContext, EventsProvider };
