import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';
import logo from './Copy of T.png'; // Import the logo

const AdminDashboard = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:5004/services/get-services');
            setServices(response.data);
        } catch (error) {
            console.error('Failed to fetch services', error);
        }
    };

    const handleActivateService = async (serviceId) => {
        try {
            await axios.post('http://localhost:5004/services/activate-service', { serviceId });
            fetchServices(); // Refresh the list after activation
        } catch (error) {
            console.error('Failed to activate service', error);
        }
    };

    return (
        <div className="admin-dashboard">
            <header className="dashboard-header">
                <div className="logo">
                    <img src={logo} alt="IndiTel Logo" className="logo-image" />
                    <h1 className="company-name">Welcome to IndiTel</h1>
                </div>
            </header>
            <main className="dashboard-main">
                <h2 className="dashboard-heading">Service Requests</h2>
                <div className="table-wrapper">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Customer Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map(service => (
                                <tr key={service.id}>
                                    <td>{service.name}</td>
                                    <td>{service.customerId}</td>
                                    <td>
                                        <span className={service.isActive ? 'status-active' : 'status-inactive'}>
                                            {service.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td>
                                        {!service.isActive && (
                                            <button className="activate-btn" onClick={() => handleActivateService(service.id)}>
                                                Activate Service
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
