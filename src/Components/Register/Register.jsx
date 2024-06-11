import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const location = useLocation();
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

    const totalFee = formData.accommodation ? registrationFee + accommodationFee : registrationFee;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Example API endpoint for payment
            const apiUrl = 'https://your-server.com/api/payment';

            // Example payload for payment request
            const payload = {
                amount: totalFee,
                formData: formData,
                event: event,
                // Add any other necessary data for payment
            };

            // Make POST request to server API
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any required headers
                },
                body: JSON.stringify(payload),
            });

            // Handle response from server
            if (response.ok) {
                const { success, success_url, cancel_url } = await response.json(); // Assuming server returns success and URLs

                if (success) {
                    window.location.href = success_url; // Redirect to success URL
                } else {
                    window.location.href = cancel_url; // Redirect to cancel URL
                }
            } else {
                console.error('Payment API call failed:', response.statusText);
                // Handle error scenario
            }
        } catch (error) {
            console.error('Error in payment API call:', error.message);
            // Handle any unexpected errors
        }
    };

    return (
        <div className="registration-form-container">
            <h1>Registration Page</h1>
            {event ? (
                <div>
                    <h2>{event.name}</h2>
                    {/* <p>{event.date}</p> */}
                    {/* <p>{event.location}</p> */}
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
