import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';  // Separate CSS file for the Thank You page

const ThankYou = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');  // Redirect to home page (or another relevant page)
  };

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Thank You!</h1>
        <p>Your service activation request has been successfully sent to Admin for approval.Once approved,It will be communicated via email</p>
        <button onClick={handleGoHome} className="home-button">Return to Home</button>
      </div>
    </div>
  );
};

export default ThankYou;
