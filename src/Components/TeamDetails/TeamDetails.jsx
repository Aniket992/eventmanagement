import React, { useState, useEffect } from "react";

const TeamDetails = ({ onTeamDetailsChange }) => {
  const [teamDetails, setTeamDetails] = useState({
    teamName: "",
    teamLeader: {
      name: "",
      email: "",
      phoneNumber: "",
      class: "",
      accommodationOpted: false,
    },
    teamMembers: [
      {
        name: "",
        email: "",
        phoneNumber: "",
        class: "",
        accommodationOpted: false,
      },
    ],
  });

  const [accommodationFee, setAccommodationFee] = useState(0);

  useEffect(() => {
    calculateAccommodationFee();
  }, [teamDetails]);

  const handleInputChange = (e, memberIndex = null) => {
    const { name, value, checked, type } = e.target;
    if (memberIndex === null) {
      setTeamDetails((prevDetails) => ({
        ...prevDetails,
        teamLeader: {
          ...prevDetails.teamLeader,
          [name]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      const updatedTeamMembers = [...teamDetails.teamMembers];
      updatedTeamMembers[memberIndex] = {
        ...updatedTeamMembers[memberIndex],
        [name]: type === "checkbox" ? checked : value,
      };
      setTeamDetails((prevDetails) => ({
        ...prevDetails,
        teamMembers: updatedTeamMembers,
      }));
    }
  };

  const handleAddMember = () => {
    setTeamDetails((prevDetails) => ({
      ...prevDetails,
      teamMembers: [
        ...prevDetails.teamMembers,
        {
          name: "",
          email: "",
          phoneNumber: "",
          class: "",
          accommodationOpted: false,
        },
      ],
    }));
  };

  const handleRemoveMember = (index) => {
    setTeamDetails((prevDetails) => {
      const updatedTeamMembers = prevDetails.teamMembers.filter(
        (_, i) => i !== index
      );
      return {
        ...prevDetails,
        teamMembers: updatedTeamMembers,
      };
    });
  };

  const calculateAccommodationFee = () => {
    const perPersonAccommodationFee = 1000; // Example fee per person
    const totalFee =
      teamDetails.teamMembers.reduce(
        (total, member) => total + (member.accommodationOpted ? perPersonAccommodationFee : 0),
        0
      ) + (teamDetails.teamLeader.accommodationOpted ? perPersonAccommodationFee : 0);
    setAccommodationFee(totalFee);
    onTeamDetailsChange(teamDetails, totalFee);
  };

  return (
    <div className="my-6 p-6 bg-gray-500 rounded-lg shadow-md text-black">
      <h2 className="text-2xl font-bold mb-4">Team Details</h2>

      {/* Team Leader Details */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Team Leader</h3>
        <input
          type="text"
          name="name"
          value={teamDetails.teamLeader.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="w-full p-2 mb-2 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          value={teamDetails.teamLeader.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded-lg"
        />
        <input
          type="text"
          name="phoneNumber"
          value={teamDetails.teamLeader.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="w-full p-2 mb-2 border rounded-lg"
        />
        <select
          name="class"
          value={teamDetails.teamLeader.class}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 border rounded-lg"
        >
          <option value="">Select Class</option>
          <option value="6th">6th</option>
          <option value="7th">7th</option>
          <option value="8th">8th</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="accommodationOpted"
            checked={teamDetails.teamLeader.accommodationOpted}
            onChange={handleInputChange}
            className="mr-2"
          />
          Accommodation Opted
        </label>
      </div>

      {/* Team Members Details */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Team Members</h3>
        {teamDetails.teamMembers.map((member, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              name="name"
              value={member.name}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="Name"
              className="w-full p-2 mb-2 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={member.email}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="Email"
              className="w-full p-2 mb-2 border rounded-lg"
            />
            <input
              type="text"
              name="phoneNumber"
              value={member.phoneNumber}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="Phone Number"
              className="w-full p-2 mb-2 border rounded-lg"
            />
            <select
              name="class"
              value={member.class}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full p-2 mb-2 border rounded-lg"
            >
              <option value="">Select Class</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="accommodationOpted"
                checked={member.accommodationOpted}
                onChange={(e) => handleInputChange(e, index)}
                className="mr-2"
              />
              Accommodation Opted
            </label>
            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveMember(index)}
                className="bg-red-500 text-white p-2 rounded-lg mt-2"
              >
                Remove Member
              </button>
            )}
          </div>
        ))}
        {teamDetails.teamMembers.length < 4 && (
          <button
            type="button"
            onClick={handleAddMember}
            className="bg-blue-500 text-white p-2 rounded-lg mt-2"
          >
            Add Member
          </button>
        )}
      </div>
    </div>
  );
};

export default TeamDetails;
