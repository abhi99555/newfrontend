// src/components/CustomerLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CustomerLogin.css'; // Import the dedicated CSS file

const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5004/auth/login', {
        email,
        password
      });
      if (response.status === 200) {
        alert('Login successful');
        // Store email in localStorage to access it in the customer dashboard
        localStorage.setItem('customerEmail', email);
        // Redirect to customer dashboard
        navigate('/customer-dashboard');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      console.error('Error during customer login:', error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Customer Login</h2>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Customer Email"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default CustomerLogin;
