import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import logo from './Copy of T.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCustomerClick = () => {
    navigate('/register');
  };

  const handleAdminClick = () => {
    navigate('/admin-login');
  };

  const handleCustomerLogin = () => {
    navigate('/customer-login');
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="logo">
          <img src={logo} alt="IndiTel Logo" className="logo-image" />
          <h1 className="company-name">IndiTel</h1>
        </div>
        <div className="login-buttons">
          <button className="admin-login" onClick={handleAdminClick}>
            Admin Login
          </button>
          <button className="customer-login" onClick={handleCustomerLogin}>
            Customer Login
          </button>
        </div>
      </header>

      <main className="landing-main">
        <section className="intro-section">
          <h2>Welcome to IndiTel</h2>
          <p>
            IndiTel is an Indian-based telecom company committed to providing reliable and
            affordable communication services. With a mission to connect the nation, we
            offer a wide range of products and services that cater to both individuals and
            businesses. Our state-of-the-art infrastructure ensures you stay connected
            anytime, anywhere.
          </p>
          <p>
            Explore our services and experience seamless connectivity with IndiTel. Whether
            you're looking for mobile plans, broadband, or enterprise solutions, IndiTel
            has you covered.
          </p>
        </section>

        <section className="landing-section customer-section">
          <h2>Customer</h2>
          <p>Explore our products and services</p>
          <button onClick={handleCustomerClick}>Register</button>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#overview">Company Overview</a></li>
            <li><a href="#vision">Mission and Vision</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@example.com</p>
        </div>

        <div className="footer-column">
          <h3>Terms and Conditions</h3>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
