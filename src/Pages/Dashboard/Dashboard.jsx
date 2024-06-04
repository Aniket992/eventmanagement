import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1> welcome Admin!</h1>
        <div className="Create-event">
          <h2>Create new Event</h2>
          <img src="" alt="add-event"/>
        </div>
        
          <div className="events-list">
            these are the list of all events presently active
          </div>
          
          <p>all registrations</p>
          <p> total payment recieved</p>
          <p>candidate lists</p>
          <p>download list</p>
        </div>
      
      <Footer />
    </>
  );
};

export default Dashboard;
