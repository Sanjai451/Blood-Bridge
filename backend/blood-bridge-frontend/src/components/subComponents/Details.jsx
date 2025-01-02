import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Details = ({request}) => {

  console.log(request)

  return (
    <div>
        <li key={request.id} className="bg-white p-6 my-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-gray-900">{request.name}</div>
            <div>
            <p
              className={`${
                request.type === 'request-Blood' ? 'text-red-800' : 
                request.type === 'blood-donor' ? 'text-green-500' : 
                'text-gray-500'
              }`}
            >
              {request.type}
            </p>
            <div className={request.bloodGroup && `text-sm font-bold bg-red-100 text-red-600 py-2 px-4 rounded-full shadow-md inline-block`}>
              {request.bloodGroup}
            </div>
            </div>
        </div>
        <div className="mt-4">
            <p className="text-gray-700">Location: <span className="font-semibold">{request.location}</span></p>
            <p className="mb-5 text-gray-700">Posted on: <span className="font-semibold">{request.PostedOn}</span></p>
          <Link
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600"
              to="/about" // Define the path to your about page
              state={{ request }} // Pass request data through the state prop
            >
              View Details
            </Link>
          </div>
        </li>

    </div>
  )
}

export default Details
