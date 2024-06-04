// src/pages/RegistrationForm.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { event } = location.state || {};
    const [formData, setFormData] = useState({
        name: '',
        class: '',
        school: '',
        fatherName: '',
        motherName: '',
        address: '',
        accommodation: false,
    });

    const registrationFee = 1000; // Example registration fee
    const accommodationFee = 500; // Example accommodation fee

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass the fee and form data to the payment page
        navigate('/Payment', { state: { totalFee, formData, event } });
    };

    const totalFee = formData.accommodation ? registrationFee + accommodationFee : registrationFee;

    return (
        <div className="registration-form-container">
            <h1>Registration Page</h1>
            {event ? (
                <div>
                    <h2>{event.name}</h2>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                    <p>{event.description}</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Class:</label>
                            <input type="text" name="class" value={formData.class} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>School:</label>
                            <input type="text" name="school" value={formData.school} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Father's Name:</label>
                            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Mother's Name:</label>
                            <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Residential Address:</label>
                            <textarea name="address" value={formData.address} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" name="accommodation" checked={formData.accommodation} onChange={handleChange} />
                                Accommodation
                            </label>
                        </div>
                        <div className="fee">
                            <p>Total Fee: ₹{totalFee}</p>
                        </div>
                        <button type="submit">Pay</button>
                    </form>
                </div>
            ) : (
                <p>No event details provided.</p>
            )}
        </div>
    );
};

export default Register;
