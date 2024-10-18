import React from 'react';
import { Link } from 'react-router-dom';
import DonateBlood from './DonateBlood';
import RequestBlood from './RequestBlood';
import ViewBlood from './ViewBlood';

const Home = () => {
  const recentRequests = [
    { id: 1, name: 'John Doe', bloodGroup: 'O+', location: 'Chennai' },
    { id: 2, name: 'Jane Smith', bloodGroup: 'A-', location: 'Bangalore' },
    { id: 3, name: 'Mike Johnson', bloodGroup: 'B+', location: 'Delhi' }
  ];

  return (
    <div className="max-w-md mx-auto p-6">
      {/* Profile Picture and Greeting */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Link to="/profile">
            <img 
              src="https://via.placeholder.com/100" 
              alt="Profile" 
              className="w-16 h-16 rounded-full" 
            />
          </Link>
          <h2 className="ml-4 text-2xl font-semibold">Hello, Sanjai Kumar!</h2>
        </div>
      </div>

      {/* Buttons for Donation and Request */}
      <div className="flex space-x-4 mb-6 mx-auto w-64 ">
        <Link to="/donateBlood" element={DonateBlood}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Donate Blood
          </button>
        </Link>
        <Link to="/requestBlood" element={<RequestBlood/>}>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            Request Blood
          </button>
        </Link>
      </div>

      {/* Recent Blood Requests */}
      <div className="bg-gray-100 p-4 rounded shadow-md ">
        <h3 className="text-lg font-semibold mb-4">Recent Blood Requests</h3>
        <ul>
          {recentRequests.map(request => (
            <li key={request.id} className="mb-2">
              <p>
                <span className="font-bold">{request.name}</span> ({request.bloodGroup}) - {request.location}
              </p>
            </li>
          ))}
        </ul>
        <Link to="/viewBlood" element={<ViewBlood/>} >
          <button className="mt-4 bg-gray-300 text-gray-700 py-1 px-2   rounded hover:bg-gray-400">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
