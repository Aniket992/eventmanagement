// src/pages/ContactPage.jsx
import React from 'react';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const contacts = [
    { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
    { name: 'Jane Smith', phone: '234-567-8901', email: 'jane@example.com' },
    { name: 'Alice Johnson', phone: '345-678-9012', email: 'alice@example.com' },
    { name: 'Bob Brown', phone: '456-789-0123', email: 'bob@example.com' },
    { name: 'Charlie Davis', phone: '567-890-1234', email: 'charlie@example.com' },
];

const Contact = () => {
    return (
        <>
                    <Navbar/>

        <div className="contact-page-container">
            <h1>Contact Us</h1>
            <div className="contact-list">
                {contacts.map((contact, index) => (
                    <div className="contact-card" key={index}>
                        <h2>{contact.name}</h2>
                        <p><strong>Phone:</strong> {contact.phone}</p>
                        <p><strong>Email:</strong> {contact.email}</p>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Contact;
