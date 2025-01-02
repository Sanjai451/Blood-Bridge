import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';

const Profile = () => {
  const [user,setUser] = useState({})
  const fetchData = async()=>{
      const data = JSON.parse(sessionStorage.getItem('loginDetail'))
      console.log(data)
      setUser(data)
    try {
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  {/* Profile Section */}
  <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-extrabold text-gray-800">Profile</h1>
    </div>
    <div className="space-y-4 text-lg">
      <p className="text-gray-600">
        <span className="font-bold text-gray-700">Name:</span> {user.name}
      </p>
      <p className="text-gray-600">
        <span className="font-bold text-gray-700">Address:</span> {user.address}
      </p>
      <p className="text-gray-600">
        <span className="font-bold text-gray-700">Blood Group:</span> {user.bloodGroup}
      </p>
      <p className="text-gray-600">
        <span className="font-bold text-gray-700">Age:</span> {user.age}
      </p>
      <p className="text-gray-600">
        <span className="font-bold text-gray-700">Email:</span> {user.email}
      </p>
      <p className="text-gray-600">
        <span className="font-bold text-gray-700">Mobile:</span> {user.mobile}
      </p>
    </div>
  </div>
</div>

  );
};

export default Profile;
