import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import URL from "../../../src/apiconfig";
import { EventsContext } from "../../../src/Components/EventsContext";
import Navbar from "../../Components/Navbar/Navbar";
import eventbg from "../../Assets/eventbg.jpg";

const EventPage = () => {
  const { id: eventId } = useParams(); // Ensure 'id' matches the parameter name in the route path
  const navigate = useNavigate();
  const { events, loading } = useContext(EventsContext);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      // try {
      //   const response = await axios.get(`${URL}/events/${eventId}`);
      //   setEvent(response.data);
      // } catch (error) {
      //   console.error("Error fetching event:", error);
      // }
    };

    const foundEvent = events.find((evt) => evt._id === eventId);
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      fetchEvent();
    }
  }, [eventId, events]);

  const handleApplyNow = () => {
    navigate("/Registration", { state: { event } });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: event.eventName,
          text: event.description,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Share API not supported.");
    }
  };

  if (loading) return <p>Loading...</p>;

  if (!event) return <p>Event not found or failed to load.</p>;
  const download = (ruleId) => {
    try {
      window.open(`${URL}/api/file/view/${ruleId}`, '_blank');
    } catch (error) {
      console.error("Error downloading document:", error);
    }
  };
  
  return (
    <>
      <div
        className=" bg-cover bg-center  bg-fixed   text-white"
        style={{ backgroundImage: `url(${eventbg})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-90">
          <div className=" flex sm:block justify-between items-center">
          <Navbar />
          <div className=" sm:w-full flex sm:justify-end  sm:p-3 ">
                <button
                  className="  bg-yellow-400 mr-3 pr-3 text-black p-2 font-avenger rounded border-2 border-blue-950"
                  onClick={handleShare}
                >
                  Share
                </button>
              </div>
          </div>
         
          <div className="p-5">
            <div className="flex flex-col  justify-center items-center ">
             

              <h2 className="  font-avengerd text-center tracking-widest underline underline-offset-8  text-6xl pb-5">
                {event.eventName}
              </h2>
            </div>
            <br />
            <div className="flex flex-col justify-center items-center ">
            <div className="   flex flex-wrap justify-evenly   items-center gap-5 ">
              {/* <div className="  lg:flex-col lg:w-1/3 flex flex-col md:flex-row justify-evenly items-center gap-5 "> */}

                {event.photos.map((photoId) => (
                  <img
                    className="w-52 h-auto rounded-xl"
                    key={photoId}
                    src={`${URL}/api/file/view/${photoId}`}
                    alt="Event"
                  />
                ))}
              </div>
              <div className="  flex flex-col p-5 text-center justify-center  items-center w-full sm:w-2/3   ">
                <div className="mb-5">
                  <p className="font-avenger tracking-widest text-blue-600 text-2xl font-bold">
                    {" "}
                    Organiser:
                  </p>
                  <p className=" text-orange-400 font-bold text-xl font-serif ">
                    {" "}
                    {event.organiserName}
                  </p>
                </div>
                <div className="mb-5">
                  <p className="font-avenger tracking-widest text-blue-600 text-2xl font-bold">
                    Event Type:
                  </p>
                  <p className=" text-orange-400 font-bold text-xl font-serif ">
                    {" "}
                    {event.eventType}
                  </p>
                </div>
                <div className=" flex-col  ">
                  <p className="font-avenger tracking-widest text-blue-600 text-2xl font-bold">
                    Description:
                  </p>
                  <p className=" text-orange-400 text-justify font-bold text-xl font-serif ">
                    {event.description}
                  </p>
                </div>
                <div className="w-full flex flex-col gap-7 ">
                  <div className=" w-full  flex justify-around  flex-col"></div>
                  <div className=" flex flex-col justify-center gap-3 items-center w-full ">
                    <p className="font-avenger tracking-widest text-blue-600 text-2xl font-bold">
                      Eligibilities:
                    </p>
                    <ul className="list-outside list-disc text-orange-400 font-bold text-xl text-start font-serif">
                      {event.eligibilities.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                    <p className="font-avenger tracking-widest text-blue-600 text-2xl font-bold">
                      Rules:
                    </p>
                    <ul className="list-outside list-disc text-orange-400 font-bold text-xl text-start font-serif">
                      {event.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center">
                  <button className="bg-green-400 p-4 text-blue-700 font-bold w-fit rounded-full" 
                      onClick={() => download(event.ruleBook)}
                      >Download Rule Book</button>

                  </div>
                  <div>
                    <p className="font-avenger tracking-widest text-blue-600 text-2xl font-bold">
                      Location:
                    </p>
                    <p className=" text-orange-400 font-bold text-xl font-serif ">
                      {event.location.landmark}, {event.location.city},{" "}
                      {event.location.state}, {event.location.country}
                    </p>
                  </div>

                  <div className="flex justify-around md:flex-row flex-col">
                    <div className=" ">
                      <p className="font-avenger tracking-widest text-blue-600 text-2xl font-bold">
                        Start Date:
                      </p>
                      <p className=" text-orange-400 font-bold text-xl font-serif ">
                        {" "}
                        {new Date(event.date.startDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="font-avenger tracking-widest text-blue-600 text-2xl font-bold">
                        End Date:{" "}
                      </p>
                      <p className=" text-orange-400 font-bold text-xl font-serif ">
                        {new Date(event.date.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-avenger tracking-widest text-blue-600 text-2xl font-bold">
                      Last Date of Registration:
                    </p>
                    <p className=" text-orange-400 font-bold text-xl font-serif ">
                      {new Date(
                        event.date.lastDateOfRegistration
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="font-avenger tracking-widest text-blue-600 text-2xl font-bold">
                    Registration Charges:
                  </p>
                  <p className=" text-orange-400 font-bold text-xl font-serif">
                    {event.registrationCharges
                      .map(
                        (charge) =>
                          `${charge.name}: ${charge.amount} ${charge.currency}`
                      )
                      .join(", ")}
                  </p>
                  <div className=" w-full font-bold text-orange-400 ">
            <h4 className="font-avenger tracking-widest text-blue-600 text-2xl font-bold">Contact:</h4>
            {event.contact.map((contact, index) => (
              <div key={index} className=" text-orange-400 font-bold text-xl font-serif">
                <p>Name: {contact.name}</p>
                <p className="">Phone: {contact.phone}</p>
              </div>
            ))}
          </div>
                  <div className=" w-full flex justify-center mt-5">

                  <button
                    className=" text-blue-700 hover:neon w-1/2 neon  text-xl bg-yellow-400 p-2   font-avenger rounded-full border-2 border-blue-950"
                    onClick={handleApplyNow}
                  >
                    Apply Now
                  </button>
                  </div>

                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
