import React, { useState } from 'react';
import EligibilityInfo from './subComponents/EligibilityInfo';
import DonorInfo from './subComponents/DonorInfo';
import axios from 'axios';

const DonateBlood = () => {
  const [donor, setDonor] = useState({
    name: '',
    bloodGroup: '',
    age: '',
    contact: '',
    location: '',
    type: 'blood-donor'
  });

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    try{
        const response = await axios.post(`http://localhost:8000/requestBlood`,donor)
        if(response.status == 200){
          console.log(response)
        }else{
          alert('Not sent to Backend Try again!!');
        }
    }catch(err){
      console.log(err)
    }
    alert('Your blood donation request has been submitted!');
    e.preventDefault();
    const response = await axios.post()
    console.log('Donor Details:', donor);
    alert('Thank you for your donation!');
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Donate Blood</h2>


      <DonorInfo/>

      {/* Form to collect donor details */}
      <form onSubmit={handleSubmit} className="space-y-6 my-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={donor.name}
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
            value={donor.bloodGroup}
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

        {/* Age Input */}
        <div>
          <label htmlFor="age" className="block text-lg font-medium mb-2">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={donor.age}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
            min="18"
          />
        </div>

        {/* Contact Information Input */}
        <div>
          <label htmlFor="contact" className="block text-lg font-medium mb-2">Contact Number</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={donor.contact}
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
            value={donor.location}
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
            Submit
          </button>
        </div>
      </form>
      <EligibilityInfo/>
    </div>
  );
};

export default DonateBlood;
