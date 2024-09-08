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
            IndiTel is committed to providing reliable and affordable communication services. Explore our services and experience seamless connectivity with IndiTel.
          </p>
        </section>

        {/* Catalog Section */}
        <section className="catalog-section">
          <h2>Our Services</h2>
          <div className="catalog">
            <div className="catalog-item">
              <h3>Mobile Plans</h3>
              <p>Choose from a variety of prepaid and postpaid plans that suit your needs.</p>
              <button onClick={handleCustomerClick}>Register</button>
            </div>
            <div className="catalog-item">
              <h3>Broadband Services</h3>
              <p>High-speed broadband services for homes and businesses.</p>
              <button onClick={handleCustomerClick}>Register</button>
            </div>
            <div className="catalog-item">
              <h3>Enterprise Solutions</h3>
              <p>Tailored communication solutions for businesses to stay connected.</p>
              <button onClick={handleCustomerClick}>Register</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@inditel.com</p>
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
