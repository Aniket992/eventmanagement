import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import EventCard from "../../Components/EventCard/EventCard";
import homebg from "../../Assets/homebg.avif";
import walk from "../../Assets/demo1.png";
import './Home.css';
const Home = () => {
  const events = [
    {
      name: "Tech Conference 2024",
      date: "June 20, 2024",
      location: "Mumbai, India",
      description:
        "Join us for a day of insightful tech talks and networking with industry leaders.",
    },
    {
      name: "AI Summit 2024",
      date: "July 15, 2024",
      location: "Bangalore, India",
      description:
        "Explore the latest advancements in artificial intelligence and machine learning.",
    },
    {
      name: "Web Dev Workshop 2024",
      date: "August 10, 2024",
      location: "Delhi, India",
      description:
        "A hands-on workshop focusing on modern web development technologies and practices.",
    },
    {
      name: "Data Science Bootcamp",
      date: "September 5, 2024",
      location: "Hyderabad, India",
      description:
        "Intensive bootcamp covering data analysis, visualization, and machine learning.",
    },
    {
      name: "Cloud Expo 2024",
      date: "October 12, 2024",
      location: "Pune, India",
      description:
        "Discover the latest trends in cloud computing and network with industry experts.",
    },
    {
      name: "Cyber Security Conference",
      date: "November 8, 2024",
      location: "Chennai, India",
      description:
        "Learn about the latest advancements in cyber security and how to protect your data.",
    },
  ];
  return (
    <div
    className=" bg-cover bg-center"
    style={{ backgroundImage: `url(${homebg})` }}
  >      <Navbar />
      <div className="text-center p-20 bg-#f5f5f5">
        <h1 className="text-3xl font-bold text-white underline mb-14 font-avenger">Upcoming Tech Events</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
        <div className=" robot bg-cover bg-center "    style={{ backgroundImage: `url(${walk})` }}
>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
