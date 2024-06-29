import React, { useContext } from "react";
import { EventsContext } from "../../../src/Components/EventsContext";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import EventCard from "../../Components/EventCard/EventCard";
import homebg from "../../Assets/particle1.jpg";
import home1bg from "../../Assets/home.jpg";
import gate_left from "../../Assets/gate_left.jpg";
import gate_right from "../../Assets/gate_right.jpg";
import leftgate from "../../Assets/leftgate.jpg";
import rightgate from "../../Assets/rightgate.jpg";
import t from "../../Assets/tech.png";
import s from "../../Assets/sprint.png";
import ironman from '../../Assets/ironman.png';
import ironmanr from '../../Assets/ironmanr.png';
import shield from "../../Assets/circleForRotation.png"
import "./Home.css";

const Home = () => {
  const { events, loading } = useContext(EventsContext);

  const handleClick = () => {
    window.open("https://iviewd.com/lpu2/", "_blank");
  };

  return (
    <div
      className="w-full h-screen  bg-center bg-fixed bg-cover text-white overflow-y-auto  flex sm:flex-row gate-container"
      style={{
        backgroundImage: `url(${home1bg})`,
      }}
    >
      <div className=" ">
        <Navbar/>

        <div className="text-center flex  gap-6 justify-center items-center w-full h-full">
  <img className="h-1/2 fly-animation" src={ironman} alt="Iron Man Left" />
  <div className="text-center flex flex-col gap-6 justify-center items-center">
    <h1 className="font-avenger tracking-widest text-6xl p-5 font-extrabold text-orange-600 bg-black">
      TechSprint
    </h1>
    <h1 className="text-6xl p-3 bg-blue-500 text-yellow-400 font-bold">
      Linking School’s Innovation & Creativity
    </h1>
    <p>NOW ACCEPTING</p>
    <p className="text-6xl text-black">ONLINE REGISTRATION</p>
  </div>
  <img className="h-1/2 fly-animation" src={ironmanr} alt="Iron Man Right" />
 
</div>

    
   
    <Footer/>

        
      </div>
      <div className="w-full h-full  fixed flex justify-center items-center z-50 ">
      <img className="w-80 animated-shield" src={shield} alt="Shield" />
      </div>

      <div className="gate-left w-1/2 bg-relative">
        <div
          className="bg-no-repeat  bg-cover bg-center w-full h-full  "
          style={{ backgroundImage: `url(${leftgate})` }}
        >
       <div className=" flex items-center h-full w-full relative">
  <img className="absolute bg-red-600 p-2 right-0 top-1/3 w-52 h-64 rounded-l-full  hover:transform-none" src={t} alt="" />
</div>
        </div>
       
      </div>


      <div className="gate-right w-1/2 bg-relative bg-no-repeat  bg-cover bg-center ">
        <div
          className="bg-no-repeat  bg-cover bg-center w-full h-full  "
          style={{ backgroundImage: `url(${rightgate})` }}
        >
 <div className=" flex items-center h-full w-full relative">
  <img className="absolute bg-slate-800 p-2 left-0 top-1/3 w-52 h-64  rounded-r-full  hover:transform-none" src={s} alt="" />
</div>

        </div>
      </div>
     

    </div>
  );
};

export default Home;
