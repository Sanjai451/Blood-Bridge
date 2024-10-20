import React from 'react';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
  const location = useLocation();
  const { request } = location.state || {}; // Retrieve the passed state
    console.log(request)
  if (!request) {
    return <p>No request details available.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-500 to-red-800 text-white px-4">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Details</h1>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2">{request.name.toUpperCase()}</h2>
          
          <p className="text-gray-600 text-center mb-6">
            Blood Group: <strong>{request.bloodGroup}</strong>
          </p>
          
          <p className="text-gray-600 text-center mb-6">
            Location: <strong>{request.location}</strong>
          </p>
          
          
          <p className="text-gray-600 text-center mb-6">
            Posted On: <strong>{request.PostedOn}</strong>
          </p>

          <p className="text-gray-600 text-center mb-6">
            Contact: <strong>{request.contact}</strong>
          </p>
          
          
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
