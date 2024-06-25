import React from "react";
import "./Events.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import eventbg from "../../Assets/eventbg.jpeg"
const Events = () => {

  return (
    <>
    <div className="bg-cover bg-center " 
    // style={{backgroundImage: `url(${eventbg})`}}
    >

    <Navbar/>
    <div className="text-center m-10">
      <h1 className="text-3xl font-bold underline">Welcome to events page</h1>
    </div>
    <Footer/>
    </div>

    </>
  );
};

export default Events;
