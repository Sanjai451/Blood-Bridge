import React from 'react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    bloodGroup: 'O+',
    location: 'Chennai, India',
    email: 'johndoe@example.com',
    phone: '+91 98765 43210',
    image: 'https://via.placeholder.com/150', // Placeholder image URL
    requestHistory: [
      { id: 1, date: '12 Sep 2024', bloodGroup: 'A+', status: 'Completed' },
      { id: 2, date: '25 Aug 2024', bloodGroup: 'O-', status: 'Pending' },
    ],
    donationHistory: [
      { id: 1, date: '10 Oct 2024', bloodGroup: 'O+', status: 'Completed' },
      { id: 2, date: '5 Jul 2024', bloodGroup: 'B+', status: 'Completed' },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Profile Section */}
      <div className="flex items-center bg-white p-6 rounded-lg shadow-lg mb-8">
        <img
          src={user.image}
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-md mr-6"
        />
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{user.name}</h1>
          <p className="text-lg text-gray-600">Blood Group: <span className="font-bold">{user.bloodGroup}</span></p>
          <p className="text-lg text-gray-600">Location: {user.location}</p>
          <div className="mt-4 flex space-x-4">
            <a href={`mailto:${user.email}`} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Email
            </a>
            <a href={`tel:${user.phone}`} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
              Call
            </a>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Request History */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Request History</h2>
          {user.requestHistory.length > 0 ? (
            <ul className="space-y-4">
              {user.requestHistory.map(request => (
                <li key={request.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Blood Group: {request.bloodGroup}</p>
                  <p>Date: {request.date}</p>
                  <p>Status: <span className={`font-bold ${request.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>{request.status}</span></p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No requests made yet.</p>
          )}
        </div>

        {/* Donation History */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Donation History</h2>
          {user.donationHistory.length > 0 ? (
            <ul className="space-y-4">
              {user.donationHistory.map(donation => (
                <li key={donation.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Blood Group: {donation.bloodGroup}</p>
                  <p>Date: {donation.date}</p>
                  <p>Status: <span className="font-bold text-green-500">{donation.status}</span></p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No donations made yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
