// src/components/EventCard/EventCard.jsx
import React, { useState } from 'react';
import './EventCard.css';
import EventModal from '../EventModal/EventModal';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleApplyNow = () => {
        setIsModalOpen(false);
        navigate('/Registration', { state: { event } });
    };

    return (
        <div>
            <div className="event-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                <h2 className="event-name">{event.name}</h2>
                <p className="event-date">{event.date}</p>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>
            </div>
            {isModalOpen && (
                <EventModal event={event} onClose={handleCloseModal} onApply={handleApplyNow} />
            )}
        </div>
    );
};

export default EventCard;
