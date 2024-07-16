import React, { useState } from "react";
import axios from "axios";
import "./Event.css";
import URL from "../../../apiconfig";

const Event = () => {
  const [eventName, setEventName] = useState("Event Name");
  const [eventType, setEventType] = useState("Type");
  const [description, setDescription] = useState("description");
  const [organiserName, setOrganiserName] = useState(
    "Lovely Professional University"
  );
  const [landmark, setLandmark] = useState(
    "Lovely Professional University (LPU)"
  );
  const [city, setCity] = useState("Phagwara");
  const [state, setState] = useState("Punjab");
  const [country, setCountry] = useState("India");
  const [day, setDay] = useState(1);
  const [shift, setShift] = useState("Morning");
  const [structure, setStructure] = useState(["Structure 1"]);
  const [eligibilities, setEligibilities] = useState(["Eligibilitie 1"]);
  const [rules, setRules] = useState(["Rule 1"]);
  const [contacts, setContacts] = useState([
    { name: "Name", phone: "1234567890" },
  ]);
  const [registrationCharge, setRegistrationCharge] = useState({
    currency: "INR",
    amount: "400",
    isMandatory: true,
  });

  const handleStructureChange = (index, value) => {
    const newStructure = [...structure];
    newStructure[index] = value;
    setEligibilities(newStructure);
  };

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

  const handleRegistrationChargesChange = (field, value) => {
    const newRegistrationCharges = registrationCharge;

    newRegistrationCharges[field] = value;
    setRegistrationCharge(newRegistrationCharges);
  };

  const addStructure = () => setStructure([...structure, ""]);
  const addEligibility = () => setEligibilities([...eligibilities, ""]);
  const addRule = () => setRules([...rules, ""]);
  const addContact = () => setContacts([...contacts, { name: "", phone: "" }]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event = {
      eventName,
      eventType,
      description,
      photos: [
        "6686d2d643818a8dfee8850f",
        "6686d2d643818a8dfee8850f",
        "6686d2d643818a8dfee8850f",
      ],
      organiserName,
      location: { landmark, city, state, country },
      structure: structure,
      day,
      shift,
      eligibilities,
      rules,
      ruleBook: "6686d0e643818a8dfee8850d",
      contact: contacts,
      registrationCharge,
    };

    try {
      const authorization = localStorage.getItem("token");
      const response = await axios.post(`${URL}/api/event/create`, event, {
        headers: {
          authorization,
          "Content-Type": "application/json",
        },
      });
      alert("Event created successfully");
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Error creating event");
    }
  };

  return (
    <div className="event-creation text-black">
      <h2 className="text-3xl font-bold mb-5 text-center">Create Event</h2>
      <form onSubmit={handleSubmit}>
        {/* Event Name */}
        <label>Event Name:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />

        {/* Event Type */}
        <label>Event Type:</label>
        <input
          type="text"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          required
        />

        {/* Description */}
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Organiser Name */}
        <label>Organiser Name:</label>
        <input
          type="text"
          value={organiserName}
          onChange={(e) => setOrganiserName(e.target.value)}
          required
        />

        {/* Location */}
        <label>Landmark:</label>
        <input
          type="text"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
          required
        />
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <label>State:</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />

        {/* Dates */}
        <label>Event Day:</label>
        <select
          id="day"
          type="number"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="1">Day 1</option>
          <option value="2">Day 2</option>
        </select>

        <label>Event Shift:</label>
        <select
          id="shift"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
        >
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>

        {/* Eligibilities */}
        <label>Eligibilities:</label>
        {eligibilities.map((eligibility, index) => (
          <input
            key={index}
            type="text"
            value={eligibility}
            onChange={(e) => handleEligibilitiesChange(index, e.target.value)}
            required
          />
        ))}
        <button type="button" onClick={addEligibility}>
          Add Eligibility
        </button>

        {/* Structure */}
        <label>Structure:</label>
        {structure.map((str, index) => (
          <input
            key={index}
            type="text"
            value={str}
            onChange={(e) => handleEligibilitiesChange(index, e.target.value)}
            required
          />
        ))}
        <button type="button" onClick={addStructure}>
          Add Structure
        </button>

        {/* Rules */}
        <label>Rules:</label>
        {rules.map((rule, index) => (
          <input
            key={index}
            type="text"
            value={rule}
            onChange={(e) => handleRulesChange(index, e.target.value)}
            required
          />
        ))}
        <button type="button" onClick={addRule}>
          Add Rule
        </button>

        {/* Contacts */}
        <label>Contacts:</label>
        {contacts.map((contact, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Name"
              value={contact.name}
              onChange={(e) =>
                handleContactChange(index, "name", e.target.value)
              }
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={contact.phone}
              onChange={(e) =>
                handleContactChange(index, "phone", e.target.value)
              }
              required
            />
          </div>
        ))}
        <button type="button" onClick={addContact}>
          Add Contact
        </button>

        {/* Registration Charges */}
        <label>Registration Charges:</label>
        <div>
          <input
            type="text"
            placeholder="Currency"
            value={registrationCharge.currency}
            onChange={(e) =>
              handleRegistrationChargesChange("currency", e.target.value)
            }
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={registrationCharge.amount}
            onChange={(e) =>
              handleRegistrationChargesChange("amount", e.target.value)
            }
            required
          />
          <label>
            <input
              type="checkbox"
              checked={registrationCharge.isMandatory}
              onChange={(e) =>
                handleRegistrationChargesChange("isMandatory", e.target.checked)
              }
            />
            Mandatory
          </label>
        </div>

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default Event;
