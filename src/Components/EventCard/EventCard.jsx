import React from "react";
import "./EventCard.css";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/event/${event._id}`);
  };

  return (
    <div
      className="flip-card tracking-wider"
      onClick={handleCardClick}
    >
      <div className="flip-card-front text-center ">
        <div className="inner flex flex-col justify-between">
          <div className="p-5 w-24">
            <img src="https://i.imgur.com/C9DWUDi.png" alt="Event"/>
          </div>
          <div
            className="font-avenger text-yellow-400 rounded-xl bg-black bg-opacity-20 text-4xl"
            style={{ textShadow: "2px 2px 0 #000, 2px 2px 0 #000, 2px 2px 0 #000, 2px 2px 0 #000" }}
          >
            <h3>{event.eventName}</h3>
          </div>
          <div className="bg-black font-bold text-yellow-400 rounded-xl p-5 bg-opacity-55">
            <p>
              Start Date: {new Date(event.date.startDate).toLocaleDateString()}
            </p>
            <p>
              End Date: {new Date(event.date.endDate).toLocaleDateString()}
            </p>
            <p>
              Last Date of Registration: {new Date(event.date.lastDateOfRegistration).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="flip-card-back text-center">
        <div className="inner h-full overflow-hidden flex flex-col justify-between p-1">
          <div className="p-2 w-20">
            <img src="https://i.imgur.com/wROMxVv.png" alt="Event"/>
          </div>
         
          <div className=" w-full m-auto font-avenger tracking-widest text-xl bg-black bg-opacity-55  font-bold text-yellow-400 rounded-xl p-2 ">
            
                            <p className="">Click to view details</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
