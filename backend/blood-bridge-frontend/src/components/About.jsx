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
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">{request.name.toUpperCase()}</h2>
          
          <table className="table-auto w-full text-left">
            <tbody>
              <tr>
                <td className="py-2 px-4 text-gray-600">Blood Group:</td>
                <td className="py-2 px-4 font-semibold">{request.bloodGroup}</td>
              </tr>

              <tr>
                <td className="py-2 px-4 text-gray-600">Location:</td>
                <td className="py-2 px-4 font-semibold">{request.location}</td>
              </tr>

              <tr>
                <td className="py-2 px-4 text-gray-600">Posted On:</td>
                <td className="py-2 px-4 font-semibold">{request.PostedOn}</td>
              </tr>

              <tr>
                <td className="py-2 px-4 text-gray-600">Contact:</td>
                <td className="py-2 px-4">
                  <a
                    href={`tel:${request.contact}`}
                    className="bg-blue-500 text-white font-bold py-1 px-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                  >
                    {request.contact}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;
