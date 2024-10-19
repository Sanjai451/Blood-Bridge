import React from 'react'

const Details = ({request}) => {
  return (
    <div>
        <li key={request.id} className="bg-white p-6 my-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-gray-900">{request.name}</div>
            <div className="text-sm font-medium text-gray-600">{request.bloodGroup}</div>
        </div>
        <div className="mt-4">
            <p className="text-gray-700">Location: <span className="font-semibold">{request.location}</span></p>
            <button className="mt-4 w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600">
            View Details
            </button>
        </div>
        </li>

    </div>
  )
}

export default Details
