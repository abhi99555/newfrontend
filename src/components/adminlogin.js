import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [formValid, setFormValid] = useState(true);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password || !/\S+@\S+\.\S+/.test(email)) {
      setFormValid(false);
      return false;
    }
    setFormValid(true);
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Hardcoded admin credentials for demo purposes
      if (email === 'admin@example.com' && password === 'admin') {
        // Redirect to the admin dashboard upon successful login
        navigate('/admin-dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Error during admin login:', error);
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Admin Email"
          required
          className={!formValid && (!email || !/\S+@\S+\.\S+/.test(email)) ? 'input-error' : ''}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className={!formValid && !password ? 'input-error' : ''}
        />
        <button type="submit" className="login-button">Login</button>
        {error && <p className="error-message">{error}</p>}
        {!formValid && <p className="error-message">Please enter valid email and password</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
