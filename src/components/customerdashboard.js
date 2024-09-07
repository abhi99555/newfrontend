import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
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
    return <div>Loading...</div>;
  }
 
  return (
    <div>
      <h1>Welcome, {customerDetails.name}</h1>
      <p>Email: {customerDetails.email}</p>
      <p>Phone: {customerDetails.phone_no}</p>
      {/* Render other customer details here */}
    </div>
  );
};
 
export default CustomerDashboard;