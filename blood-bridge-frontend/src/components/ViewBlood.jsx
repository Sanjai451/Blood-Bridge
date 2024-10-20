import React, { useEffect, useState } from 'react';
import Details from './subComponents/Details';
import axios from 'axios';

const ViewBlood = () => {

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
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Blood Requests</h2>

      {/* List of requests */}
      <ul className="space-y-4">
        {requestPost.map(request => (
          <Details request={request}/>
        ))}
      </ul>

      {/* Button to simulate loading more requests */}
      <div className="flex justify-center mt-8">
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => fetchData()}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default ViewBlood;
