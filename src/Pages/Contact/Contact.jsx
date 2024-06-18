import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/`); // Replace with your API endpoint
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
                setError('Failed to fetch contact details');
            }
        };

        fetchContacts();
    }, []);

    return (
        <>
            <Navbar />
            <div className="contact-page-container bg-pink-500 min-h-screen p-5">
                <h1>Contact Us</h1>
                {error && <p className="text-red-500">{error}</p>}
                <div className="contact-list">
                    <div className="flex justify-evenly bg-green-600">
                        <p>Designation</p>
                        <p>Name</p>
                        <p>Phone</p>
                        <p>Email</p>
                    </div>
                    {contacts.map((contact, index) => (
                        <div className="contact-card flex justify-evenly" key={index}>
                            <p>{contact.designation}</p>
                            <h2>{contact.name}</h2>
                            <p><strong>Phone:</strong> {contact.phone}</p>
                            <p><strong>Email:</strong> {contact.email}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
