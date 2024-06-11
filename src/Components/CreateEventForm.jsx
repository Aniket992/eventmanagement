import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../apiconfig";

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    description: "",
    organiserName: "",
    location: {
      landmark: "",
      city: "",
      state: "",
      country: "",
    },
    date: {
      startDate: "",
      endDate: "",
      lastDateOfRegistration: "",
      duration: 0,
    },
    eligibilities: "",
    rules: "",
    ruleBook: null, // Changed to null to handle file input
    contact: [{ name: "", phone: "" }],
    registrationCharges: [{ name: "", currency: "INR", amount: "", isMandatory: true }],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "ruleBook" && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0], // Store the file object
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleNestedChange = (e, field, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const updatedArray = formData[field].map((item, idx) =>
        idx === index ? { ...item, [name]: value } : item
      );
      setFormData({
        ...formData,
        [field]: updatedArray,
      });
    } else {
      setFormData({
        ...formData,
        [field]: {
          ...formData[field],
          [name]: value,
        },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    for (const key in formData) {
      if (key === "ruleBook") {
        formDataToSubmit.append(key, formData[key]);
      } else if (typeof formData[key] === "object") {
        for (const nestedKey in formData[key]) {
          if (Array.isArray(formData[key])) {
            formData[key].forEach((item, index) => {
              for (const itemKey in item) {
                formDataToSubmit.append(`${key}[${index}][${itemKey}]`, item[itemKey]);
              }
            });
          } else {
            formDataToSubmit.append(`${key}[${nestedKey}]`, formData[key][nestedKey]);
          }
        }
      } else {
        formDataToSubmit.append(key, formData[key]);
      }
    }

    try {
        const authorization = localStorage.getItem('token');
      const response = await axios.post(`${API_BASE_URL}/api/event/create`, formDataToSubmit, {
        headers: {
            authorization,
          'Content-Type': 'multipart/form-data',
        },
      });
      // onEventCreated(response.data);
      // onClose();
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 bg-gray-400 p-5 items-center">
      <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
      <div className="mb-4">
        <label className="block mb-1">Event Name:</label>
        <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4 flex space-x-4">
        <div className="flex-1">
          <label className="block mb-1">Event Type:</label>
          <input type="text" name="eventType" value={formData.eventType} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <div className="flex-1">
          <label className="block mb-1">Organiser Name:</label>
          <input type="text" name="organiserName" value={formData.organiserName} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Location:</label>
        <div className="flex space-x-4">
          <input type="text" name="landmark" placeholder="Landmark" value={formData.location.landmark} onChange={(e) => handleNestedChange(e, "location")} required className="w-full p-2 border rounded mb-2" />
          <input type="text" name="city" placeholder="City" value={formData.location.city} onChange={(e) => handleNestedChange(e, "location")} required className="w-1/4 p-2 border rounded mb-2" />
          <input type="text" name="state" placeholder="State" value={formData.location.state} onChange={(e) => handleNestedChange(e, "location")} required className="w-1/4 p-2 border rounded mb-2" />
          <input type="text" name="country" placeholder="Country" value={formData.location.country} onChange={(e) => handleNestedChange(e, "location")} required className="w-1/4 p-2 border rounded mb-2" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Date:</label>
        <div className="flex space-x-4">
          <input type="datetime-local" name="startDate" value={formData.date.startDate} onChange={(e) => handleNestedChange(e, "date")} required className="w-full p-2 border rounded mb-2" placeholder="Start date" />
          <input type="datetime-local" name="endDate" value={formData.date.endDate} onChange={(e) => handleNestedChange(e, "date")} required className="w-full p-2 border rounded mb-2" placeholder="End date" />
          <input type="datetime-local" name="lastDateOfRegistration" value={formData.date.lastDateOfRegistration} onChange={(e) => handleNestedChange(e, "date")} required className="w-full p-2 border rounded mb-2" placeholder="Last Date of registration" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Eligibilities:</label>
        <input type="text" name="eligibilities" value={formData.eligibilities} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Rules:</label>
        <input type="text" name="rules" value={formData.rules} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Rule Book:</label>
        <input
          type="file"
          name="ruleBook"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Contact:</label>
        <div className="flex space-x-4">
          <input type="text" name="name" placeholder="Name" value={formData.contact[0].name} onChange={(e) => handleNestedChange(e, "contact", 0)} required className="w-1/2 p-2 border rounded mb-2" />
          <input type="tel" name="phone" placeholder="Phone" value={formData.contact[0].phone} onChange={(e) => handleNestedChange(e, "contact", 0)} required className="w-1/2 p-2 border rounded mb-2" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Registration Charges:</label>
        <div className="flex space-x-4">
          <input type="text" name="name" placeholder="Name" value={formData.registrationCharges[0].name} onChange={(e) => handleNestedChange(e, "registrationCharges", 0)} required className="w-full p-2 border rounded mb-2" />
          <input type="text" name="currency" placeholder="Currency" value={formData.registrationCharges[0].currency} onChange={(e) => handleNestedChange(e, "registrationCharges", 0)} required className="w-1/3 p-2 border rounded mb-2" />
          <input type="text" name="amount" placeholder="Amount" value={formData.registrationCharges[0].amount} onChange={(e) => handleNestedChange(e, "registrationCharges", 0)} required className="w-1/3 p-2 border rounded mb-2" />
        </div>
      </div>
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Event</button>
        {/* <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button> */}
      </div>
    </form>
  );
};

export default CreateEventForm;
