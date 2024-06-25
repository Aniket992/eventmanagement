import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import URL from "../../apiconfig";
import lpulogo from "../../Assets/shield.png";
import hammer from "../../Assets/hammer.png";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${URL}/api/contactUs/`);
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setError("Failed to fetch contact details");
      }
    };

    fetchContacts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${URL}/api/contactUs`, formData);
      setFormSuccess("Message sent successfully!");
      setFormError(null);
    } catch (error) {
      console.error("Error sending message:", error);
      setFormError("Failed to send message");
      setFormSuccess(null);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-black flex flex-col items-center w-full">
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="contact-card-container items-center flex flex-wrap justify-evenly w-full h-fit">
          {contacts.map((contact, index) => (
            <div
              className="contact-card z-10 bg-gray-900 rounded-xl text-yellow-200 text-center text-xl min-w-72 max-w-80 h-fit p-4 my-7 border"
              key={index}
            >
              <h2 className="text-center font-bold mb-2 text-orange-400">{contact.fullname}</h2>
              <p className="mb-1">
                <strong>Designation:</strong> {contact.designation}
              </p>
              <p className="mb-1">&#9742;
                 {contact.phone} 
              </p>
              <p className="mb-1 text-green-500">  &#9993; <br/>
                 {contact.email} 
              </p>
            </div>
          ))}
        
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-row w-full">
          <div className="text-blue-500 sm:w-1/2 p-5 sm:p-10">
            <h3 className="font-bold text-pink-900 text-3xl text-center">Contact info</h3>
            <p className="font-serif tracking-widest p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quasi iure voluptas dolores illum, repellendus vero totam ab magni
              eligendi officia numquam quas, labore cumque fugiat est,
              perferendis doloribus? Accusamus non commodi sapiente deserunt,
              nulla voluptate quo magni neque? Unde minima vitae molestiae,
              recusandae, optio rem quod ipsa neque nihil harum sint omnis nobis
              ea asperiores eaque eius eum cumque!
            </p>
            <div className="text-black text-center h-40 w-full  hidden sm:block  overflow-hidden">
              <img
                src={lpulogo}
                alt="logo"
                className=" h-40 w-fit bg-white rounded-full rotate-move-animation "
              />
            </div>
          </div>
          <div className="h-fit text-white sm:w-1/2 flex flex-col justify-center sm:p-10">
            <h2 className="text-3xl font-bold mb-4 text-center">Leave us a message</h2>
            {formError && <p className="text-red-500 mb-4">{formError}</p>}
            {formSuccess && <p className="text-green-500 mb-4">{formSuccess}</p>}
            <form
              className="w-full h-full flex flex-col justify-center items-center text-white"
              onSubmit={handleSubmit}
            >
              <div className="mb-2 w-11/12 flex flex-col">
                <label className="block text-xl font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border h-10 focus:outline-none text-black px-3 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-2 w-11/12 flex flex-col">
                <label className="block text-xl font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-3 py-2 border h-10 focus:outline-none text-black focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-2 w-11/12 flex flex-col ">
                <label className="block text-xl font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="px-3 py-2 border min-h-32 max-h-80 focus:outline-none text-black focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
