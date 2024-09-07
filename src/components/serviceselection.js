import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
 
const ServiceSelection = () => {
  const handleServiceSelection = async (serviceName) => {
    try {
      
        const customerId = localStorage.getItem('customerId');
        console.log(customerId);
      // Send the selected service to the backend using Axios
      const response = await axios.post('http://localhost:5004/services/select-service', {
        serviceName: serviceName,
        customerId:parseInt(customerId)
 
      }, {
         headers: {
          'Content-Type': 'application/json',
        //  // 'Authorization': `Bearer ${localStorage.getItem('token')}`  // Include authorization token if needed
        }
      });
      
      console.log('Success:', response.data);
      alert(`Service '${serviceName}' selected successfully!`);
      window.location.href = '/confirm';

    } catch (error) {
      console.error('Error:', error);
      alert('There was an error selecting the service.');
    }
  };
 
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>Logo</div>
        <div style={styles.menuIcon}>☰</div>
      </header>
 
      <h1 style={styles.title}>Telecom Services</h1>
      <p style={styles.subtitle}>Choose the best telecom services for your needs</p>
 
      <div style={styles.servicesGrid}>
        <div
          style={styles.serviceBox}
          onClick={() => handleServiceSelection('High-Speed Internet')}
        >
          <div style={styles.imagePlaceholder}></div>
          <h2 style={styles.serviceTitle}>High-Speed Internet</h2>
          <p style={styles.serviceDescription}>
            Experience lightning-fast internet speeds for seamless browsing and streaming.
          </p>
        </div>
 
        <div
          style={styles.serviceBox}
          onClick={() => handleServiceSelection('Unlimited Calls')}
        >
          <div style={styles.imagePlaceholder}></div>
          <h2 style={styles.serviceTitle}>Unlimited Calls</h2>
          <p style={styles.serviceDescription}>
            Stay connected with your loved ones with unlimited local and international calls.
          </p>
        </div>
 
        <div
          style={styles.serviceBox}
          onClick={() => handleServiceSelection('TV Streaming')}
        >
          <div style={styles.imagePlaceholder}></div>
          <h2 style={styles.serviceTitle}>TV Streaming</h2>
          <p style={styles.serviceDescription}>
            Enjoy your favorite shows and movies with our high-quality TV streaming service.
          </p>
        </div>
 
        <div
          style={styles.serviceBox}
          onClick={() => handleServiceSelection('Mobile Data')}
        >
          <div style={styles.imagePlaceholder}></div>
          <h2 style={styles.serviceTitle}>Mobile Data</h2>
          <p style={styles.serviceDescription}>
            Get unlimited mobile data for all your devices with 5G coverage.
          </p>
        </div>
 
        <div
          style={styles.serviceBox}
          onClick={() => handleServiceSelection('Landline')}
        >
          <div style={styles.imagePlaceholder}></div>
          <h2 style={styles.serviceTitle}>Landline</h2>
          <p style={styles.serviceDescription}>
            Enjoy crystal-clear voice quality with our reliable landline services.
          </p>
        </div>
 
        <div
          style={styles.serviceBox}
          onClick={() => handleServiceSelection('Cloud Storage')}
        >
          <div style={styles.imagePlaceholder}></div>
          <h2 style={styles.serviceTitle}>Cloud Storage</h2>
          <p style={styles.serviceDescription}>
            Securely store your files in the cloud with our high-capacity storage plans.
          </p>
        </div>
      </div>
    </div>
  );
};
 
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  menuIcon: {
    fontSize: '30px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  serviceBox: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  serviceBoxHover: {
    backgroundColor: '#e0f7fa',
  },
  imagePlaceholder: {
    width: '100%',
    height: '150px',
    backgroundColor: '#eaeaea',
    marginBottom: '15px',
  },
  imagePlaceholderLarge: {
    width: '100%',
    height: '300px',
    backgroundColor: '#eaeaea',
    gridColumn: 'span 3',
  },
  serviceTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  serviceDescription: {
    fontSize: '16px',
  },
};
 
export default ServiceSelection;