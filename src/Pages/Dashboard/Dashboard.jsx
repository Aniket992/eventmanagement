// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import './Dashboard.css';

const Dashboard = () => {
    const [events, setEvents] = useState([
        { id: 1, name: 'Event 1', registrationCount: 25 },
        { id: 2, name: 'Event 2', registrationCount: 30 },
        { id: 3, name: 'Event 3', registrationCount: 45 },
    ]);

    const handleCreateEvent = () => {
        // Logic to create a new event
        console.log('Create new event clicked');
    };

    return (
        <>
            <Navbar />
            <div className="dashboard-container">
                <h1>Welcome Admin!</h1>
                <div className="create-event" onClick={handleCreateEvent}>
                    <h2>Create New Event</h2>
                    <img src="add-event-icon.png" alt="add-event" />
                </div>
                <div className="events-list">
                    <h2>Active Events</h2>
                    <ul>
                        {events.map(event => (
                            <li key={event.id}>
                                <div className="event-details">
                                    <span>{event.name}</span>
                                    <span>Registrations: {event.registrationCount}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="dashboard-stats">
                    <p>Total Registrations: {events.reduce((total, event) => total + event.registrationCount, 0)}</p>
                    <p>Total Payment Received</p>
                    <p>Candidate Lists</p>
                    <p>Download List</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
