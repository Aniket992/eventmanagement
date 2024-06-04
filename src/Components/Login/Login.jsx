// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setAdminAuthenticated }) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const adminUserId = 'admin';
        const adminPassword = 'admin123';

        if (userId === adminUserId && password === adminPassword) {
            setAdminAuthenticated(true);
            navigate('/Dashboard');
        } else {
            setErrorMessage('Invalid credentials');
        }
    };

    const handleForgotPassword = () => {
        alert('Please contact the system administrator to reset your password.');
    };

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>User ID:</label>
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit">Login</button>
            </form>
            <button onClick={handleForgotPassword} className="forgot-password">
                Forgot Password?
            </button>
        </div>
    );
};

export default Login;
