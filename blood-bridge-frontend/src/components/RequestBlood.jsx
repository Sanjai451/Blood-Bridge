import React, { useState } from 'react';

const RequestBlood = () => {
  const [requester, setRequester] = useState({
    name: '',
    bloodGroup: '',
    requiredUnits: '',
    contact: '',
    location: ''
  });

  const handleChange = (e) => {
    setRequester({ ...requester, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    console.log('Blood Request Details:', requester);
    alert('Your blood request has been submitted!');
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Request Blood</h2>

      {/* Form to collect blood request details */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={requester.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Blood Group Input */}
        <div>
          <label htmlFor="bloodGroup" className="block text-lg font-medium mb-2">Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={requester.bloodGroup}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Required Units Input */}
        <div>
          <label htmlFor="requiredUnits" className="block text-lg font-medium mb-2">Required Units</label>
          <input
            type="number"
            id="requiredUnits"
            name="requiredUnits"
            value={requester.requiredUnits}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
            min="1"
          />
        </div>

        {/* Contact Information Input */}
        <div>
          <label htmlFor="contact" className="block text-lg font-medium mb-2">Contact Number</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={requester.contact}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Location Input */}
        <div>
          <label htmlFor="location" className="block text-lg font-medium mb-2">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={requester.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestBlood;
