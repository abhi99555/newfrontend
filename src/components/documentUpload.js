import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DocumentUpload.css'; // Import the updated CSS file
import logo from './Copy of T.png'; // Import the logo for IndiTel

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const customerId = localStorage.getItem('customerId');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('document', file);

    try {
      await axios.post('http://localhost:5004/documents/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        params: { customerId }
      });
      alert('Document uploaded successfully. Awaiting verification.');
      navigate(`/select-service?customerId=${customerId}`);
    } catch (error) {
      console.error('Error during document upload:', error);
      alert('Document upload failed. Please try again.');
    }
  };

  return (
    <div className="document-upload-container">
      <header className="document-upload-header">
        <div className="logo">
          <img src={logo} alt="IndiTel Logo" className="logo-image" />
          <h1 className="company-name">Welcome to IndiTel</h1>
        </div>
      </header>
      <div className="upload-container">
        <form className="upload-form" onSubmit={handleSubmit}>
          <h2 className="upload-title">Upload Your Document</h2>
          <div className="file-input-container">
            <input
              type="file"
              className="file-input"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" className="upload-button">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocumentUpload;
