// src/components/Login.js
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const {userLoginDetail,setUserLoginDetail,userDetails,setUserDetails} = useContext(UserContext)

  console.log(userLoginDetail)

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Placeholder for actual authentication logic
    console.log('Email:', email);
    console.log('Password:', password);
    // Redirect to main page after "authentication"
    const response = await axios.get(`http://localhost:8000/login/${email}/${password}`)
    console.log(response)
    if(response.status === 200){

      setUserLoginDetail({
        email:email,
        password:password
      })
      //get the whole user data
      const response = await axios.get(`http://localhost:8000/get/${email}`) 
  
      console.log(response.data[0])
      setUserDetails(response.data[0])
      
      navigate('/home');
    }else if(response.data.code == 'ERR_BAD_REQUEST'){
      alert('Invalid Email and Password')
    }
     
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mb-5 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Log in
          </button>
        </form>
        <div className='text-center'>
          <Link className='text-sm  mx-3' to={'/create'}>Create New Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
