import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CustomerDashboard.css'; // Import the CSS file for styling

const CustomerDashboard = () => {
  const [customerDetails, setCustomerDetails] = useState(null);
  const customerEmail = localStorage.getItem('customerEmail');

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5004/customers/email/${customerEmail}`);
        setCustomerDetails(response.data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    if (customerEmail) {
      fetchCustomerDetails();
    }
  }, [customerEmail]);

  if (!customerDetails) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="customer-dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to IndiTel</h1>
      </header>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h1>Welcome, {customerDetails.name}</h1>
          <p>Email: {customerDetails.email}</p>
          <p>Phone: {customerDetails.phone_no}</p>
          {/* Render other customer details here */}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
