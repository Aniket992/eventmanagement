import React, { useState, useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import eventbg from "../../Assets/eventbg.jpg";
import TeamDetails from "../../Components/TeamDetails/TeamDetails";
import { EventsContext } from "../../Components/EventsContext";
import { useLocation } from "react-router-dom";
import URL from "../../apiconfig";

import axios from "axios";

const Registration = () => {
  const location = useLocation();
  const { events } = useContext(EventsContext);
  const passedEvent = location.state?.event;

  const initialSelectedEvents = {
    day1Morning: null,
    day1Evening: null,
    day2Morning: null,
    day2Evening: null,
  };

  if (passedEvent) {
    const dayShiftCategory = `day${passedEvent.day}${
      passedEvent.shift === "Morning" ? "Morning" : "Evening"
    }`;
    initialSelectedEvents[dayShiftCategory] = passedEvent._id;
  }

  const [formData, setFormData] = useState({
    teamDetails: {
      teamName: "",
      teamLeader: {
        name: "",
        email: "",
        phoneNumber: "",
        class: "",
        accommodationOpted: false,
      },
      teamMembers: [],
    },
    selectedEvents: initialSelectedEvents,
  });

  const [totalAccommodationFee, setTotalAccommodationFee] = useState(0);

  const handleEventSelection = (eventId, category) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedEvents: {
        ...prevData.selectedEvents,
        [category]: eventId,
      },
    }));
  };

  const getFilteredEvents = (day, shift) => {
    return events.filter((event) => event.day === day && event.shift === shift);
  };

  const calculateTotalCharge = () => {
    const selectedEventCharges = Object.values(formData.selectedEvents).reduce(
      (total, eventId) => {
        const event = events.find((event) => event._id === eventId);
        return event ? total + parseInt(event.registrationCharge.amount) : total;
      },
      0
    );
    return selectedEventCharges + totalAccommodationFee;
  };

  const handleTeamDetailsChange = (teamDetails, accommodationFee) => {
    setFormData((prevData) => ({
      ...prevData,
      teamDetails,
    }));
    setTotalAccommodationFee(accommodationFee);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the payload for the API request
    const payload = {
      teamName: formData.teamDetails.teamName,
      teamLeaderName: formData.teamDetails.teamLeader.name,
      team: [
        {
          fullname: formData.teamDetails.teamLeader.name,
          gender: formData.teamDetails.teamLeader.gender || "", // Ensure you have gender if it's needed
          phoneNumber: formData.teamDetails.teamLeader.phoneNumber,
          email: formData.teamDetails.teamLeader.email,
          optAccomodation: formData.teamDetails.teamLeader.accommodationOpted,
        },
        ...formData.teamDetails.teamMembers.map((member) => ({
          fullname: member.name,
          phoneNumber: member.phoneNumber,
          email: member.email || "",
          optAccomodation: member.accommodationOpted || false,
        })),
      ],
      eventIds: Object.values(formData.selectedEvents).filter(Boolean),
      amount: calculateTotalCharge(),
    };

    try {
      const response = await axios.post(`${URL}/api/registration/new`, payload);
      alert("Registration successful!");
      console.log(response.data);
    } catch (error) {
      alert("There was an error with your registration.");
      console.error(error);
    }
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(${eventbg})`, backgroundSize: "cover" }}
    >
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white bg-opacity-80 p-8 rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Team Registration</h1>

        <TeamDetails onTeamDetailsChange={handleTeamDetailsChange} />

        <div className="my-6">
          <h2 className="text-2xl font-bold mb-4">Select Events</h2>
          {["day1Morning", "day1Evening", "day2Morning", "day2Evening"].map(
            (category) => (
              <div key={category} className="mb-4">
                <h3 className="text-lg font-semibold capitalize">
                  {category.replace(/([A-Z])/g, " $1")}
                </h3>
                <select
                  value={formData.selectedEvents[category] || ""}
                  onChange={(e) => handleEventSelection(e.target.value, category)}
                  className="w-full border rounded-lg py-2 px-3"
                >
                  <option value="" disabled>
                    Select an event
                  </option>
                  {getFilteredEvents(
                    category.startsWith("day1") ? 1 : 2,
                    category.endsWith("Morning") ? "Morning" : "Evening"
                  ).map((event) => (
                    <option key={event._id} value={event._id}>
                      {event.eventName} - ₹{event.registrationCharge.amount}
                    </option>
                  ))}
                </select>
              </div>
            )
          )}
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          {Object.entries(formData.selectedEvents).map(([category, eventId]) => {
            const event = events.find((event) => event._id === eventId);
            return event ? (
              <p key={category} className="text-lg">
                {category.replace(/([A-Z])/g, " $1")}: {event.eventName} - ₹
                {event.registrationCharge.amount}
              </p>
            ) : null;
          })}
          <p className="text-lg">Total Accommodation Fee: ₹{totalAccommodationFee}</p>
          <p className="text-lg">
            Total Event Registration Charges: ₹
            {calculateTotalCharge() - totalAccommodationFee}
          </p>
          <p className="text-lg font-bold">Total Fee: ₹{calculateTotalCharge()}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-6"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default Registration;
