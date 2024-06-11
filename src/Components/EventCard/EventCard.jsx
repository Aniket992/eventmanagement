// src/components/EventCard/EventCard.jsx
import React, { useState } from "react";
import "./EventCard.css";
import EventModal from "../EventModal/EventModal";
import { useNavigate } from "react-router-dom";

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
    navigate("/Registration", { state: { event } });
  };

  return (
    <>
      <div
        class="flip-card tracking-wider"
        onClick={handleCardClick}
        // style={{
        //   textShadow:
        //     "2px 2px 0 #000, 2px 2px 0 #000, 2px 2px 0 #000, 2px 2px 0 #000",
        // }}
      >
        <div class="flip-card-front text-center ">
          <div class="inner flex flex-col justify-between">
            <div className=" ">
              <img src="https://i.imgur.com/C9DWUDi.png" class="icon" />
            </div>
            <div className=" font-avenger text-yellow-400 rounded-xl bg-black bg-opacity-20 text-4xl"
            
             style={{
          textShadow:
            "2px 2px 0 #000, 2px 2px 0 #000, 2px 2px 0 #000, 2px 2px 0 #000",
        }}
            
            >
              <h3>{event.eventName}</h3>
            </div>
            <div className="bg-black font-semibold  text-orange-500 rounded-xl p-5 bg-opacity-50">
              <p>
                Start Date:{new Date(event.date.startDate).toLocaleDateString()}
              </p>
              <p>
                End Date:{new Date(event.date.endDate).toLocaleDateString()}
              </p>
              <p>
                Last Date of Registration:{" "}
                {new Date(
                  event.date.lastDateOfRegistration
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card-back text-center ">
          <div class="inner flex flex-col justify-between">
            <div>
              <img src=" https://i.imgur.com/wROMxVv.png" class="icon" />
            </div>
            <div className="bg-black font-bold text-lg text-orange-500 rounded-xl p-5 bg-opacity-50">
            <p className="font-bold text-lg text-lime-400">Venue:</p>
              <p>{event.location.landmark}</p>
            <p>{event.location.city}, </p>
            <p>{event.location.state},</p>
            <p> {event.location.country}</p>
            </div>
           
            <div className="bg-black font-semibold text-orange-500 rounded-xl p-5 bg-opacity-50">
              <h4 className="font-bold text-lg text-lime-400">Contact:</h4>
              {event.contact.map((contact, index) => (
                <div key={index} className="text-lg font-serif">
                  <p>Name: {contact.name}</p>
                  <p className="font-normal">Phone: {contact.phone}</p>
                  <p >Click to view details</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <EventModal
          event={event}
          onClose={handleCloseModal}
          onApply={handleApplyNow}
        />
      )}
    </>
  );
};

export default EventCard;
