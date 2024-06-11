// src/components/EventModal/EventModal.jsx
import React from 'react';
import './EventModal.css';

const EventModal = ({ event, onClose, onApply }) => {
    return (
        <div className="event-modal-overlay">
            <div className="event-modal">
            <h2 className="text-2xl font-bold mb-2">{event.eventName}</h2>
      <p className="text-gray-700 mb-2">{event.description}</p>
      <p className="text-gray-700 mb-2">{event.organiserName}</p>
      <div className="text-gray-700 mb-2">
        <h3 className="font-bold">Location:</h3>
        <p>City: {event.location.city},{event.location.state},{event.location.country}</p>
       
        <p>Landmark: {event.location.landmark}</p>
      </div>
      <div className="text-gray-700 mb-2">
        <h3 className="font-bold">Date:</h3>
        <p>Start Date: {new Date(event.date.startDate).toLocaleDateString()}</p>
        <p>End Date: {new Date(event.date.endDate).toLocaleDateString()}</p>
        <p>Last Date of Registration: {new Date(event.date.lastDateOfRegistration).toLocaleDateString()}</p>
        <p>Duration: {event.date.duration} hours</p>
      </div>
      <div className="text-gray-700 mb-2">
        <h3 className="font-bold">Eligibilities:</h3>
        <ul>
          {event.eligibilities.map((eligibility, index) => (
            <li key={index}>{eligibility}</li>
          ))}
        </ul>
      </div>
      <div className="text-gray-700 mb-2">
        <h3 className="font-bold">Rules:</h3>
        <ul>
          {event.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
      <div className="text-gray-700 mb-2">
        <h3 className="font-bold">Contact:</h3>
        {event.contact.map((contact, index) => (
          <div key={index}>
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.phone}</p>
          </div>
        ))}
      </div>
      <div className="text-gray-700 mb-2">
        <h3 className="font-bold">Registration Charges:</h3>
        {event.registrationCharges.map((charge, index) => (
          <div key={index}>
            <p>{charge.name}: {charge.currency} {charge.amount} (Mandatory: {charge.isMandatory ? "Yes" : "No"})</p>
          </div>
        ))}
      </div>
                <button onClick={onApply}>Apply Now</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EventModal;
