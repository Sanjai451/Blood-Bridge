import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DonateBlood from './DonateBlood';
import RequestBlood from './RequestBlood';
import ViewBlood from './ViewBlood';
import Details from './subComponents/Details';
import HomeIntroProfile from './subComponents/HomeIntroProfile';
import DonorInfo from './subComponents/DonorInfo';
import axios from 'axios';
import UserContext from '../context/UserContext';

const Home = () => {

  // const {userLoginDetail,setUserLoginDetail,userDetails,setUserDetails} = useContext(UserContext)

  // console.log('Detail:',userDetails)

  const [requestPost,setRequestPost] = useState([])
  
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async()=>{
    try {
      const response = await axios.get('http://localhost:8000/get')
      // console.log(response.data)
      setRequestPost(response.data)
      // console.log(requestPost)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Profile Picture and Greeting */}
      <HomeIntroProfile/>
      
      {/* Recent Blood Requests */}
      <div className="bg-gray-100 my-10 p-4 rounded shadow-md ">
        <h3 className="text-lg font-semibold mb-4">Recent Blood Requests</h3>
        <ul>
        {requestPost
          .sort((a, b) => new Date(b.PostedOn) - new Date(a.PostedOn)) // Sort by PostedOn date (most recent first)
          .slice(0, 3) // Adjust '5' to display the number of recent posts you want to show
          .map((request) => (
            <Details key={request.id} request={request} />
        ))}
        </ul>
        <Link to="/viewBlood" element={<ViewBlood/>} >
          <button className="mt-4 bg-gray-300 text-gray-700 py-1 px-2   rounded hover:bg-gray-400">
            View More
          </button>
        </Link>
      </div>

      <DonorInfo/>
      
    </div>
  );
}

export default Home;
