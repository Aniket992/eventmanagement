import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import URL from "../../../src/apiconfig";
import { EventsContext } from "../../../src/Components/EventsContext";
import Navbar from "../../Components/Navbar/Navbar";
import eventbg from "../../Assets/eventbg.jpg";
import "./Eventpage.css"
import Footer from "../../Components/Footer/Footer";
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
      // Copy the link to the clipboard
      const link = window.location.href;
      navigator.clipboard.writeText(link)
        .then(() => {
          alert("Link copied to clipboard. Ready to share!");
        })
        .catch((error) => {
          console.error("Error copying link:", error);
        });
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
        className=" bg-cover bg-center  bg-fixed  bg-black  text-white"
        style={{ backgroundImage: `url(${eventbg})` }}
      >
        <div className="w-full h-full  bg-black bg-opacity-95">
        <Navbar />
         

          <div className="w-full flex flex-col   h-full border-2 rounded-xl border-blue-600 shadow ">
          <div className=" w-full flex items-center    ">
          <div className="flex flex-col  rounded-xl  w-full   justify-center items-center pt-5 px-3">
             

             <h2 className=" gradient-text  font-avenger   text-center tracking-widest underline  text-6xl pb-5">
               {event.eventName}
             </h2>
           </div>
                <button
                  className="  bg-yellow-400 sm:justify-end mr-3 pr-3 h-fit text-black p-2 font-avenger rounded border-2 border-blue-950"
                  onClick={handleShare}
                >
                  Share
                </button>
              </div>
              <div className=" flex w-full ">
              <div className="p-5 flex flex-col     
           text-white font-sans tracking-wider  w-1/2   ">
            
            <div className="flex flex-col justify-center items-center ">
            
              <div className="  flex flex-col p-5 text-center justify-center  items-center    ">
                <div className="mb-5">
                  <p className="font-avenger tracking-widest text-green-600 text-2xl font-bold">
                    {" "}
                    Organiser:
                  </p>
                  <p className="  font-bold text-xl  ">
                    {" "}
                    {event.organiserName}
                  </p>
                </div>
                <div className="mb-5">
                  <p className="font-avenger tracking-widest text-green-600 text-2xl font-bold">
                    Event Type:
                  </p>
                  <p className="  font-bold text-xl  ">
                    {" "}
                    {event.eventType}
                  </p>
                </div>
                <div className=" flex-col  ">
                  <p className="font-avenger tracking-widest text-green-600 text-2xl font-bold">
                    Description:
                  </p>
                  <p className=" text-justify  text-xl  ">
                    {event.description}
                  </p>
                </div>
                <div className="w-full flex flex-col gap-7 ">
                  <div className=" w-full  flex justify-around  flex-col"></div>
                  <div className=" flex flex-col justify-center gap-3 items-center w-full ">
                    <p className="font-avenger tracking-widest text-green-600 text-2xl font-bold">
                      Eligibilities:
                    </p>
                    <ul className="list-outside list-disc   text-xl text-start  w-full ">
                      {event.eligibilities.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                    <p className="font-avenger tracking-widest text-green-600 text-2xl font-bold">
                      Rules:
                    </p>
                    <ul className="list-outside list-disc  text-xl text-start  tracking-wider w-full ">
                      {event.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-evenly">
                  <button className="bg-green-500  text-black font-avenger tracking-widest text-2xl font-bold p-3 w-fit rounded-full" 
                      onClick={() => download(event.ruleBook)}
                      >Download Rule Book</button>
                  <button className="bg-green-500  text-black font-avenger tracking-widest text-2xl font-bold p-3 w-fit rounded-full" 
                   > Download Brochure</button>
                  </div>
                 

                </div>
              </div>
             
            </div>
          </div>
          <div className="  w-1/2 flex flex-col justify-between p-5   ">
          <div className="   flex flex-wrap justify-between   items-center gap-5 ">

                {event.photos.map((photoId) => (
                  <img
                    className="w-64 h-64 rounded-xl"
                    key={photoId}
                    src={`${URL}/api/file/view/${photoId}`}
                    alt="Event"
                  />
                ))}
              </div>  
              <div className=" h-full text-center flex  flex-col justify-between pb-5 w-full ">

              <div>
                    <p className="font-avenger tracking-widest text-green-600 text-2xl font-bold">
                      Location:
                    </p>
                    <p className="  font-bold text-xl  ">
                      {event.location.landmark}, {event.location.city},{" "}
                      {event.location.state}, {event.location.country}
                    </p>
                  </div>

                  <div className="flex justify-around md:flex-row flex-col">
                    <div className=" ">
                      <p className="font-avenger tracking-widest text-green-600 text-2xl font-bold">
                        Start Date:
                      </p>
                      <p className="  font-bold text-xl  ">
                        {" "}
                        {new Date(event.date.startDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="font-avenger tracking-widest text-green-600 text-2xl font-bold">
                        End Date:{" "}
                      </p>
                      <p className="  font-bold text-xl  ">
                        {new Date(event.date.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-avenger tracking-widest text-green-600 text-2xl font-bold">
                      Last Date of Registration:
                    </p>
                    <p className=" font-bold text-xl  ">
                      {new Date(
                        event.date.lastDateOfRegistration
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                  <p className="font-avenger tracking-widest text-green-600 text-2xl font-bold">
                  Registration Charges:
                  </p>
                  <p className="  font-bold text-xl  ">
                  {event.registrationCharges
                      .map(
                        (charge) =>
                          `${charge.name}: ${charge.amount} ${charge.currency}`
                      )
                      .join(", ")}
                  </p>
                  </div>
                  <div className=" w-full font-bold  ">
            <h4 className="font-avenger tracking-widest text-green-600 text-2xl font-bold">Contact:</h4>
            {event.contact.map((contact, index) => (
              <div key={index} className="  font-bold text-xl ">
                <p>Name: {contact.name}</p>
                <p className="">Phone: {contact.phone}</p>
              </div>
            ))}
          </div>
                  <div className=" w-full flex justify-center mt-5">

                  <button
                    className="   w-1/2  hero  text-4xl text-black font-extrabold tracking-widest bg-blue-400 p-2   font-avenger rounded-full border-2 border-blue-950"
                    onClick={handleApplyNow}
                  >
                    Apply Now
                  </button>
                  </div> 
                  </div>
      
          </div>
              </div>
          
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default EventPage;
