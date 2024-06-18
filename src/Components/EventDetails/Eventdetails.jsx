import React from "react";
import '../Register/Register.css';

const EventDetails = ({ event }) => {
    if (!event) {
        return <p>No event details provided.</p>;
    }

    return (
        <>
            <div className="text-black bg-gray-500">
                <h2>{event.eventName}</h2>
                <p>{event.description}</p>
                <p>Start Date: {new Date(event.date.startDate).toLocaleDateString()}</p>
                <p>End Date: {new Date(event.date.endDate).toLocaleDateString()}</p>
                <p>Last Date of Registration: {new Date(event.date.lastDateOfRegistration).toLocaleDateString()}</p>
                <p>Duration: {event.date.duration} hours</p>
            </div>
            <div className="image-container bg-pink-300 flex flex-wrap justify-evenly">
                <img src="image1.jpg" alt="image 1" />
                <img src="image2.jpg" alt="image 2" />
                <img src="image3.jpg" alt="image 3" />
                <img src="image4.jpg" alt="image 4" />
            </div>
        </>
    );
};

export default EventDetails;
