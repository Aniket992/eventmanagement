// src/components/EventModal/EventModal.jsx
import React from 'react';
import './EventModal.css';

const EventModal = ({ event, onClose, onApply }) => {
    return (
        <div className="event-modal-overlay">
            <div className="event-modal">
                <h2>{event.name}</h2>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>{event.description}</p>
                <button onClick={onApply}>Apply Now</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EventModal;
