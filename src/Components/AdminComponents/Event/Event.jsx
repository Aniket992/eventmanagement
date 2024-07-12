import React, { useState } from 'react';
import axios from 'axios';
import './Event.css';
import URL from "../../../apiconfig";

const Event = () => {

  const [eventName, setEventName] = useState('Robotics Olympiad');
  const [eventType, setEventType] = useState('Olympiad');
  const [description, setDescription] = useState('innovation');
  const [organiserName, setOrganiserName] = useState('innovation');
  const [landmark, setLandmark] = useState('gtroad');
  const [city, setCity] = useState('phagwara');
  const [state, setState] = useState('punjab');
  const [country, setCountry] = useState('India');
  const [startDate, setStartDate] = useState('2024-08-27T13:02:28.809947');
  const [endDate, setEndDate] = useState('2024-08-27T13:02:28.809947');
  const [lastDateOfRegistration, setLastDateOfRegistration] = useState('2024-08-27T13:02:28.809947');
  const [eligibilities, setEligibilities] = useState(['hello']);
  const [rules, setRules] = useState(['hello rule']);
  const [contacts, setContacts] = useState([{ name: 'aniket', phone: '1234567890' }]);
  const [registrationCharges, setRegistrationCharges] = useState([{ name: 'hostel', currency: 'inr', amount: '400', isMandatory: true }]);

  const handleEligibilitiesChange = (index, value) => {
    const newEligibilities = [...eligibilities];
    newEligibilities[index] = value;
    setEligibilities(newEligibilities);
  };

  const handleRulesChange = (index, value) => {
    const newRules = [...rules];
    newRules[index] = value;
    setRules(newRules);
  };

  const handleContactChange = (index, field, value) => {
    const newContacts = [...contacts];
    newContacts[index][field] = value;
    setContacts(newContacts);
  };

  const handleRegistrationChargesChange = (index, field, value) => {
    const newRegistrationCharges = [...registrationCharges];
    newRegistrationCharges[index][field] = value;
    setRegistrationCharges(newRegistrationCharges);
  };

  const addEligibility = () => setEligibilities([...eligibilities, '']);
  const addRule = () => setRules([...rules, '']);
  const addContact = () => setContacts([...contacts, { name: '', phone: '' }]);
  const addRegistrationCharge = () => setRegistrationCharges([...registrationCharges, { name: '', currency: '', amount: '', isMandatory: false }]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event = {
      eventName,
      eventType,
      description,
      photos: ['6686d2d643818a8dfee8850f', '6686d2d643818a8dfee8850f', '6686d2d643818a8dfee8850f'],
      organiserName,
      location: { landmark, city, state, country },
      date: { startDate, endDate, lastDateOfRegistration },
      eligibilities,
      rules,
      ruleBook: '6686d0e643818a8dfee8850d',
      contact: contacts,
      registrationCharges,
    };

    try {
        const authorization = localStorage.getItem('token');
        const response = await axios.post(`${URL}/api/event/create`, event, {
          headers: {
            authorization,
            'Content-Type': 'application/json',
          },
        });      alert('Event created successfully');
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event');
    }
  };

  return (
    <div className="event-creation text-black">
      <h2 className="text-3xl font-bold mb-5 text-center">Create Event</h2>
      <form onSubmit={handleSubmit}>
        {/* Event Name */}
        <label>Event Name:</label>
        <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />

        {/* Event Type */}
        <label>Event Type:</label>
        <input type="text" value={eventType} onChange={(e) => setEventType(e.target.value)} required />

        {/* Description */}
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        {/* Organiser Name */}
        <label>Organiser Name:</label>
        <input type="text" value={organiserName} onChange={(e) => setOrganiserName(e.target.value)} required />

        {/* Location */}
        <label>Landmark:</label>
        <input type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} required />
        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        <label>State:</label>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
        <label>Country:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />

        {/* Dates */}
        <label>Start Date:</label>
        <input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        <label>End Date:</label>
        <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        <label>Last Date of Registration:</label>
        <input type="datetime-local" value={lastDateOfRegistration} onChange={(e) => setLastDateOfRegistration(e.target.value)} required />

        {/* Eligibilities */}
        <label>Eligibilities:</label>
        {eligibilities.map((eligibility, index) => (
          <input key={index} type="text" value={eligibility} onChange={(e) => handleEligibilitiesChange(index, e.target.value)} required />
        ))}
        <button type="button" onClick={addEligibility}>Add Eligibility</button>

        {/* Rules */}
        <label>Rules:</label>
        {rules.map((rule, index) => (
          <input key={index} type="text" value={rule} onChange={(e) => handleRulesChange(index, e.target.value)} required />
        ))}
        <button type="button" onClick={addRule}>Add Rule</button>

        {/* Contacts */}
        <label>Contacts:</label>
        {contacts.map((contact, index) => (
          <div key={index}>
            <input type="text" placeholder="Name" value={contact.name} onChange={(e) => handleContactChange(index, 'name', e.target.value)} required />
            <input type="tel" placeholder="Phone" value={contact.phone} onChange={(e) => handleContactChange(index, 'phone', e.target.value)} required />
          </div>
        ))}
        <button type="button" onClick={addContact}>Add Contact</button>

        {/* Registration Charges */}
        <label>Registration Charges:</label>
        {registrationCharges.map((charge, index) => (
          <div key={index}>
            <input type="text" placeholder="Name" value={charge.name} onChange={(e) => handleRegistrationChargesChange(index, 'name', e.target.value)} required />
            <input type="text" placeholder="Currency" value={charge.currency} onChange={(e) => handleRegistrationChargesChange(index, 'currency', e.target.value)} required />
            <input type="number" placeholder="Amount" value={charge.amount} onChange={(e) => handleRegistrationChargesChange(index, 'amount', e.target.value)} required />
            <label>
              <input type="checkbox" checked={charge.isMandatory} onChange={(e) => handleRegistrationChargesChange(index, 'isMandatory', e.target.checked)} />
              Mandatory
            </label>
          </div>
        ))}
        <button type="button" onClick={addRegistrationCharge}>Add Registration Charge</button>

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default Event;
