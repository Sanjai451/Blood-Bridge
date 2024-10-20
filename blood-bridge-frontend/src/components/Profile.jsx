import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';

const Profile = () => {

  const {userLoginDetail,setUserLoginDetail,userDetails,setUserDetails} = useContext(UserContext)
  const [recentsRequest,setRecentRequest] = useState(null)

  // console.log('Detail:',userDetails)
  const fetchData = async()=>{
    try {
      const response = await axios.get('http://localhost:8000/get/6714cd023929dc24c9a8a551/getdata')
      console.log(response.data[0])
      setRecentRequest(response.data[0])
    } catch (error) {
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

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
          <h1 className="text-2xl font-semibold text-gray-900">{userDetails.name.toUpperCase()}</h1>
          <p className="text-lg text-gray-600">Blood Group: <span className="font-bold">{userDetails.bloodGroup}</span></p>
          <p className="text-lg text-gray-600">Location: {userDetails.city}</p>
          <div className="mt-4 flex space-x-4">
            <a href={`mailto:${userDetails.email}`} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Email
            </a>
            <a href={`tel:${userDetails.mobile}`} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
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
          
            <ul className="space-y-4">
                <li key={recentsRequest.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Blood Group: {recentsRequest.bloodGroup}</p>
                  <p>Date: {recentsRequest.PostedOn}</p>
                  <p>Location: {recentsRequest.location}</p>
                  <p>Required Units: {recentsRequest.requiredUnits}</p>
                </li>
            </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
