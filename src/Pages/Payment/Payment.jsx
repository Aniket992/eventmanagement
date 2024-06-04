// src/components/Payment/Payment.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
    const location = useLocation();
    const { totalFee, formData, event } = location.state || {};
    const [paymentMethod, setPaymentMethod] = useState('');
    const [upiId, setUpiId] = useState('');
    const [bankDetails, setBankDetails] = useState({ accountNumber: '', ifsc: '' });

    const handlePayment = (e) => {
        e.preventDefault();
        // Simulate payment processing
        alert(`Payment successful using ${paymentMethod}`);
    };

    return (
        <div className="payment-container">
            <h2>Payment Gateway</h2>
            {event && (
                <div>
                    <h3>Event Details</h3>
                    <p><strong>Name:</strong> {event.name}</p>
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p><strong>Description:</strong> {event.description}</p>
                </div>
            )}
            {formData && (
                <div>
                    <h3>Participant Details</h3>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>School:</strong> {formData.school}</p>
                    <p><strong>Address:</strong> {formData.address}</p>
                    <p><strong>Accommodation:</strong> {formData.accommodation ? 'Yes' : 'No'}</p>
                    <p><strong>Total Fee:</strong> ₹{totalFee}</p>
                </div>
            )}
            <form onSubmit={handlePayment}>
                <h3>Payment Method</h3>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="UPI"
                            checked={paymentMethod === 'UPI'}
                            onChange={() => setPaymentMethod('UPI')}
                        />
                        UPI
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Paytm"
                            checked={paymentMethod === 'Paytm'}
                            onChange={() => setPaymentMethod('Paytm')}
                        />
                        Paytm
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Banking"
                            checked={paymentMethod === 'Banking'}
                            onChange={() => setPaymentMethod('Banking')}
                        />
                        Banking
                    </label>
                </div>

                {paymentMethod === 'UPI' && (
                    <div>
                        <label>UPI ID:</label>
                        <input
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            required
                        />
                    </div>
                )}

                {paymentMethod === 'Paytm' && (
                    <div>
                        <label>Paytm Number:</label>
                        <input
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            required
                        />
                    </div>
                )}

                {paymentMethod === 'Banking' && (
                    <div>
                        <label>Account Number:</label>
                        <input
                            type="text"
                            value={bankDetails.accountNumber}
                            onChange={(e) =>
                                setBankDetails({ ...bankDetails, accountNumber: e.target.value })
                            }
                            required
                        />
                        <label>IFSC Code:</label>
                        <input
                            type="text"
                            value={bankDetails.ifsc}
                            onChange={(e) =>
                                setBankDetails({ ...bankDetails, ifsc: e.target.value })
                            }
                            required
                        />
                    </div>
                )}

                <button type="submit">Pay</button>
            </form>
        </div>
    );
};

export default Payment;
