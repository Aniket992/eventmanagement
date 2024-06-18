// src/components/EventModal/EventModal.jsx
import React from "react";
import "./EventModal.css";
import jarvis from "../../Assets/jarvis.webp";
const EventModal = ({ event, onClose, onApply }) => {
  return (
    <div className="event-modal-overlay fixed top-0 left-0 bottom-0 right-0 flex bg-black justify-center items-center z-50 bg-opacity-50">
      <div
        className="event-modal h-5/6  overflow-auto scroll-smooth w-3/4 p-10 rounded-xl text-blue-500 font-semibold  bg-cover text-center bg-center bg-fixed"
        style={{ backgroundImage: `url(${jarvis})` }}
      >
        <h2 className=" font-bold font-avenger text-4xl tracking-wider text-amber-400  mb-2">{event.eventName}</h2>
        <p className=" mb-2 text-xl text-blue-500  bg-black font-semibold">{event.description}</p>
       
        <div className="flex flex-wrap justify-center m-5 ">
         

          <div className=" mb-2 bg-black p-2 w-72 rounded-xl">
            <div>
              <h3 className="font-bold text-orange-400 text-xl">Location:</h3>
            </div>

            <p>
              City: {event.location.city},{event.location.state},
              {event.location.country}
            </p>

            <p>Landmark: {event.location.landmark}</p>
          </div>

          <div className=" p-5 w-72 rounded-xl"> 
            <h3 className="font-bold bg-black rounded-xl p-1 m-1 text-orange-400 text-xl">Organiser Name: </h3>
          <p className=" mb-2 bg-black p-2 rounded-xl">{event.organiserName}</p>

          </div>

          <div className=" mb-2 bg-black p-2 w-72 rounded-xl text-blue-500">
            <h3 className="font-bold bg-black   text-orange-400 text-xl">Date:</h3>
            <p>
              Start Date: {new Date(event.date.startDate).toLocaleDateString()}
            </p>
            <p>End Date: {new Date(event.date.endDate).toLocaleDateString()}</p>
            <p className="text-green-500">
              Last Date of Registration:{" "}
              {new Date(event.date.lastDateOfRegistration).toLocaleDateString()}
            </p>
            <p>Duration: {event.date.duration} hours</p>
          </div>
        </div>

        <div className=" mb-2 bg-black p-2 rounded-xl
         ">
          <h3 className="font-bold text-orange-400 text-xl">Eligibilities:</h3>
          <ul>
            {event.eligibilities.map((eligibility, index) => (
              <li key={index}>{eligibility}</li>
            ))}
          </ul>
        </div>
        <div className=" mb-2 bg-black p-2 rounded-xl">
          <h3 className="font-bold text-orange-400 text-xl">Rules:</h3>
          <ul>
            {event.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-evenly m-5">

        <div className=" mb-2 bg-black p-2 rounded-xl">
          <h3 className="font-bold text-orange-400 text-xl rounded-xl">Contact:</h3>
          {event.contact.map((contact, index) => (
            <div key={index}>
              <p>Name: {contact.name}</p>
              <p>Phone: {contact.phone}</p>
            </div>
          ))}
        </div>
        <div className=" mb-2 bg-black rounded-xl">
          <h3 className="font-bold text-orange-400 text-xl  ">Registration Charges:</h3>
          {event.registrationCharges.map((charge, index) => (
            <div key={index}>
              <p>
                {charge.name}: {charge.currency} {charge.amount} (Mandatory:{" "}
                {charge.isMandatory ? "Yes" : "No"})
              </p>
            </div>
          ))}
        </div>
        </div>
        <div className="flex justify-center  text-lime-400 text-xl font-semibold">

        <button
          className="hover:bg-blue-400 m-5 px-5 w-36 hover:text-black py-2 bg-black border rounded-md "
          onClick={onClose}
        >
          Close
        </button>
        <button
          className="hover:bg-blue-400 m-5 px-5 w-36 hover:text-black py-2 bg-black border rounded-md "
          onClick={onApply}
        >
          Apply Now
        </button>
        </div>

      </div>
    </div>
  );
};

export default EventModal;
