import React from "react";
import "../Register/Register.css";

const EventDetails = ({ event }) => {
  if (!event) {
    return <p>No event details provided.</p>;
  }

  return (
    <>
      <div className="text-black bg-gray-500">
        <h2>{event.eventName}</h2>
        <p>{event.description}</p>
        <p>Day: {event.day}</p>
        <p>Shift: {event.shift}</p>
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
