import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import logo from './Copy of T.png'; // Logo used in CustomerLogin

const Registration = () => {
  const [f_name, setFName] = useState('');
  const [l_name, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone_no, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [otp, setOtp] = useState('');
  const [stage, setStage] = useState('register'); // 'register' or 'verify'
  const [error, setError] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNo = (phone_no) => /^\d{10}$/.test(phone_no);
  const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return setError('Please enter a valid email address.');
    if (!validatePhoneNo(phone_no)) return setError('Please enter a valid 10-digit phone number.');
    if (!validatePassword(password)) return setError('Password must contain an uppercase letter, special character, numeric digit, and be at least 6 characters.');

    setError('');

    try {
      const response = await axios.post('http://localhost:5004/auth/register', { f_name, l_name, email, password, phone_no, address });
      if (response.status === 201) {
        localStorage.setItem('customerId', response.data.customerId);
        setStage('verify');
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Error during registration:', error);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) return setError('Please enter a valid 6-digit OTP.');

    try {
      const response = await axios.post('http://localhost:5004/auth/verify-email', { email, otp });
      if (response.status === 200) {
        alert('Email verified successfully!');
        window.location.href = '/upload-documents'; // Redirect to document upload page
      }
    } catch (error) {
      setError('OTP verification failed. Please try again.');
      console.error('Error during OTP verification:', error);
    }
  };

  return (
    <div className="registration-page">
      {/* Header similar to CustomerLogin */}
      <header className="login-header">
        <div className="logo">
          <img src={logo} alt="IndiTel Logo" className="logo-image" />
          <h1 className="company-name">Welcome to IndiTel</h1>
        </div>
      </header>

      <main className="registration-main">
        <form className="registration-form" onSubmit={stage === 'register' ? handleRegister : handleVerify}>
          <h2>{stage === 'register' ? 'Register' : 'Verify OTP'}</h2>
          {stage === 'register' ? (
            <>
              <input type="text" value={f_name} onChange={(e) => setFName(e.target.value)} placeholder="First Name" required />
              <input type="text" value={l_name} onChange={(e) => setLName(e.target.value)} placeholder="Last Name" required />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
              <input type="text" value={phone_no} onChange={(e) => setPhoneNo(e.target.value)} placeholder="Phone Number" required />
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
            </>
          ) : (
            <>
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required />
            </>
          )}
          <button type="submit" className="submit-button">{stage === 'register' ? 'Register' : 'Verify OTP'}</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </main>
    </div>
  );
};

export default Registration;
