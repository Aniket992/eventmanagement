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
    eligibilities: [""],
    rules: [""],
    ruleBook: null,
    contact: [{ name: "", phone: "" }],
    registrationCharges: [{ name: "", currency: "INR", amount: "", isMandatory: true }],
    photos: [],
  });

  const [photos, setPhotos] = useState([]);
  const [photoIDs, setPhotoIDs] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "ruleBook" && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else if (name === "photos" && files.length > 0) {
      setPhotos([...photos, ...files]);
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

  const handleAddField = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], ""],
    });
  };

  const handleRemoveField = (field, index) => {
    const updatedArray = formData[field].filter((_, idx) => idx !== index);
    setFormData({
      ...formData,
      [field]: updatedArray,
    });
  };

  const handlePhotoUpload = async () => {
    const uploadedPhotoIDs = [];
    for (const photo of photos) {
      const formData = new FormData();
      formData.append("photo", photo);
      try {
        const response = await axios.post(`${API_BASE_URL}/api/photo/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        uploadedPhotoIDs.push(response.data.photoID);
      } catch (error) {
        console.error("Error uploading photo:", error);
      }
    }
    setPhotoIDs(uploadedPhotoIDs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handlePhotoUpload();

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

    formDataToSubmit.append("photos", photoIDs);

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
        {formData.eligibilities.map((eligibility, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="text" name={`eligibility-${index}`} value={eligibility} onChange={(e) => handleNestedChange(e, "eligibilities", index)} required className="w-full p-2 border rounded" />
            <button type="button" onClick={() => handleRemoveField("eligibilities", index)} className="ml-2 text-red-500">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddField("eligibilities")} className="text-blue-500">Add Eligibility</button>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Rules:</label>
        {formData.rules.map((rule, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="text" name={`rule-${index}`} value={rule} onChange={(e) => handleNestedChange(e, "rules", index)} required className="w-full p-2 border rounded" />
            <button type="button" onClick={() => handleRemoveField("rules", index)} className="ml-2 text-red-500">Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddField("rules")} className="text-blue-500">Add Rule</button>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Rule Book:</label>
        <input type="file" name="ruleBook" onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Contact Details:</label>
        {formData.contact.map((contact, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="text" name="name" placeholder="Name" value={contact.name} onChange={(e) => handleNestedChange(e, "contact", index)} required className="w-1/2 p-2 border rounded mr-2" />
            <input type="tel" name="phone" placeholder="Phone" value={contact.phone} onChange={(e) => handleNestedChange(e, "contact", index)} required className="w-1/2 p-2 border rounded" />
          </div>
        ))}
        <button type="button" onClick={() => handleAddField("contact")} className="text-blue-500">Add Contact</button>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Registration Charges:</label>
        {formData.registrationCharges.map((charge, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="text" name="name" placeholder="Charge Name" value={charge.name} onChange={(e) => handleNestedChange(e, "registrationCharges", index)} required className="w-1/4 p-2 border rounded mr-2" />
            <input type="text" name="currency" placeholder="Currency" value={charge.currency} onChange={(e) => handleNestedChange(e, "registrationCharges", index)} required className="w-1/4 p-2 border rounded mr-2" />
            <input type="number" name="amount" placeholder="Amount" value={charge.amount} onChange={(e) => handleNestedChange(e, "registrationCharges", index)} required className="w-1/4 p-2 border rounded mr-2" />
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="isMandatory" checked={charge.isMandatory} onChange={(e) => handleNestedChange(e, "registrationCharges", index)} />
              <span>Mandatory</span>
            </label>
          </div>
        ))}
        <button type="button" onClick={() => handleAddField("registrationCharges")} className="text-blue-500">Add Registration Charge</button>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Photos:</label>
        <input type="file" name="photos" onChange={handleChange} multiple className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Event</button>
    </form>
  );
};

export default CreateEventForm;
