import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import URL from "../../apiconfig";
import lpulogo from "../../Assets/shield.png";
import bg from "../../Assets/bluebg.jpg";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
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
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setError("Failed to fetch contact details");
        setLoading(false);
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
      <div
        className=" p-1  w-full bg-center bg-fixed bg-black"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" h-full w-full">
          <Navbar />

          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="h-full ">
                 <div className="zoom flex  flex-wrap justify-evenly   px-5 m-7  h-fit ">
                  {contacts.map((contact, index) => (
                    <div
                      className="hover:z-10 contact-card shadow text-green-500 bg-black bg-opacity-70  text-center text-xl w-80 h-fit    mt-7 border border-green-300"
                      key={index}
                    >
                      <h2 className="text-center font-bold mb-2">
                        {contact.fullname}
                      </h2>
                      <p className="mb-1">
                        <strong>Designation:</strong> {contact.designation}
                      </p>
                      <p className="mb-1">&#9742; {contact.phone}</p>
                      <p className="mb-1 text-green-500">
                        &#9993; <br />
                        {contact.email}
                      </p>
                      <img
                        className="w-fit h-fit "
                        src={`${URL}/api/file/view/${contact.photo}`}

                        alt={`${contact.fullname}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-row w-full px-6 gap-2 my-6">
                  <div className="text-blue-500 bg-black bg-opacity-75 sm:w-1/2 p-4 border border-green-500 zoom">
                    <h3 className="font-bold text-green-500 mb-2 text-3xl text-center">
                      Contact info
                    </h3>
                    <p className="font-serif text-xl text-green-500 tracking-wider leading-relaxed text-justify p-6 t rounded-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum quasi iure voluptas dolores illum, repellendus vero
                      totam ab magni eligendi officia numquam quas, labore
                      cumque fugiat est, perferendis doloribus? Accusamus non
                      commodi sapiente deserunt, nulla voluptate quo magni
                      neque? Unde minima vitae molestiae, recusandae, optio rem
                      quod ipsa neque nihil harum sint omnis nobis ea asperiores
                      eaque eius eum cumque!
                    </p>

                    <div className="text-black text-center h-40 mt-6 w-full hidden sm:block overflow-hidden">
                      <img
                        src={lpulogo}
                        alt="logo"
                        className="h-40 w-fit bg-white rounded-full rotate-move-animation"
                      />
                    </div>
                  </div>
                  <div className="py-4 text-white bg-black bg-opacity-75 border border-green-500 sm:w-1/2 flex flex-col zoom justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-center text-green-500">
                      Leave us a message
                    </h2>
                    {formError && (
                      <p className="text-red-500 mb-4">{formError}</p>
                    )}
                    {formSuccess && (
                      <p className="text-green-500 mb-4">{formSuccess}</p>
                    )}
                    <form
                      className="w-full h-full font-serif flex flex-col justify-center items-center text-white"
                      onSubmit={handleSubmit}
                    >
                      <div className="mb-2 w-11/12 flex text-white flex-col">
                        <label
                          className="block text-xl text-green-500 font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="border border-green-500 text-blue-600 tracking-widest h-10 focus:outline-none bg-transparent px-3 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="mb-2 w-11/12 flex flex-col">
                        <label
                          className="block text-xl text-green-500 font-bold mb-2"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="px-3 py-2 border border-green-500 text-blue-600 tracking-widest h-10 focus:outline-none bg-transparent focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="mb-2 w-11/12 text-green-500 flex flex-col">
                        <label
                          className="block text-xl font-bold mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="px-3 py-2 border border-green-500 text-blue-600 tracking-widest min-h-32 max-h-80 focus:outline-none bg-transparent focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="border border-blue-700 hover:bg-green-600 hover:text-black text-green-600 font-bold m-2 py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
                <Footer />

        </div>
      </div>

    </>
  );
};

export default Contact;
