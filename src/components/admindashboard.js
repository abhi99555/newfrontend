import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';  // Import the combined CSS

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
        <div className="admin-dashboard-container">
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
        </div>
    );
};

export default AdminDashboard;
