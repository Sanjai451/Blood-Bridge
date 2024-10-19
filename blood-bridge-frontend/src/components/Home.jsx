import React from 'react';
import { Link } from 'react-router-dom';
import DonateBlood from './DonateBlood';
import RequestBlood from './RequestBlood';
import ViewBlood from './ViewBlood';
import Details from './subComponents/Details';
import HomeIntroProfile from './subComponents/HomeIntroProfile';

const Home = () => {
  const recentRequests = [
    { id: 1, name: 'John Doe', bloodGroup: 'O+', location: 'Chennai' },
    { id: 2, name: 'Jane Smith', bloodGroup: 'A-', location: 'Bangalore' },
    { id: 3, name: 'Mike Johnson', bloodGroup: 'B+', location: 'Delhi' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Profile Picture and Greeting */}
      <HomeIntroProfile/>

      {/* Buttons for Donation and Request
      <div className="flex space-x-4 mb-6 max-w-2xl my-10 mx-auto w-64 ">
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
      </div> */}

      {/* Recent Blood Requests */}
      <div className="bg-gray-100 my-10 p-4 rounded shadow-md ">
        <h3 className="text-lg font-semibold mb-4">Recent Blood Requests</h3>
        <ul>
          {recentRequests.map(request => (
            <Details request={request}/>
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
