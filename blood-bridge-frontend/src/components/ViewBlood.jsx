import React, { useState } from 'react';
import Details from './subComponents/Details';

const ViewBlood = () => {
  const initialRequests = [
    { id: 1, name: 'John Doe', bloodGroup: 'O+', location: 'Chennai' },
    { id: 2, name: 'Jane Smith', bloodGroup: 'A-', location: 'Bangalore' },
    { id: 3, name: 'Mike Johnson', bloodGroup: 'B+', location: 'Delhi' },
    { id: 4, name: 'Sarah Parker', bloodGroup: 'AB+', location: 'Hyderabad' },
    { id: 5, name: 'Rajesh Kumar', bloodGroup: 'O-', location: 'Mumbai' },
    { id: 6, name: 'Emily White', bloodGroup: 'A+', location: 'Pune' },
    { id: 7, name: 'David Brown', bloodGroup: 'B-', location: 'Kolkata' },
    { id: 8, name: 'Lisa Green', bloodGroup: 'AB-', location: 'Ahmedabad' },
    { id: 9, name: 'Henry Black', bloodGroup: 'O+', location: 'Chennai' },
    { id: 10, name: 'Sophia Lee', bloodGroup: 'B+', location: 'Bangalore' }
  ];

  // Optional state for pagination or load more functionality
  const [requests, setRequests] = useState(initialRequests);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Blood Requests</h2>

      {/* List of requests */}
      <ul className="space-y-4">
        {requests.map(request => (
          // <li key={request.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          //   <p className="text-lg font-semibold">{request.name}</p>
          //   <p>Blood Group: <span className="font-bold">{request.bloodGroup}</span></p>
          //   <p>Location: {request.location}</p>
          // </li>
          <Details request={request}/>
        ))}
      </ul>

      {/* Button to simulate loading more requests */}
      <div className="flex justify-center mt-8">
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => alert('Load more requests!')}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default ViewBlood;
